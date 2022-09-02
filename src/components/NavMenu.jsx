import "./NavMenu.css"
import NavMenuItem from "./NavMenuItem";
import applelogo from "../assets/icons/applelogo.svg";
import search from "../assets/icons/search.svg";
import bag from "../assets/icons/bag.svg";

function NavMenu(props) {
    return(
        <nav class={"o-navMenu " + props.position}>
        <div class="m-navMenu__container">
          <ul class="m-navMenu__ul">
            <NavMenuItem navMenuArray={[
              {className: "-logoApple", href:"/", content: <img src={applelogo} alt="apple logo" />},
              {className: "-store", href: "/us/shop/goto/store", content: "Store"},
              {className: "-mac", href: "/mac/", content: "Mac"},
              {className: "-ipad", href: "/ipad/", content: "iPad"},
              {className: "-iphone", href: "/iphone/", content: "iPhone"},
              {className: "-watch", href: "/watch/", content: "Watch"},
              {className: "-airpods", href: "/airpods/", content: "AirPods"},
              {className: "-tvNHome", href: "/tv-home/", content: "TV & Home"},
              {className: "-onlyOnApple", href: "/services/", content: "Only on Apple"},
              {className: "-accessories", href: "/us/shop/goto/buy_accessories", content: "Accessories"},
              {className: "-support", href: "https://support.apple.com", content:"Support"},
              {className: "-iconSearch", href: "/us/search", content: <img src={search} alt="search icon"/>},
              {className: "-iconStore", href: "/us/shop/goto/bag", content: <img src={bag} alt="bag icon"/>}
            ]}/>
          </ul>
        </div>
      </nav>
    )
}

export default NavMenu;