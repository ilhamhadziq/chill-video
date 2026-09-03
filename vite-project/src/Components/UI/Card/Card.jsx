const Card = (props)=>{
    const {src, alt}=props
    return(
        <section  className="relative">
            <img src={src} alt={alt} className="w-23.75 h-auto relative sm:w-50" />
            <button className="absolute left-[10%] top-[15%] rounded-xl bg-[#0F1E93]">episode terbaru</button>
            <h1 className="absolute top-0 right-0 bg-[#B71F1D] p-1">Top 10</h1>
        </section>
    )
}

export default Card;