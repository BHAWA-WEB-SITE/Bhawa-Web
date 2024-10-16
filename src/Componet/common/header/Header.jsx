import React from 'react'
import './header.css'
import imghead from '../../../assets/Screenshot_2024-10-15_204751-removebg-preview.png'

function Header() {
  return (

    <>
      <div className="container ">
        <header className="header-links mb-4">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={imghead} alt="..." className='image-logo'/>
            <span className="fs-2">භාව</span>
          </a>

          <ul className="nav nav-pills fs-5">

            <li className="nav-item"><a href="#" className="nav-link text-black">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-black">Batch</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-black">Contact us</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-black">About us</a></li>

          </ul>
        </header>
      </div>


    </>

  )
}

export default Header