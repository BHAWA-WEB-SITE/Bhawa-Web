import React from 'react'
import './header.css'
import imghead from '../../../assets/Screenshot_2024-10-15_204751-removebg-preview.png'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <>
      <div className="container ">
        <header className="header-links mb-4">
          <Link to='/' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={imghead} alt="..." className='image-logo'/>
            <span className="fs-2">භාව</span>
          </Link>

          <ul className="nav nav-pills fs-5">

            <li className="nav-item"><Link to='/' className="nav-link text-black">Home</Link></li>
            <li className="nav-item"><Link to='/batch' className="nav-link text-black">Batch</Link></li>
            <li className="nav-item"><Link to='/contact' className="nav-link text-black">Contact us</Link></li>
            <li className="nav-item"><Link to='/about' className="nav-link text-black">About us</Link></li>

          </ul>
        </header>
      </div>


    </>

  )
}

export default Header