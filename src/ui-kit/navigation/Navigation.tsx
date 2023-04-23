import { Link } from 'react-router-dom'
import './Navigation.sass'
import Container from '../container/Container'
import instagram from '../../assets/img/instagram.svg'

export default function Navigation() {
  return <Container>
    <nav className='Navigation'>
      <Link to='/'>
        <div className="Navigation__Logo">
            Slava Fast
        </div>
      </Link>
      <ul className='Navigation__List'>
        <Link to='/'>
          <li className='Navigation__List-Item'>
            Home
          </li>
        </Link>
        <Link to='/'>
          <li className='Navigation__List-Item'>
            Works
          </li>
        </Link>
        <Link to='/'>
          <li className='Navigation__List-Item'>
            Blog
          </li>
        </Link>
        <Link to='/'>
          <li className='Navigation__List-Item'>
            About & Contacts
          </li>
        </Link>
      </ul>
      <a
        className='Navigation__List-Item Navigation__Instagram'
        href='https://www.instagram.com/_slava_fast/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
        className='Navigation__Instagram-Icon'
        src={instagram} alt='Instagram Logo' />
        Instagram
      </a>
    </nav>
  </Container>
}