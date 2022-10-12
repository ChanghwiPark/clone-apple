import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NavMenuItem({ className, href='', content, func }) {

    return (
        <ANavMenuItem className={'a-navMenuItem ' + className}>
            <Link 
                className={'a-linkNavMenuItem ' + className}
                to={href}
                onClick={func}
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

