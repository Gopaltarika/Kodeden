import React from 'react'
import program from "../assets/images/webp/program-sec-img.webp";

const OurProgram = () => {
  return (
    <div className='mt-220'>
      <div className="container" id="program">
        <div className="row justify-content-around ">
            <div className="col-lg-5">
                <img className='w-100' height={541} src={program} alt="program-sec-img" data-aos="zoom-in" />
            </div>
            <div className="col-lg-6 pt-lg-0 pt-5 d-flex flex-column justify-content-center">
                <h2 className='fw-medium fs-4xl lh-7xl m-0 c-low-gray' data-aos="zoom-in">Are You A Good Fit For <span className='c-white-100'>Our Program?</span></h2>
                <p className='m-0 c-low-gray fs-sm fw-normal lh-md pt-2 pb-3' data-aos="zoom-in">About Who The Program is For</p>
                <p className='text-gradient m-0 fs-sm lh-md fw-semibold pt-1 pb-2' data-aos="zoom-in">Our 6-Month Software Engeering Course is for individuals that...</p>
                <p className=' fw-normal fs-sm lh-md c-dark-gray m-0' data-aos="zoom-in">Want to take action now but don't have years to waste in university Are extremely motivated and want to succeed Have dreamed of becoming a software engineer but don't have hundreds of thousands of dollars lying around</p>
                <p className='text-gradient m-0 fs-sm lh-md fw-semibold pt-2 pb-2' data-aos="zoom-in">It isn't for...</p>
                <p className=' fw-normal fs-sm lh-md c-dark-gray m-0' data-aos="zoom-in">People that aren't self-starters People that don't have a sense of urgency to become a software engineeer People that aren't serious about fulfilling their dream</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurProgram
