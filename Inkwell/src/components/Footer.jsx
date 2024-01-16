import Logo from '../assets/inkwell3.webp';
import '../styles/components/footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div>Copyright {currentYear} Stephanie Boggs</div>
            <img src={Logo} alt="inkwell logo" />
        </footer>
    )
}
export default Footer