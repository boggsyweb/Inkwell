import Pro from '../assets/QB-Online.png';
import Payroll from '../assets/QB-Payroll.png';
import FileDropdown from './FileDropdown';
import '../styles/components/footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className='footerDiv'>
                <span>Copyright {currentYear} Inkwell Bookkeeping</span>
                <span>Design by <a href="https://www.sjboggs.dev/">SJBoggs.dev</a></span>
            </div>
            <FileDropdown />  
            <span className='qboBadges'>
                <img src={Pro} alt="Quickbooks ProAdvisor badge" />
                <img src={Payroll} alt="Quickbooks Payroll badge" />
            </span>       
        </footer>
    )
}
export default Footer