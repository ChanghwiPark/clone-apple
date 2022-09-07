import React, {useState, useEffect} from "react";
import "./SectionGridFeatures.css";
import SectionGridFeaturesItem from "./SectionGridFeaturesItem";

import { sectionGridFeaturesDummy } from "./sectionGridFeaturesDummy.js"

function SectionGridFeatures() {
    const [gridFeaturesArray, setFeaturesArray] = useState([]);

    useEffect(() => {
        setFeaturesArray(sectionGridFeaturesDummy)
    }, []);

    return (
        <section className="o-sectionGridFeatures -iphone13">
            {
                gridFeaturesArray ? gridFeaturesArray.map((item) => {
                    return (
                        <SectionGridFeaturesItem className={item.className} content={item.content} background={item.background} />
                    )
                }) : ''
            }
        </section>
    );
}

export default SectionGridFeatures;