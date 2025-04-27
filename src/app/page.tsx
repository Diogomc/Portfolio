'use client'
import { About } from "@/components/About";
import { LittleAbout } from "@/components/LittleAbout";
import { Main } from "@/components/Main";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <LittleAbout/>
      <Services/>
      <Stack/>
      <h1 className="title-main-projects" id="projects-section">Main Projects</h1>
      <div className="projects flex justify-center">
        <Projects
          urlImage="kepler.jpg"
          nameProject="KeplerPlay - In development"
          urlProject="https://kepler-play.vercel.app/"
          descriptionProject="A project of a stream movies plataform"
          tools={["typescript", "react", "tailwind", "css"]}
        />
        <Projects
          urlImage="coffeeShop.png"
          nameProject="Coffee Breathing - In development"
          urlProject="https://english-coffee-shop.vercel.app/"
          descriptionProject="A Project of a Coffee Shop website"
          tools={["css", "tailwind"]}
        />
        <Projects
        urlImage="weather.png"
        nameProject="Smart Weather - In development"
        urlProject="https://weather-app-rho-black-11.vercel.app/"
        descriptionProject="A Weather forecast consultation software"
        tools={["typescript", "react", "css"]}
        />
        </div>

        <About/>
      </div>
  );
}
