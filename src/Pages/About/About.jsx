import React from 'react'
import './about.css'
import Dev from '../../Componet/Developers/Dev'

function About() {
  return (
    <>
      <div className='top-container'>
        <h1 className='text-center'>About Us</h1>
        <p className='text-center mt-4 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Enim recusandae consequatur dicta facilis ducimus earum maxime 
          possimus temporibus molestias a deserunt rem ullam culpa
          Enim recusandae consequatur dicta facilis ducimus earum maxime 
          possimus temporibus molestias a deserunt rem ullam culpa
        </p>
      </div>
      <div className="mid-container">

        <div className='Our-Mission'>
          <h2>Our Mission</h2>
          <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusantium sed totam, ipsa officiis dolorem quidem unde nobis aspernatur,
            id cupiditate, fugit dignissimos!
            Accusantium sed totam, ipsa officiis dolorem quidem unde nobis aspernatur,
            id cupiditate, fugit dignissimos!
             
          </p>

        </div>

        <div className='Our-Mission-image'>
              <div className='Our-Mission-image-upper'>
                     <div className='box'></div> 
                     <div className='box'></div> 
              </div>

              <div className='Our-Mission-image-lower'>
                    <div className='box1'></div> 
              </div>
        </div>


      </div>
      <div className="Devoloper-container p-5">
        <h1 className='text-center'>Meet Our Developers</h1>
        
        <div className='row'>
          <Dev />  
          <Dev />  
          <Dev />  
          <Dev />  
          <Dev />  
        </div>

      </div>

      <div className="overoll-thanks-container mb-5">

                

      </div>
    </>
  )
}

export default About