import './NotFound.css'
import NavMenu from '../components/NavMenu'
import BlockPlaceHolder from '../components/BlockPlaceHolder'
import NavBreadcrumbs from '../components/NavBreadcrumbs'
import NavSiteMap from '../components/NavSiteMap'
import SectionLastFooter from '../components/SectionLastFooter'
import ButtonsCta from '../components/ButtonsCta'
import BlockSearchBar from '../components/BlockSearchBar'

export default function NotFound() {

  return (
    <>
      <NavMenu />
      <BlockPlaceHolder />
      <main className="o-main -notFound">
        <h1 className='a-titleNotFound'>The page your're looking for can't be found.</h1>
        <aside>
          <BlockSearchBar className='-notFound' />
        </aside>
        <ButtonsCta 
          className='-notFound' 
          arrayButtons={[{className:'-seeSiteMap', content:'Or see our site map >'}]}
        />
      </main>

      <footer className="o-footer -Iphone13">
        <div className="m-containerFooter -Iphone13">
          <NavBreadcrumbs
            locationArray={['Page Not Found']} 
          />
          <NavSiteMap />
          <SectionLastFooter />
        </div>
      </footer>
    </>
  )
}
