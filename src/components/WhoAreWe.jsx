import React from 'react'
import instructorimg from "../assets/images/webp/instructor-img.webp";
import Comnbtn from './Comnbtn';
import ellipis from "../assets/images/webp/whoarewe-sec-ellipis.webp";
const WhoAreWe = () => {
    return (
        <div className='mt-200 position-relative' id="faq">
            <img src={ellipis} alt="ellipis" className='position-absolute ellipis5 d-lg-block d-none' />
            <div className="container">
                <h2 className='c-low-gray fs-4xl fw-medium text-center text-capitalize lh-7xl m-0 pb-5 mb-4' data-aos="fade-down">Who Are <span className='text-gradient'>We</span>?</h2>
                <div className="row justify-content-between">
                    <div className="col-lg-5" data-aos="fade-down">
                        <img src={instructorimg} alt="instructorimg" height={588} className='w-100' />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <p className='fs-xsm fw-normal c-low-gray m-0' data-aos="fade-down">MEET YOUR INSTRUCTORS</p>
                        <h3 className=' fw-medium fs-2xl lh-5xl c-low-gray' data-aos="fade-down">Hi, We’re Kody Doherty <br className='d-lg-flex d-none'/> and Kolton Starr 👋</h3>
                        <p className=' fw-normal fs-sm c-light-gray m-0' data-aos="fade-down">And we know firsthand that building a career as a software engineer <br className='d-lg-flex d-none' /> without a computer science degree is possible.</p>
                        <p className=' fw-normal fs-sm c-light-gray m-0' data-aos="fade-down">We started where you are *right now*—without engineering degrees, a <br className='d-lg-flex d-none'/> professional portfolio, or years of experience. </p>
                        <p className=' fw-normal fs-sm c-light-gray m-0' data-aos="fade-down">Then we climbed the ranks to hold senior positions at tech titans like <br className='d-lg-flex d-none'/> Amazon, Apple, and the US government.</p>
                        <p className=' fw-normal fs-sm c-light-gray m-0' data-aos="fade-down">Throughout our careers, we’ve managed entire teams of engineers, <br className='d-lg-flex d-none'/> directed $30 million program budgets, and built 2 successful tech <br className='d-lg-flex d-none'/> startups (one that we sold).</p>
                        <p className=' fw-normal fs-sm c-light-gray m-0 pb-1' data-aos="fade-down">Learning to code did more than add a few impressive lines to our <br className='d-lg-flex d-none'/> resumes. It literally changed our lives…</p>
                        <p className='text-gradient fw-semibold fs-sm pt-3 pb-5 m-0' data-aos="fade-down">I want to live my dream now!</p>
                        <Comnbtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAreWe
