import "./Home.css"
import NavMenu from "../components/NavMenu.jsx";
import AsideCountry from "../components/AsideCountry.jsx"
import SectionUnicef from "../components/SectionUnicef.jsx"
import SectionOneColumn from "../components/SectionOneColumn.jsx"
import SectionTwoColumns from "../components/SectionTwoColumns.jsx"
import SectionBanners from "../components/SectionBanners.jsx"
import SectionFooterNotes from "../components/SectionFooterNotes"
import NavSiteMap from "../components/NavSiteMap"
import SectionLastFooter from "../components/SectionLastFooter"

function Home() {
  return (
    <>
      <AsideCountry position="-fixed"/>
      <NavMenu position="-fixed"/>

      <main class="o-main -home">
        <SectionUnicef/>

        <SectionOneColumn/>
        <SectionTwoColumns/>
        <SectionBanners/>
      </main>

      <footer class="o-footer">
        <div class="m-containerFooter">
            <SectionFooterNotes/>
            <NavSiteMap/>
            <SectionLastFooter/>
        </div>
      </footer>
    </>
  );
}

export default Home;
