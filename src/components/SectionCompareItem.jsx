import BlockP from "./BlockP";
import ButtonsCta from './ButtonsCta.jsx'

export default function SectionCompareItem({ imgPhone, imgColor, imgTitle, text, arraySectionCompareItems }) {
    return (
        <section className="m-sectionCompareItem__containerMain">
            <div className="m-sectionCompareItem__containerMainBlock">
                <div className="a-containerMainBlock__wrapperImgPhone">
                    <img src={imgPhone} alt="" />
                </div>
                <div className="a-containerMainBlock__wrapperImgColors">
                    <img src={imgColor} alt="" />
                </div>
                <img src={imgTitle} alt="" />
                <p className="a-containerMainBlock__text">{text}</p>
                <a className="a-buttonBuy -sectionCompareItem" href="">Buy</a>
                <ButtonsCta 
                    className="-sectionCompareItem"
                    arrayButtons={[
                        {className:'-learnMore', content:'Learn more >'}
                    ]}
                />
            </div>
            {
                arraySectionCompareItems && arraySectionCompareItems.map((item) => (
                    <BlockP 
                        className={item.className}
                        icon={item.icon}
                        text={item.text}
                    />
                ))
            }
        </section>
    )
}
