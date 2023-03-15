const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const Verify = require('../models/verify.model')
const axios = require('axios')

const { signToken, signVerifyToken } = require('../middlewares/authMiddleware')

const register = async (request, response) => {
    const { name, password, email, job, reason, phone, company, business } = request.body
    console.log(request.body);
    if (name === undefined || password === undefined || email === undefined || job === undefined || reason === undefined || phone === undefined || company === undefined || business === undefined) {
        response.status(400).json({
            error: 'request body',
            message: `insufficient params`,
        })
    }
    else {
        try {
            const user = await User.findOne({ email })
            if (user) {
                return response.status(400).json({
                    error: email,
                    message: `An account already exists with ${email}`,
                })
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            // Create account
            const newUser = new User({ name, password: hashedPassword, job, company, reason, phone, email, business })
            await newUser.save()

            // Remove password from response data
            newUser.password = undefined
            delete newUser.password

            // Generate access token
            const token = signToken({ email })

            response.status(201).json({
                message: 'Successfully registered',
                data: newUser,
                token,
            })
        }
        catch (error) {
            console.error(error)
            return response.status(500).send()
        }
    }
}

const login = async (request, response) => {
    const { email, password } = request.body
    if (email === undefined || password === undefined) {
        response.status(400).json({
            error: 'request body',
            message: `insufficient params`,
        })
    }
    else {
        try {
            const { email, password } = request.body;
            const user = await User.findOne({ email });
            if (!user) {
                return response.status(400).json({
                    message: "Unregistered User",
                });
            }

            const passOk = await bcrypt.compare(password, user.password);
            if (!passOk) {
                return response.status(400).json({
                    message: "Password doesn't match",
                });
            }

            // Remove password from response data
            user.password = undefined;
            delete user.password;

            // Generate access token
            const token = signToken({ email });

            response.status(200).json({
                message: "Succesfully logged-in",
                data: user,
                token,
            });
        } catch (error) {
            console.error(error);
            response.status(500).send(error);
        }
    }
}

const sendVerifyCode = async (request, response) => {
    const { name, email } = request.body;
    if (name === undefined || email === undefined) {
        response.status(400).json({
            error: 'request body',
            message: `insufficient params`,
        })
    }
    else {
        try {
            const user = await User.findOne({ email })
            if (user) {
                return response.status(400).json({
                    error: email,
                    message: `An account already exists with ${email}`,
                })
            }

        }
        catch (error) {
            console.error(error)
            return response.status(500).send()
        }
    }
    try {
        const nodemailer = require('nodemailer');

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.myEmail,
                pass: process.env.password
            }
        });

        // generate verification code
        let verifyCode = Math.floor(100000 + Math.random() * 900000);

        // send mail with defined transport object
        let mailOptions = {
            from: process.env.myEmail,
            to: email,
            subject: 'Email Verification Code for User Research',
            text: `Your verification code is ${verifyCode}.`
        };

        await transporter.sendMail(mailOptions);

        const result = await Verify.findOne({ email });

        if (result) {
            result.code = verifyCode;
            result.expiresAt = new Date((new Date()).getTime() + 60000 * 5);
            await result.save();
        } else {
            const temp = {};
            temp.email = email;
            temp.code = verifyCode;
            temp.expiresAt = new Date((new Date()).getTime() + 60000 * 5);
            const verify = new Verify(temp);
            await verify.save()
        }

        response.status(200).json({
            message: "Verify code sent",
        });
    } catch (e) {
        response.status(500).json({
            message: e.message
        })
    }
}


const verifyCode = async (request, response) => {
    const { email, code } = request.body;
    console.log(email, code);
    const result = await Verify.findOne({ email });
    if (result) {
        if (result.code.toString() === code) {
            const verifyToken = signVerifyToken({ email });
            response.status(201).json({
                message: "success",
                verifyToken
            })
        } else {
            response.status(401).json({
                message: "verify code expired"
            })
        }
    } else {

        response.status(500).json({
            message: "email not verified"
        })
    }
}

const googleVerify = async (req, res) => {
    const { accessToken } = req.body;

    axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then(async response => {
            const firstName = response.data.given_name;
            const lastName = response.data.family_name;
            const email = response.data.email;

            const existingUser = await User.findOne({ email })

            if (existingUser)
                return res.status(400).json({ message: "User already exist!" })

            const verifyToken = signVerifyToken({email});
            const name = firstName + " " + lastName;

            res
                .status(200)
                .json({ name, email, verifyToken })
        })
        .catch(err => {
            res
                .status(400)
                .json({ message: "Invalid access token!" })
        })
}

const getAccount = async (request, response) => {
    try {
        const { name, wallet } = request.auth
        const user = await User.findOne({ name: name }).select('-password')

        // Generate access token
        const token = signToken({ name: name, wallet: wallet })

        response.status(200).json({
            message: 'Account fetched',
            data: user,
            token,
        })
    } catch (error) {
        console.error(error)
        response.status(500).send()
    }
}

const changePassword = async (req, res) => {
    try {
        const { name } = req.auth;
        const user = await User.findOne({ name: name });
        console.log('user ', user)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        user.password = hashedPassword;
        await user.save();
        res.json('success');
    }
    catch (error) {
        res.json(error);
    }
}

const changeAccount = async (req, res) => {
    try {
        const { name, wallet } = req.auth;
        const checkName = await User.findOne({ name: req.body.newName })
        if (checkName)
            res.status(400).json('The name is already chosen. Please choose another name.');
        else {
            const user = await User.findOne({ name: name });
            user.name = req.body.newName;
            await user.save();
            const newUser = await User.findOne({ name: req.body.newName }).select('-password')
            const token = signToken({ name: newUser.name, wallet: wallet });
            res.status(200).json({
                message: "success",
                data: user,
                token,
            });
        }

    }
    catch (error) {
        res.json(error);
    }
}

module.exports = {
    register,
    login,
    getAccount,
    changeAccount,
    changePassword,
    sendVerifyCode,
    verifyCode,
    googleVerify
}