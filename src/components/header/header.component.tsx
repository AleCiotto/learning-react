import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/theme.context';
import { useUser } from '../../contexts/user.context';
import classNames from 'classnames';

const Header = () => {
    const { user, setUser } = useUser();
    const { theme, toggleTheme } = useTheme();

    const onLogoutClickHandler = () => {
        setUser(null);
    }

    return (
        <header className={classNames(`p-3`, {
            'bg-tahiti-800': theme === 'dark',
            'bg-tahiti-200': theme !== 'dark'
        })}>
            <nav className='flex justify-between'>
                <div className='basis-1/8'>
                    <Link to='/'>
                        <img src='/logo192.png' alt='logo' />
                    </Link>
                </div>
                <button onClick={toggleTheme}>Enable {theme == 'light' ? 'dark' : 'light'} mode</button>

                <div className='flex flex-col justify-center'>
                    <Link to={'/brands'} className='align-middle'>
                        Brands
                    </Link>
                </div>
                <div className='flex flex-col justify-center'>
                    <Link to={'/catalogs'} className='align-middle'>
                        Catalogs
                    </Link>
                </div>
                <div className='flex flex-col justify-center'>
                    {user ?
                        <>
                            <span>Welcome {user.name} {user.surname}</span>
                            <button onClick={onLogoutClickHandler} className='align-middle'>
                                Log out <span aria-hidden='true'>→</span>
                            </button>
                        </> :
                        <>
                            <Link to={'/login'} className='align-middle'>
                                Log in <span aria-hidden='true'>→</span>
                            </Link>
                        </>}
                </div>
            </nav>
        </header >
    )
}

export default Header;