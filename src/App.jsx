import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Componet/common/header/Header'
import Batch from './Pages/Batch/Batch'


function App() {


  return (
    <>

      {/* Navigation Bar */}
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/batch' element={<Batch />} />
       
      </Routes>

      {/* Navigation Bar */}



    </>
  )
}

export default App
