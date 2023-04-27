import { useEffect } from "react"
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { AppRoutesConfig } from './constants/routes'
import Navigation from './ui-kit/navigation/Navigation'

function ScrollToTop({ children }: any) {
  const { pathname } = useLocation();
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
}

export default function App() {
  return <>
    <ScrollToTop>
      <Navigation />

      <Routes>
        {Object.values(AppRoutesConfig).map(routeConfig => <Route
          key={routeConfig.path}
          path={routeConfig.path}
          element={routeConfig.element}
        />)}
      </Routes>
    </ScrollToTop>
  </>
}