import {
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Navigation from './ui-kit/navigation/Navigation'

export default function App() {
  return <>
    <Navigation />

    <Routes>
      <Route
        path='/'
        element={<Home/>}
      />
    </Routes>
  </>
}