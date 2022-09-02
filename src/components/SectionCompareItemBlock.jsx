
function SectionCompareItemBlock({ className, icon, text, subText }) {
    return (
        <div className={"m-sectionCompareItemBlock " + className}>
            {icon}
            <p className={"a-blockText " + className}>{text}</p>
            <p className={"a-blockSubText " + className}>{subText}</p>
        </div>
    )
}

export default SectionCompareItemBlock;