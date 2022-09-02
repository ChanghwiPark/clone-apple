import ButtonsCta from "./ButtonsCta";
import "./SectionCompare.css"
import SectionCompareItem from "./SectionCompareItem";

function SectionCompare() {
    return(
        <section className="o-sectionCompare">
            <div className="m-containerMainSectionCompare">
                <h3 className="a-sectionTitle -compare">Which iPhone is right for you?</h3>
                <div className="m-containerSectionCompareItem">
                    <SectionCompareItem/>
                    <SectionCompareItem/>
                    <SectionCompareItem/>
                    <SectionCompareItem/>
                </div>
                <ButtonsCta className="-sectionCompare" text01="Compare all iPhone models >" text02="Shop iPhone >"/>
            </div>
        </section>
    );
}

export default SectionCompare;