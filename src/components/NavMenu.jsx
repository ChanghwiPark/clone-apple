import React, { useState, useEffect } from "react";
import "./NavMenu.css"
import NavMenuItem from "./NavMenuItem";

import { navMenuDummy } from './navMenuDummy.js'

export default function NavMenu(props) {
    const [navMenuArray, setNavMenuArray] = useState([])
    const [searchBar, setSearchBar] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
      setNavMenuArray(navMenuDummy)
    }, [])

    const showSearchBar = () => {
      console.log('set to true')
      setSearchBar(true)
    }
    const handleSearch = (e) => {
      setSearchValue(e.target.value)
      console.log(searchValue)
    }
    const search = () => {
      alert('search "' + searchValue + '"')
    }
    const cancel = () => {
      setSearchValue('')
      setSearchBar(false)
    }


  return (
    <nav class={"o-navMenu " + props.position}>
      <div class="m-navMenu__container">
        {
          searchBar ?
            <div className="m-searchBar">
              <button 
                className="a-buttonSearchIcon -searchBar" 
                onClick={search}
              />
              <input 
                className='a-inputSearchBar' 
                type="text" 
                placeholder="Search apple.com"
                value={searchValue}
                onChange={handleSearch}
              />
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