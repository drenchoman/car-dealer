import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import CarouselImage from './CarouselImage';
import styles from '@/styles/Carousel.module.css'

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
<div className={styles.container}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        autoplay={true}
        delay={2000}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          
            className: styles.next,
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
         className: styles.back,
          children: <span>{`<`}</span>,
        }}
        // responsiveProps={[
        //   {
        //     itemsToShow: 1,
        //     itemsToScroll: 1,
        //     minWidth: 768,
        //   },
        // ]}
        // speed={400}
        // easing="linear"
      >
        <CarouselImage index={0}></CarouselImage>
        <CarouselImage index={1}></CarouselImage>
        <CarouselImage index={2}></CarouselImage>


        </ReactSimplyCarousel>
</div>
  )
}
