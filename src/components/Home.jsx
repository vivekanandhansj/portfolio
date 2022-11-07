import React from "react";
import Typewriter from "typewriter-effect";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-3">
          <h2 className="text-gray-900 text-4xl sm:text-7xl font-bold  mt-5">
            VIVEKANANDHAN J
          </h2>
          <h3 className="text-gray-900 font-bold py-4 text-4xl sm:text- 7xl max-w-md">
           
            <Typewriter
              options={{
                strings: ["I'm a Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </h3>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-gray-900 font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-rcursor-pointer hover:bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 hover:text-gray-600"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
