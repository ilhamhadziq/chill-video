const Button = (props)=>{
    const {children, className} = props
    return(
        <button className={`${className} bg-[#3D4142] text-white font-bold px-3 py-2 rounded-xl opacity-100 w-full`}>{children}
        </button>
    )
}
export default Button;