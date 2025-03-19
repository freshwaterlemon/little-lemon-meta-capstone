import React from 'react'
import aboutus from '../../assets/aboutus.jpg'
import './About.css'

const About = () => {
    return (
        <div className="aboutus-section">
            <div className="aboutus-content">
                <h2 className='section-title'>About Us</h2>
                <p className='paragraph-text'>
                    Welcome to Little Lemon! We are a family-owned restaurant that has been serving delicious meals since 1990. Our mission is to provide our customers with a memorable dining experience by offering high-quality food made from the freshest ingredients. We take pride in our rich history and the strong relationships we have built with our community over the years.
                </p>
            </div>
            <img src={aboutus} alt="restaurant food" className='aboutus-banner-img' />
        </div>
    )
}

export default About