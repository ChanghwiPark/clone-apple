import ButtonsCta from "./ButtonsCta";

function SectionTwoColumnsItem({ className, title, subTitle}) {
    return(
        <div className={"m-sectionTwoColumns__container "+ className}>
            <a href="" className={"a-linkPictureTwoColumns " + className}></a>
            <div className={"m-containerTextTwoColumns  " + className}>
                <h4 className={"a-titleTwoColumns  " + className}>{title}</h4>
                <h5 className={"a-subtitleTwoColumns  " + className}>{subTitle}</h5>
                <ButtonsCta className={className}/>
            </div>
        </div>
    )
}

export default SectionTwoColumnsItem;