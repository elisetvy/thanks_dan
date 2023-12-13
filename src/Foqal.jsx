import Nav from "./Nav";
import Foqal_3 from "./assets/Foqal 3.png";

function Foqal() {

    return (
        <div className="px-8 xl:px-36 py-10">
            <div>
                <Nav />
            </div>
            <img className="mt-10 border w-full" src={Foqal_3} alt="foqal" />
            <div className="py-10">
                <div className="text-3xl font-black">Foqal</div>
                <div className="mt-4 text-lg">Resolved UI bugs, ensured Content Security Policy compliance, and collaborated on the redesign of the client portal.</div>
                <div className="mt-4 text-md font-black tracking-widest opacity-25">TECHNOLOGIES USED</div>
                <div className="text-lg">JavaScript/TypeScript, React, CSS, Bootstrap, GraphQL, Slate, Lottie, Git, GitHub, Jira, Figma</div>
            </div>
        </div>
    )
}

export default Foqal;