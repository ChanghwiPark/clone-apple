import "./BlockNavBar.css"
import { Link } from "react-router-dom"

export default function BlockNavBar({ title, listArray, cta }) {
    return(
        <nav className="o-blockNavBar">
            <div className="m-blockNavBar__containerMain">
                <div className="m-blockNavBar__containerTitle">
                    <a href="/iphone-13/key-features/">{title}</a>
                </div>

                <div className="m-blockNavBar__containerButtons">
                    <div className="m-blockNavBar__containerMenu">
                        <ul className="m-blockNavBar__ul">
                            {
                                listArray && listArray.map((item) => (
                                    <li>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    {
                        cta && <div className="m-blockNavBar__containerBuy"><Link className="a-buttonBuy -blockNavBar" to="/buy-iphone13">{cta}</Link></div>
                    }
                </div>

                </div>
        </nav>
    )
}
