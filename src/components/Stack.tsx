import '@/app/styles/stack.css'
import Typewriter from 'react-ts-typewriter'
import { motion } from 'framer-motion';
export const Stack = () => {
    return (
        <div className='container-stack'>
            <h2 className='text-center text-5xl mt-20 text-white'>Skills.</h2>
            <motion.div className="front"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.8 }}
            >
               <h2 className='title-stack'>Front-end</h2>
                <ul className='ul-icons'>

                    <li><img className='icon-tool' src="/stackIcons/react.svg" alt="react" /></li>
                    <li><img className='icon-tool' src="/stackIcons/typescript.svg" alt="typescript" /></li>
                    <li><img className='icon-tool' src="/stackIcons/html.svg" alt="hmtl" /></li>
                    <li><img className='icon-tool' src="/stackIcons/css.svg" alt="css" /></li>
                    <li><img className='icon-tool' src="/stackIcons/sass.svg" alt="sass" /></li>
                    <li><img className='icon-tool' src="/stackIcons/tailwind.svg" alt="tailwind" /></li>
                </ul>
            </motion.div>
            <motion.div className="back"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -100 }}
                transition={{ duration: 1 }}
            >
                <h2 className='title-stack'>Back-end</h2>

                <ul className='ul-icons'>
                    <li><img className='icon-tool' src="/stackIcons/csharp.svg" alt="csharp" /></li>
                    <li><img className='icon-tool' src="/stackIcons/dotnet.svg" alt="dotnet" /></li>
                    <li><img className='icon-tool' src="/stackIcons/git.svg" alt="git" /></li>
                    <li className='tool-unknowing'><img className='icon-tool' src="/stackIcons/docker.svg" alt="docker" /></li>
                    <li className='tool-unknowing'><img className='icon-tool' src="/stackIcons/sql.svg" alt="sql" /></li>
                    <li className='tool-unknowing'><img className='icon-tool' src="/stackIcons/azure.svg" alt="azure" /></li>
                </ul>
            </motion.div>
        </div>
    )
}