import Nav from "./Nav";

import Animais from "./assets/Passion Projects/Animais.png";
import Bombay from "./assets/Passion Projects/Bombay.png";
import Nocao from "./assets/Passion Projects/Nocao.png";
import Progress from "./assets/Passion Projects/Progress.png";
import RataAlada from "./assets/Passion Projects/RataAlada.png";
import SiNoRobamos from "./assets/Passion Projects/SiNoRobamos.png";

function Passion() {

    return (
        <div className="px-8 xl:px-36 py-10">
            <div>
                <Nav />
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
                <img onClick={() => window.open(Progress, "_blank")} className="object-cover w-full col-span-2 sm:col-span-1 hover:cursor-pointer" src={Progress} alt="progress" />
                <div className="flex flex-col col-span-2 sm:col-span-1">
                    <img onClick={() => window.open(RataAlada, "_blank")} className="object-cover w-full h-full hover:cursor-pointer" src={RataAlada} alt="rata alada" />
                </div>
                <img onClick={() => window.open(Animais, "_blank")} className="object-cover w-full col-span-2 hover:cursor-pointer" src={Animais} alt="animais" />
                <img onClick={() => window.open(SiNoRobamos, "_blank")} className="object-cover w-full col-span-2 sm:col-span-1 hover:cursor-pointer" src={SiNoRobamos} alt="si no robamos" />
                <div className="flex flex-col col-span-2 sm:col-span-1">
                    <img onClick={() => window.open(Nocao, "_blank")} className="object-cover w-full h-full hover:cursor-pointer" src={Nocao} alt="nocao" />
                </div>
                <img onClick={() => window.open(Bombay, "_blank")} className="w-full col-span-2 hover:cursor-pointer" src={Bombay} alt="bombay" />
            </div>
        </div>
    )
}

export default Passion;