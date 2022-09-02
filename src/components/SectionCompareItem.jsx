import ButtonsCta from "./ButtonsCta";
import SectionCompareItemBlock from "./SectionCompareItemBlock";

function SectionCompareItem() {
    return (
        <section className="m-sectionCompareItem__containerMain">
            <div className="m-sectionCompareItem__containerMainBlock">
                <div className="a-containerMainBlock__wrapperImgPhone">
                    <img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/compare_iphone_13_pro__46a0rgweirm2_large.jpg" alt="" />
                </div>
                <div className="a-containerMainBlock__wrapperImgColors">
                    <img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/swatch_iphone_13_pro__c2zepzlvlm2q_large.png" alt="" />
                </div>
                <img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/logo_iphone_13_pro__escb7hhficq6_large.png" alt="" />
                <p className="a-containerMainBlock__text">The ultimate iPhone.</p>
                <p className="a-containerMainBlock__subText">From $999</p>
                <a className="a-buttonBuy -sectionCompare" href="">Buy</a>
                <a className="a-containerCtaButton_button -learnMore" href="">Learn More {'>'}</a>
            </div>
            <SectionCompareItemBlock
                className="-display"
                icon={<h5>6.7″ or 6.1″ </h5>}
                text={<>All-screen OLED display5<br />with ProMotion</>}
                subText=""
            />
            <SectionCompareItemBlock
                className="-camera"
                icon={<img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/icon_13_pro_camera__ecgirvs0t8a6_large.png" />}
                text="Pro camera system"
                subText="Telephoto, Wide, Ultra Wide"
            />
            <SectionCompareItemBlock
                className="-chip"
                icon={<img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/icon_a15__7kv9hny60r6a_large.png" />}
                text="A15 Bionic chip"
                subText="5-core GPU"
            />
            <SectionCompareItemBlock
                className=""
                icon={<img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/icon_5g__drmscch1vbee_large.png" />}
                text="Superfast 5G cellular4"
                subText=""
            />
            <SectionCompareItemBlock
                className=""
                icon={<img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/icon_battery__e4haplawmfcm_large.png" />}
                text="Up to 28 hours video
                        playback2"
                subText=""
            />
            <SectionCompareItemBlock
                className=""
                icon={<img src="https://www.apple.com/v/iphone-13/h/images/key-features/compare/icon_face_id__wdw44wzdiiau_large.png" />}
                text="Face ID"
                subText=""
            />
        </section>
    )
}

export default SectionCompareItem;