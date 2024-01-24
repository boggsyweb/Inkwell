import { useEffect } from 'react';
import  {AnimatePresence, motion, useCycle} from 'framer-motion';
import ContactForm from '../components/ContactForm'
import '../styles/components/contact-modal.css'

const ContactModal = () => {
    const [open, cycleOpen] = useCycle(false, true);

    useEffect(() => {
        const handleBodyScroll = () => {
          document.body.style.overflow = open ? 'hidden' : 'auto';
        };
        handleBodyScroll();
        return () => {
            window.removeEventListener('scroll', handleBodyScroll);
          };
        }, [open]);
    return (
        <section className="modalContainer">
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="modalInner"
                        layout
                        initial={{opacity: 0, y: -10, x: 10 }}
                        animate={{ opacity: 1, y: 0, x: 0,
                            transition: {duration: 0.2} 
                        }}
                        exit={{ opacity: 0, y: -10, x: 10,
                            transition: {duration: 0.2}}}
                    >
                         <h3>CONTACT</h3>
                        <ContactForm />
                    </motion.div>
                )}
            </AnimatePresence>
                <motion.button 
                className="modalButton"
                layout
                onClick={cycleOpen}
                >
                {open ?  "CLOSE" : "CONTACT"}
                </motion.button>
  
        </section>
      );
    }
    export default ContactModal
