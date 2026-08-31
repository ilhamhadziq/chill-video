import Logo from '../../UI/Logo';
const Header = ()=>{
    return(
        <header className='flex justify-between items-center gap-3 py-1.5 px-5 bg-[#181A1C] text-white sm:py-6.25 sm:px-20'>
            <div className='flex items-center justify-center gap-3 sm:gap-20'>
                <div>
                    <Logo src ="public/mlogo.png" alt= "Logo" className='w-5 block sm:hidden'/>
                    <Logo src ="public/logo.png" alt= "Logo" className='w-full hidden sm:block'/>
                </div>
                <nav>
                    <ul className='flex items-center justify-center gap-3 sm:gap-20'>
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