import Container from '../../ui-kit/container/Container'
import Socials from '../../ui-kit/socials/Socials'
import slavaFastPhoto from '../../assets/img/slava_3.jpg'
import { ComponentSize } from '../../constants/component-size'
import './About.sass'

export default function About() {
  return <Container>
    <div className="About">
      <div className="About__Left">
        <img src={slavaFastPhoto} alt='Slava Fast photo' />
      </div>
      <div className="About__Right">
        <p>
          Aloha and welcome to my, hopefully cozy, website 🖤
        </p>
        <p>
          My name is Slava Fast and I'm a Software Engineer by profession
          and traveler/photograper/videographer on non-working hours 😆
        </p>
        <p>
          I hope you'll enjoy your stay here and if you'll have any questions —
          feel free to shoot them at me on any of these platforms:
        </p>
        <div className="About__Socials">
          <Socials size={ComponentSize.L} />
        </div>
      </div>
    </div>
  </Container>
}