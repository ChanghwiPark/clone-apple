import React from 'react'
import './BlockInput.css'

export default function BlockInput({ title, display, price, allotment, tradeIn='before trade-in*' }) {
  return (
    <div className='m-blockInput'>
        <input type="radio" />
        <label className='m-blockInput__label'>
            <span className='m-blockInput__span -left'>
                <span className='m-blockInput__span -title'>{title}</span>
                <span className='m-blockInput__span -display'>{display}</span>
            </span>
            <span className='m-blockInput__span -right'>
                <span className='m-blockInput__span -price'>{price}</span>
                <span className='m-blockInput__span -allotment'>{allotment}</span>
                <span className='m-blockInput__span -tradeIn'>{tradeIn}</span>
            </span>
        </label>
    </div>
  )
}
