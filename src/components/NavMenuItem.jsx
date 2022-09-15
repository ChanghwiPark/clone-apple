
export default function NavMenuItem({ className, href, content, func:showSearchBar }) {

    return (
        <li className={"o-navMenu__list " + className}>
            <a 
                href={href}
                onClick={showSearchBar}
            >{content}</a>
        </li>
    )
}