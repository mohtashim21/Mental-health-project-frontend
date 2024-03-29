import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './components/ContactUs'
import Feedback from './components/Feedback';
import { Star } from './components/Star';


const App = () => {
  return (
    <div>
      <ToastContainer />
      {/* <ContactUs /> */}
      <Feedback />
      {/* <Star /> */}
    </div>
  )
}

export default App