import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// npm i @emailjs/browser

const Result = () => {
  return <p>Your message has been sent successfully.</p>;
};
const Contactus = () => {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5wlirna",
        "template_lwpm0wf",
        form.current,
        "D5DvPrdVfyi_nMPTg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div
      name="contact"
      className="bg-gradient-to-r from-gray-100 to-gray-300 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-10">
          <p className="text-4xl text-gray-900 font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="mb-20">
          <div class="grid md:grid-cols-2 md:gap-6 ">
            <div class="mb-6">
              <input
                type="text"
                name="user_name"
                id="user_name"
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Name"
                required
              />
              <label
                for="user_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div class="mb-6">
              <input
                type="email"
                name="user_email"
                id="user_email"
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Email"
                required
              />
              <label
                for="user_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </div>
          <div class="mb-6 ">
            <input
              type="text"
              name="message"
              id="message"
              class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Message"
              required
            />
            <label
              for="message"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <div className="btndiv">
            {" "}
            <button
              type="submit"
              class="text-white bg-gray-900 hover:bg-gray-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-300 dark:hover:text-black dark:focus:gray-800"
            >
              Submit
            </button>
          </div>
          <div className="result mb-20">{result ? <Result /> : ""}</div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

// Styles
