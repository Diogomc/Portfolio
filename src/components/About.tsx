import "@/app/styles/about.css"




export const About = () => {
    return (
        <div>
            <h1 className="title-about" id="about">About me</h1>
            <div className="about-container">
                <img className="cartoon-image" src="/cartoon.jpg" alt="cartoon" />
                <div className="text-about">
                    <h1 className="title-about-text">Hello, I'm Diogo.</h1>
                    <p>I'm 20 years old, and I am studying Software Engineering, but I also have another degree in Systems Analysis and Development.</p>
                    <p></p>
                    <p>I started my studies more or less at the end of 2022.</p>
                    <p>Unfortunately, I don't have a professional experiences in this area, but I work hard on my personal projects and study every day to make my dreams come true</p>
                    <p>So, I'm willing to colaborate with a team and contribute with my ideas, skills and effort for corporation sucess.</p>
                </div>
            </div>
        </div>
    )
}