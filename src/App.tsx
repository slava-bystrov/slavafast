import { Routes, Route } from 'react-router-dom'
import { AppRoutesConfig } from './constants/routes'
import Navigation from './ui-kit/navigation/Navigation'
import ScrollToTop from './ui-kit/scroll-to-top/ScrollToTop'

export default function App() {
  return <>
    <ScrollToTop />
      <Navigation />

      <Routes>
        {Object.values(AppRoutesConfig).map(routeConfig => <Route
          key={routeConfig.path}
          path={routeConfig.path}
          element={routeConfig.element}
        />)}
        <Route path='*' element={AppRoutesConfig.Home.element}/>
      </Routes>
  </>
}