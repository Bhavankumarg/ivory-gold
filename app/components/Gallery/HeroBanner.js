import React from 'react'
import Banner from '../Shared/ServicesProps/Banner'

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/gallery/banner-01.png"
        imageAlt="banner"
        title="Ivory & Gold Gallery"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/gallery/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  )
}

export default HeroBanner
