import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Carousel.module.css'

const height = 400
const width = 550

export default function CarouselImage({index}) {
 if (index == 0 ){
  return <div className={styles.testImage}>
    <Image 
    src='/ads/ad1.jpeg'
    alt="test"
    width={width}
    height={height}
    

    />
    </div>
 } else if (index == 1){
  return <div className={styles.testImage}>
  <Image 
  src='/ads/ad2.webp'
  alt="test"
  width={width}
  height={height}


  />
  </div>
 }
 else if (index == 2){
  return <div className={styles.testImage}>
  <Image 
  src='/ads/ad3.jpeg'
  alt="test"
 
  width={width}
  height={height}


  />
  </div>
 }
}
