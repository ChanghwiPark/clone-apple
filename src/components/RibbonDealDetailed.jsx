import React, { useState, useEffect } from "react";
import './RibbonDealDetailed.css'
import BlockSpan from './BlockSpan'
import ButtonsCta from "./ButtonsCta";

import { ribbonDealDetailedDummy } from './ribbonDealDetailedDummy.js'

export default function RibbonDealDetailed() {
  const [ribbonDealDetailedArray, setRibbonDealDetailedDummy] = useState([])

  useEffect(()  => {
    setRibbonDealDetailedDummy(ribbonDealDetailedDummy)
  }, [])

  return (
    <div className='m-ribbonDealDetailed'>
      <div className='m-ribbonDealDetailed_containerMain'>
        <div className="m-ribbonDealDetailed_containerHeader">
          <div className="m-ribbonDealDetailed_containerHeading">Special Carrier Deals</div>
          <ButtonsCta 
            className='-ribbonDealDetailed'
            arrayButtons={[{className:'-allDeals', content:'See all deals'}]}
          />
        </div>
        {
          ribbonDealDetailedArray && ribbonDealDetailedArray.map((item) => (
            <BlockSpan 
              className='-ribbonDealDetailed'
              srcIcon={item.src}
              text={item.text}
            />
          ))
        }
      </div>
    </div>
  )
}
