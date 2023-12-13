import Nav from "./Nav";
import Dermasuri from "./assets/Dermasuri HQ.png";

function NK() {

    return (
        <div className="px-8 xl:px-36 py-10">
            <div>
                <Nav />
            </div>
            <img className="mt-10 border w-full" src={Dermasuri} alt="dermasuri" />
            <div className="py-10">
                <div className="text-3xl font-black">NK Agency</div>
                <div className="mt-4 text-lg">Developed campaign strategies, created digital assets, and mobilized strategic partnerships to elevate client&apos;s online visibility.</div>
                <div className="mt-4 text-md font-black tracking-widest opacity-25">TECHNOLOGIES USED</div>
                <div className="text-lg">Adobe Creative Suite, Canva, Asana, Google Workspace, Slack, TikTok, Instagram, Facebook</div>
            </div>
        </div>
    )
}

export default NK;