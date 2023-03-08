import React from "react";
import Header from "../Header";
import Footer from "../Footer";

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