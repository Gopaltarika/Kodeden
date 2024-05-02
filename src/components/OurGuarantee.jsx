import React from 'react'
import Comnbtn from './Comnbtn'
import dog from "../assets/images/webp/dog-img.webp";
import ellipis from "../assets/images/webp/guarnte-sec-ellipis.webp";
const OurGuarantee = () => {
  return (
    <div className='mt-200 position-relative'>
      <img src={ellipis} alt="ellipis" className='position-absolute d-lg-block d-none ellipis4' />
      <div className="container">
      <div className='row justify-content-between flex-lg-row flex-column-reverse'>
          <div className='col-lg-6 d-flex justify-content-center flex-column'>
              <h2 className='fw-medium fs-4xl lh-7xl m-0 c-low-gray' data-aos="fade-down">Our Guarantee</h2>
              <p className='c-light-gray fw-normal fs-xs lh-3xl pt-2 m-0 pb-1' data-aos="fade-down">If you decide coding isn’t right for you within 15 days of <br className='d-md-flex d-none'/> starting the program, we’ll give you your money back. </p>
              <p className='text-gradient fs-sm fw-semibold lh-md m-0 pt-3 pb-5' data-aos="fade-down">I want to become a software engineer in 6 months!</p>
              <Comnbtn />
          </div>
          <div className="col-lg-5" data-aos="fade-down">
            <img src={dog} alt="dog" className='dog' />
          </div>
      </div>
      </div>
    </div>
  )
}

export default OurGuarantee
