import React from 'react'
import Banner from '../Shared/ServicesProps/Banner'

const HeroBanner = () => {
  return (
    <div>
      <Banner
        imageSrc="/media/banner.png"
        imageAlt="banner"
        title="Ivory & Gold in the Press"
        textColor="text-white"
        showGradient={true}
        mobileImageSrc="/media/mobile-banner.png"
        mobileImageAlt="banner"
      />
    </div>
  )
}

export default HeroBanner
