import { useState } from "react";
import Button from "../UI/Button/Button";
import Divider from "../UI/Divider/Divider";
import Input from "../UI/Input";
import Forgot from "../UI/Text/Forgot";
import { Eye, EyeOff } from "lucide-react";

const FormRegister =() =>{
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    return(
        <form action="submit" className="flex gap-2 flex-col">
            <Input type="text" placeholder="Masukkan username" id="username">Username</Input>
            <Input 
            type={showPassword ? "text" : "password"} 
            placeholder="Masukkan password" id="password" 
            eye= {<button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
                >
                  {showPassword ? <Eye size={24} /> : <EyeOff size={24} />}
                </button>
                }>Password
            </Input>
            <Input 
            type={showConfPassword ? "text" : "password"}
            placeholder="Konfirmasi password" id="konfpassword" 
            eye= {<button
                  type="button" 
                  onClick={() => setShowConfPassword(!showConfPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
                >
                  {showConfPassword ? <Eye size={24} /> : <EyeOff size={24} />}
                </button>
                }>Password
            </Input> 
            <Forgot button='Masuk' insert='Sudah punya akun? '></Forgot>
            <Button>Daftar</Button>
            <Divider></Divider>
            <Button className='bg-transparent'><img src="public/google.png" alt="google" className="w-4.5 h-auto" />Masuk dengan Google</Button>
        </form>
    )
}
export default FormRegister;