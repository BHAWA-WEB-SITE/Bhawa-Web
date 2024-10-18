import React from 'react'
import './cmember.css'
import Card from 'react-bootstrap/Card';

function CMember() {
  return (
    <>
      <div className="col-sm-12 ms-5 mt-3  col-lg-2 m-lg-5   col-md-3 m-md-4">
        <Card style={{ width: '18rem', textAlign: 'center' }}>
          <img src="" alt="..." />
          <Card.Body>
            <h2>Kavinda Lakshan Jayakodi</h2>
            <p>Main Commitee</p>
          </Card.Body>
        </Card>
      </div>

    </>
  )
}

export default CMember