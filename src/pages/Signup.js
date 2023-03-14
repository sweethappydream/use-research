import React, { useEffect, useState } from "react";
import { logo } from "../assets/img";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useAuth } from "../hooks";
import LeftScreen from "../components/LeftScreen";
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import { google, linkedinBlue } from "../assets/svg";
import { registerSchema1, registerSchema2, registerSchema3 } from "../components/validation";
import { sendVerifyCode, verifyEmail } from "../api";


const Phone = () => {
    const [phone, setPhone] = useState('');

    const handleOnChange = value => {
        setPhone(value);
    }

    return (
        <PhoneInput
            name="multipleErrorInput4"
            autoCorrect="off"
            placeholder="Enter a Valid Phone Number"
            country={"gb"}
            value={phone}
            onChange={handleOnChange}
        />
    )
}

const Signup = () => {
    const navigate = useNavigate();
    const { signup, isLoggedIn } = useAuth();
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (isLoggedIn)
            navigate('/');
    }, [isLoggedIn, navigate]);

    const submit = async (values) => {
        if (step === 0) {
            const result = await sendVerifyCode(values);
            setEmail(values.email)
            console.log(result);
            setStep(1);
        } else if (step === 1) {
            const result = await verifyEmail({...values, email});
            console.log(result);
            setStep(2);
        } else {

            signup(values);
        }
        // alert(values)
        // signup(values);
    }

    const initialValues = step === 0 ? {
        name: '',
        email: ''
    } : step === 1 ? {
        code: ''
    } : {
        password: '',
        job: '',
        business: '',
        company: '',
        reason: '',
        phone: '',
    };

    const formBody = step === 0 ?
        <div className="text-center w-[100%]">
            <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                    <label htmlFor="name">Full Name</label>
                    <Field name="name" id="name" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name" />
                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='name' />
                </div>
                <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" id="email" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name@domain.com" />
                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='email' />
                </div>
            </div>
            <div className="py-8 font-spoof font-medium text-center">Or</div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center py-[11px] px-[17px] bg-white gap-2 shadow-md">
                    <img src={google} alt="google" />
                    <div className=" text-sm font-avenir">Signup with Google</div>
                </div>
                <div className="flex justify-center items-center py-[11px] px-[17px] bg-white gap-2 shadow-md">
                    <img src={linkedinBlue} alt="linkedinblue" />
                    <div className=" text-sm font-avenir">Signup with Linkedin</div>
                </div>

            </div>

        </div>
        :
        step === 1 ?
            <div className="flex flex-col justify-center items-center w-[100%]">
                <div className="max-w-[500px] font-avenir text-sm pb-[29px]">
                    We have emailed you 6 digits code. Please check your e-mail and enter the code here to complete the verification.
                </div>
                <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5 pb-24">
                    <Field name="code" id="code" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="123-456" />
                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='code' />
                </div>
            </div>
            :
            <div className="w-[100%]">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                        <label htmlFor="job">Job Title</label>
                        <Field name="job" id="job" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Job Title" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='job' />
                    </div>
                    <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                        <label htmlFor="phone">Phone Number</label>
                        <Field name="phone" id="phone" type="number" component={Phone} className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Phone Number" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='phone' />
                    </div>
                </div>
                <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                        <label htmlFor="company">Compnay/Entity</label>
                        <Field name="company" id="company" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Company/Entity" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='company' />
                    </div>
                    <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                        <label htmlFor="business">Business Sector</label>
                        <Field name="business" id="business" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Business Sector" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='business' />
                    </div>
                </div>
                <div className="flex gap-6 items-end justify-start">
                    <label htmlFor="reason" className="w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px]">What is the reason you want to use</label>
                    <label htmlFor="password" className="w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px]">Create Password</label>
                </div>
                <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                        <Field id="reason" name="reason" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 pr-10 rounded-3xl" placeholder="Example">
                        </Field>
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='reason' />
                    </div>
                    <div className="flex flex-col py-3 w-[171px] xs:w-[50%] 2xl:py-5">
                        <Field name="password" id="password" type="password" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="************" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='password' />
                    </div>
                </div>
            </div>;

    const validationSchema = step === 0 ? registerSchema1 : step === 1 ? registerSchema2 : registerSchema3;

    return (
        <div className="flex flex-col-reverse md:flex-row md:h-screen">
            <LeftScreen />
            <div className="md:w-[60%] standard:w-[67%] bg-[#F5F5F5] flex flex-col items-center md:h-auto">
                <div className="flex justify-center items-center mt-10">
                    <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')} />
                </div>

                <div className="p-4">
                    <div className=" text-center text-4xl text-purple  font-spoof pt-[45px] md:px-12">
                        Welcome to <span className=" text-orange"> UserResearch </span>!
                    </div>

                    <div>
                        <div className="text-center flex justify-center items-center pt-12">
                            <div className={`h-[8px] w-[${33 * (step + 1)}%] bg-dark-red`} />
                            <div className={`h-[8px] w-[${33 * (3 - step - 1)}%] bg-border`} />
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={submit}
                        >
                            <Form className="mt-[54px]">
                                {formBody}
                                <button type="submit" className="w-full text-lg bg-yellow rounded-3xl p-3 mt-16 font-spoof">{step === 2 ? "Sign up" : "Next"}</button>
                                <div className="mt-[23px] text-[15px] text-center">
                                    Alreay have an account?
                                    <a className="underline font-semibold" href="/signin"> Sign In</a>
                                </div>
                            </Form>
                        </Formik>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;
