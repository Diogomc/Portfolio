'use client'
import { Main } from "@/components/Main";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <h1 className="title-main">Main Projects</h1>
      <div className="flex justify-center">
        <Projects
          urlImage="kepler.jpg"
          nameProject="KeplerPlay"
          urlProject="https://kepler-play.vercel.app/"
          descriptionProject="A project of a stream movies plataform"
        />
        <Projects
          urlImage="coffeeShop.png"
          nameProject="Coffee Shop"
          urlProject="https://english-coffee-shop.vercel.app/"
          descriptionProject="A Project of a Coffee Shop website"
        />
        </div>
      </div>
  );
}
