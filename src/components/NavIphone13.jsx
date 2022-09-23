import "./NavIphone13.css"

function NavIphone13() {
    return(
        <nav className="o-navIphone13">
            <div className="m-navIphone13__containerMain">
                <div className="m-navIphone13__containerTitle">
                    <a href="/iphone-13/key-features/">iPhone 13</a>
                </div>

                <div className="m-navIphone13__containerButtons">
                    <div className="m-navIphone13__containerMenu">
                        <ul className="m-navIphone13__ul">
                            <li>Overview</li>
                            <li>Switching to iPhone</li>
                            <li>Tech Specs</li>
                        </ul>
                    </div>
                    <div className="m-navIphone13__containerBuy"><a className="a-buttonBuy -navIphone13" href="/us/shop/goto/buy_iphone/iphone_13">Buy</a></div>
                </div>

                </div>
        </nav>
    )
}

export default NavIphone13;