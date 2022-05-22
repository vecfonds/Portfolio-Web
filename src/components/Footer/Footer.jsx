import React from 'react'
import './Footer.css'
import '../Intro/Intro.css'
import Wave from "../../img/wave.png";
import Icon from '../Icon/Icon';


const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>dung.nguyen996@hcmut.edu.vn</span>
                <Icon/>
            </div>
        </div>
    )
}

export default Footer