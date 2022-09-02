import "./ButtonsCta.css"

function ButtonsCta({ className, text01="Learn more >" , text02="Buy >" }) {
    return (
        <div className={"m-containerCtaButton  " + className}>
            <a href="" className={"a-containerCtaButton_button -learnMore " + className}>{text01}</a>
            <a href="" className={"a-containerCtaButton_button -buy " + className}>{text02}</a>
        </div>
    )
}

export default ButtonsCta;