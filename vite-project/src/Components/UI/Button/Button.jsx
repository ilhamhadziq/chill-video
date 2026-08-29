const Button = (props)=>{
    const {children, className} = props
    return(
        <button className={`${className} bg-[#3D4142] text-white px-3 py-2 rounded-xl border border-[#E7E3FC3B] opacity-100 w-full cursor-pointer flex items-center justify-center gap-2`}>{children}
        </button>
    )
}
export default Button;