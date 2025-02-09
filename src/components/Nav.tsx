import "@/app/styles/nav.css"

export const Nav = () => {



    return (
        <nav className="nav-bar">
            
            <ul className="menu-about">
                <li className="menu-item"><a href="#">Diogo Marcondes</a></li>
                <li className="menu-item">Front-end Developer</li>
            </ul>
            <ul className="menu-links">
                <li className="menu-item"><a href="#">Home</a></li>
                <li className="menu-item"><a href="#projects-section">Projects</a></li>
                <li className="menu-item"><a href="#about">About me</a></li>
                <li className="menu-item"><a href="#">Knowledge</a></li>
                <li className="menu-item"><a href="#">Contact</a></li>
            </ul>
            
        </nav>
    )
}