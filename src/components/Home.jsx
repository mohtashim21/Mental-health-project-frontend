import React from "react";
import stress from "../assets/img/stressImg.jpg";
import thinking from "../assets/img/thinking.png";
import depression from "../assets/img/depression1.png";
import about from '../assets/img/aboutus.jpg'
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = () => {
  
  return (
    <motion.main 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1}}
    transition={{
      duration: 0.8,
      delay: 0.5,
      easeIn: [0, 0.71, 0.2, 1.01]
    }}>
      <div className=" flex justify-center  flex-wrap bg-[#b0e2e6]  py-10 sm:mr-10 sm:ml-10">
        <h1 className=" flex justify-center text-xl font-bold md:text-4xl  flex-wrap  flex-wfont-semibold">
        WHAT IS MEANTAL HEALTH?
        </h1>
      </div>

      <div className="flex mt-5 mx-[8%] gap-12 flex-col md:flex-row">
        <div className="">
          <img src={stress} alt="stress" className="rounded-lg" />
          <h2 className="text-center text-3xl font-bold my-7">Stress</h2>
          <p className="leading-7 text-lg">
            Stress can be defined as any type of change that causes physical,
            emotional, or psychological strain. Stress is your body’s response
            to anything that requires attention or action. Everyone experiences
            stress to some degree. The way you respond to stress, however, makes
            a big difference to your overall well-being.it creates difficulty
            breathing ,panic attacks,sleep problems ,chest pains and high blood
            pressure etc.
          </p>
        </div>

        <div className="">
          <img src={thinking} alt="stress" className=" mr-[5%]" />
          <h2 className="text-center text-3xl font-bold mt-4 md:mt-[8rem] mb-7">Overthinking</h2>
          <p className="leading-7 text-lg">
            Overthinking is defined as “a loop of unproductive thoughts” or “an
            excessive amount of thoughts that are unnecessary.” Overthinking can
            be harmful to our emotional health, especially when it’s directed at
            unwanted, spontaneous, negative thoughts, images, or memories.
            Fortunately, we can learn to curb this unhelpful way of thinking
            through greater self-awareness and the practice of mental
            disengagement.
          </p>
         
        </div>

        <div className="">
          <img src={depression} alt="stress" className="rounded-lg" />
          <h2 className="text-center text-3xl font-bold my-5">Depression</h2>
          <p className="leading-7 text-lg">
            Depression (major depressive disorder) is a common and serious
            medical illness that negatively affects how you feel, the way you
            think and how you act. Fortunately, it is also treatable. Depression
            causes feelings of sadness and/or a loss of interest in activities
            you once enjoyed. It can lead to a variety of emotional and physical
            problems and can decrease your ability to function at work and at
            home.
          </p>
        </div>
    
      </div>

        <div className="flex justify-center mt-8 "> 
        <NavLink to="/moreinfo">
          <button className="px-6 py-3 bg-[#22C55E] text-white font-semibold rounded-lg focus:outline-none hover:bg-green-700 transition-colors">
            More Information
          </button>
        </NavLink>
          </div>
    
<div className="flex  mt-8 gap-20 ml-5 md:flex-row flex-col">
           <div className="flex mt-7 justify-center flex-col  md:w-[50%] w-full">
            <h1  className="text-3xl font-bold text-center">About us</h1>
            <p className="text-left mx-2 lg:ms-[6rem] mt-4 leading-7 text-xl"> TeenTherapy provides the best online therapy and counselling for teenagers,
               children, adolescents, young & youth in India. 
               We provide certified & qualified psychologists who specialize in child &
                adolescent psychology. Consult India’s top Child Psychologists & 
                Mental Health Therapists for Teenagers and adolescents.
                 Therapy for your child, teen, adolescent, young people, parents and family counselling.</p>
                
           </div>
           <figure className="lg:w-[30%] lg:mt-5 mx-2 w-[90%] ">
                 <img src={about} alt="" style={{border:'2px solid black'}} className="rounded" />
                 </figure>
           </div>

           <div className="flex justify-center mt-10 mb-5"> 
           <button className="px-6 py-3 bg-[#22C55E] text-white font-semibold rounded-lg focus:outline-none hover:bg-green-700 transition-colors">
          Book Appointment Now
        </button>
          </div>

    </motion.main>
  );
};

export default Home;
