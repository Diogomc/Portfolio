import Typewriter from "react-ts-typewriter";
import "@/app/styles/main.css"
export const Main = () => {
    return (
            <div className="container-main">
                <div className="title-typewriter">
                    <h1 className="title-typing text-7xl text-white p-2">Hi, I'm Diogo!</h1>
                    <h1 className="title-typing text-7xl text-white p-2">A Front-End De
                        <Typewriter text="veloper..." loop speed={220} />
                    </h1>
                    <p className="text-description">I'm also a .NET developer and a Student of Software Engineering</p>
                </div>
                <div className="handsome">
                    <img className="handsome-image" src="handsome.jpg" alt="Diogo" />
                </div>
                
            </div>
            
    )
}