import React from 'react'
import './contact.css'
import Card from 'react-bootstrap/Card';


function Contact() {
    return (
        <>
            <div className="upper-color-container">
            <div className='container mt-5 p-5'>
                <h1 className='text-center'>CONTACT US</h1>
                <h1 className='text-center'>.....</h1>
                <h4 className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aspernatur, ratione architecto perspiciatis blanditiis, veniam saepe sapiente sunt dolorum perferendis assumenda in sint dicta necessitatibus veritatis, voluptatum quibusdam? Odit, commodi.</h4>
            </div>

            </div>
            <div className="container row m-auto">
                <div className='col-sm-12 ms-5 mt-3  col-lg-3 m-lg-5   col-md-2 m-md-4  conatiner-card'>
                    <Card style={{ width: '18rem', padding: '10px'}}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" className="bi bi-house m-auto" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>

                        <Card.Body>
                            <Card.Title className='mb-4 mt-3' >Visit Us</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-sm-12 ms-5 mt-3  col-lg-3 m-lg-5   col-md-2 m-md-4  conatiner-card'>
                    <Card style={{ width: '18rem', padding: '10px' }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" className="bi bi-telephone-fill m-auto" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>

                        <Card.Body>
                            <Card.Title className='mb-4 mt-3' >Call Us</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-sm-12 ms-5 mt-3  col-lg-3 m-lg-5   col-md-2 m-md-4  conatiner-card'>
                    <Card style={{ width: '18rem', padding: '10px' }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" className="bi bi-envelope m-auto" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>

                        <Card.Body>
                            <Card.Title className='mb-4 mt-3' >Contact Us</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default Contact