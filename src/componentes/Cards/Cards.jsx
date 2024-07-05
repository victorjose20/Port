import todo from "./imagens/todo.png"
import advice from "./imagens/advice.png"
import base from "./imagens/base.png"
import interactive from "./imagens/interactive.png"
import { useState } from 'react'


const Cards = () => {

  const [numeroDoItem, setnumeroDoItem] = useState(0);

  const fotos = [
    { id: 1, imagem: todo, titulo: 'To do list', descricao: "Um to do list onde você pode salvar, alterar e excluir tarefas. Todas as informações ficam salvas no localStorage do seu navegador.", git: 'https://github.com/victorjose20/todo-list', page: 'https://victorjose20.github.io/todo-list/' },
    { id: 2, imagem: advice, titulo: 'Advice generator app main', descricao: "É um gerador de conselho que usa uma api.", git: 'https://github.com/victorjose20/advice-generator-app-main', page: 'https://victorjose20.github.io/advice-generator-app-main/' },
    { id: 3, imagem: base, titulo: 'Base apparel coming soon master', descricao: "Esta pagina mostra se o email inserido nao esta correto e tambem avisa quando o campo esta em branco.", git: 'https://github.com/victorjose20/base-apparel-coming-soon-master', page: 'https://victorjose20.github.io/base-apparel-coming-soon-master/' },
    { id: 4, imagem: interactive, titulo: 'Interactive rating component main', descricao: "É componente de classificação interativo.", git: 'https://github.com/victorjose20/interactive-rating-component-main', page: 'https://victorjose20.github.io/interactive-rating-component-main/' },


  ]

  const anterior = () => {
    setnumeroDoItem((itemAtual) =>
      itemAtual === 0 ? fotos.length - 1 : itemAtual - 1
    );
  }
  const proximo = () => {
    setnumeroDoItem((itemAtual) =>
      itemAtual === fotos.length - 1 ? 0 : itemAtual + 1
    );
  };

  

  return (
    <>
      <div>
       
        <button className="absolute left-20 top-1/2  bg-white text-black font-bold p-2 rounded-full animate-slideIn // max-sm:left-4 /// 2xl:top-[30rem] "
          onClick={anterior}
        >
          {"<"}
        </button>
        <div className="flex flex-col w-full h-screen justify-center items-center gap-5  animate-slideIn //  ">
        <h1 className="text-white text-center text-4xl">Projetos</h1>

          <div className="relative w-3/4 h-3/5 border rounded-xl overflow-hidden text-center shadow-soft-white // max-ce:" >

            <img src={fotos[numeroDoItem].imagem} alt="" className='  mb-5 h-full w-full object-cover ' />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-80">
              <h1 className="text-white font-bold text-2xl // max-ce:text-lg /// max-sm:text-lg">{fotos[numeroDoItem].titulo} </h1>
              <p className="text-white text-2xl  // max-ce:text-lg /// max-sm:text-lg">{fotos[numeroDoItem].descricao}</p>
              <div className="flex justify-around gap-5 ">
                <button className=" text-white font-bold bg-black w-20 h-10 rounded-3xl my-5  hover:text-black hover:border  hover:bg-white  "><a target="_blank" href={fotos[numeroDoItem].git}>github</a></button>
                <button className=" text-white font-bold bg-black w-20 h-10 rounded-3xl my-5  hover:text-black hover:border hover:bg-white "><a target="_blank" href={fotos[numeroDoItem].page}>page</a></button>
              </div>
            </div>


          </div>


        </div>

        <button className="absolute right-16 top-1/2  bg-white text-black font-bold p-2 rounded-full animate-slideIn // max-sm:right-4 /// 2xl:top-[30rem]"
          onClick={proximo}
        >
          {">"}
        </button>
      </div>

    </>

  )
}

export default Cards