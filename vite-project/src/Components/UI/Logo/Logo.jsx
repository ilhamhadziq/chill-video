const Logo =(props)=>{
    const {alt, src, className}= props
    return(
        <div className="flex items-center justify-center">
            
        <img src= {src} alt={alt} className={`${className} h-auto max-w-23.5 md:max-w-40.75`} />
        </div>
    )
}

export default Logo;