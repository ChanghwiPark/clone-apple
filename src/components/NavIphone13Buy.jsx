import React from 'react'
import BlockSpan from './BlockSpan'
import './NavIphone13Buy.css'

import timeIcon from "../assets/icons/time.svg";
import pickUpIcon from "../assets/icons/pickUp.svg";
import shippingIcon from "../assets/icons/shipping.svg";

export default function NavIphone13Buy() {
  return (
    <nav className='m-navIphone13Buy'>

      <div className='m-navIphone13Buy__containerHeaderMain'>
        <a href="">iPhone 13</a>
        <div className='m-navIphone13Buy__containerSpan'>
          <span>From $599 or $24.95/mo.per month for 24 mo.months before trade‑inFootnote*</span>
        </div>
      </div>

      <div className='m-navIphone13Buy__containerDescriptionMain'>
        <div className='m-navIphone13Buy__containerDescription'>
          <BlockSpan 
            className='-deliveryTime'
            srcIcon={timeIcon}
            text='2-hr delivery in most metros ($9)'
          />
          <BlockSpan 
            className='-shippingFree'
            srcIcon={shippingIcon}
            text='Free shipping'
          />
          <BlockSpan 
            className='-pickUp'
            srcIcon={pickUpIcon}
            text='Pick up from Store'
          />
        </div>
      </div>

    </nav>
  )
}
