
function SectionWhyIphone13Item({ className, title, description, more}) {
    return(
        <section className={"m-sectionWhyIphone13Item " + className}>
            <div className={"m-containerWhyIphone13Item " + className}>
                <figure className={"a-sectionWhyIphone13Item__icon " + className}></figure>
                <h4 className={"a-sectionWhyIphone13Item__title " + className}>{title}</h4>
                <p className={"a-sectionWhyIphone13Item__description " + className}>{description}</p>
                <p className={"a-sectionWhyIphone13Item__more " + className}><a href="">{more}</a></p>
            </div>
        </section>
    );
}

export default SectionWhyIphone13Item;