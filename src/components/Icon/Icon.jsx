import React from 'react'
import './Icon.css'

const Icon = () => {
    return (
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
    )
}

export default Icon