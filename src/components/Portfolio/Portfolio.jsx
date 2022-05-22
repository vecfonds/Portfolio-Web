import React from 'react'
import './Portfolio.css'
import HealthCare from "../../img/HealthCare.png";
import SmartGarden from "../../img/SmartGarden.png";
import SaigonSky from "../../img/SaigonSky.png";
import Portfolio_img from "../../img/Portfolio.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='portfolio'>
            <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={HealthCare} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SmartGarden} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SaigonSky} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Portfolio_img} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio