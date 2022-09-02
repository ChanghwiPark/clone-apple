import "./SectionBanners.css"
import CarouselControlItem from "./CarouselControlItem.jsx"

function SectionBanners() {
    return(
        <section className="m-main__sectionBanners">
          <div className="m-containerCarousel -bannersMain">

          </div>
          <div className="m-containerCarouselControl -bannersMain">
            <div className="m-containerCarouselControl_button -tabList">
              <ul className="m-ulCarouselControl">
                <CarouselControlItem itemNum="1"/>
                <CarouselControlItem itemNum="2"/>
                <CarouselControlItem itemNum="3"/>
                <CarouselControlItem itemNum="4"/>
                <CarouselControlItem itemNum="5"/>
                <CarouselControlItem itemNum="6"/>
                <CarouselControlItem itemNum="7"/>
                <CarouselControlItem itemNum="8"/>
                <CarouselControlItem itemNum="9"/>
                <CarouselControlItem itemNum="10"/>
                <CarouselControlItem itemNum="11"/>
              </ul>
            </div>
            <div className="m-containerCarouselControl_button -pause"></div>
          </div>
        </section>
    )
}

export default SectionBanners;