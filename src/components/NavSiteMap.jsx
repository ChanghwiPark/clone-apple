import React, { useState, useEffect } from "react";
import "./NavSiteMap.css"
import NavSiteMapGroup from "./NavSiteMapGroup";

import { navSiteMapDummy } from './navSiteMapDummy.js'

function NavSiteMap() {
  const [navSiteMapArray, setNavSiteMapArray] = useState([])

  useEffect(() => {
    setNavSiteMapArray(navSiteMapDummy)
  }, [])

  return (
    <nav class="m-navSiteMap">
      {
        navSiteMapArray && navSiteMapArray.map((column, index) => {
          return(
            <div class={"m-columnSiteMap -column0" + index}>
              {
                column.map((group) => (
                  <NavSiteMapGroup 
                    className={group.className}
                    title={group.title}
                    items={group.items}
                  />
                ))
              }
            </div>
          )
        })
      }
    </nav>
  )
}

export default NavSiteMap;