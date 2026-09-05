const Card = (props)=>{
    const {src, alt}=props
    return(
        <section  className="relative w-23.75 sm:w-50 text-white">
            <img src={src} alt={alt} className="w-full h-auto relative " />
            <button className="absolute left-[5%] top-[2%] rounded-xl bg-[#0F1E93] p-2">episode terbaru</button>
            <h1 className="absolute top-0 right-0 bg-[#B71F1D] p-1">Top 10</h1>
        </section>
    )
}

export default Card;