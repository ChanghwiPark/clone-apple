import "./SectionRetail.css"
import SectionWhyIphone13Item from "./SectionWhyIphone13Item";

function SectionRetail() {
    return(
        <section>
            <h2 className="o-sectionBigTitle">Ways to buy.</h2>
            <div className="m-containerCarrierDeals">
                <div>
                    <h3 className="a-subTitleCarrierDeals">Special carrier deals at Apple</h3>
                    <h4 className="a-sectionWhyIphone13Item__title -carrierDeals">Save up to $700 on iPhone 13 and <br/>iPhone 13 Pro after trade‑in.**</h4>
                    <ul className="m-listCarrier">
                        <li className="m-listItemCarrier">
                            <img src="https://www.apple.com/v/iphone-13/h/images/key-features/retail/logo_att__2emlkjmcpteq_large.jpg" alt="" />
                            <p className="a-listItemCarrier__text">Save up to $700</p>
                        </li>
                        <li className="m-listItemCarrier">
                            <img src="https://www.apple.com/v/iphone-13/h/images/key-features/retail/logo_sprint__eeoe124fkzu6_large.jpg" alt="" />
                            <p className="a-listItemCarrier__text">Save up to $700</p>
                        </li>
                        <li className="m-listItemCarrier">
                            <img src="https://www.apple.com/v/iphone-13/h/images/key-features/retail/logo_tmobile__dhef41xj92mq_large.jpg" alt="" />
                            <p className="a-listItemCarrier__text">Save up to $700</p>
                        </li>
                        <li className="m-listItemCarrier">
                            <img src="https://www.apple.com/v/iphone-13/h/images/key-features/retail/logo_verizon__fueuc37cwcuq_large.jpg" alt="" />
                            <p className="a-listItemCarrier__text">Save up to $700</p>
                        </li>
                    </ul>
                    <p className="a-containerButtonBuy -sectionRetail"><a className="a-buttonBuy -sectionRetail" href="">Find your deal</a></p>
                    <p className="a-textSectionRetail"> Our Specialists can help you shop — online or in store. <a href="">Connect with an iPhone Specialist {'>'}</a></p>
                </div>
            </div>
            <section className="m-containerTakeActions">
                <div className="m-containerTakeActions__containerMain">
                    <SectionWhyIphone13Item className="-sectionRetailTrade" title="Trade in your smartphone for credit." description="With Apple Trade In, you can get credit toward a new iPhone when you trade in an eligible smartphone.6 It’s good for you and the planet." more="Learn more >"/>
                    <SectionWhyIphone13Item className="-sectionRetailUpgrade" title="The easiest way to upgrade to the latest iPhone." description="Join the iPhone Upgrade Program to get the latest iPhone every year, low monthly payments, and AppleCare+.7" more="Learn more >"/>
                    <SectionWhyIphone13Item className="-sectionRetailQuestions" title="Still have questions? Just ask." description="You won’t find a better place to buy iPhone. We know about carriers, payment options, and more. And we make it easy to understand." more="Learn more >"/>
                </div>
            </section>
        </section>
    );
}

export default SectionRetail;