import { useNavigate } from "react-router-dom";

function Experience() {

    const navigate = useNavigate();

    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                <div onClick={() => navigate("/portfolio/foqal")} className="transition ease-in-out relative w-full aspect-square bg-black hover:cursor-pointer overflow-hidden hover:opacity-90 duration-700">
                    <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-105 duration-700">Foqal</div>
                </div>
                <div onClick={() => navigate("/portfolio/lovenotes")} className="transition ease-in-out relative w-full aspect-square bg-black hover:cursor-pointer overflow-hidden hover:opacity-90 duration-700">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-105 duration-700">Love Notes</div>
                </div>
                <div onClick={() => navigate("/portfolio/jobly")} className="transition ease-in-out relative w-full aspect-square bg-black hover:cursor-pointer overflow-hidden hover:opacity-90 duration-700">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-105 duration-700">Jobly</div>
                </div>
                <div onClick={() => navigate("/portfolio/nkagency")} className="transition ease-in-out relative w-full aspect-square bg-black hover:cursor-pointer overflow-hidden hover:opacity-90 duration-700">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-105 duration-700">NK Agency</div>
                </div>
                <div onClick={() => navigate("/portfolio/passionprojects")} className="transition ease-in-out relative w-full aspect-square bg-black hover:cursor-pointer overflow-hidden hover:opacity-90 duration-700">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-105 duration-700">Passion Projects</div>
                </div>
            </div>
        </div>
    )
}

export default Experience;