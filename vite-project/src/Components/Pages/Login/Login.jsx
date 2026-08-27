import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
const Login = ()=> {
    return(
        <main className="min-h-screen bg-[url('public/background.jpg')] bg-center bg-cover flex items-center justify-center text-white font-lato px-8">
            <form action="submit" className="flex flex-col items-center justify-center gap-4 p-6 bg-[#181A1CD6] opacity-85 rounded-lg w-full max-w-md sm:max-w-lg mx-auto">
                <Logo src ="public/logo.png" alt= "Logo"/>
                <div className="flex flex-col gap-0.5 items-center">
                    <h3 className="font-bold text-2xl md:text-[32px]">Masuk</h3>
                    <p className="text-center">Selamat Datang Kembali</p>
                </div>
                
                <Button className={''}>Masuk</Button>
            </form>                        
        </main>
    )
}
export default Login;