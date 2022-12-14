import React from "react";
import { FaGithub,  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// FaLinkedin
const SocialLinks = () => {
  const links = [
    // {
    //   id: 1,
    //   child: (
    //     <>
    //       LinkedIn <FaLinkedin size={30} />
    //     </>
    //   ),
    //   href: "https://linkedin.com",
    //   style: "rounded-tr-md",
    // },
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/vivekanandhansj",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:vivekmech249@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1CtqtmewbuOsCNGXJdJxL_L_Qiy49prra/view",
      style: "rounded-br-md",
      download: false,
    },
  ];

  return (
    <div className="hidden sml:flex lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-gray-900" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-bold text-gray-900"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
