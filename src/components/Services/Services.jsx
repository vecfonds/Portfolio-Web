import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../../Card/Card';
// import Resume from './Resume.pdf'


const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <a href="" download>
                    <button className="button s-button">Dowload CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Figma"}
                    />
                </div>

                <div style={{top:'12rem', left: '-4rem'}}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </div>

                <div style={{top:'19rem', left: '12rem'}}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services