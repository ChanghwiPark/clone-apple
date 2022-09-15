import React, { useState, useEffect } from "react"
import "./Iphone13.css"
import AsideCountry from "../components/AsideCountry"
import NavIphone13 from "../components/NavIphone13";
import NavMenu from "../components/NavMenu";
import RibbonDeal from "../components/RibbonDeal";
import SectionHero from "../components/SectionHero";
import SectionGridFeatures from "../components/SectionGridFeatures";
import SectionWhyIphone13 from "../components/SectionWhyIphone13";
import SectionNewIphone13 from "../components/SectionNewIphone13"
import SectionCompare from "../components/SectionCompare";
import SectionRetail from "../components/SectionRetail";
import SectionFooterBuy3Columns from "../components/SectionFooterBuy3Columns";
import SectionFooterNotes from "../components/SectionFooterNotes";
import NavBreadcrumbs from "../components/NavBreadcrumbs";
import NavSiteMap from "../components/NavSiteMap";
import SectionLastFooter from "../components/SectionLastFooter";

import { sectionFooterNotesDummy_Iphone13 } from '../components/sectionFooterNotesDummy.js'


function Iphone13() {
    const [footerNotesArray, setFooterNotesArray] = useState([])

    useEffect(() => {
        setFooterNotesArray(sectionFooterNotesDummy_Iphone13)
    }, [])

    return (
        <>
            <AsideCountry />
            <NavMenu />

            <NavIphone13 />

            <main className="o-main -Iphone13">
                <RibbonDeal />
                <SectionHero />
                <SectionGridFeatures />
                <SectionWhyIphone13 />
                <SectionNewIphone13 />
                <SectionCompare />
                <SectionRetail />
            </main>

            <footer className="o-footer -Iphone13">
                <div className="m-containerFooter -Iphone13">
                    <SectionFooterBuy3Columns />
                    <SectionFooterNotes footerNotesArray={footerNotesArray} />
                    <NavBreadcrumbs />
                    <NavSiteMap />
                    <SectionLastFooter />
                </div>
            </footer>
        </>
    )
}

export default Iphone13;