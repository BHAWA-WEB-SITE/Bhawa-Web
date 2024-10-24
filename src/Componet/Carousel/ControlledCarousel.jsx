import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/Smooth-Card-Carousel-jQuery-CSS3.jpg'
import './carousel.css'

function ControlledCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={img} alt=".." className='img-screen'/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img} alt=".." className='img-screen' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img} alt=".." className='img-screen' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default ControlledCarousel