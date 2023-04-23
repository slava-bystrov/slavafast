import {
  Routes,
  Route,
} from 'react-router-dom'
import { AppRoutesConfig } from './constants/routes'
import Navigation from './ui-kit/navigation/Navigation'
import Home from './pages/home/Home'
import Works from './pages/works/Works'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'

export default function App() {
  return <>
    <Navigation />

    <Routes>
      <Route
        path={AppRoutesConfig.Home.path}
        element={<Home/>}
      />
      <Route
        path={AppRoutesConfig.Works.path}
        element={<Works/>}
      />
      <Route
        path={AppRoutesConfig.Blog.path}
        element={<Blog/>}
      />
      <Route
        path={AppRoutesConfig.About.path}
        element={<About/>}
      />
    </Routes>
  </>
}