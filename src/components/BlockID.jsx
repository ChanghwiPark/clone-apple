import React from 'react'
import styled from 'styled-components'

export default function BlockID({ icon, title, description }) {
    return (
        <MBlockID>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </MBlockID>
    )
}

const MBlockID =  styled.div`
    background-color: #fff;
    border-radius: 19px;
    padding: 40px;
    width: 475px;
    box-sizing: border-box;

    div {
        margin-bottom: 30px;
        height: 40px;

        svg {
            height: 40px;
        }
    }

    h3 {
        font-size: 32px;
        line-height: 1.125;
    }

    p {
        color: #424245;
        font-size: 24px;
        line-height: 1.16667;
        margin-top: 13px;
    }
`