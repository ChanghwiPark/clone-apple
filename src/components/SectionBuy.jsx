import React from 'react'
import './SectionBuy.css'
import NavIphone13Buy from './NavIphone13Buy.jsx'
import SectionBuyScrollLeft from './SectionBuyScrollLeft'
import SectionBuyScrollRight from './SectionBuyScrollRight'
import SectionBuyBelow from './SectionBuyBelow'

export default function SectionBuy() {

  const nav = document.querySelector('nav.m-navIphone13Buy')

  window.addEventListener('scroll', function() {
    let yPosition = window.scrollY
    console.log("y: " + yPosition)

    if (yPosition>265.5){
      nav.style.display = "block"
    } else {
      nav.style.display = "none"
    }
    
    if (yPosition>363) {
      nav.style.transform = "none"
    } else {
      nav.style.transform = "translateY(-100%)"
    }
  })

  
  return (
    <section className='m-sectionBuy'>
      <NavIphone13Buy />
      <div className='m-sectionBuy__containerMain'>
        <header className='m-sectionBuy__header'>
          <div className='m-sectionBuy__headerLeft'>
            <h1>Buy iPhone 13</h1>
            <span>From $599 or $24.95/mo.per month for 24 mo.months before trade‑inFootnote*</span>
          </div>
          <div className='m-sectionBuy__headerRight'>
              <a href="">Get $40–$720 for your trade-in.</a>
              <a href="">Get 3% Daily Cash back with Apple Card</a>
          </div>
        </header>

        <div className='m-SectionBuy__containerScroll'>
          <SectionBuyScrollLeft />
          <SectionBuyScrollRight />
        </div>
        
        <SectionBuyBelow />
        
      </div>
    </section>
  )
}
