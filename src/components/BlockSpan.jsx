import './BlockSpan.css'

export default function BlockSpan({ className, srcIcon, text }) {
    return (
        <div className={"m-blockSpan " + className}>
            <figure className={"a-blockSpan__icon " + className}>
                <img src={srcIcon} alt="" />
            </figure>
            <span className={"a-blockSpanText " + className}>{text}</span>
        </div>
    )
}
