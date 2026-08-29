const Forgot = (props)=>{
    const {insert, children, button} = props
    return(
        <div className="flex flex-col gap-3 text-center text-base text-gray-300 sm:flex-row sm:justify-between sm:text-left sm:text-lg">
            <p>
                {insert}
                <button
                type="button"
                className="font-medium text-white hover:underline"
                >
                  {button}
                </button>
            </p>
            {children}
        </div>
    )
}
export default Forgot;
