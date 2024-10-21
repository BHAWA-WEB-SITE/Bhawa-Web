import React from 'react'
import './batchcomponet.css'
import { Link } from 'react-router-dom'
function BatchComponet() {
  return (
    
    <>
    <Link to={'/preview'} className='text- text-decoration-none text-black'>
    <div className='container-box mt-5'>
            <div className="box-left-section"></div>
            <div className="box-right-section">
              <h4 style={{marginLeft:'auto'}}>7<sup>th</sup> batch of FOT</h4>
            </div>
    </div>
    
    </Link>
    </>

  )
}

export default BatchComponet