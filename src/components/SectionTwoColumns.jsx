import { useState, useEffect } from "react"
import "./SectionTwoColumns.css"
import SectionTwoColumnsItem from "./SectionTwoColumnsItem.jsx"

import { sectionTwoColumnsDummy } from './sectionTwoColumnsDummy.js'

function SectionTwoColumns() {
    const [sectionTwoColumnsArray, setSectionTwoColumnsArray] = useState([])

    useEffect(() => {
      setSectionTwoColumnsArray(sectionTwoColumnsDummy)
    }, [])

    return(
        <section class="m-main__sectionTwoColumns">
          {
            sectionTwoColumnsArray ? sectionTwoColumnsArray.map((item) => {
              return(
                <SectionTwoColumnsItem
                  className={item.className}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              )
            }) : ''
          }
        </section>
    )
}

export default SectionTwoColumns;