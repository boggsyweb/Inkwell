import Logo from '../assets/inkwell3.webp';
import '../styles/components/header.css'

const Header = () => {
    return (
        <header>
        <img src={Logo} alt="inkwell logo" />
        </header>
    )
}
export default Header