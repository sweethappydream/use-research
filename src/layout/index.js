import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import aos from 'aos';

const Outline = () => {
    useEffect(() => {
        aos.init({ offset: 250, duration: 700 })
    },[])
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Outline;