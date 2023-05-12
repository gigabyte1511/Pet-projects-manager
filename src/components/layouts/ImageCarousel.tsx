import { styled } from '@mui/material'
import Slider from 'react-slick'

const Slide = styled('div')({

})
const Image = styled('img')({
  width: '50vw',
  marginLeft: 'auto',
  marginRight: 'auto'
})

export function ImageCarousel({ images }: { images: string[] }): JSX.Element {
  const $slides = images.map((img) => (
    <Slide key={img}>
      <Image src={img} alt="123" />
    </Slide>
  ))
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true
  }

  return (
    <Slider {...settings}>
      {$slides}
    </Slider>
  )
}
