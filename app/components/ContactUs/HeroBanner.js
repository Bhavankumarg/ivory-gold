import React from 'react'
import Banner from '../Shared/ServicesProps/Banner'

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/contact-us/banner.png"
        imageAlt="banner"
        title="Contact Us"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/contact-us/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  )
}

export default HeroBanner
