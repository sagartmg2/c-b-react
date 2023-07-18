import React from 'react'
import Banner1 from "../assets/images/banner-1.png"
import Banner2 from "../assets/images/banner-2.png"
import Banner3 from "../assets/images/banner-3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import FeaturedProduct from '../components/FeaturedProduct';

function CarouselItem(props) {
  return (
    <div className={` ${props.banner}  bg-banner-1 h-[50vh] xl:h-[80vh] bg-cover bg-center text-left flex  justify-start `} >
      <div className='container'>
        <div className='w-2/3 mt-16'>
          <p className='text-secondary mb-3 text-2xl'>Best Furniture For Your Castle....</p>
          <p className='text-5xl mb-3 font-bold' >New Furniture Collection Trends in 2020</p>
          <p className='text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>
          <Link to="/products" className=' inline-block  mt-7 bg-secondary text-white px-4 py-2'>Shop Now</Link>
        </div>
      </div>
    </div>)
}

export default function Home() {
  return (
    <>
      <section >
        <Carousel
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
        >
          <CarouselItem banner=" bg-banner-1" />
          <CarouselItem banner="bg-banner-2" />
          <CarouselItem banner="bg-banner-3" />
        </Carousel>
        <div className="container">
        </div>
      </section >
      <section className='container my-28 grid grid-cols-4 gap-4 '>
        <FeaturedProduct/>
        <FeaturedProduct/>
        <FeaturedProduct/>
        <FeaturedProduct/>
      </section>
    </>

  )
}
