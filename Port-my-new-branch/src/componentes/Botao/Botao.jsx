

const Botao = () =>{
    const cv = () =>{
        const pdfUrl = 'VictorJ.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "VictorJose.pdf";
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
    }

    return(
        <div className="flex justify-center mt-5  // max-ce:mb-5 /// max-sm:mb-5">
        <button  className=" border text-center align-middle select-none font-sans font-bold  uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-black text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-white hover:text-black " onClick={cv}>
            Currículo
        </button>
     </div>
        
    )
}

export default Botao