import "./SectionBanners.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sectionBannersDummy } from "./sectionBannersDummy.js"
import { useState } from "react";

function SectionBanners() {

  const [displaySettings, setDisplaySettings] = useState(
    {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
    }
  )

  const handleAutoplay = () => {
    // console.log("handleAutoplay")
    if (displaySettings.autoplay === true)
      setDisplaySettings({ ...displaySettings, autoplay: false })
    else {
      setDisplaySettings({ ...displaySettings, autoplay: true })
    }
    // console.log(displaySettings.autoplay)
  }

  return (
    <section className="m-main__sectionBanners">
      <div className="m-containerCarousel -bannersMain">
        <div className="imgslider">
          <Slider {...displaySettings}>
            {sectionBannersDummy.map((item) => (
              <div key={item.id}>
                <a href={item.href}><img key={'a-sectionBanners__images ' + item.className} src={item.src} alt={item.alt} /></a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="m-containerCarouselControl -bannersMain">
        <button className="m-containerCarouselControl_button -pause" onClick={handleAutoplay}></button>
      </div>
    </section>
  )
}

export default SectionBanners;