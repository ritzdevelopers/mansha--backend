import Navbar from '../component/Residential/Navbar'
import Footer from '../component/Home/Footer'
import Initiative from '../component/Residential/Initiative';
import Excellence from '../component/Residential/Excellence';
import Everything from '../component/common/Everything';
import Luxuries from '../component/Residential/luxuries';
import Signature from '../component/common/Signature';
import Gallery from '../component/common/Gallery';
import FAQ from '../component/common/FAQ';
import TestimoniaCommon from '../component/common/Testimonia-common';
import ConsultationCommon from '../component/common/Consultation-common';

const ResidentialPage = () => {
  return (
    <div>
      <Navbar />
      <Initiative/>
      <Excellence/>
      <Everything/>
      <Luxuries/>
<div className="pb-[35px] lg:pb-[70px]">
      <Signature />
      </div>
      <Gallery/>
      <div className="pb-[0px] lg:pb-[0px]">  
      <FAQ/>
      </div>
      <TestimoniaCommon/>
      <ConsultationCommon/>
      <Footer />
    </div>
  )
}

export default ResidentialPage;