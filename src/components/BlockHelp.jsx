import React from 'react'
import './BlockHelp.css'

export default function BlockHelp({ img, title, text }) {
    return (
        <div className='m-blockHelp'>
            <div><img src={img} alt="" /></div>
            <div className='m-blockHelp__containerContent'>
                <p className='m-blockHelp__titleContent'>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
