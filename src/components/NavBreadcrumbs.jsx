import './NavBreadcrumbs.css'

export default function NavBreadcrumbs({ locationArray }) {
    return(
        <nav className="m-navBreadcrumbs">
            <a className="a-linkAppleLogo" href="https://www.apple.com/"></a>
            {
                locationArray && locationArray.map((item) => (
                    <a href="">{item}</a>
                ))
            }
        </nav>
    );
}
