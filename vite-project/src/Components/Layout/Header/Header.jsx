import Logo from '../../UI/Logo';
const Header = ()=>{
    return(
        <header className='flex justify-between gap-3 py-1.5 px-5 bg-[#181A1C]'>
            <div className='flex items-center gap-3'>
                <Logo></Logo>
                <nav>
                    <ul>
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