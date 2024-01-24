import { AnimatePresence, motion, useCycle } from "framer-motion";
import Checklist from '../pdf/tax-checklist.pdf';
import '../styles/components/file-dropdown.css'

const FileDropdown = () => {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <div className='downloadsContainer'>
            <AnimatePresence>
                {open && (
                    <motion.div className="linksContainer"
                    layout
                    initial={{ opacity: 0, 
                    transform: "translateY(10px)"}}
                    animate={{ opacity: 1, 
                        transform: "translateY(-10px)", 
                        transition: {duration: 0.2}
                    }}
                    exit={{ opacity: 0, 
                        transform: "translateY(10px)", 
                        transition: { duration: 0.2}
                    }}                  
                    >
                    <ul>
                    <li>
                        Tax Prep Checklist:
                    <a href={Checklist} 
                        download="Small-Business-Tax-Checklist"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        Download
                    </a>
                    </li>
                    </ul>
                    </motion.div>
                )}               
            </AnimatePresence>
            <motion.button 
                className="linksButton"
                layout
                onClick={cycleOpen}>
               {open ? 'Resources \u25B2' : ' Resources \u25BC'}
                </motion.button>
            </div>

    )
}
export default FileDropdown


