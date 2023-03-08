import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Outline = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Outline;