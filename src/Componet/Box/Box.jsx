import React from 'react'

import Card from 'react-bootstrap/Card';

function Box() {
  return (
    <>
      <div className="col-sm-12 ms-5 mt-3  col-lg-2 m-lg-5   col-md-3 m-md-4">
        <Card className='card-box' style={{ width: '18rem', textAlign: 'center' }}>

          <img src="" alt="..." />

          <Card.Title>Card Title</Card.Title>

        </Card>
      </div>
    </>
  )
}

export default Box