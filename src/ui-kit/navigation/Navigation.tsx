import { Link, matchRoutes, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { AppRoutesConfig } from '../../constants/routes'
import Container from '../container/Container'
import Socials from '../socials/Socials'
import instagram from '../../assets/img/instagram.svg'
import './Navigation.sass'

export default function Navigation() {
  const location = useLocation()
  const currentRoute = matchRoutes(Object.values(AppRoutesConfig), location)
  const currentRouteBase = currentRoute?.length && currentRoute[0].pathnameBase;

  return <Container wide>
    <nav className='Navigation'>
      <Link to={AppRoutesConfig.Home.path}>
        <div className="Navigation__Logo-Text">
            Slava 
            <span className="Navigation__Logo-Text_Highlight">Fast</span>
        </div>
      </Link>
      <ul className='Navigation__List'>
        {[AppRoutesConfig.Works, AppRoutesConfig.Blog, AppRoutesConfig.About].map(routeConfig => <Link
            to={routeConfig.path}
            key={routeConfig.path}
          >
            <li className={classNames({ 'Navigation__List-Item': true, 'Navigation__List-Item_Active': currentRouteBase === routeConfig.path })}>
              {routeConfig.title}
            </li>
          </Link>)}
      </ul>
      <div className='Navigation__Socials'>
        <Socials />
      </div>
    </nav>
  </Container>
}