import React from 'react'
import HeroSection from './hero-section'
import ResumeWrapper from './resume-wrapper'

const HeroWrapper = () => {
  return (
    <div className=" px-4 bg-background text-foreground pb-16 pt-20 relative">
        <HeroSection/>
        <div className='absolute bottom-16 left-1/3 top-48'>

        {/* <ResumeWrapper/> */}
        </div>
      
    </div>
  )
}

export default HeroWrapper
