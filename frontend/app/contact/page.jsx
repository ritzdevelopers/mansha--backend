import React from 'react'
import ContactNav from '../component/contact/ContactNav'
import Footer from '../component/Home/Footer'
import Happen from '../component/contact/Happen'
import Touch from '../component/contact/Touch'
import ContactFAQ from '../component/contact/Contact-FAQ'
import TestimoniaCommon from '../component/common/Testimonia-common'
import Consultation from '../component/Home/Consultation'

const page = () => {
  return (
    <div>
      <ContactNav/>
      <Happen/>
      <Touch/>
      <ContactFAQ/>
      <TestimoniaCommon/>
      <Consultation/>
      <Footer/>
      </div>
  
  )
}

export default page