import { Link } from 'react-router-dom'
import Button from '../../ui-kit/button/Button'
import Container from '../../ui-kit/container/Container'
import firstImage from '../../assets/img/ava_garda.jpg'
import secondImage from '../../assets/img/girl_pink.jpg'
import thirdImage from '../../assets/img/saxer.jpg'
import './Home.sass'

export default function Home() {
  return <Container>
    <div className='Home'>
      <div className="Home__Left">
        <img src={firstImage} alt="" />
      </div>
      <div className="Home__Right">
        <img src={thirdImage} alt="" /> 
        <img src={secondImage} alt="" />
      </div>
      <div className='Home__Button_Wrapper'>
        <Link to='/works'>
          <Button>Explore more works</Button>
        </Link>
      </div>
    </div>
  </Container>
}
