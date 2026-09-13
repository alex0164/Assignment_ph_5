import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white shadow-sm'>
            <div className='flex justify-between container mx-auto'>
                <img src={Logo} alt="" />
                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-4 items-center'>
                <button className="btn btn-active">Sign In</button>
                <button className="btn btn-active btn-secondary">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;