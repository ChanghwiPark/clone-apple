import applelogo from "../assets/icons/applelogo.svg";
// import search from "../assets/icons/search.svg";
import bag from "../assets/icons/bag.svg";

export const navMenuDummy = [
    { className: "-logoApple", 
        href: "/", 
        content: <img src={applelogo} alt="apple logo" /> 
    },
    { className: "-store", 
        href: "/us/shop/goto/store", 
        content: "Store" 
    },
    { className: "-mac", 
        href: "/mac/", 
        content: "Mac" 
    },
    { className: "-ipad", 
        href: "/ipad/", 
        content: "iPad" 
    },
    { className: "-iphone", 
        href: "/iphone13/", 
        content: "iPhone" 
    },
    { className: "-watch", 
        href: "/watch/", 
        content: "Watch" 
    },
    { className: "-airpods", 
        href: "/airpods/", 
        content: "AirPods" 
    },
    { className: "-tvNHome", 
        href: "/tv-home/", 
        content: "TV & Home" 
    },
    { className: "-onlyOnApple", 
        href: "/services/", 
        content: "Only on Apple" 
    },
    { className: "-accessories", 
        href: "/us/shop/goto/buy_accessories", 
        content: "Accessories" 
    },
    { className: "-support", 
        href: "https://support.apple.com", 
        content: "Support" 
    },
    { className: "-iconSearch", 
        content: <button className="a-buttonSearchIcon -navMenu" />
    },
    { className: "-iconStore", 
        href: "/us/shop/goto/bag", 
        content: <img src={bag} alt="bag icon" />
    }
]