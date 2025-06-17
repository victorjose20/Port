import { useNavigate } from 'react-router-dom'
const Error = () =>{

    const navegar = useNavigate()
    return(
        <>
            <main className="w-full h-screen flex justify-center items-center bg-black ">
                <div className="w-2/4 h-2/4 flex justify-center items-center flex-col bg-white text-center rounded-xl animate-slideIn ">
                    <h1 className="font-bold text-3xl">Pagina não encontrada!!</h1>
                    <p className="font-bold text-2x1">Clique no botão para voltar a ultima pagina</p>
                    <button onClick={() => navegar(-1)} className="mt-5 bg-black rounded-full w-28 h-11 text-white font-bold hover:bg-white hover:text-black hover:border hover:font-bold">Voltar</button>
                </div>
                
            </main>
        </>
    )
}
export default Error