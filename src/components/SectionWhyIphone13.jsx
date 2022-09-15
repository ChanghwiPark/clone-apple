import React, { useState, useEffect } from "react";
import "./SectionWhyIphone13.css"
import BlockH4 from "./BlockH4.jsx"

import { sectionWhyIphone13Dummy } from "./sectionWhyIphone13Dummy";

function SectionWhyIphone13() {
    const [whyIphone13Array, setWhyIphone13Array] = useState([])

    useEffect (() => {
        setWhyIphone13Array(sectionWhyIphone13Dummy)
    }, [])

    return(
        <section className="o-sectionWhyIphone13">
            <h3 className="a-sectionTitle -whyIphone13">There’s no phone like iPhone.</h3>
            <div className="m-containerWhyIphone13Items">
                {
                    whyIphone13Array ? whyIphone13Array.map((item) => {
                        return (
                            <BlockH4 
                                className={"-whyIphone13Item " + item.className} 
                                title={item.title} 
                                description={item.description} 
                                cta= {item.cta ? item.cta : []}
                            />
                        )
                    }) : ''
                }
            </div>

        </section>
    );
}

export default SectionWhyIphone13;