import { useTheme } from '../../contexts/theme.context';

const Footer = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <footer className={`${theme == 'dark' ? 'bg-tahiti-800' : 'bg-tahiti-200'} p-3`}>
            This is the footer
        </footer>
    )
}

export default Footer;