import Home from '../pages/home/Home'
import Works from '../pages/works/Works'
import Blog from '../pages/blog/Blog'
import About from '../pages/about/About'

export const AppRoutesConfig = {
  Home: {
    path: '/',
    title: 'Home',
    element: <Home />
  },
  Works: {
    path: '/works',
    title: 'Works',
    element: <Works />
  },
  Blog: {
    path: '/blog',
    title: 'Blog',
    element: <Blog />
  },
  About: {
    path: '/about',
    title: 'About & Contacts',
    element: <About />
  },
}
