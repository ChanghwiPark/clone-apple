import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NavMenuItem({ className, href='', content, func:showSearchBar }) {

    return (
        <ANavMenuItem className={className}>
            <Link 
                to={href}
                onClick={showSearchBar}
            >{content}</Link>
        </ANavMenuItem>
    )
}

const ANavMenuItem = styled.li`
    a {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #f5f5f7;
    }
`