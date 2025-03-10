import '@/app/styles/services.css'
import Typewriter from 'react-ts-typewriter'
import { motion } from 'framer-motion'
export const Services = () => {
    return (
        <div>
            <h1 className="text-center text-black text-5xl mt-80" id='services'><Typewriter text={['Services', 'What I can do']} loop speed={150} delay={700}/></h1>
            <motion.div className="container-cards"
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.7}}
            >
                
                <div className='cards'>
                    <img className='icon-services' src="website.png" alt="" />
                    <h1 className="title-services">{`<Website Crafting>`}</h1>
                    <p className='description-services'>I transform your need in a professional webstite, with responsiveness, usability and clean interface.</p>
                </div>
                <div className="cards">
                    <img className='icon-services' src="api.png" alt="" />
                    <h1 className="title-services">API manipulation</h1>
                    <p className='description-services'>I integrate and manipulate APIs, with advanced functionalities in order to generate a dynamic and interactive experience for users.</p>
                </div>
                <div className="cards">
                    <img className='icon-services' src="landing.png" alt="" />
                    <h1 className="title-services">Landing Page Crafting</h1>
                    <p className='description-services'>I craft a landing pages to show the services or products, with a best expierence for users, in order to turn visitors into new custumers.</p>
                </div>

            </motion.div>
        </div>
    )
}