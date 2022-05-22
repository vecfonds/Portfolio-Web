import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Logo from "../../img/LOGO.jpg";
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { motion } from "framer-motion";

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {
        duration: 2,
        type: "spring",
    };
    return (
        <div className="works" id="works">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>
                        Works for All these
                    </span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printing
                        text
                        <br />
                        Lorem ispum is simple dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </span>
                </div>
            </div>

            <div className="w-right">
                <motion.div
                    initial={{ left: "10rem", top: "-10rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="w-mainCircle">
                        <img src={Logo} alt="" />
                </motion.div>
                
                <div className="blur" style={{ background: "rgb(238 210 255)", left: "20rem" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "7rem",
                        left: "-20rem",
                        width: "21rem",
                        height: "11rem",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Works