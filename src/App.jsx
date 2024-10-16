import './App.css'
import Carousel from './Componet/Carousel/ControlledCarousel'
import SpecailCard from './Componet/SpecialThanksCard/SpecailCard';
import Sponser from './Componet/Sponser/Sponser';
import Header from './Componet/common/header/Header'
import imgtop from './assets/1_w7fSHgKimriL-ryZJ52Uig.png'
import Card from 'react-bootstrap/Card';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './Componet/Box/Box';

function App() {


  return (
    <>
      {/*Navigation-Bar*/}
      <Header />

      {/*Body*/}
      <div className='container'>

        {/*Carousel*/}
        <Carousel />


        {/*Agenda*/}
        <h2 className='text-center text-about-agenda'>Agenda</h2>

        <div className=''>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quibusdam consequatur quos repudiandae, quae ut fuga sapiente facilis non esse adipisci debitis veritatis doloribus laboriosam tenetur earum voluptatem maiores eveniet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum, consequuntur quo voluptates eligendi dicta ratione natus doloremque nemo quas laudantium incidunt modi ipsa perspiciatis voluptate cupiditate debitis iusto excepturi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla quia numquam aliquam maxime aut, molestias voluptatum delectus commodi accusamus, assumenda consequatur aliquid neque vero consequuntur, rem consectetur. Exercitationem, unde?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quia eveniet eligendi ab. Dolores omnis, veniam non recusandae autem maiores expedita sunt quis maxime architecto? Molestiae sunt quo facere est.
          </p>

        </div>


        <h2 className='text-center text-about-batch'>THE 8<sup>th</sup> BATCH OF FACULTY OF TECHNOLOGY UNIVERSITY OF RUHUNA</h2>

        {/*TOP 3 Image*/}
        <div className="row gap-5 align-content-center justify-content-center">

          <Card style={{ width: '18rem', padding: '0px', border: 'none' }}>
            <img src={imgtop} alt="..." className='top-image' />
          </Card>

          <Card style={{ width: '18rem', padding: '0px', border: 'none' }}>
            <img src={imgtop} alt="..." className='top-image' />
          </Card>

          <Card style={{ width: '18rem', padding: '0px', border: 'none' }}>
            <img src={imgtop} alt="..." className='top-image' />
          </Card>

        </div>

        {/* description about batch */}
        <p className='m-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusamus doloremque, tempore dicta, alias est saepe ea maiores natus recusandae cumque reprehenderit! Fugit placeat ad eaque sapiente aspernatur distinctio ex.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias optio accusamus. Maiores soluta molestias repellendus placeat itaque quia nulla cum qui. Quas temporibus libero reprehenderit, exercitationem iusto optio corrupti.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore alias facilis eum iusto tenetur, soluta perspiciatis expedita vitae vero, recusandae accusamus. Quasi, ab! Aspernatur odio, suscipit aliquam magni maxime nobis?
        </p>

        {/*Sponsers*/}
        <div className='sponsers-section'>

          <hr className='hr-line' />

          <h1 className='text-center'>SPONSORS</h1>

          <hr className='hr-line' />

          {/*Sponsers Cards*/}
          <div className='sponers-componets mt-5'>

            <Sponser />
            <Sponser />
            <Sponser />

          </div>

        </div>

        {/*Special Thank Section*/}
        <div className='Special-section'>

          <hr className='hr-line' />

          <h1 className='text-center'>Special Thanks For </h1>

          <hr className='hr-line' />

        </div>

        {/*Specail Thank Cards*/}
        <div className='container-specail-thank mt-5'>

          <Row>

            <Col>
              <SpecailCard />
            </Col>

            <Col>
              <SpecailCard />
            </Col>

            <Col>
              <SpecailCard />
            </Col>

          </Row>


        </div>

      </div>

      {/*info of images links*/}
      <div className='info-links-media'>
        <Row>

          <Col>
            <Box />
          </Col>


          <Col>
            <Box />
          </Col>


          <Col>
            <Box />
          </Col>


        </Row>
      </div>

  
      {/* Main commiteee members section */}
      <h1 className='text-center mt-5'>Main Commitee Members</h1>
      
      <div className=''>

      </div>





    </>
  )
}

export default App
