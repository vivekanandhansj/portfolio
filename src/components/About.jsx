import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

     <div className="text-2xl sm:text-1xl mt-5">
     
        <p className="mt-5">
        
            I did my graduation in Mechanical Engineering from K.S.Rangasamy 
            college of technoloy , Tiruchengode.
          </p>
          <p className="mt-5">
          Passionate full stack engineer with hands on experience in developing scalable websites/applications using a wide range of front-end and back-end skills like HTML, CSS, Javascript, Mongodb, Nodejs, Expressjs.
          </p>
          <p className="mt-5">
           Looking to further enhance my skills as the future full stack developer.
          </p>
         
     </div>
     <br></br>
      </div>
    </div>
  );
};

export default About;
