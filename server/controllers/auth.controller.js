const bcrypt = require('bcrypt')
const User = require('../models/user.model')

const { signToken } = require('../middlewares/authMiddleware')

const register = async (request, response) => {
    const { name, password, email, job, reason, phone, company, business } = request.body
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
                message: 'Succesfully registered',
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
                user: "ethanmartin.0508@gmail.com",
                pass: "agvbmcvvwddyfzpr"
            }
        });

        // generate verification code
        let verifyCode = Math.floor(100000 + Math.random() * 900000);

        // send mail with defined transport object
        let mailOptions = {
            from: "ethanmartin.0508@gmail.com",
            to: email,
            subject: 'Email Verification Code for User Research',
            text: `Your verification code is ${verifyCode}.`
        };

        await transporter.sendMail(mailOptions);
        response.status(200).json({
            message: "Verify code sent",
        });
    } catch (e) {
        response.status(500).json({
            message: e.message
        })
    }
}


const verifyCode = async (req, res) => {
    const { code } = req.body;
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
    verifyCode
}