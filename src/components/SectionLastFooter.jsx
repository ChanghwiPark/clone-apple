import "./SectionLastFooter.css"

function SectionLastFooter() {
    return(
        <section className="m-sectionLastFooter">
            <div className="m-sectionLastFooter__text -moreShops">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</div>
            <div className="m-sectionLastFooter__container -legal">
              <div className="a-textLastFooter -copyright" >Copyright © 2022 Apple Inc. All rights reserved.</div>
              <div className="m-containerLegalLinks">
                <a href="" className="a-linksLegal">Privacy Policy</a>
                <a href="" className="a-linksLegal">Terns of Use</a>
                <a href="" className="a-linksLegal">Sales and Refunds</a>
                <a href="" className="a-linksLegal">Legal</a>
                <a href="" className="a-linksLegal">Site Map</a>
              </div>
              <div className="a-textLastFooter -localCountry">United States</div>
            </div>
          </section>
    )
}

export default SectionLastFooter;