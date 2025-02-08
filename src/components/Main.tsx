import Typewriter from "react-ts-typewriter";
import "@/app/styles/main.css"
export const Main = () => {
    return (
            <div className="container">
                <div className="title-typewriter">
                    <h1 className="text-8xl text-white">Hello,</h1>
                    <h1 className="text-8xl text-white">I'm Diogo</h1>
                    <h1 className="text-8xl text-white">
                        <Typewriter text="A Fullstack Developer..." loop speed={220} />
                    </h1>
                </div>
                <div className="handsome">
                    <img className="handsome-image" src="handsome.jpg" alt="Diogo" />
                </div>
            </div>
    )
}