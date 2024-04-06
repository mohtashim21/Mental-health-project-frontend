import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const baseUrl = "https://mental-health-project-backend.onrender.com";

export default function AppointmentForm() {
  const [name, setname] = useState("");
  const [mobileno, setmobno] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z\s]+$/;

    if (name.length < 3 || name.length > 20) {
      return toast.error("Name should be between 3 to 20 letters");
    }

    if (!name.match(nameRegex)) {
      return toast.error("Name must contain only alphabets");
    }

    if (mobileno.length < 10 || mobileno.length > 12) {
      return toast.error("Mobile number should be either 10 or 12 digits");
    }

    axios
      .post(`${baseUrl}/appointment`, { name, email, mobileno, date })
      .then((result) => {
        toast.success("Successfully submitted");
        setname("");
        setmobno("");
        setemail("");
        setdate("");
        navigate("/resappointment")
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <main className="bg-blue-200">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
        <div
          className="sm:mx-auto sm:w-full sm:max-w-sm ms-3"
          style={{
            border: "2px solid black",
            borderRadius: "1rem",
            backgroundColor: "transparent",
          }}
          id="contact"
        >
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Book Appointment
          </h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-8" onSubmit={handleSubmit} method="POST">
              <div className="ms-3 me-3">
                <label
                  htmlFor="email"
                  className="block text-lg  leading-6 text-gray-900 ms-3 font-bold"
                >
                  Enter your name
                </label>
                <div className="mt-2">
                  <input
                    id="Name"
                    name="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                    className="block px-2 font-bold w-full rounded-md border-0 py-1.5 mr-2 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="ms-3 me-3">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold leading-6 text-gray-900 ms-3"
                >
                  Enter your email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                    className="block px-2 font-bold w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="ms-3 me-3">
                <label
                  htmlFor=""
                  className="block text-lg font-bold leading-6 text-gray-900"
                >
                  Enter your mobile no
                </label>
                <div className="mt-2">
                  <input
                    id="number"
                    name="number"
                    type="number"
                    minLength="10"
                    maxLength="12"
                    value={mobileno}
                    onChange={(e) => setmobno(e.target.value)}
                    required
                    className="block px-2 font-bold w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="ms-3 me-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    type="date"
                    className="block text-lg font-bold leading-6 text-gray-900"
                  >
                    Appointment date
                  </label>
                </div>
                <div className="mt-2 font-bold">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    required
                    className="block  font-bold w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-green-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-1/4 justify-center rounded-md bg-[#B0E2E6] px-2 py-1.5 text-sm font-bold leading-6 text-black-900 shadow-xl  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                mb-4 "
                  id="allbtn"
                  style={{ border: "2px solid black" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
