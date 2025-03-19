import React from 'react'
import restaurantfood from '../../assets/restaurantfood.jpg'
import './HeroSelection.css'

const HeroSelection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2 className='section-title'>Welcome to Little Lemon</h2>
        <h3 className='section-categories'>Singapore</h3>
        <p className='paragraph-text'>We are a family restaurant, focused on traditional recipes served with passion. Our chefs use the freshest ingredients to create mouth-watering dishes that will leave you wanting more. Come and experience the warm and friendly atmosphere at Little Lemon, where every meal is a celebration.</p>
        <button>Reserve Table</button>
      </div>
      <img src={restaurantfood} alt="restaurant food" className='hero-selection-banner-img' />
    </div>
  )
}

export default HeroSelection
