import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";





const Tecnologias = () =>{ 
    return(
        <>
                <h1 className="text-white text-center mt-5 text-4xl">Tecnologias</h1>
                <ul className="flex text-white gap-3 text-6xl mt-5 // max-ce:justify-center max-ce:mb-3 ///
                 max-sm:text-5xl
                 max-sm:justify-center max-sm:mb-3">
                    <li>
                        <FaHtml5 className="" />
                    </li>
                    <li>
                        <FaCss3Alt />
                    </li>
                    <li>
                        <IoLogoJavascript />
                    </li>
                    <li>
                        <FaReact />
                    </li>
                    <li>
                        <FaSass />
                    </li>
                    <li>
                        <RiTailwindCssFill />
                    </li>
                </ul>
                
                
                
                
                
                
        </>
    )
}

export default Tecnologias