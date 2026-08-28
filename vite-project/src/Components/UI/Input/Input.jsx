const Input = (props)=>{
    const {children, type = "text", placeholder, id} = props;
    return(
        <div className="relative">
            <label 
                htmlFor={id}
                className="mb-2 block text-base font-medium sm:text-lg"
            >
                {children}
            </label>
            <input 
                type={type} 
                placeholder={placeholder}
                id={id}
                className="w-full rounded-3xl border border-gray-600 bg-transparent outline-none transition placeholder:text-[#C1C2C4] px-5 py-4 focus:border-[#C1C2C4] sm:text-lg"    
            />
        </div>
    )
}
export default Input;
