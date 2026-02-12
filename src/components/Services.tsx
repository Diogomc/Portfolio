import Typewriter from 'react-ts-typewriter'
import { motion } from 'framer-motion'
export const Services = () => {
    return (
        <div className='flex flex-col items-center min-h-screen justify-center'>
            <h1 className="text-center text-5xl mb-16"><Typewriter text={['Services', 'What I can do', 'Capabilities']} loop speed={150} delay={700} /></h1>
            <motion.div className="container-cards"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
            >

                <div className='grid grid-cols-3 justify-center items-center gap-6 max-md:grid-cols-1
                max-sm:grid-cols-1 max-lg:grid-cols-2'>

                    <div className='w-80 h-80 border border-foreground rounded-3xl p-6 text-center flex flex-col items-center
                    bg-gradient-to-br from-background to-foreground hover:scale-105 transition'>
                        <h1 className="font-bold text-3xl text-left py-6">Front-End Development</h1>
                        <p className='text-left'>I transform your need in a professional webstite, with responsiveness, usability and clean interface.</p>
                    </div>
                    <div className="w-80 h-80 border border-foreground rounded-3xl p-6 text-center flex flex-col items-center
                    bg-gradient-to-br from-background to-foreground hover:scale-105 transition">
                        <h1 className="font-bold text-3xl text-left py-6">Back-End Development</h1>
                        <p className='text-left'>I create and manipulate APIs, with advanced functionalities in order to generate a dynamic and interactive experience for users with .NET and Database.</p>
                    </div>
                    <div className="w-80 h-80 border border-foreground rounded-3xl p-6 text-center flex flex-col items-center
                    bg-gradient-to-br from-background to-foreground hover:scale-105 transition">
                        <h1 className="font-bold text-3xl text-left py-6">Landing Page Crafting</h1>
                        <p className='text-left'>I craft a landing pages to show the services or products, with a best expierence for users, in order to turn visitors into new custumers.</p>
                    </div>

                    <div className="w-80 h-80 border border-foreground rounded-3xl p-6 text-center flex flex-col
                    bg-gradient-to-br from-background to-foreground hover:scale-105 transition">
                        <h1 className="font-bold text-3xl text-left py-6">
                            Business <br /> Solutions
                        </h1>
                        <p className='text-left'>I develop inventory control software that automates processes and improves efficiency for companies</p>
                    </div>
                    <div className="w-80 h-80 border border-foreground rounded-3xl p-6 text-center flex flex-col items-center
                    bg-gradient-to-br from-background to-foreground hover:scale-105 transition">
                        <h1 className="font-bold text-3xl text-left py-6">Professional Strengths</h1>
                        <p className='text-left'>I combine technical expertise with problem-solving skills, delivering efficient solutions and adapting quickly to new challenges.</p>
                    </div>
                    <div className="w-80 h-80 border border-foreground rounded-3xl p-6 text-center flex flex-col items-center
                    bg-gradient-to-br from-background to-foreground hover:scale-105 transition">
                        <h1 className="font-bold text-3xl text-left py-6">Projects and Differentials</h1>
                        <p className='text-left'>I deliver complete solutions (fullstack), bring innovation to projects.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}