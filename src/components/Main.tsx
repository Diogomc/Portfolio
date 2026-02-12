import Typewriter from "react-ts-typewriter";
import { Btn } from "./Btn";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
export const Main = () => {
    return (
        <div className="flex items-center m-32 h-[600px] 
         max-md:w-full max-md:m-0 max-md:p-3 max-md:h-full max-md:flex-col-reverse max-md:my-14">
            <div>
                <div className="max-md:m-2">
                    <p className="text-2xl tracking-widest text-second max-md:text-center">Olá, eu sou o Diogo!</p>
                    <h1 className="text-6xl font-bold text-white max-md:text-4xl max-md:text-center">Desenvolvedor</h1>
                    <h1 className="text-6xl font-bold text-white max-md:text-4xl max-md:text-center max-md:hidden">
                        Fullstack<Typewriter text={"..."} speed={600} />
                    </h1>
                </div>
                <h1 className="hidden max-md:block text-6xl font-bold text-white max-md:text-4xl max-md:text-center">
                    Fullstack
                </h1>
                <p className="w-1/2 text-lg py-6 text-neutral-300 max-md:w-full max-md:text-base max-md:text-center">Sou desenvolvedor fullstack com experiência em React e .NET, apaixonado por criar soluções eficientes e escaláveis. Tenho foco em entregar aplicações modernas, com interfaces intuitivas e backends robustos, sempre buscando unir performance e qualidade de código.</p>
                <div className="flex max-md:justify-center">
                    <Btn name="Contato" />
                    <button className="flex items-center rounded-md mx-6 hover:bg-foreground hover:text-black p-2">Download CV<IoMdDownload size={20} /></button>
                </div>

            </div>
            <div>
                <img className="shadow-2xl max-md:rounded-full max-md:w-40" src="/handsome.jpg" alt="" />
            </div>
        </div>
    )
}