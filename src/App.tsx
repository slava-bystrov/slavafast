import {
  Routes,
  Route,
} from 'react-router-dom'
import { AppRoutesConfig } from './constants/routes'
import Navigation from './ui-kit/navigation/Navigation'


export default function App() {
  return <>
    <Navigation />

    <Routes>
      {Object.values(AppRoutesConfig).map(routeConfig => <Route
        key={routeConfig.path}
        path={routeConfig.path}
        element={routeConfig.element}
      />)}
    </Routes>
  </>
}