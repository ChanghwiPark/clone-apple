import React, { useState, useEffect } from "react"
import ButtonsCta from "./ButtonsCta";
import "./SectionCompare.css"
import SectionCompareItem from "./SectionCompareItem";

import { sectionCompareDummy } from "./sectionCompareDummy.js"

export default function SectionCompare({ ctaButtons=[
    { className: '-compareAll', content: 'Compare all iPhone models >' },
    { className: '-shop', content: 'Shop iPhone >' }
]
}) {
    const [sectionCompareArray, setSectionCompareArray] = useState([])

    useEffect(() => {
        setSectionCompareArray(sectionCompareDummy)
    }, [])

    return(
        <section className="o-sectionCompare">
            <div className="m-containerMainSectionCompare">
                <h3 className="a-sectionTitle -compare">Which iPhone is right for you?</h3>
                <div className="m-containerSectionCompareItem">
                    {
                        sectionCompareArray && sectionCompareArray.map((item) => (
                            <SectionCompareItem 
                                imgPhone={item.imgPhone}
                                imgColor={item.imgColor}
                                imgTitle={item.imgTitle}
                                text={item.text}
                                subText={item.subText}
                                arraySectionCompareItems={item.arraySectionCompareItems}
                            />
                        ))
                    }
                </div>
                <ButtonsCta
                    className="-sectionCompare"
                    arrayButtons={ctaButtons}
                />
            </div>
        </section>
    );
}
