import React from 'react'
import twitr from "../assets/images/svg/twitr.svg";
import insta from "../assets/images/svg/insta.svg";
import telegram from "../assets/images/svg/telegram.svg";
import linkdin from "../assets/images/svg/linkdin.svg";

const Footer = () => {
    return (
        <div className='mt-122 border-foot'>
            <div className="container py-65 d-flex flex-column align-items-center gap-1 flex-wrap justify-content-center justify-content-sm-end">
                <div className='w-100 d-flex justify-content-lg-end justify-content-center gap-2'>
                    <a href="#" className=' opacity-75 text-white fw-normal fs-lg text-nowrap'>Privacy Policy |</a>
                    <a href="#" className=' opacity-75 text-white fw-normal fs-lg text-nowrap'> Terms of Service | </a>
                    <a href="#" className=' opacity-75 text-white fw-normal fs-lg text-nowrap'>Cookie Policy</a>
                </div>
                <div className=' gap-3 mt-3 d-flex d-lg-none'>
                    <a className='hover-scale' href="https://twitter.com/i/flow/login" target='_blank'><img src={twitr} alt="twitr" /></a>
                    <a className='hover-scale' href="https://www.instagram.com/accounts/login/" target='_blank'><img src={insta} alt="insta" /></a>
                    <a className='hover-scale' href="https://core.telegram.org/blackberry/login" target='_blank'><img src={telegram} alt="telegram" /></a>
                    <a className='hover-scale' href="https://www.linkedin.com/feed/" target='_blank'><img src={linkdin} alt="linkdin" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
