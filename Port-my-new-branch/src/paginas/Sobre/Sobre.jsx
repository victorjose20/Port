
import Botao from "../../componentes/Botao/Botao"
import Tecnologias from "../../componentes/Tecnologias/Tecnologias"
import MinhaFoto from "./imagem/MinhaFoto.jpg"

const Sobre = () =>{
    return(
        <main id="Sobre" className="flex justify-around items-center w-screen h-screen bg-gradient-to-r bg-black  text-lg  // max-ce:flex-col-reverse max-ce:h-auto /// max-sm:flex-col-reverse max-sm:h-auto">
            <aside className="w-96  animate-slideIn // max-ce:px-2 /// max-sm: ">
                <p className="text-left text-white // max-ce:text-center max-ce:text-base /// max-sm:text-base max-sm:text-center">Sou graduado em Sistemas de Informação pela Unigranrio e, atualmente, estou aprimorando meus conhecimentos por meio de uma pós-graduação em desenvolvimento full stack. </p>
                <p className="text-left text-white // max-ce:text-center max-ce:text-base /// max-sm:text-base max-sm:text-center">Estou animado em embarcar nesta jornada profissional e estou buscando ativamente por oportunidades de desenvolvedor front end Jr. </p>
                <p className="text-left text-white // max-ce:text-center max-ce:text-base /// max-sm:text-base max-sm:text-center">Estou firmemente determinado a contribuir de forma significativa e a crescer profissionalmente em uma empresa do ramo tecnológico.</p>

                <Tecnologias/>
            </aside>
            

            <aside className="animate-slideIn ">
                <img className="border-solid rounded-full w-96 // max-ce:w-52 max-ce:mt-4 /// max-sm:mt-10" src={MinhaFoto} alt="" />
                
                <Botao  fileName="VictorJ.pdf" />
            </aside>
            
           
        </main>
    )
}
export default Sobre