import React from 'react'
import solstress from '../assets/img/stress_sol.jpg'
import soloverthinking from '../assets/img/sol_overthinking.jpg'
import soldepression from '../assets/img/sol_depression.jpg'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <motion.main
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1}}
    transition={{
      duration: 0.8,
      delay: 0.5,
      easeIn: [0, 0.71, 0.2, 1.01]
    }}>
      <div className=" mt-3 flex justify-center flex-wrap bg-[#b0e2e6]  py-10 sm:mr-10 sm:ml-10">
        <h1 className=" flex justify-center text-4xl flex-wrap font-bold ">
          Services
        </h1>
      </div>
    
      <div>
      <div className="flex  sm:mt-8 gap-20 ml-5 md:flex-row flex-col">
           <div className="flex mt-7 justify-center flex-col  md:w-[50%] w-full">
            <h1  className="text-3xl font-semibold text-center">Solution of Stress</h1>
            <p className="text-left mx-2 lg:ms-[6rem] mt-4 leading-7 text-xl font-bold"> Stress, one of the most commonly
             used words by everyone. Whether it is a teenager, a working professional, a housewife,
              or a student uses this word once a day.
              But what is stress? Why has it become so common? Why are 
              online counselling centers increasing to help people with stress issues?.</p>
              <div className="flex justify-center mt-6 mb-5"> 
         <NavLink to='/explorestress'> <button className="border-2 border-black bg-[#22C55E] py-3 px-4 rounded-lg font-bold  text-black-900" id="allbtn" >Explore</button></NavLink>
          </div>
                
           </div>
           <figure className="lg:w-[30%] lg:mt-5 mx-2 w-[90%] ">
                 <img src={solstress} alt="" style={{border:'2px solid black'}} className="rounded-xl" />
                 </figure>


           </div>
      </div>

    {/* ///Overthinking/// */}
      <div>
      <div className="flex  mt-8 gap-20 ml-5 md:flex-row flex-col">
           <div className="flex mt-7 justify-center flex-col  md:w-[50%] w-full">
            <h1  className="text-3xl font-semibold text-center">Solution of Overthinking</h1>
            <p className="text-left mx-2 lg:ms-[6rem] mt-4 leading-7 text-xl font-bold"> Stress, Spending too much time in our head can be perilous to our mental health.Spending too much time in our head can be perilous to our mental health.
            While overthinking can cause stress, not all stress is bad. In the short term, having a lot of thoughts about a stressful situation can prompt you to make a move. 

</p>
              <div className="flex justify-center mt-6 mb-5"> 
       <NavLink to='/exploroverthinking'>  <button className="border-2 border-black bg-[#22C55E] py-3 px-4 rounded-lg font-bold  text-black-900" id="allbtn">Explore</button></NavLink> 
          </div>
                
           </div>
           <figure className="lg:w-[30%] lg:mt-5 mx-2 w-[80%] ">
                 <img src={soloverthinking} alt="" style={{border:'2px solid black'}} className="rounded-xl" />
                 </figure>


           </div>
      </div>

      {/* /////depression//// */}

      <div>
      <div className="flex  mt-8 gap-20 ml-5 md:flex-row flex-col">
           <div className="flex mt-7 justify-center flex-col  md:w-[50%] w-full">
            <h1  className="text-3xl font-semibold text-center">Solution of Depression</h1>
            <p className="text-left mx-2 lg:ms-[6rem] mt-4 leading-7 text-xl font-bold">Depression Counselling is one of the many effective tools of the modern world that helps in fighting the most common form of mental illness known as depression. This form of therapy helps individuals to reflect on their emotional state and yet be efficient in their day to day life. Online Counselling has come as a lifesaver as you can consult a psychologist online from the comforts of your home.</p>
              <div className="flex justify-center mt-6 mb-5"> 
         <NavLink to="/exploredepression"> <button className="border-2 border-black bg-[#22C55E] py-3 px-4 rounded-lg font-bold  text-black-900" id="allbtn">Explore</button> </NavLink>
          </div>
                
           </div>
           <figure className="lg:w-[30%] lg:mt-5 mx-2 w-[90%] ">
                 <img src={soldepression} alt="" style={{border:'2px solid black'}} className="rounded-2xl shadow-lg shadow-gray-600" />
                 </figure>


           </div>
      </div>


    </motion.main>
  )
}

export default Services
