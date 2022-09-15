import React, { useState, useEffect } from "react";
import "./SectionNewIphone13.css";
import BlockH4 from "./BlockH4";

import { sectionNewIphone13Dummy } from './sectionNewIphone13Dummy.js'

function SectionNewIphone13() {
    const [sectionWhyIphone13Array, setSectionWhyIphone13Array] = useState([])

    useEffect(() =>{
        setSectionWhyIphone13Array(sectionNewIphone13Dummy)
    }, [])

    return(
        <section className="o-containerSectionFullIphone13">
            {
                sectionWhyIphone13Array && sectionWhyIphone13Array.map((item) => (
                    <BlockH4 
                        className={"-newIphone13Item " + item.className}
                        title={item.title}
                        description={item.description}
                        cta= {item.cta ? item.cta : []}
                    />
                ))
            }
        </section>
    );
}

export default SectionNewIphone13;