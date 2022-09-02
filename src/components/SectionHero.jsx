import NavChooseColorItem from "./NavChooseColorItem";
import "./SectionHero.css"

function SectionHero() {
    return(
        <section className="m-main__SectionHero -iphone13">
            <div className="m-sectionHero__containerContent -iphone13">
                <h1>iPhone 13</h1>
                <h2>Your new superpower.</h2>
                <p className="m-sectionHero__textParagraphMain">A lightning‑fast chip. A leap in battery life. And all‑new photo and video capabilities. iPhone 13 lets you do things you never could before — in two great sizes.</p>
                <p className="m-sectionHero__textParagraphSub">From $29.12/mo. for 24 mo. or $699 before trade‑in1*</p>
                <a  className="a-buttonBuy -sectionHero" href="/us/shop/goto/buy_iphone/iphone_13">Buy</a>
            </div>
            <div className="m-sectionHero__containerGraphic -iphone13">
                <div className="a-containerImageIphone13">
                    <img src="https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_green__rz0u5fdewmqq_large.jpg" alt="iPhone 13" />
                </div>
                <div className="m-containerNavChooseColor -iphone13">
                    <ul className="m-navChooseColor -iphone13">
                        <NavChooseColorItem colorArray={['Green', 'Pink', 'Blue', 'Midnight', 'Starlight', '(PRODUCT)RED']}/>
                    </ul>
                </div>
            </div>
        
        </section>
    );
}

export default SectionHero;