import { Link } from 'react-router-dom'

export default function NavMenuItem({ className, href='', content, func:showSearchBar }) {

    return (
        <li className={"o-navMenu__list " + className}>
            <Link 
                to={href}
                onClick={showSearchBar}
            >{content}</Link>
        </li>
    )
}