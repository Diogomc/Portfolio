'use client'
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
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
      <About />
      <Stack />
      <Services />
      <h1 className="text-center text-5xl py-12">Academic Projects</h1>
      <Projects />
      <Footer/>
    </div>
  );
}
