import React, { useState, useEffect } from "react";
import "./SectionOneColumn.css"
import SectionOneColumnItem from  "./SectionOneColumnItem.jsx"

import { sectionOneColumnDummy } from './sectionOneColumnDummy.js'

export default function SectionOneColumn() {
  const [sectionOneColumnArray, setSectionOneColumnArray] = useState([]);

    useEffect(() => {
        setSectionOneColumnArray(sectionOneColumnDummy)
    }, []);

  return (
    <section className="m-main__sectionOneColumn">
      {
        sectionOneColumnArray ? sectionOneColumnArray.map((item) => {
          return (
            <SectionOneColumnItem
              className={item.className}
              href={item.href}
              title={item.title}
              subTitle={item.subTitle}
              cta={item.cta}
            />
          )
        }) : ''
      }
    </section>
  )
}