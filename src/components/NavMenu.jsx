import React, { useState, useEffect } from "react";
import "./NavMenu.css"
import NavMenuItem from "./NavMenuItem";
import BlockSearchBar from "./BlockSearchBar";

import { navMenuDummy } from './navMenuDummy.js'

export default function NavMenu(props) {
    const [navMenuArray, setNavMenuArray] = useState([])
    const [searchBar, setSearchBar] = useState(false)
    
    useEffect(() => {
      setNavMenuArray(navMenuDummy)
    }, [])

    const showSearchBar = () => {
      console.log('set to true')
      setSearchBar(true)
    }
    const cancel = () => {
      setSearchBar(false)
    }

  return (
    <nav class={"o-navMenu " + props.position}>
      <div class="m-navMenu__container">
        {
          searchBar ?
            <div className="m-searchBar">
              <BlockSearchBar className='-navMenu' />
              <button
                className="a-buttonCancelIcon -searchBar" 
                onClick={cancel}
              >􀆄</button>
            </div> :
            <ul class="m-navMenu__ul">
              {
                navMenuArray ? navMenuArray.map((item) => (
                  <NavMenuItem
                    className={item.className}
                    href={item.href}
                    content={item.content}
                    func={showSearchBar}
                  />
                )) : ''
              }
            </ul>
        }

      </div>
    </nav>
  )
}