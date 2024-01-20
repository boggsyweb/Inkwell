import Logo from '../assets/inkwell3.webp';
import Pro from '../assets/QB-Online.png';
import Payroll from '../assets/QB-Payroll.png';
import '../styles/components/footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div>Copyright {currentYear} Stephanie Boggs</div>
            <img className="footerLogo" src={Logo} alt="inkwell logo" />
            <span className='qboBadges'>
                <img src={Pro} alt="Quickbooks ProAdvisor badge" />
                <img src={Payroll} alt="Quickbooks Payroll badge" />
            </span>         
        </footer>
    )
}
export default Footer