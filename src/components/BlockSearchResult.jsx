import React from 'react'
import styled from 'styled-components'

export default function BlockSearchResult({ title, content, link }) {
    return (
        <MBlockSearchResult>
            <h2><a href={link}>{title}</a></h2>
            <p>{content}</p>
            <p><a href={link}>{link}</a></p>
        </MBlockSearchResult>
    )
}

const MBlockSearchResult = styled.div`
    padding: 18px 0;

    h2 {
        font-size: 17px;
        line-height: 1.47059;
        font-weight: 600;

        a {
            color: #1d1d1f;
        }
    }
    p {
        font-size: 17px;
        line-height: 1.47059;
    }
`