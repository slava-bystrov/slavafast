import Home from '../pages/home/Home'
import Works from '../pages/works/Works'
import Blog from '../pages/blog/Blog'
import About from '../pages/about/About'
import BlogPostPage from '../pages/blog/blog-post-page/Blog-Post-Page'

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
  BlogPostPage: {
    path: '/blog/:id',
    title: 'Blog',
    element: <BlogPostPage />
  },
  About: {
    path: '/about',
    title: 'About & Contacts',
    element: <About />
  },
}
