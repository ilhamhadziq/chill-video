const Button = ({props})=>{
    const {children, className} = props
    return(
        <button className={`${className} bg-[#3D4142] text-white font-bold`}>{children}
        </button>
    )
}
export default Button;