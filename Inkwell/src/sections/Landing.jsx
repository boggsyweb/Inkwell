import { motion } from 'framer-motion';
import Ledger from '../../src/assets/ledger.webp';
import Down from '../assets/down.svg'
import '../styles/sections/landing.css'

const Landing = () => {
    return (
        <motion.section className='landing'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                duration: 3,
            }}
            viewport={{ once: true }}
        >
             <div>
                <h1>YOUR BUSINESS
                    <br></br>
                    IN BALANCE
                </h1>
                <motion.a 
                className='downArrow'
                href="#aboutSection"
                    initial={{y: 0}}
                    whileInView={{y: [0, 7, 0]}}
                    transition={{ duration: 3, repeat: 3}}
                >
                <img src={Down} alt='inverted arrow'/>
             </motion.a>
             </div>
             <div>
             <motion.img src={Ledger} alt="photo of a handwritten bookkeeping ledger" 
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 3,
                    delay: 0.5
                }}
                viewport={{ once: true }}
             />
             </div>
        </motion.section>
    )
}
export default Landing