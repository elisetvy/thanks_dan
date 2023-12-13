import { useNavigate } from "react-router-dom";

function Experience() {

    const navigate = useNavigate();

    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                <div onClick={() => navigate("/experience/foqal")} className="relative w-full aspect-square bg-black hover:cursor-pointer">
                    <div className="absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center">Foqal</div>
                </div>
                <div className="relative w-full aspect-square bg-black">
                    <div className="absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center">Love Notes</div>
                </div>
                <div className="relative w-full aspect-square bg-black">
                    <div className="absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center">Jobly</div>
                </div>
                <div className="relative w-full aspect-square bg-black">
                    <div className="absolute h-full w-full font-bold text-white text-3xl flex justify-center items-center">NK Agency</div>
                </div>
            </div>
        </div>
    )
}

export default Experience;