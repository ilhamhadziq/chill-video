import Button from "../UI/Button/Button";
import Divider from "../UI/Divider/Divider";
import Input from "../UI/Input";

const FormLogin =() =>{
    return(
        <form action="submit" className="flex gap-2 flex-col">
            <Input type="text" placeholder="Masukkan username" id="username">Username</Input> 
            <Input type="password" placeholder="Masukkan password" id="password">Password</Input>
            <Button>Masuk</Button>
            <Divider></Divider>
            <Button>Google</Button>
        </form>
    )
}
export default FormLogin;