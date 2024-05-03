import React, { useState } from 'react'
import imgvideo from "../assets/images/webp/video-img.webp";
import Comnbtn from './Comnbtn';
import twitr from "../assets/images/svg/twitr.svg";
import insta from "../assets/images/svg/insta.svg";
import telegram from "../assets/images/svg/telegram.svg";
import linkdin from "../assets/images/svg/linkdin.svg";
import ellipis from "../assets/images/webp/header-ellipis.webp";
const MyNav = () => {
    const [navshow, setnavshow] = useState(false);
    function view() {
        setnavshow(!navshow)
        document.body.classList.toggle("over-hide");
    }
    return (
        <>
            <div className='bg-head position-relative'>
                <nav className='h-80 d-flex align-items-center'>
                    <div className="container d-flex align-items-center justify-content-end w-full gap-26">
                        <ul className={`d-flex align-items-center gap-32 m-0 p-0 mobileview ${navshow ? "left-0" : "left-100"}`}>
                            <li><a href="#home" className="fw-medium fs-sm c-dark-gray lh-md" onClick={view}>Home</a></li>
                            <li><a href="#about" className="fw-medium fs-sm c-dark-gray lh-md" onClick={view}>About</a></li>
                            <li><a href="#program" className="fw-medium fs-sm c-dark-gray lh-md" onClick={view}>Program</a></li>
                            <li><a href="#howitwork" className="fw-medium fs-sm c-dark-gray lh-md" onClick={view}>How it works</a></li>
                            <li><a href="#faq" className="fw-medium fs-sm c-dark-gray lh-md" onClick={view}>FAQs</a></li>
                        </ul>
                        <div className='d-flex gap-4 align-items-center'>
                            <button className='cmn-btn c-white-100 jost fs-xsm lh-xsm'>Get Started</button>
                            {navshow ? (<label className='menu d-flex flex-column gap-2 position-relative z-2' onClick={view}>
                                <span className='position-absolute span1'></span><span className='span2'></span>
                            </label>) : (<label className=' d-flex flex-column gap-2 position-relative z-2' onClick={view}>
                                <span></span><span></span><span></span>
                            </label>)
                            }
                        </div>
                    </div>
                </nav>
                <header className='pt-60 position-relative' id="home">
                    <div className="container d-flex flex-column align-items-center">
                        <h1 className='m-0 text-center fw-semibold fs-3xl lh-5xl text-uppercase jost text-white' data-aos="zoom-in">Start the Mini-Course: <span className='text-gradient'>Rapidly Learning New <br className='d-lg-block d-none' /> Technical Skills</span></h1>
                        <p className='m-0 jost text-white pt-20 text-uppercase text-center fs-xl lh-3xl pb-4 mb-1 fw-semibold' data-aos="zoom-in">Learn All The Skills You Need To Become a <span className='d-sm-block c-low-gray'>Software Engineer!</span></p>
                        <img src={ellipis} alt="ellipis" className='position-absolute d-none d-md-block top-22' />
                        <img className='max-w-996 w-100 video-img' src={imgvideo} alt="video-img" data-aos="zoom-in" />
                    </div>
                </header>
                <div className='bg-white side-icon flex-column  d-lg-flex d-none z-3 position-fixed'>
                    <a className='hover-scale' href="https://twitter.com/i/flow/login" target='_blank'><img src={twitr} alt="twitr" /></a>
                    <a className='hover-scale' href="https://www.instagram.com/accounts/login/" target='_blank'><img src={insta} alt="insta" /></a>
                    <a className='hover-scale' href="https://core.telegram.org/blackberry/login" target='_blank'><img src={telegram} alt="telegram" /></a>
                    <a className='hover-scale' href="https://www.linkedin.com/feed/" target='_blank'><img src={linkdin} alt="linkdin" /></a>
                </div>
            </div>
            <div className=' d-flex flex-column align-items-center' data-aos="zoom-in">
                <h3 className='text-white fw-semibold fs-xl text-uppercase lh-3xl jost pt-20 m-0 text-center'>Become a <span className='text-gradient'>Software</span> Engineer Now!</h3>
                <p className='pt-2 text-center c-light-gray jost fs-sm lh-lg m-0 pb-35'>No Math or Science Background Needed</p>
                <Comnbtn />
            </div>
        </>
    )
}

export default MyNav
