import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { Btn } from "./Btn";

export const Projects = () => {

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-center gap-8 max-md:grid-cols-1 max-lg:grid-cols-2">

                <div className="w-96 flex flex-col justify-around border border-foreground rounded-2xl hover:scale-105 trnasition">
                    <img src="storage.jpg" className="w-full rounded-t-2xl" alt="" />
                    <h1 className="font-bold text-center text-3xl py-2">Storage</h1>

                    <div className="flex items-center mx-8">
                        <p className="p-2"><RiNextjsFill size={30} /></p>
                        <p><FaReact size={30} /></p>
                        <p className="border border-foreground m-2 p-1 rounded-md">Tailwind</p>
                        <p className="p-2">JS</p>
                        <p className="p-2">TS</p>
                        <p className="p-2">C#</p>
                        <p className="p-2">.NET</p>
                    </div>
                    <div className="mx-8 my-6">
                        <p>Storage is a fullstack system built with React and .NET with Entity Framework, designed to simplify and optimize inventory control</p>
                        <p className="text-blue-700 py-2">Problem:</p>
                        <p>Manual inventory control often leads to errors and financial losses.</p>
                        <p className="text-blue-700 py-2">Solution:</p>
                        <p>Storage is a fullstack system built with React and .NET with Entity Framework, designed to simplify and optimize inventory control.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Btn name="Live" link="https://storage-frontend-tau.vercel.app/" target="_blank" />
                        <Btn name="GitHub" link="https://github.com/Diogomc/storage-backend" target="_blank" />
                    </div>
                </div>


                <div className="w-96 flex flex-col justify-around border border-foreground rounded-2xl hover:scale-105 trnasition">
                    <img src="kepler.jpg" className="w-full rounded-t-2xl" alt="" />
                    <h1 className="font-bold text-center text-3xl py-2">KeplerPlay</h1>

                    <div className="flex items-center mx-8">
                        <p className="p-2"><RiNextjsFill size={30} /></p>
                        <p><FaReact size={30} /></p>
                        <p className="border border-foreground m-2 p-1 rounded-md">Tailwind</p>
                        <p className="p-2">JS</p>
                        <p className="p-2">TS</p>
                    </div>
                    <div className="mx-8 my-6">
                        <p>KeplerPlay is a front-end system built with React, designed to simplify the discovery of all new movie releases in one place.</p>
                        <p className="text-blue-700 py-2">Problem:</p>
                        <p>Keeping track of the newest movie releases across multiple platforms can be confusing and time-consuming.</p>
                        <p className="text-blue-700 py-2">Solution:</p>
                        <p>KeplerPlay solves this by centralizing all new films in one easy-to-use system.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Btn name="Live" link="https://kepler-play.vercel.app/" target="_blank" />
                        <Btn name="GitHub" link="https://github.com/Diogomc/KeplerPlay" target="_blank" />
                    </div>
                </div>



                <div className="w-96 flex flex-col justify-around border border-foreground rounded-2xl hover:scale-105 trnasition">
                    <img src="weather.png" className="w-full rounded-t-2xl" alt="" />
                    <h1 className="font-bold text-center text-3xl py-2">WeatherApp</h1>

                    <div className="flex items-center mx-8">
                        <p className="p-2"><RiNextjsFill size={30} /></p>
                        <p><FaReact size={30} /></p>
                        <p className="border border-foreground m-2 p-1 rounded-md">Tailwind</p>
                        <p className="p-2">JS</p>
                        <p className="p-2">TS</p>
                    </div>
                    <div className="mx-8 my-6">
                        <p>WeatherApp is a front-end solution, using API integration to deliver reliable real-time weather forecasts.</p>
                        <p className="text-blue-700 py-2">Problem:</p>
                        <p>Checking the weather often requires browsing multiple sources, which can be inconsistent and inconvenient.</p>
                        <p className="text-blue-700 py-2">Solution:</p>
                        <p>WeatherApp solves this by providing real-time forecasts, all in a clean and responsive interface.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Btn name="Live" link="https://weather-app-rho-black-11.vercel.app/" target="_blank" />
                        <Btn name="GitHub" link="https://github.com/Diogomc/weatherAPP" target="_blank" />
                    </div>
                </div>
            </div>
        </div>
    )
}