import React from "react";
import makemytravel from "../assets/portfolio/makemytravel.jpg";
import chatapp from "../assets/portfolio/chatapp.jpg";
import oms from "../assets/portfolio/oms.png";
import pizza from "../assets/portfolio/pizza.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: "1",
      pname:"MakeMyTravel",
      src: makemytravel,
      url: "https://vivek-makemytravel.netlify.app",
      code: "https://github.com/vivekanandhansj/bookingapp",
      tech: "HTML, Css, Reactjs, Expressjs, Nodejs, MongoDb, Stripe"
    },
    {
      id: "2",
      pname:"Snappy Chat",
      src: chatapp ,
      url: "https://snappy-chat-app.netlify.app/",
      code: "https://github.com/vivekanandhansj/snappy-frontend",
       tech: "HTML, Css, Reactjs, Nodejs, MongoDb, Socket.io"
    },{
      id: "3",
      pname:"Order Management System",
      src: oms ,
      url: "https://vivek-oms.netlify.app/",
      code: "	https://github.com/vivekanandhansj/order-management-system",
      tech: "HTML, Bootstrap, Reactjs, Expressjs, Nodejs, MongoDb"
    } ,{
     id: "4",
      pname:"Ur pizzas",
      src: pizza ,
      url: "https://urpizzas.herokuapp.com/",
      code: "	https://github.com/vivekanandhansj/pizzas",
      tech: "HTML, Bootstrap, Reactjs, Redux, Expressjs, Nodejs, MongoDb, Stripe"
    
    
    }  
 
   

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-gray-100 to-gray-300 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8  mt-20">
          <p className="text-4xl text-gray-900 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, code,pname,tech }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                width="500"
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center text-gray-900 font-bold fs-1 mt-4">{pname}
              {<div className="text-center fs-1 mt-4">Tech used: {tech}</div>}
</div>
              <div className="flex items-center justify-center ">
                <a href = {url} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-rcursor-pointer hover:scale-105 hover:bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  text-gray-900 font-bold rounded-md">
                  Demo
                </a >
               
                <a href = {code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-rcursor-pointer hover:scale-105 hover:bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  text-gray-900 font-bold rounded-md">
                  Code
                </a>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
