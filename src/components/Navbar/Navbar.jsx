import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper" id="navbar">
            <div className="n-left">
                <div className="n-name">Vecfonds</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link activeClass="active" to="navbar" spy={true} smooth={true}><li>Home</li></Link>

                        <Link to="services" spy={true} smooth={true}><li>Services</li></Link>
                        <Link to="works" spy={true} smooth={true}><li>Brands & Clients</li></Link>
                        <Link to="portfolio" spy={true} smooth={true}><li>Portfolio</li></Link>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button n-button">
                        Contact
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar