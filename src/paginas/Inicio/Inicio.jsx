import link from "./icones/linkedin.png"
import github from "./icones/github.png"

const Inicio = () =>{
    return(
        <div className=""  id="Inicio">
        <main className=" flex justify-center flex-col items-center  w-screen h-screen text-4xl lg:text-5xl bg-black   // ">
            <h1 className="text-white animate-slideIn // max-ce:text-4xl /// max-xs:text-2xl">Olá eu sou Victor José</h1>
            <h1 className="text-white animate-slideIn // max-ce:text-4xl /// max-xs:text-2xl">E sou um desenvolvedor Frontend</h1>
            <div  className="flex flex-row mt-5 gap-5">
                <a target="_blank" href="https://www.linkedin.com/in/victor-josé-araujo"> <img className="border-solid rounded-full bg-white" src={link} alt="" /> </a>
                <a target="_blank"href="https://github.com/victorjose20  "> <img className="border-solid rounded-full bg-white" src={github} alt="" />  </a>
            </div>
            

        </main>
        </div>
       
    )
}
export default Inicio