import { motion } from "framer-motion";
import Handshake from '../../src/assets/handshake.webp';
import '../styles/sections/about.css'

const About = () => {
    return (
        <motion.section
            className="aboutSection" id="aboutSection"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                duration: 2
            }}
            viewport={{ once: true }}
        >
            <div className="aboutText"
            >
                <h2>
                    Welcome to Inkwell Bookkeeping
                </h2>
                <p>I’m Stephanie, and I began my journey as a bookkeeper in 2013. I started doing the books for my own small businesses, and after gaining some experience, I expanded my services to help others. Soon, I discovered a passion for helping entrepreneurs and business owners achieve their financial goals by providing accurate and dependable bookkeeping. My goal is to simplify my clients' finances so they can focus on what they do best - running their business!</p>
            </div>
            <div>
                <img src={Handshake} alt="photo of a man shaking a woman's hand" />
            </div>
        </motion.section>
    )
}
export default About