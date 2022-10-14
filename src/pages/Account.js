import React from 'react'
import styled from 'styled-components'
import NavMenu from '../components/NavMenu'
import BlockPlaceHolder from '../components/BlockPlaceHolder'
import SectionSignIn from '../components/SectionSignIn'
import SectionLastFooter from '../components/SectionLastFooter'

import { Footer } from './ManageID'

export default function Account() {
    return (
        <>
            <NavMenu />
            <BlockPlaceHolder />
            <Content>
                <SectionSignIn />
                <div className='containerChat'>
                    <Wrapper>
                        <div>Need some help? <a>Chat now</a> (Opens in a new window) or call 1-800-MY-APPLE.</div>
                    </Wrapper>
                </div>
                <div className='containerFootNotes'>
                    <Wrapper>
                        <p>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our Security Policy.</p>
                    </Wrapper>
                </div>
            </Content>

            <Footer className="o-footer -manageID">
                <div className="m-containerFooter -manageID"> 
                    <SectionLastFooter />
                </div>
            </Footer>
        </>
    )
}

export const Wrapper = styled.div`
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
`

const Content = styled.div`

    .containerChat {
        border-top: 1px solid #d2d2d7;

        ${Wrapper}{

            div {
                line-height: 1.46059;
                padding: 21px 0;
                margin: 0 auto;
            }
        } 
    }

    .containerFootNotes {
        background-color: #f5f5f7;

        ${Wrapper}{
            padding: 17px 22px 11px;
            border-bottom: 1px solid #d2d2d7;

            p {
                color: #6e6e73;
                font-size: 12px;
                line-height: 1.33337;
                padding-bottom: 4px;
            }
        }
    }
`