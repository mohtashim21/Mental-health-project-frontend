import React  from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
import FeedbackForm from './components/Feedback';
import Moreinfo from './components/Moreinfo'
import Explorestress from './components/Explorestress'
import Exploreoverthinking from './components/Exploreoverthinking'
import Exploredepression from './components/Exploredepression'
import Appointment from './components/Appointment';
import Welcome from './components/Welcome';

const App = () => {
  return (

    <>
    <ToastContainer />
    <BrowserRouter>
    <Navbar />
    <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/welcome/:name' element={<Welcome />}/>
        <Route path='/feedback' element={<FeedbackForm/>}/>
        <Route path='/moreinfo' element={<Moreinfo/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/explorestress' element={<Explorestress/>}/>
        <Route path='/exploroverthinking' element={<Exploreoverthinking/>}/>
        <Route path='/exploredepression' element={<Exploredepression/>}/>
  
     </Routes>
    </BrowserRouter>
     
    </>  
  )

}

export default App
