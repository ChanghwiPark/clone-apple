
function NavSiteMapGroup({ className, title, items }) {
    return (
        <div className={"m-containerSiteMap " + className}>
            <label className={"a-labelSiteMap " + className}><h3>{title}</h3></label>
            <ul className={"m-ulSiteMap "+ className}>
                {items}
            </ul>
        </div>
    )
}

export default NavSiteMapGroup