


const Skills = () => {
 

  const items = [
    {
      id: "1",
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    

    },
    {
      id: "2",
      src:  'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  
  
    },   
    {
      id: "3",
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
     
  
    },
    {
      id: "4",
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  
    },
    {
      id: "5",
      src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" ,
   
    }, {
      id: "6",
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',  
    }, {
      id: "7",
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',  
    }
  ]

  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className=" text-4xl text-gray-900 font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>

       <div className="text-xl">
       <p className="">
          I love to keep a variety of tools in my tech stack. I also make sure
          to be pro at using one tool before moving on to the next. I keep
          myself up to date with the latest technologies around.
        </p>
       </div>
        {/* <div className="font-bold text-center mb-20 mt-20 fs-2">
          <TagCloud minSize={30} maxSize={50} tags={data} />
        </div> */}
         <div className="grid grid-cols-4  px-12 sm:px-0 ">
          {items.map(({ id, src}) => (
            <div key={id} className=" ">
              <img
                width="100"
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 mt-10 ms-5 hover:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-rcursor-pointer"
              />
              
            
            </div>
          ))}
        </div>
           </div>
    </div>
  );
};

export default Skills;
