import Logo from '../assets/inkwell3.webp';
import '../styles/components/header.css'
import ContactModal from './ContactModal';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="inkwell logo" />
            <ContactModal />
        </header>
    )
}
export default Header