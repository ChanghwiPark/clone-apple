function NavMenuItem({ navMenuArray }) {
    return (
        navMenuArray.map(menuItem => {
            return (
                <li className={"o-navMenu__list " + menuItem.className}>
                    <a href={menuItem.href}>{menuItem.content}</a>
                </li>
            )
        })
    )
}

export default NavMenuItem;