import { motion } from 'framer-motion';
import Setup from '../../src/assets/setup.webp'
import Manage from '../../src/assets/manage.webp';
import Cleanup from '../../src/assets/cleanup.webp';
import '../styles/sections/services.css'

const Services = () =>{

    return (
        <motion.section
            className='servicesSection'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                duration: 2
            }}
            viewport={{ once: true }}        
        >
            <h2>
                SERVICES
            </h2>
            <p>Services can include the following:</p>
            <div className='serviceCards'
            >
                <motion.div className='serviceCard'
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0,
                        transition: {delay: 0.2, duration: 1}    
                    }}
                    viewport={{ once: true }}    
                >
                    <span></span>
                    <h3>Set-Up</h3>
                    <ul>
                        <li>Set up new books or transfer existing ones.</li>
                        <li>Help choosing the right level of service for your business.</li>
                        <li>Software and basic bookkeeping training.</li>
                        
                    </ul>
                    <img src={Setup} alt="illustration of hand tools" />

                </motion.div>
                <motion.div className='serviceCard'
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0,
                        transition: {delay: 0.6, duration: 1}    
                    }}
                    viewport={{ once: true }} 
                >
                    <span></span>
                    <h3>Manage</h3>
                    <ul>
                        <li>Enter and classify monthly transactions.</li>
                        <li>Run relevant financial reports.</li>
                        <li>Act as a liason between you and your CPA or accountant.</li>
                        <li>Payroll</li>
                    </ul>
                    <img src={Manage} alt="illustration of bar graph" />
                </motion.div>
                <motion.div className='serviceCard'
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0,
                        transition: {delay: 1, duration: 1}    
                    }}
                    viewport={{ once: true }}       
                >
                    <span></span>
                    <h3>Clean-Up</h3>
                    <ul>
                        <li>Reclassify errors and fix other mistakes.</li>
                        <li>Reconcile past transactions correctly.</li>
                        <li>Create customized systems to help prevent future mistakes and backlogs.</li>
                    </ul>
                    <img src={Cleanup} alt="illustration of broom sweeping dust" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Services