import React, { useEffect } from "react";
import { logo } from "../assets/img";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginSchema } from "../components/validation";
import { useAuth } from "../hooks";

const Signin = () => {
    const navigate = useNavigate();
    const { signin, isLoggedIn } = useAuth();

    useEffect(() => {
        if(isLoggedIn)
            navigate('/');
    }, [isLoggedIn, navigate]);

    const submit = (values) => {
        signin(values);
    }

    return (<>
        <div className="flex justify-center items-center mt-10">
            <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>

        <div className="p-4 flex flex-col items-center">
            <div className=" text-center text-4xl 2xl:text-5xl  font-spoof pt-11 px-12">
                Welcome Back, Sign in
            </div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={submit}
            >
                <Form className="mt-12">
                    <div className="flex flex-col justify-center py-3 w-[300px]  2xl:py-5">
                        <label htmlFor="email">Enter Email Address</label>
                        <Field id="email" name="email" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-[30px]" placeholder="Name@domain.com" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='email' />
                    </div>
                    <div className="flex flex-col justify-center py-3 w-[300px]  2xl:py-5">
                        <label htmlFor="password">Enter your password</label>
                        <Field id="password" name="password" type="password" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-[30px]" placeholder="***********" />
                        <ErrorMessage component='a' className="text-red text-sm text-center pt-2" name='password' />
                    </div>
                    <button type="submit" className="w-[300px]  text-lg bg-yellow rounded-[30px] p-3 mt-6 font-spoof">Sign in</button>
                    <div className="mt-[23px] text-[15px] text-center">
                        Don't have an account?
                        <a className="underline font-semibold" href="/signup"> Sign Up</a>
                    </div>
                </Form>
            </Formik>
        </div>
    </>

    )
}

export default Signin;