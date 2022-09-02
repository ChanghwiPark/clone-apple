
function NavChooseColorItem({ colorArray }) {
    return(
        <>
            {
                colorArray.map(color => {
                    const colorClass = color.toLowerCase().replace(/[{()}]/g, '');

                    return (
                        <li className="m-navChooseColor__item -iphone13">
                            <input type="radio" name="m-navChooseColor-phone13" id={color} />
                            <label className="m-navChooseColor__label -iphone13" for={color}>
                                <span className={"a-navChooseColor__colorCircle -"+colorClass}></span>
                                <span className={"a-navChooseColor__colorText -"+colorClass}>{color}</span>
                            </label>
                        </li>
                    )
                })
            }
        </>
    )
}

export default NavChooseColorItem;