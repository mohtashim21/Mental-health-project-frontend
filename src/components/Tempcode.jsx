// star
  // const [isFilled, setIsFilled] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   setIsFilled(!isFilled)
  //   console.log("clicked")
  //   onClick && onClick(!isFilled)
  // };
  ///////////////////////////////////////////////////////


// contactform
/////////////////////////////////////////////////////
// import { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function ContactUs() {
//     const [name, setname] = useState("");
//     const [mobileNo, setmobileNo] = useState("");
//     const [email, setemail] = useState("");
//     const [date, setdate] = useState("");
//     const [time, settime] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(name, mobileNo, email, date, time);
//         axios.post("http://localhost:8080/contactus",{ name, email, mobileNo, date, time })
//         .then((result) => {
//             console.log(result);
//             toast.success("Successfully submited")
//         })
//         .catch((err) => 
//         console.log(err));

//     }

//     return (
//       <>
//         <div className="bg-blue-200 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Contact us
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" onSubmit={handleSubmit} method="POST">

//                   <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"   
//                     id="name"
//                     autoComplete="off"
//                     name="name"
//                     value={name}
//                     onChange={(e) => {
//                         setname(e.target.value);
//                     }}
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     autoComplete="email"
//                     value={email}
//                     onChange={(e) => {
//                         setemail(e.target.value)
//                     }}
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
//                   Phone No
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     id="number"
//                     name="number"
//                     value={mobileNo}
//                     onChange={(e) => {
//                         setmobileNo(e.target.value)
//                     }}
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="app" className="block text-sm font-medium leading-6 text-gray-900">
//                  Appointment Date
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="date"
//                     id="app"
//                     name="app"
//                     value={date}
//                     onChange={(e) => {
//                         setdate(e.target.value)
//                     }}
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="app" className="block text-sm font-medium leading-6 text-gray-900">
//                   Appointment Time
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="time"
//                     id="tym"
//                     name="time"
//                     value={time}
//                     onChange={(e) => {
//                         settime(e.target.value)
//                     }}
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
            
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
  
         
//           </div>
//         </div>
//         <ToastContainer />
//       </>
//     )
//   }
  