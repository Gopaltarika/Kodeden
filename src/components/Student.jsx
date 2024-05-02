import React from 'react'
import img1 from "../assets/images/webp/student-slider-img1.webp";
import img2 from "../assets/images/webp/student-slider-img2.webp";
import img3 from "../assets/images/webp/student-slider-img3.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import linkdin from "../assets/images/svg/linkdin-slider.svg";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Comnbtn from './Comnbtn';

const Student = () => {
    return (
        <div className='mt-208'>
            <div className="container position-relative d-flex align-items-center flex-column">
                <h2 className='c-low-gray fs-4xl fw-medium text-center text-capitalize lh-7xl m-0 pb-5' data-aos="fade-down">What our <span className='text-gradient'>students</span> are saying</h2>
                <div className='w-100'>
                    <Swiper
                    data-aos="fade-down"
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        speed={1000}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                        className='pb-5 mb-2'
                    >
                        <SwiperSlide className="student-sec-card">
                            <h4 className=' m-0 fw-normal fs-lg lh-4xl text-white'>Ross O’Rourke Founder, iC-1 <br /> Solutions. CEO Agile Onboarding</h4>
                            <p className='m-0 fs-sm fw-normal c-light-gray lh-lg-t pt-1 pb-1'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                            <p className='fw-semibold fs-sm lh-lg-t c-white-100 pt-6 m-0'>Read More...</p>
                            <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                                <div className='d-flex align-items-center'>
                                    <img width={52} height={52} src={img1} alt="img1-slider" />
                                    <div className="ps-2 ms-1">
                                        <p className='text-white m-0 fw-normal fs-lg'>Ross O’Rourke</p>
                                        <p className='m-0 fw-normal fs-xsm c-light-gray'>@Ross O’Rourke</p>
                                    </div>
                                </div>
                                <img src={linkdin} alt="linkdin" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="student-sec-card">
                            <h4 className=' m-0 fw-normal fs-lg lh-4xl text-white'>“Luke O’Malley Tech Lead Agile Onboarding.”</h4>
                            <p className='m-0 fs-sm fw-normal c-light-gray lh-lg-t pt-1 pb-1'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                            <p className='fw-semibold fs-sm lh-lg-t c-white-100 pt-6 m-0'>Read More...</p>
                            <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                                <div className='d-flex align-items-center'>
                                    <img width={52} height={52} src={img2} alt="img1-slider" />
                                    <div className="ps-2 ms-1">
                                        <p className='text-white m-0 fw-normal fs-lg'>Luke O’Malley</p>
                                        <p className='m-0 fw-normal fs-xsm c-light-gray'>@Luke O’Malley</p>
                                    </div>
                                </div>
                                <img src={linkdin} alt="linkdin" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="student-sec-card">
                            <h4 className=' m-0 fw-normal fs-lg lh-4xl text-white'>Leslie Sage Director of Data <br /> Science at DevResults</h4>
                            <p className='m-0 fs-sm fw-normal c-light-gray lh-lg-t pt-1 pb-1'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                            <p className='fw-semibold fs-sm lh-lg-t c-white-100 pt-6 m-0'>Read More...</p>
                            <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                                <div className='d-flex align-items-center'>
                                    <img width={52} height={52} src={img3} alt="img1-slider" />
                                    <div className="ps-2 ms-1">
                                        <p className='text-white m-0 fw-normal fs-lg'>Leslie Sage</p>
                                        <p className='m-0 fw-normal fs-xsm c-light-gray'>@Leslie Sage</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="student-sec-card">
                            <h4 className=' m-0 fw-normal fs-lg lh-4xl text-white'>“Luke O’Malley Tech Lead Agile Onboarding.”</h4>
                            <p className='m-0 fs-sm fw-normal c-light-gray lh-lg-t pt-1 pb-1'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                            <p className='fw-semibold fs-sm lh-lg-t c-white-100 pt-6 m-0'>Read More...</p>
                            <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                                <div className='d-flex align-items-center'>
                                    <img width={52} height={52} src={img2} alt="img1-slider" />
                                    <div className="ps-2 ms-1">
                                        <p className='text-white m-0 fw-normal fs-lg'>Luke O’Malley</p>
                                        <p className='m-0 fw-normal fs-xsm c-light-gray'>@Luke O’Malley</p>
                                    </div>
                                </div>
                                <img src={linkdin} alt="linkdin" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button className='bg-transparent prev border-0 hover-scale position-absolute z-2 prev-btn'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="22" r="22" fill="url(#paint0_linear_2_1773)" />
                            <path d="M26.7992 16.0001L20.7992 22.0001L26.7992 28.0001L25.5992 30.4001L17.1992 22.0001L25.5992 13.6001L26.7992 16.0001Z" fill="#F4F4F4" />
                            <defs>
                                <linearGradient id="paint0_linear_2_1773" x1="-1.14444e-07" y1="1.29412" x2="20.5626" y2="32.2782" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF2801" />
                                    <stop offset="1" stopColor="#FF6B0A" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                    <button className='bg-transparent next border-0 hover-scale position-absolute z-2 next-btn'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="22" r="22" transform="matrix(-1 0 0 1 44 0)" fill="url(#paint0_linear_2_1776)" />
                            <path d="M17.2008 16.0001L23.2008 22.0001L17.2008 28.0001L18.4008 30.4001L26.8008 22.0001L18.4008 13.6001L17.2008 16.0001Z" fill="#F4F4F4" />
                            <defs>
                                <linearGradient id="paint0_linear_2_1776" x1="-1.14444e-07" y1="1.29412" x2="20.5626" y2="32.2782" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF2801" />
                                    <stop offset="1" stopColor="#FF6B0A" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className='mt-1' data-aos="fade-down">
                    <Comnbtn />
                </div>
            </div>
        </div>
    )
}

export default Student
