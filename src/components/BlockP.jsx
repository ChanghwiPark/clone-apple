
export default function BlockP({ className, icon, text, subText }) {
    return (
        <div className={"m-blockP " + className}>
            {icon}
            <p className={"a-blockText " + className}>{text}</p>
            <p className={"a-blockSubText " + className}>{subText}</p>
        </div>
    )
}
