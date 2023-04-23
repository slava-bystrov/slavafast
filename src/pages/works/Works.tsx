import Container from '../../ui-kit/container/Container'
import './Works.sass'
import image from '../../assets/img/garda_drone.jpg'

export default function Works() {
  return <Container wide>
    <img src={image} alt="" />
  </Container>
}