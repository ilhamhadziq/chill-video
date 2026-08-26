import Button from "../../UI/Button";
const Login = ()=> {
    return(
        <main className="min-h-screen bg-[url('public/background.jpg')] bg-center bg-cover flex items-center justify-center text-white">
            <form action="submit" className="flex flex-col items-center justify-center gap-5 p-6 bg-[#181A1CD6] opacity-85 rounded-md">
                <h1>Masuk</h1>
                <p>Selamat Datang Kembali</p>
                <Button>Masuk</Button>
            </form>                        
        </main>
    )
}
export default Login;