import Logo from "../../UI/Logo";
import Title from "../../UI/Title";
import FormLogin from "../../Form/formLogin";
const Login = ()=> {
    return(
        <main className="min-h-screen bg-[url('public/background.jpg')] bg-center bg-cover  text-white font-lato relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30"/>
            <section className="relative z-10 flex min-h-96 items-center justify-center px-5 py-12 sm:px-8">
                <div className="w-full max-w-152.5 rounded-2xl bg-[#25282c]/84 px-8 py-10 shadow-2xl backdrop-blur-sm sm:px-12 sm:py-12">
                    <Logo src ="public/logo.png" alt= "Logo" className="mb-10"/>
                    <Title parag="Selamat datang kembali!">Masuk</Title>
                    <FormLogin></FormLogin>  
                </div>
            </section>                      
        </main>
    )
}
export default Login;