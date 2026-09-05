const Card = (props)=>{
    const {src, alt}=props
    return(
        <section  className="relative w-23.75 sm:w-50 text-white rounded-md text-[6px] sm:text-[14px] font bold">
            <img src={src} alt={alt} className="w-full h-auto relative " />
            <button className="absolute left-[5%] top-[2%] rounded-xl bg-[#0F1E93] p-2">episode terbaru</button>
            {/* <h1 className="absolute top-0 right-0 bg-[#B71F1D] p-1 w-">Top 10</h1> */}
            <div className="absolute top-0 right-0 flex flex-col items-center leading-none font-normal bg-[#B71F1D] p-1 gap-1">
                <span>TOP</span>
                <span>10</span>
            </div>
        </section>
    )
}

export default Card;