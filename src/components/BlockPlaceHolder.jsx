import React from 'react'
import styled from 'styled-components'

export default function BlockPlaceHolder() {
    return (
        <ABlockPlaceHolder/>
    )
}

const ABlockPlaceHolder = styled.div`
    height: ${props => props.height || "44px"};
`
