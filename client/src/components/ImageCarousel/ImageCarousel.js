import { styled } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'

const Container = styled('div')({
  display: 'flex',
})

const Slide = styled('div')({
  width: 100,
})
const Image = styled('img')({
  width: 100,
  height: 100,
})

export function ImageCarousel({ images }) {
  console.log('ImageCarousel', images)
  // const $slides = images.map((img) => (
  //   <Slide key={img}>
  //     <Image src={img} alt="123" />
  //   </Slide>
  // ))
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }

  return (
    // <Container>
    //   <Slider {...settings}>
    //     {/* {$slides} */}
    //     <div>
    //       <Slide>
    //         <Image src={images[0]} alt="123" />
    //       </Slide>
    //     </div>
    //     <div>
    //       <Slide>
    //         <Image src={images[0]} alt="123" />
    //       </Slide>
    //     </div>
    //     <div>
    //       <Slide>
    //         <Image src={images[0]} alt="123" />
    //       </Slide>
    //     </div>

    //   </Slider>
    // </Container>
    <Slider {...settings}>
      {/* {$slides} */}
      <div>
        <Slide>
          <Image src={images[0]} alt="123" />
        </Slide>
      </div>
      <div>
        <Slide>
          <Image src={images[0]} alt="123" />
        </Slide>
      </div>
      <div>
        <Slide>
          <Image src={images[0]} alt="123" />
        </Slide>
      </div>

    </Slider>
  )
}
