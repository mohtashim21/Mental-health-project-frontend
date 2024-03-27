import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './components/ContactUs'
import Feedback from './components/Feedback';
import Temp from './components/Temp';


const App = () => {
  return (
    <div>
      <ToastContainer />
      {/* <ContactUs /> */}
      <Feedback />
      {/* <Temp /> */}
    </div>
  )
}

export default App