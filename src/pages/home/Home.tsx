import { Link } from 'react-router-dom'
import { AppRoutesConfig } from '../../constants/routes'
import Button from '../../ui-kit/button/Button'
import Container from '../../ui-kit/container/Container'
import firstImage from '../../assets/img/slava_1.jpg'
import secondImage from '../../assets/img/works/1.jpg'
import thirdImage from '../../assets/img/works/2.jpg'
import './Home.sass'

export default function Home() {
  return <Container wide>
    <div className='Home'>
      <img src={firstImage} className='Home__Image Home__Image_first' alt="" />
      <img src={secondImage} className='Home__Image Home__Image_second' alt="" /> 
      <img src={thirdImage} className='Home__Image Home__Image_third' alt="" />

      <div className='Home__Button_Wrapper'>
        <Link to={AppRoutesConfig.Works.path}>
          <Button>Explore more works</Button>
        </Link>
      </div>
    </div>
  </Container>
}
