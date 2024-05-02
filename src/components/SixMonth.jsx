import React from 'react'
import month from "../assets/images/webp/six-month.webp";
import Comnbtn from './Comnbtn';
import ellipis from "../assets/images/webp/guarnte-sec-ellipis.webp";
const SixMonth = () => {
    return (
        <div className='mt-149 position-relative' id="about">
            <img src={ellipis} alt="ellipis" className='position-absolute d-lg-block d-none ellipis-second' />
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse">
                    <div className="col-lg-7  pt-lg-0 pt-4 d-flex flex-column justify-content-center">
                        <h2 className='fs-4xl fw-medium lh-7xl c-low-gray m-0 text-capitalize' data-aos="fade-down">What is KodeDen's <span className='text-gradient'>6-Month</span><span className='text-align'> Software Engineering Course?</span></h2>
                        <ul className='m-0 pt-2'>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">With 6-figure salaries, unlimited PTO, and the flexibility anywhere in the world—{"("}or</li>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">simply pick your kids up from school{")"}, you want in.</li>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">But who has $25k+ to drop on a bootcamp?</li>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">Or semesters of free time to dedicate to going back to school?</li>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">Or YEARS to go through the trial and error involved in teaching yourself?</li>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">Heck, most people don’t even know where to start.</li>
                            <li className="c-dark-gray fs-sm fw-normal lh-4xl list-dics" data-aos="fade-down">If that's you, you’ve been dreaming of a high-paying tech career but paralyzed when it comes time to take action.</li>
                        </ul>
                        <p className=' pt-2 text-gradient fs-sm lh-xsm fw-semibold pb-50 m-0' data-aos="fade-down">I want to Start My Software Engineering Journey!</p>
                        <Comnbtn />
                    </div>
                    <div className="col-lg-5" data-aos="fade-down">
                        <img className='w-100 six-month-img' src={month} alt="month-sec-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixMonth
