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

function Iphone13() {
    return (<>
        <AsideCountry />
        <NavMenu />

        <NavIphone13 />

        <main class="o-main -Iphone13">
            <RibbonDeal />
            <SectionHero />
            <SectionGridFeatures />
            <SectionWhyIphone13 />
            <SectionNewIphone13 />
            <SectionCompare />
            <SectionRetail />
        </main>

        <footer class="o-footer">
            <div class="m-containerFooter">
                <SectionFooterBuy3Columns />
                <SectionFooterNotes content="* Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount. Requires activation with carrier."/>
                <NavBreadcrumbs/>
                <NavSiteMap/>
                <SectionLastFooter/>
            </div>
        </footer>
    </>)
}

export default Iphone13;