import "./SectionOneColumn.css"
import SectionOneColumnItem from  "./SectionOneColumnItem.jsx"
import ButtonsCta from "./ButtonsCta"

function SectionOneColumn() {
    return(
        <section className="m-main__sectionOneColumn">

          <SectionOneColumnItem 
            className="-iphone13" 
            href="/iphone-13/"
            title="iPhone13"
            subTitle="Your new superpower." 
            cta={<ButtonsCta className="-iphone13"/>}
          />

          <SectionOneColumnItem 
            className="-iphone13pro" 
            href="/iphone-13-pro/"
            title="iPhone13 Pro" 
            subTitle="Oh. So. Pro." 
            cta={<ButtonsCta className="-phone13pro"/>}
          />

          <SectionOneColumnItem 
            className="-collegeDeal" 
            href="/us-hed/shop/back-to-school"
            title={<>Get <span id="a-titleOneColumn__supercharged">supercharged</span> for college.</>}
            subTitle="Save on Mac or iPad. Plus get get a gift card up to $150." 
            cta={<div className="m-containerCtaButton -collegeDeal">
              {/* ^1 추가 필요 */}
              <a href="" className="a-containerCtaButton_button -iphone13 -shopNow">Shop now {'>'}</a>
            </div>}
          />

        </section>
    )
}

export default SectionOneColumn;