import React from 'react'
import styled from 'styled-components'
import AsideCountry from '../components/AsideCountry'
import BlockNavBar from '../components/BlockNavBar'
import NavMenu from '../components/NavMenu'
import SectionLastFooter from '../components/SectionLastFooter'
import BlockID from '../components/BlockID'

import { ReactComponent as ApplelogoRing } from "../assets/applelogoRing.svg";
import { ReactComponent as ControlIcon }  from "../assets/icons/control.svg";
import { ReactComponent as PrivacyIcon } from "../assets/icons/privacy.svg";
import { ReactComponent as ChatBubble } from "../assets/icons/chatBubble.svg";
import  { ReactComponent as ArrowUpRight } from "../assets/icons/arrowUpRight.svg";

export default function ManageID() {
    return (
        <>
            <AsideCountry />
            <NavMenu />

            <BlockNavBar 
                title="Apple ID"
                listArray={["Sign In", "Create Your Apple ID", "FAQ"]}
            />

            <MainContainer>

                <Top>
                    <div className='a-containerImage'>
                        <div><ApplelogoRing /></div>
                    </div>
                    <div>
                        <h1>One account for everything Apple.</h1>
                        <p>A single Apple ID and password gives you access to all Apple services.<br />
                            Sign in to manage your account.</p>
                        <button className="a-buttonBuy -manageID" >Sign In</button>
                    </div>
                </Top>

                <Blocks>
                    <BlockID 
                        icon={<ControlIcon/>}
                        title="You're in control"
                        description="Review or update important information like your name, password, and security details. See how others can reach you, check your payment information, and manage the devices connected to your account."
                    />
                    <BlockID 
                        icon={<PrivacyIcon/>}
                        title="Private and secure"
                        description="Privacy and security are built in. With account security features like two-factor authentication, Apple helps keep your account secure, protects your privacy, and keeps you in control of your information."
                    />
                </Blocks>

                <Bottom>
                    <div className='m-containerBottom'>
                        <div className='a-containerWhatID'>
                            <div className='a-wrapperSVG'><ChatBubble /></div>
                            <Span>What is Apple ID?</Span>
                            <P>An Apple ID is the personal account you use to access Apple services like the App Store, iCloud, Messages, the Apple Online Store, FaceTime, and more. It includes the information you use to sign in, as well as all the contact, payment, and security details that you’ll use across Apple services.</P>
                        </div>
                        <div className='a-containerWhenID'>
                            <Span>When do I use my Apple ID?</Span>
                            <P>Any time you set up a new device, make a purchase, or use any Apple service, you will be asked to sign in with your Apple ID and password. Once signed in you’ll have access to the service and all the personal information in your account. Use the same Apple ID everywhere you sign in to ensure that all your Apple services and devices work together seamlessly and you can access your personal content from all your devices.</P>
                        </div>
                        <div className='a-containerFAQ'>
                            <a href="/faq">See All FAQ<ArrowUpRight /></a>
                        </div>
                    </div>
                </Bottom>

            </MainContainer>

            <Footer className="o-footer -manageID">
                <div className="m-containerFooter -manageID">
                    <SectionLastFooter />
                </div>
            </Footer>
        </>
    )
}

const MainContainer = styled.main`
    padding-top: 60px;
    background-image: linear-gradient(120deg,#fff,#f0f0f0);
`

const Top = styled.div`
    padding: 0 90px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .a-containerImage{
        width: 300px;
        height: 300px;
        margin-bottom: 60px;

        div{
            position: absolute;
            left: 50%;
            transform: translate(-50%, -10%);
            width: 1380px;
        }
    }

    h1 {
        color: #000;
        font-size: 48px;
        line-height: 1.0834933333;
    }

    p {
        color: #424245;
        font-size: 24px;
        line-height: 1.3334133333;
        margin-top: 35px;
    }

    button {
        margin-top: 75px;
        padding: 12px 22px;
        font-size: 17px;
        line-height: 1.17648;
    }
`

const Span = styled.span`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.16667;
`

const P = styled.p`
    line-height: 1.47059;
    color: #6e6e73;
    margin-top: 8px;
`

const Blocks = styled.div`
    margin: 100px 90px 0;
    display: flex;

    div+div {
        margin-left: 30px;
    }
`

const Bottom = styled.div`
    background-color: #fff; 

    .m-containerBottom {
        display: flex;
        flex-direction: column;
        max-width: 980px;
        padding: 110px 90px 150px;
        margin: 130px auto 0;

        .a-containerWhatID {
        margin-top: 20px;

            .a-wrapperSVG {
                height: 47px;

                svg {
                    height: 35px;
                    fill: #0071e3;
                }
            }
        }

        .a-containerWhenID {
            margin-top: 20px;
        }

        .a-containerFAQ {
            margin-top: 20px;

            a{
                line-height: 1.47059;
                padding-right: 1.1em;
                position: relative;            

                svg {
                fill: #06c;
                height: 1.18em;
                position: absolute;
                top: 0.1em;
                right: -0.5em;
            }
            }
        }
    }
`

const Footer = styled.footer`
    .m-sectionLastFooter {
        padding: 17px 0 21px;
    }

    .m-containerFooter {
        padding: 0 22px;
    }
`