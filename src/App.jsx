import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Componet/common/header/Header'
import Batch from './Pages/Batch/Batch'
import Footer from './Componet/common/footer/Footer'
import Preview from './Pages/Preview/Preview'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Team from './Pages/OurTeam/Team'



function App() {


  return (
    <>

      {/* Navigation Bar */}
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/batch' element={<Batch />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} / >
        <Route path='/team' element={<Team />} / >
       
      </Routes>

      {/* footer  */}
      <Footer />



    </>
  )
}

export default App
