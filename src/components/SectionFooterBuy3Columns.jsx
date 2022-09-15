import React, { useState, useEffect } from "react";
import "./SectionFooterBuy3Columns.css"

import { sectionFooterBuy3ColumnsDummy } from './sectionFooterBuy3ColumnsDummy.js'
import BlockH4 from "./BlockH4";

export default function SectionFooterBuy3Columns() {
    const [sectionFooterBuy3ColumnsArray, setSectionFooterBuy3ColumnsArray] = useState([])

    useEffect(() => {
        setSectionFooterBuy3ColumnsArray(sectionFooterBuy3ColumnsDummy)
    }, [])

    return(
        <section className="o-sectionFooterBuy3Columns">
            {
                sectionFooterBuy3ColumnsArray && sectionFooterBuy3ColumnsArray.map((item) => {
                    return (
                        <section className="m-sectionFooterBuy3ColumnsItem">
                                <a className="m-sectionFooterBuy3ColumnsItem__linkContainer" href="">
                                    <BlockH4
                                        className={'-buy3Columns ' + item.className}
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                                        cta={item.ctaArray}
                                    />
                                </a>
                        </section>
                    )
                })
            }

        </section>
    );
}
