import FAQAccordion from "../components/Accordion";
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

const FAQ = () => {

    return (
        <motion.section
            className="faqSection"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                duration: 1.2
            }}
               
        >
            <h2>FAQ</h2>
            <motion.div className="AccordionContainer"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 1.5, delay: 0.4}}
                viewport={{ once: true }} 
            >
            <FAQAccordion />
            </motion.div>
            <Footer />
        </motion.section>
    )
}
export default FAQ