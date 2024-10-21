import React from 'react'
import './spCard.css'
import Card from 'react-bootstrap/Card';
import Img from '../../assets/photo_2024-03-10_07-46-06.jpg'


function SpecailCard() {
  return (
    <>
      <div className='col-sm-12 ms-5 mt-3  col-lg-3 m-lg-5   col-md-2 m-md-4  conatiner-card'>
        <Card style={{ width: '18rem',padding:'10px',border:'none' }}>
          <img src='' alt="..." className='Image-person' />
          <Card.Body>
            <Card.Title className='mb-4' >Mr.Induwara Vishwakantha</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>


    </>
  )
}

export default SpecailCard