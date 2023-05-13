import Container from '../../ui-kit/container/Container'
import Button from '../../ui-kit/button/Button'
import './Works.sass'
import i_1 from '../../assets/img/works/1.jpg'
import i_2 from '../../assets/img/works/2.jpg'
import i_3 from '../../assets/img/works/3.jpg'
import i_4 from '../../assets/img/works/4.jpg'
import i_5 from '../../assets/img/works/5.jpg'
import i_6 from '../../assets/img/works/6.jpg'
import i_7 from '../../assets/img/works/7.jpg'
import i_8 from '../../assets/img/works/8.jpg'
import i_9 from '../../assets/img/works/9.jpg'
import i_10 from '../../assets/img/works/10.jpg'
import i_11 from '../../assets/img/works/11.jpg'
import i_12 from '../../assets/img/works/12.jpg'
import i_13 from '../../assets/img/works/13.jpg'
import i_14 from '../../assets/img/works/14.jpg'
import i_15 from '../../assets/img/works/15.jpg'
import i_16 from '../../assets/img/works/16.jpg'
import i_17 from '../../assets/img/works/17.jpg'
import i_18 from '../../assets/img/works/18.jpg'
import i_19 from '../../assets/img/works/19.jpg'
import i_20 from '../../assets/img/works/20.jpg'
import i_21 from '../../assets/img/works/21.jpg'
import i_22 from '../../assets/img/works/22.jpg'
import i_23 from '../../assets/img/works/23.jpg'
import i_24 from '../../assets/img/works/24.jpg'
import i_25 from '../../assets/img/works/25.jpg'
import i_26 from '../../assets/img/works/26.jpg'
import i_27 from '../../assets/img/works/27.jpg'
import i_28 from '../../assets/img/works/28.jpg'
import i_29 from '../../assets/img/works/29.jpg'
import i_30 from '../../assets/img/works/30.jpg'
import i_31 from '../../assets/img/works/31.jpg'
import i_32 from '../../assets/img/works/32.jpg'
import i_33 from '../../assets/img/works/33.jpg'
import i_34 from '../../assets/img/works/34.jpg'
import i_35 from '../../assets/img/works/35.jpg'
import i_36 from '../../assets/img/works/36.jpg'
import i_37 from '../../assets/img/works/37.jpg'
import i_38 from '../../assets/img/works/38.jpg'
import i_39 from '../../assets/img/works/39.jpg'
import i_40 from '../../assets/img/works/40.jpg'
import i_41 from '../../assets/img/works/41.jpg'
import i_42 from '../../assets/img/works/42.jpg'
import i_43 from '../../assets/img/works/43.jpg'
import i_44 from '../../assets/img/works/44.jpg'
import i_45 from '../../assets/img/works/45.jpg'
import i_46 from '../../assets/img/works/46.jpg'
import i_47 from '../../assets/img/works/47.jpg'
import i_48 from '../../assets/img/works/48.jpg'
import i_49 from '../../assets/img/works/49.jpg'
import i_50 from '../../assets/img/works/50.jpg'
import i_51 from '../../assets/img/works/51.jpg'
import i_52 from '../../assets/img/works/52.jpg'
import i_53 from '../../assets/img/works/53.jpg'
import i_54 from '../../assets/img/works/54.jpg'
import i_55 from '../../assets/img/works/55.jpg'

const images = [
  { src: i_1 },
  { src: i_2 },
  { src: i_3 },
  { src: i_4 },
  { src: i_5 },
  { src: i_6 },
  { src: i_7 },
  { src: i_8 },
  { src: i_9 },
  { src: i_10 },
  { src: i_11 },
  { src: i_12 },
  { src: i_13 },
  { src: i_14 },
  { src: i_15 },
  { src: i_16 },
  { src: i_17 },
  { src: i_18 },
  { src: i_19 },
  { src: i_20 },
  { src: i_21 },
  { src: i_22 },
  { src: i_23 },
  { src: i_24 },
  { src: i_25 },
  { src: i_26 },
  { src: i_27 },
  { src: i_28 },
  { src: i_29 },
  { src: i_30 },
  { src: i_31 },
  { src: i_32 },
  { src: i_33 },
  { src: i_34 },
  { src: i_35 },
  { src: i_36 },
  { src: i_37 },
  { src: i_38 },
  { src: i_39 },
  { src: i_40 },
  { src: i_41 },
  { src: i_42},
  { src: i_43 },
  { src: i_44 },
  { src: i_45 },
  { src: i_46 },
  { src: i_47 },
  { src: i_48 },
  { src: i_49 },
  { src: i_50 },
  { src: i_51 },
  { src: i_52 },
  { src: i_53 },
  { src: i_54 },
  { src: i_55 },
]

export default function Works() {
  const shuffledImages = images.sort((a, b) => 0.5 - Math.random());
  const arrayToReder = shuffledImages.reduce((acc, image, index) => {
    const tempIdx = index + 1

    if (tempIdx % 3 === 0) {
      acc[0].push(image)
    } else if (tempIdx % 2 === 0) {
      acc[1].push(image)
    } else {
      acc[2].push(image)
    }

    return acc;
  }, { 0: [] as any, 1: [] as any, 2: [] as any})

  return <Container wide>
    <div className="Works">
      <div className="Works__First">
        {arrayToReder[0].map((image: any) => <img key={image.src} className='Works__Image' src={image.src} />)}
      </div>
      <div className="Works__Second">
        {arrayToReder[1].map((image: any) => <img key={image.src} className='Works__Image' src={image.src} />)}
      </div>
      <div className="Works__Third">
        {arrayToReder[2].map((image: any) => <img key={image.src} className='Works__Image' src={image.src} />)}
      </div>
    </div>
    <div className='Works__Button'>
      <a
        className='Socials__Link'
        href='https://www.instagram.com/_slava_fast/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button>Even more on Instagram</Button>
      </a>
    </div>
  </Container>
}