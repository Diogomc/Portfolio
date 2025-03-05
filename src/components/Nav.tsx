import "@/app/styles/nav.css"
import { useState } from "react"

export const Nav = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    function menuOpen() {
        setMenuOpened(!menuOpened);
    }
    return (
        <nav className="nav-bar">
            <button className="menu-mobile" onClick={menuOpen}>
                <img src={`${menuOpened ? 'menu_opened.jpg' : 'menu.png'}`} alt="menu" />
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
        </nav>
    )
}