import React, { useState } from "react";
import styled from "styled-components";
import NavMenuItem from "./NavMenuItem";
import BlockSearchBar from "./BlockSearchBar";

import applelogo from "../assets/icons/applelogo.svg";
import bag from "../assets/icons/bag.svg";

export default function NavMenu({ position }) {
    const [searchBar, setSearchBar] = useState(false)

    const showSearchBar = () => {
      setSearchBar(true)
    }
    const cancel = () => {
      setSearchBar(false)
    }

  return (
    <ONavMenu position={position}>
      <div class="m-navMenu__container">
        {
          searchBar ?
            <MSearchBar>
              <BlockSearchBar className='-navMenu' />
              <button
                className="a-buttonCancelIcon -searchBar" 
                onClick={cancel}
              >􀆄</button>
            </MSearchBar>
            :
            <>
              <ul className="m-navMenu__ul -full">
                {/* {
                  navMenuArray ? navMenuArray.map((item) => (
                    <NavMenuItem
                      className={item.className}
                      href={item.href}
                      content={item.content}
                      func={showSearchBar}
                    />
                  )) : ''
                } */}
                <NavMenuItem
                  className= '-logoApple'
                  href='/'
                  content={<img src={applelogo} alt="Apple Logo" />}
                />
                <NavMenuItem
                  className= '-store'
                  href='/us/shop/goto/store'
                  content= 'Store'
                />
                <NavMenuItem
                  className= '-mac'
                  href='/mac/'
                  content= 'Mac'
                />
                <NavMenuItem
                  className= '-ipad'
                  href='/ipad/'
                  content= 'iPad'
                />
                <NavMenuItem
                  className= '-iphone'
                  href='/iphone13/'
                  content= 'iPhone'
                />
                <NavMenuItem
                  className= '-watch'
                  href='/watch/'
                  content= 'Watch'
                />
                <NavMenuItem
                  className= '-airpods'
                  href='/airpods/'
                  content= 'AirPods'
                />
                <NavMenuItem
                  className= '-tvNHome'
                  href='/tv-home/'
                  content= 'TV & Home'
                />
                <NavMenuItem
                  className= '-onlyOnApple'
                  href='/services/'
                  content= 'Only on Apple'
                />
                <NavMenuItem
                  className= '-accessories'
                  href='/us/shop/goto/buy-accessories'
                  content= 'Accessories'
                />
                <NavMenuItem
                  className= '-support'
                  href='https://support.apple.com'
                  content= 'Support'
                />
                <NavMenuItem
                  className= '-iconSearch'
                  content= {<button className="a-buttonSearchIcon -navMenu" />}
                  func={showSearchBar}
                />
                <NavMenuItem
                  className= '-iconStore'
                  href='/us/shop/goto/bag'
                  content= {<img src={bag} alt="bag icon" />}
                />
              </ul>
              <ul className="m-navMenu__ul -simplified">
                <NavMenuItem 
                  className="-menuHamburger"
                  href=""
                  content={
                    <>
                      <span></span>
                      <span></span>
                    </>
                  }
                />
                <NavMenuItem 
                  className="-logoApple"
                  href="/"
                  content={<img src={applelogo} alt="apple logo" /> }
                />
                <NavMenuItem 
                  className="-iconStore"
                  href="/us/shop/goto/bag"
                  content={<img src={bag} alt="bag icon" />}
                />
              </ul>
            </>
        }

      </div>
    </ONavMenu>
  )
}

const ONavMenu = styled.nav`
  position: ${props => props.position || "static"};
  background: rgba(0, 0, 0, .8);
  backdrop-filter: saturate(180%) blur(20px);
  width: 100vw;
  position: relative;
  z-index: 99;
  margin-top: ${props => props.position ? "70px" : "0"};

  .m-navMenu{
      &__container {
      max-width: 1024px;
      margin: auto;
      }

      &__ul {
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &.-simplified {
          display: none;

          li{
            width: 48px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
              width: 30px;
              height: 30px;
              position: relative;
            }
          }

          li.-menuHamburger{
            
            span {
              display: block;
              width: 17px;
              height: 1px;
              background: #fff;
              border-radius: 0.5px;
              position: absolute;
              left: 7px;
              top: 17px;

              & + span {
                top: auto;
                bottom: 17px;
              }
            }
          }
        }
      }
    }

  @media only screen and (max-width: 833px) {
    .m-navMenu__ul{
      &.-full {
        display: none;
      }
      &.-simplified {
        display: flex;
      }
    }
  }
`

const MSearchBar = styled.div`
  width: 682.667px;
  margin: auto;

  .a-buttonCancelIcon.-searchBar {
    position: absolute;
    width: 37px;
    height: 44px;
    color: #86868b;
    opacity: .8;
  }
`