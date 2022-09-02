
function SectionOneColumnItem({ className, href, title, subTitle, cta }) {
    return (
        <div className={"m-sectionOneColumn__container " + className}>
            <a className={"a-linkPictureOneColumn " + className} href={href}></a>
            <div className={"m-containerTextOneColumn " + className}>
                <h2 className={"a-titleOneColumn " + className}>{title}</h2>
                <h3 className={"a-subtitleOneColumn " + className}>{subTitle}</h3>
                {cta}
            </div>
        </div>
    )
}

export default SectionOneColumnItem;