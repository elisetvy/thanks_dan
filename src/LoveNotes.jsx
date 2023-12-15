import Nav from "./Nav";
import LoveNotes_1 from "./assets/LoveNotes.png";
import LoveNotes_2 from "./assets/LoveNotes 2.png";

function LoveNotes() {

    return (
        <div className="px-8 xl:px-36 py-10">
            <div>
                <Nav />
            </div>
            <img className="mt-10 border w-full" src={LoveNotes_1} alt="love notes" />
            <div className="py-10">
                <div className="text-3xl font-black">Love Notes</div>
                <div className="mt-4 text-lg">Enhanced client-side error handling, incorporated AWS S3 for the secure storage of user-uploaded images, and expanded test coverage.</div>
                <div className="mt-4 text-md font-black tracking-widest opacity-25">TECHNOLOGIES USED</div>
                <div className="text-lg">JavaScript, React, TailwindCSS, Node/Express, JSON Schema, JSON Web Tokens, PostgreSQL, MapQuest, AWS S3, Jest, SuperTest, Git, GitHub</div>
            </div>
            <img className="mt-10 border w-full" src={LoveNotes_2} alt="love notes 2" />
        </div>
    )
}

export default LoveNotes;