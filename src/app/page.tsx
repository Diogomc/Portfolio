'use client'
import { About } from "@/components/About";
import { Main } from "@/components/Main";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <h1 className="title-main" id="projects-section">Main Projects</h1>
      <div className="flex justify-center">
        <Projects
          urlImage="kepler.jpg"
          nameProject="KeplerPlay - in production"
          urlProject="https://kepler-play.vercel.app/"
          descriptionProject="A project of a stream movies plataform"
          tools={["typescript", "react", "tailwind", "css"]}
        />
        <Projects
          urlImage="coffeeShop.png"
          nameProject="Coffee Shop - In Production"
          urlProject="https://english-coffee-shop.vercel.app/"
          descriptionProject="A Project of a Coffee Shop website"
          tools={["css", "tailwind"]}
        />
        <Projects
        urlImage="stopwatch.png"
        nameProject="StopWatch"
        urlProject="https://stopwatch-five-psi.vercel.app/"
        descriptionProject="A simple, but eficient Stopwatch. You can use for anythings, for example when you working out."
        tools={["javascript", "css"]}
        />
        </div>
        <About/>
      </div>
  );
}
