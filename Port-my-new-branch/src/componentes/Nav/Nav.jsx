


const Nav = () =>{

   

    return(
        <div className="flex justify-around shadow-md w-screen  fixed z-50 top-0  bg-white ">
            <h1 className="text-2xl pt-2 font-bold // max-xs:text-lg">VictorJosé</h1>
            <nav className="flex text-2xl gap-10 py-3  //  max-xs:text-lg max-xs:gap-3">
                <ul className="flex gap-5">
                    <li><a href="#Inicio" className="hover:border-b border-black text-black" >Início</a></li>
                    <li><a href="#Sobre" className="hover:border-b border-black text-black" >Sobre</a></li>
                    <li><a href="#Projetos" className="hover:border-b border-black text-black" >Projetos</a></li>
                </ul>
                
                
                
            </nav>
        </div>  
          
    )
}
export default Nav