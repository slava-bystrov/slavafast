import { Link } from 'react-router-dom'
import Button from '../../ui-kit/button/Button'
import Container from '../../ui-kit/container/Container'
import './Home.sass'

export default function Home() {
  return <Container>
    <div className='Home'>
      <div className='Home__First'>1</div>
      <div className='Home__Second'>2</div>
      <div className='Home__Third'>3</div>
      <div className='Home__Button_Wrapper'>
        <Link to='/works'>
          <Button>Explore more works</Button>
        </Link>
      </div>
    </div>
  </Container>
}
