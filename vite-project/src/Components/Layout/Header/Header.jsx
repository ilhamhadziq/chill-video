import Logo from '../../UI/Logo';
const Header = ()=>{
    return(
        <header className='flex justify-between items-center gap-3 py-1.5 px-5 bg-[#181A1C] text-white'>
            <div className='flex items-center justify-center gap-3'>
                <Logo src ="public/logo.png" alt= "Logo"/>
                <nav>
                    <ul className='flex items-center justify-center gap-3'>
                        <li><a href="">Series</a></li>
                        <li><a href="">Film</a></li>
                        <li><a href="">Daftar Saya</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src="public/google.png" alt="Profile" className='h-auto w-5 rounded-full sm:w-10 ' />
            </div>
        </header>
    )
}
export default Header;