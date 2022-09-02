import "./NavSiteMap.css"
import NavSiteMapGroup from "./NavSiteMapGroup";

function NavSiteMap() {
  return (
    <nav class="m-navSiteMap">

      <div class="m-columnSiteMap -column01">
        <NavSiteMapGroup
          className="-shopnLearn"
          title="Shop and Learn"
          items={<>
            <li><a href="">Store</a></li>
            <li><a href="">Mac</a></li>
            <li><a href="">iPad</a></li>
            <li><a href="">iPhone</a></li>
            <li><a href="">Watch</a></li>
            <li><a href="">AirPods</a></li>
            <li><a href="">TV & Home</a></li>
            <li><a href="">AirTag</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">Gift Cards</a></li>
          </>}
        />
      </div>


      <div class="m-columnSiteMap -column02">
        <NavSiteMapGroup
          className="-services"
          title="Services"
          items={<>
            <li><a href="">Apple Music</a></li>
            <li><a href="">Apple TV+</a></li>
            <li><a href="">Apple Fitness+</a></li>
            <li><a href="">Apple News+</a></li>
            <li><a href="">Apple Arcade</a></li>
            <li><a href="">iCloud</a></li>
            <li><a href="">Apple One</a></li>
            <li><a href="">Apple Card</a></li>
            <li><a href="">Apple Books</a></li>
            <li><a href="">Apple Podcasts</a></li>
            <li><a href="">App Store</a></li>
          </>}
        />

        <NavSiteMapGroup
          className="-account"
          title="Account"
          items={<>
            <li><a href="">Manage Your Apple ID</a></li>
            <li><a href="">Apple Store Account</a></li>
            <li><a href="">iCloud.com</a></li>
          </>}
        />
      </div>


      <div class="m-columnSiteMap -column03">
        <NavSiteMapGroup
          className="-appleStore"
          title="Apple Store"
          items={<>
            <li><a href="">Find a store</a></li>
            <li><a href="">Genius Bar</a></li>
            <li><a href="">Today at Apple</a></li>
            <li><a href="">Apple Camp</a></li>
            <li><a href="">Apple Store App</a></li>
            <li><a href="">Refurbished and Clearance</a></li>
            <li><a href="">Financing</a></li>
            <li><a href="">Apple Trade In</a></li>
            <li><a href="">Order Status</a></li>
            <li><a href="">Shopping Help</a></li>
          </>}
        />
      </div>


      <div class="m-columnSiteMap -column04">
        <NavSiteMapGroup
          className="-forBusiness"
          title="For Business"
          items={<>
            <li><a href="">Apple and Business</a></li>
            <li><a href="">Shop for Business</a></li>
          </>}
        />

        <NavSiteMapGroup
          className="-forEducation"
          title="For Education"
          items={<>
            <li><a href="">Apple and Education</a></li>
            <li><a href="">Shop for K-12</a></li>
            <li><a href="">Shop for College</a></li>
          </>}
        />

        <NavSiteMapGroup
          className="-forHealthcare"
          title="For Healthcare"
          items={<>
            <li><a href="">Apple in Healthcare</a></li>
            <li><a href="">Health on Apple Watch</a></li>
            <li><a href="">Health Records on iPhone</a></li>
          </>}
        />

        <NavSiteMapGroup
          className="-forGovernment"
          title="For Government"
          items={<>
            <li><a href="">Shop for Government</a></li>
            <li><a href="">Shop for Veterans and Military</a></li>
          </>}
        />
      </div>


      <div class="m-columnSiteMap -column05">
        <NavSiteMapGroup
          className="-appleValues"
          title="Apple Values"
          items={<>
            <li><a href="">Accessibility</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Environment</a></li>
            <li><a href="">Inclusion and Diversity</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Racial Equity and Justice</a></li>
            <li><a href="">Supplier Responsibility</a></li>
          </>}
        />

        <NavSiteMapGroup
          className="-aboutApple"
          title="About Apple"
          items={<>
            <li><a href="">Newsroom</a></li>
            <li><a href="">Apple Leadership</a></li>
            <li><a href="">Career Opportunities</a></li>
            <li><a href="">Investors</a></li>
            <li><a href="">Ethics & Compliance</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact Apple</a></li>
          </>}
        />

      </div>
      
    </nav>
  )
}

export default NavSiteMap;