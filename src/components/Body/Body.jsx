import React from 'react'
import HeroSelection from '../HeroSelection/HeroSelection'
import Menu from '../Menu/Menu'
import About from '../About/About'
import Review from '../Review/Review'

const Body = () => {
  return (
    <>
      <main>
        <section id="home">
          <HeroSelection />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="review">
          <Review />
        </section>

        <section id="about">
          <About />
        </section>
      </main>
    </>

  )
}

export default Body