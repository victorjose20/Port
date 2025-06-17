
import Botao from "../../componentes/Botao/Botao"
import Tecnologias from "../../componentes/Tecnologias/Tecnologias"
import MinhaFoto from "./imagem/MinhaFoto.jpg"

const Sobre = () =>{
    return(
        <main id="Sobre" className=" flex justify-around items-center w-screen h-screen bg-gradient-to-r bg-black  text-lg  // max-ce:flex-col-reverse max-ce:h-auto /// max-sm:flex-col-reverse max-sm:h-auto">
            <aside className="w-full max-w-sm animate-slideIn px-4">
                <p className="text-left text-white // max-ce:text-center max-ce:text-base /// max-sm:text-base max-sm:text-center">Sou graduado em Sistemas de Informação pela Unigranrio. Tenho perfil comunicativo, sou organizado e estou sempre em busca de novos aprendizados. </p>
                <p className="text-left text-white // max-ce:text-center max-ce:text-base /// max-sm:text-base max-sm:text-center">Estou animado em embarcar nesta jornada profissional e estou buscando ativamente por oportunidades de desenvolvedor front end Jr. </p>
                <p className="text-left text-white // max-ce:text-center max-ce:text-base /// max-sm:text-base max-sm:text-center">Estou firmemente determinado a contribuir de forma significativa e a crescer profissionalmente em uma empresa do ramo tecnológico.</p>

                <Tecnologias/>
            </aside>
            

            <aside className="animate-slideIn w-full max-w-sm px-4">
                <img className="border-solid rounded-full w-96 // max-ce:w-52 max-ce:mt-4 /// max-sm:mt-10" src={MinhaFoto} alt="" />
                
                <Botao  />
            </aside>
            
           
        </main>
    )
}
export default Sobre