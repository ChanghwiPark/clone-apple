function SectionGridFeaturesItem({ sectionGridItemArray }) {
    return(
        sectionGridItemArray.map(sectionGridItem => {
            const className = sectionGridItem.className;
            
            return(
                <section className={"m-sectionGridFeaturesItem " + className}>
                    <h3 className={"a-sectionGridFeaturesItem__content " + className}>{sectionGridItem.content}</h3>
                    <button className="a-buttonPlus">+</button>
                    {sectionGridItem.background}
                </section>
            )
        })
    )
}

export default SectionGridFeaturesItem;