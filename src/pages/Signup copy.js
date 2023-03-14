import React, { useEffect, useState } from "react";
import { logo } from "../assets/img";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useAuth } from "../hooks";
import LeftScreen from "../components/LeftScreen";
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";


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

    useEffect(() => {
        if (isLoggedIn)
            navigate('/');
    }, [isLoggedIn, navigate]);

    const submit = (values) => {
        alert(values)
        signup(values);
    }
    return (
        <div className="flex flex-col-reverse md:flex-row md:h-screen">
            <LeftScreen />
            <div className="md:w-[60%] standard:w-[67%] bg-[#F5F5F5] flex flex-col items-center md:h-auto">
                <div className="flex justify-center items-center mt-10">
                    <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')} />
                </div>

                <div className="p-4">
                    <div className=" text-center text-4xl text-purple 2xl:text-5xl  font-spoof pt-[45px] px-12">
                        Welcome to <span className=" text-orange"> UserResearch </span>!
                    </div>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            job: '',
                            business: '',
                            company: '',
                            reason: '',
                            phone: '',
                        }}
                        // validationSchema={registerSchema}
                        onSubmit={submit}
                    >
                        <Form className="mt-[54px]">
                            <div className="flex gap-6 items-start justify-center">
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <label htmlFor="name">Full Name</label>
                                    <Field name="name" id="name" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='name' />
                                </div>
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <label htmlFor="job">Job Title</label>
                                    <Field name="job" id="job" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Job Title" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='job' />
                                </div>
                            </div>
                            <div className="flex gap-6 items-start justify-center">
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <label htmlFor="email">Email Address</label>
                                    <Field name="email" id="email" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name@domain.com" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='email' />
                                </div>
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <label htmlFor="phone">Phone Number</label>
                                    <Field name="phone" id="phone" type="number" component={Phone} className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Phone Number" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='phone' />
                                </div>
                            </div>
                            <div className="flex gap-6 items-start justify-center">
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <label htmlFor="company">Compnay/Entity</label>
                                    <Field name="company" id="company" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Company/Entity" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='company' />
                                </div>
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <label htmlFor="business">Business Sector</label>
                                    <Field name="business" id="business" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Business Sector" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='business' />
                                </div>
                            </div>
                            <div className="flex gap-6 items-end justify-start">
                                <label htmlFor="reason" className="w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px]">What is the reason you want to use</label>
                                <label htmlFor="password" className="w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px]">Create Password</label>
                            </div>
                            <div className="flex gap-6 items-start justify-center">
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <Field id="reason" name="reason" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 pr-10 rounded-3xl" placeholder="Example">
                                    </Field>
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='reason' />
                                </div>
                                <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                    <Field name="password" id="password" type="password" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="************" />
                                    <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='password' />
                                </div>
                            </div>
                            <button type="submit" className="w-full text-lg bg-yellow rounded-3xl p-3 mt-6 font-spoof">Sign Up</button>
                            <div className="mt-[23px] text-[15px] text-center">
                                Alreay have an account?
                                <a className="underline font-semibold" href="/signin"> Sign In</a>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signup;