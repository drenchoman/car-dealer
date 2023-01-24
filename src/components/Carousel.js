import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import CarouselImage from './CarouselImage';
import styles from '@/styles/Carousel.module.css'

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
<div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        autoplay={true}
        delay={5000}
        itemsToShow={0}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <CarouselImage index={0}></CarouselImage>
        <CarouselImage index={1}></CarouselImage>
        <CarouselImage index={2}></CarouselImage>


        </ReactSimplyCarousel>
</div>
  )
}
