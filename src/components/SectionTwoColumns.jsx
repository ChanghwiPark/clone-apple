import "./SectionTwoColumns.css"
import SectionTwoColumnsItem from "./SectionTwoColumnsItem.jsx"

function SectionTwoColumns() {
    return(
        <section class="m-main__sectionTwoColumns">

        <SectionTwoColumnsItem
          className="-macBookAir"
          title="MacBook Air"
          subTitle="Supercharged by M2"
        />

        <SectionTwoColumnsItem
          className="-macBookPro13"
          title="MacBook Pro 13"
          subTitle="Supercharged by M2"
        />

        <SectionTwoColumnsItem
          className="-appleWatch7"
          title="Apple Watch Series 7"
          subTitle="It's our largest display yet."
        />

        <SectionTwoColumnsItem
          className="-ipadAir"
          title="iPad air"
          subTitle="Light. Bright. Full of might."
        />

        <SectionTwoColumnsItem
          className="-appleCard"
          title="Apple Card"
          subTitle="Get up to 3% Daily Cash back with every purchase."
        />

        <SectionTwoColumnsItem
          className="-airPods"
          title="AirPods"
          subTitle="with Spatial Audio"
        />

      </section>
    )
}

export default SectionTwoColumns;