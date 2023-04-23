import { Link } from 'react-router-dom'
import './Navigation.sass'
import Container from '../container/Container'

export default function Navigation() {
  return <Container>
    <nav className='Navigation'>
      <div className="Navigation__Logo">
        <Link to='/'>
          Slava Fast
        </Link>
      </div>
      <ul className='Navigation__List'>
        <li className='Navigation__List-Item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='Navigation__List-Item'>
          <Link to='/'>Works</Link>
        </li>
        <li className='Navigation__List-Item'>
          <Link to='/'>Blog</Link>
        </li>
        <li className='Navigation__List-Item'>
          <Link to='/'>About & Contacts</Link>
        </li>
      </ul>
      <div className="Navigation__Instagram">
        <a href='https://www.instagram.com/_slava_fast/'>Instagram</a>
      </div>
    </nav>
  </Container>
}