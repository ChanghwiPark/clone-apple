import React, { useState, useEffect } from "react"
import './Iphone13Buy.css'
import AsideCountry from "../components/AsideCountry"
import NavMenu from "../components/NavMenu";
import RibbonDealDetailed from "../components/RibbonDealDetailed"
import SectionBuy from "../components/SectionBuy"
import SectionInBox from "../components/SectionInBox";
import SectionCompare from "../components/SectionCompare";
import SectionQuestions from "../components/SectionQuestions";
import SectionFooterNotes from "../components/SectionFooterNotes";
import NavBreadcrumbs from "../components/NavBreadcrumbs";
import NavSiteMap from "../components/NavSiteMap";
import SectionLastFooter from "../components/SectionLastFooter";

import { sectionFooterNotesDummy_Iphone13 } from '../components/sectionFooterNotesDummy.js'

export default function Iphone13Buy() {
    const [footerNotesArray, setFooterNotesArray] = useState([])

    useEffect(() => {
        setFooterNotesArray(sectionFooterNotesDummy_Iphone13)
    }, [])

    return (
        <>
            <AsideCountry />
            <NavMenu />

            <main className="o-main -Iphone13">
                <RibbonDealDetailed /> 
                <SectionBuy />
                <SectionInBox/>
                <SectionCompare ctaButtons={[
                        { className: '-compareAll', content: 'Compare all iPhone models >' },
                    ]}/>
                <SectionQuestions />
            </main>

            <footer className="o-footer -Iphone13Buy">
                <div className="m-containerFooter -Iphone13Buy">
                    <SectionFooterNotes footerNotesArray={footerNotesArray} />
                    <NavBreadcrumbs 
                        locationArray={['iPhone', 'iPhone 13', 'Buy iPhone 13 and iPhone 13 mini']}
                    />
                    <NavSiteMap />
                    <SectionLastFooter />
                </div>
            </footer>
        </>
    )
}
