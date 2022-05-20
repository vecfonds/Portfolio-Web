import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Glassesimoji from "../../img/glassesimoji.png";

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Tien Dung</span>
                <span>Frontend Developer in web designing and development</span>
            </div>

            <button className="button i-button">
                Hire me
            </button>

            <div className="i-icons">
                <a className="icon facebook" href="https://www.facebook.com/pknguyen.vecfonds/">
                    <i className="fab fa-facebook-f"></i>
                    <span className="tooltip">Facebook</span>
                </a>
                <a className="icon github" href="https://github.com/vecfonds">
                <i className="fab fa-github"></i>
                    <span className="tooltip">Github</span>
                </a>
                <a className="icon twitter" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                    <span className="tooltip">Twitter</span>
                </a>
                <a className="icon instagram" href="https://www.instagram.com/sppkhdall/">
                    <i className="fab fa-instagram"></i>
                    <span className="tooltip">Instagram</span>
                </a>
                <a className="icon youtube" href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                    <span className="tooltip">Youtube</span>
                </a>
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1}alt=""/>
            <img src={Vector2}alt=""/>
            <img src={boy}alt=""/>
            <img src={Glassesimoji} alt=""/>
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Technology'/>
            </div>
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