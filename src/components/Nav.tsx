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
                <img src={`${menuOpened ?  'menu_opened.jpg' : 'menu.png'}`} alt="menu" />
            </button>
            <div className={`menu ${menuOpened ? 'menu-opened' : ''}`}>
                <ul className="menu-about">
                    <li className="menu-item"><a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank">Diogo Marcondes</a></li>
                    <li className="menu-item">Front-end Developer</li>
                </ul>
                <ul className="menu-links">
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#projects-section">Projects</a></li>
                    <li className="menu-item"><a href="#about">About me</a></li>
                    <li className="menu-item"><a href="#">Knowledge</a></li>
                    <li className="menu-item"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}