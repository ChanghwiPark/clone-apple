function SectionGridFeaturesItem({ className, content, background }) {

    return (
        <section className={"m-sectionGridFeaturesItem " + className}>
            <h3 className={"a-sectionGridFeaturesItem__content " + className}>{content}</h3>
            <button className="a-buttonPlus">+</button>
            {background}
        </section>
    )
}

export default SectionGridFeaturesItem;