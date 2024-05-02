import React from 'react'
import img1 from "../assets/images/webp/shinning-img1.webp";
import img2 from "../assets/images/webp/shinning-img2.webp";
import img3 from "../assets/images/webp/shinning-img3.webp";
import EngineeringCard from './EngineeringCard';
import ellipis from "../assets/images/webp/whoarewe-sec-ellipis.webp";
const Engineering = () => {
  const array = [
    {
      id: 1,
      img: img1,
      toptext: 'Master',
      number: '01',
      text: 'Full-Stack Coding Skills',
      width:'132',
      height:'166',
      class:'top-0',
    },
    {
      id: 2,
      img: img2,
      toptext: 'Build a',
      number: '02',
      text: 'Standout Portfolio',
      width:'115',
      height:'128', 
      class:'top-16',
    },
    {
      id: 3,
      img: img3,
      toptext: 'Launch',
      number: '03',
      text: 'Your Tech Career ',
      width:'144',
      height:'144',
      class:'top-0', 
    },
  ]
  return (
    <div className='mt-239 position-relative' id="howitwork">
      <img src={ellipis} alt="ellipis" className='position-absolute ellipis3 d-lg-block d-none'/>
      <div className="container">
        <h2 className='c-low-gray fs-4xl fw-medium text-center lh-7xl m-0 text-capitalize' data-aos="fade-down">“From Confused to Coder”: Kodeden's <br className='d-lg-flex d-none' /> Exclusive 6-Month <span className='text-gradient'>Software Engineering</span> Course </h2>
        <p className='m-0 c-low-gray fw-normal text-center fs-sm pt-2' data-aos="fade-down">Through twice-weekly live lectures and at-home exercises, you’ll:</p>
        <p className='m-0 c-dark-gray fs-sm text-center fw-normal pt-3' data-aos="fade-down">Learn everything you need to know to break into tech from senior engineers with experience at <br /> Apple, Amazon, and the DOD.</p>
        <div className="d-flex gap-40 flex-wrap pt-88 justify-content-center" data-aos="fade-down">
          {
            array.map((k) => <EngineeringCard key={k.id} count={k.number} heading={k.toptext} Images={k.img} text={k.text} width={k.width} height={k.height} classes={k.class}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Engineering
