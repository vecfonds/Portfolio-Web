import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Glassesimoji from "../../img/glassesimoji.png";
import Icon from '../Icon/Icon';
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = { duration: 2, type: "spring" };
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
                    <span>Tien Dung</span>
                    <span>Frontend Developer in web designing and development</span>
                </div>

                <button className="button i-button">
                    Hire me
                </button>

                <Icon />

            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={Glassesimoji} alt=""
                />
                <motion.div
                initial={{ top: "-4%", left: "74%" }}
                whileInView={{ left: "68%" }}
                transition={transition}
                className="floating-div">
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1='Technology' />
                </motion.div>
                
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "16rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro