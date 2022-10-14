import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { Wrapper } from '../pages/Account'

export default function SectionSignIn() {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [uncomplete, setUncomplete] = useState(true)
    const [pwVisibility, setPwVisibility] = useState(false)

    const handleId = (e) => {
        setId(e.target.value)

        if (e.target.value.length > 0)
            setUncomplete(false)
    }

    const handlePw = (e) => {
        setPw(e.target.value)
    }

    const showPw = (e) => {
        setPwVisibility(true)
    }

    return (
        <ContainerSignIn>
            <Wrapper>
                <div className='containerMain'>
                    <h1>Sign in to Apple Store</h1>
                    <div className='containerSignInForm'>
                        <div className='containerInput'>
                            <input 
                                type='text' 
                                placeholder='Apple ID' 
                                value={id}
                                onChange={handleId}
                            />
                            {
                                pwVisibility && <input 
                                type='password' 
                                placeholder='Password' 
                                value={pw}
                                onChange={handlePw}
                                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$" 
                            />
                            }
                        </div>
                        <div className='containerRemember'>
                            <input id='remember' type='checkbox' />
                            <label for='remember'>Remember me</label>
                        </div>
                        <button 
                            onClick={showPw}
                            disabled={uncomplete}
                        >􀰒</button>
                    </div>
                    <Separator />
                    <div className='containerHelp'>
                        <div className='containerHelp__containerForgot'><a>Forgot Apple ID or password?</a></div>
                        <div className='containerHelp__containerCreate'>
                            <span>Don’t have an Apple ID?</span><a> Create yours now.</a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </ContainerSignIn>
    )
}

const Separator = styled.div`
    background-image: url(https://appleid.cdn-apple.com/appleauth/static/bin/cb1633718600/dist/assets/HR_gradient_dark.png);
    background-size: cover;
    max-width: 328px;
    height: 1px;
    margin: auto;
`

const ContainerSignIn = styled.div`
    .containerMain {
        color: #494949;
        text-align: center;;
        width: 640px;
        height:  480px;
        margin: 72px auto 0;

        h1 {
            color: inherit;
            font-size: 24px;
            line-height: 1.166667;
            max-width: 380px;
            margin: 5px auto 13px;
        }

        .containerSignInForm {
            max-width: 328px;
            margin: 0 auto;
            position: relative;

            .containerInput {
                min-height: 5.2em;
                max-height: 44px;

                input {
                    font-size: 17px;
                    box-sizing: border-box;
                    width: 100%;
                    height: 2.6em;
                    padding: 0 43px 0 15px;
                    border: 1px solid #d6d6d6;
                    border-radius: 6px;
                    
                }
            }

            .containerRemember {
                display: inline-block;
                margin: 18px 0 16px;
                position: relative;

                input {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: -3px;
                    left: 0px;
                }

                label {
                    padding: 1px 0 0 26px;
                    margin-top: 11px;
                }
            }

            button {
                font-size: 26px;
                color: #494949;
                position: absolute;
                top: .25em;
                right: 10px;
            }
        }

        .containerHelp {
            font-size: 14px;
            line-height: 1.42861;
            margin-top: 17px;

            &__containerForgot {
                padding-bottom: 9px;
            }

            &__containerCreate {
                
            }
        }
    }
`