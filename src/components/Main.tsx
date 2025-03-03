import Typewriter from "react-ts-typewriter";
import "@/app/styles/main.css"
export const Main = () => {
    return (
        <div className="container-main">
            <div className="title-typewriter">
                <h1 className="title-typing text-7xl text-black p-2">Hi, I'm Diogo!</h1>
                <div className="title-type">
                    <h1 className="title-typing text-7xl text-black p-2">A Front-End</h1>
                    <h1 className="title-typing title-writing text-7xl p-2"><Typewriter text="Developer..." loop speed={300} /></h1>

                </div>
                <p className="text-description">I'm also a .NET developer and a Student of Software Engineering</p>
                <button className="btn-main">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diogo.marcondes2004@gmail.com" target="_blank">Contact Me</a>
                </button>
                <button className="btn-main"><a href="#">Download Resume</a></button>
            </div>
            <div className="handsome">
                <img className="handsome-image" src="handsome.jpg" alt="Diogo" />
            </div>

        </div>

    )
}