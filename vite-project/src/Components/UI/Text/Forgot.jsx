const Forgot = ()=>{
    return(
        <div className="flex flex-col gap-3 text-center text-base text-gray-300 sm:flex-row sm:justify-between sm:text-left sm:text-lg">
            <p>
                Belum punya akun?{" "}
                <button
                type="button"
                className="font-medium text-white hover:underline"
                >
                  Daftar
                </button>
            </p>

            <button
                type="button"
                className="font-medium text-white hover:underline"
                >
                Lupa kata sandi?
            </button>
        </div>
    )
}
export default Forgot