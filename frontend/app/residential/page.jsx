import Navbar from '../component/Residential/Navbar'
import Footer from '../component/Home/Footer'
import Initiative from '../component/Residential/Initiative';
import Excellence from '../component/Residential/Excellence';
import Everything from '../component/common/Everything';
import Luxuries from '../component/Residential/luxuries';
import Signature from '../component/common/Signature';

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
      <Footer />
    </div>
  )
}

export default ResidentialPage;