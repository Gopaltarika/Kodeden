import React from 'react'

const EngineeringCard = (props) => {
    return (
        <div className="box-shine w-100 d-flex justify-content-end flex-column position-relative">
            <img className={` ${props.classes} position-absolute end-0 backdrop`} width={props.width} height={props.height} src={props.Images} alt="img1" />
            <img className={`position-absolute ${props.classes} end-0`} width={props.width} height={props.height} src={props.Images} alt="img1" />
            <span className='fw-semibold fs-2xl c-dark-gray'>{props.count}</span>
            <p className='c-low-gray fs-md fw-bold m-0'>{props.heading}<br />
                {props.text} <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5085 3.41614L8.87116 6.67088V0.161393L14.5085 3.41614ZM9.4349 3.97988H0.978827V2.8524H9.4349V3.97988Z" fill="#E4E4E4" />
                </svg>
            </p>
        </div>
    )
}

export default EngineeringCard
