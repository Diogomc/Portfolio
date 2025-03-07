import "@/app/styles/nav.css"
import { useState } from "react"
import { motion } from 'framer-motion'
export const Nav = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    function menuOpen() {
        setMenuOpened(!menuOpened);
    }
    return (
        <motion.nav className="nav-bar"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <button className="menu-mobile" onClick={menuOpen}>
                <motion.img
                    src={`${menuOpened ? 'menu_opened.jpg' : 'menu.png'}`} alt="menu"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: menuOpened ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>

            <div className={`menu ${menuOpened ? 'menu-opened' : ''}`}>

                <ul className="menu-about">
                    <li className="menu-item"><a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank">{`<Diogo />`}</a></li>
                </ul>

                <ul className="menu-links">
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#services">Services</a></li>
                    <li className="menu-item"><a href="#projects-section">Projects</a></li>
                    <li className="menu-item"><a href="#about">About me</a></li>
                    <li className="menu-item"><a href="#">Hard Skills</a></li>
                    <li className="menu-item"><a href="#">Contact</a></li>
                </ul>
                <ul className="menu-socials">
                    <li className="menu-item-socials">
                        <a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank"><img className="img-social" src="linkedin.png" /></a>
                    </li>
                    <li className="menu-item-socials">
                        <a href="https://github.com/Diogomc" target="_blank"><img className="img-social" src="github.png" /></a>
                    </li>
                    <li className="menu-item-socials">
                        <a href="https://www.youtube.com/@DiogoCodess" target="_blank"><img className="ytb" src="youtube.png" /></a>
                    </li>

                </ul>
            </div>
        </motion.nav>
    )
}