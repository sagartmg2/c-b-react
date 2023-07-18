import React from 'react'
import Banner1 from "../assets/images/banner-1.png"
import Banner2 from "../assets/images/banner-2.png"
import Banner3 from "../assets/images/banner-3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  return (
    <section >
      <Carousel
        showThumbs={false}
        swipeable={true}
      >
        {/* <div className={`  bg-[url('${Banner1}')] `} > */}
        <div className={`  bg-banner-1 h-[80vh] bg-cover bg-center text-left flex  justify-start `} >
          <div className='container'>
            <div className='w-2/3 mt-16'>
              <p className='text-secondary mb-3 text-2xl'>Best Furniture For Your Castle....</p>
              <p className='text-5xl mb-3 font-bold' >New Furniture Collection Trends in 2020</p>
              <p className='text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
            </div>
          </div>
        </div>
        <div className={`  bg-banner-2 h-[80vh] bg-cover bg-center text-left flex  justify-start `} >
          <div className='container'>
            <div className='w-2/3 mt-16'>
              <p className='text-secondary mb-3 text-2xl'>Best Furniture For Your Castle....</p>
              <p className='text-5xl mb-3 font-bold' >New Furniture Collection Trends in 2020</p>
              <p className='text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
            </div>
          </div>
        </div>
        <div className={`  bg-banner-3 h-[80vh] bg-cover bg-center text-left flex  justify-start `} >
          <div className='container'>
            <div className='w-2/3 mt-16'>
              <p className='text-secondary mb-3 text-2xl'>Best Furniture For Your Castle....</p>
              <p className='text-5xl mb-3 font-bold' >New Furniture Collection Trends in 2020</p>
              <p className='text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
            </div>
          </div>
        </div>

      </Carousel>
      <div className="container">
      </div>
    </section >
  )
}
