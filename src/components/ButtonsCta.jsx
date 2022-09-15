import "./ButtonsCta.css"

function ButtonsCta({ className, arrayButtons=[{className:'-learnMore', content:'Learn more >'},
    { className: '-buy', content: 'Buy >' }] }) {
    return (
        <div className={"m-containerCtaButton  " + className}>
            {
                arrayButtons.map((item) => {
                    return (
                        <a 
                            href="" 
                            className={"a-containerCtaButton__button " + className + ' ' + item.className}
                        >
                            {item.content}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default ButtonsCta;