import { useNavigate } from "react-router-dom";

function Experience() {

    const navigate = useNavigate();

    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                <div onClick={() => navigate("/portfolio/foqal")} className="transition ease-in-out relative w-full aspect-square bg-black hover:cursor-pointer overflow-hidden hover:bg-blue-900 duration-700">
                    <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-105 duration-700">Foqal</div>
                </div>
                <div onClick={() => navigate("/portfolio/lovenotes")} className="relative w-full aspect-square bg-black hover:cursor-pointer">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-110 duration-700">Love Notes</div>
                </div>
                <div onClick={() => navigate("/portfolio/jobly")} className="relative w-full aspect-square bg-black hover:cursor-pointer">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-110 duration-700">Jobly</div>
                </div>
                <div onClick={() => navigate("/portfolio/nkagency")} className="relative w-full aspect-square bg-black hover:cursor-pointer">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-110 duration-700">NK Agency</div>
                </div>
                <div onClick={() => navigate("/portfolio/passionprojects")} className="relative w-full aspect-square bg-black hover:cursor-pointer">
                <div className="transition ease-in-out absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center hover:scale-110 duration-700">NK Agency</div>
                </div>
            </div>
        </div>
    )
}

export default Experience;