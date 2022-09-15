
function NavSiteMapGroup({ className, title, items:itemsArray }) {
    return (
        <div className={"m-containerSiteMap " + className}>
            <label className={"a-labelSiteMap " + className}><h3>{title}</h3></label>
            <ul className={"m-ulSiteMap " + className}>
                {
                    itemsArray ? itemsArray.map((item) => (
                        <li><a href="">{item}</a></li>
                    )) : ''
                }
            </ul>
        </div>
    )
}

export default NavSiteMapGroup