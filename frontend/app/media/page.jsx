import React from 'react'
import NavMedia from '../component/media/Nav-Media'
import Footer from '../component/Home/Footer'
import Opportunities from '../component/media/Opportunities'
import CoverageMedia from '../component/media/Coverage-Media'
import MediaNav from '../component/media/Media-Nav'
import BusinessInsights from '../component/media/Business-Insights'

const page = () => {
  return (
    <div>
      <h1>
        <NavMedia/>
        <Opportunities/>
        <CoverageMedia/>
        <MediaNav/>
        <BusinessInsights/>
        <Footer/>
      </h1>
    </div>
  )
}

export default page    