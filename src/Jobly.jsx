import Nav from "./Nav";
import Jobly_1 from "./assets/Jobly.gif"

function Jobly() {

    return (
        <div className="px-8 xl:px-36 py-10">
            <div>
                <Nav />
            </div>
            <img className="mt-10 border w-full" src={Jobly_1} alt="jobly" />
            <div className="py-10">
                <div className="text-3xl font-black">Jobly</div>
                <div className="mt-4 text-lg">Implemented live search functionality, accelerated the First Contentful Paint, and introduced interactive design elements.</div>
                <div className="mt-4 text-md font-black tracking-widest opacity-25">TECHNOLOGIES USED</div>
                <div className="text-lg">JavaScript, React, TailwindCSS, Node/Express, JSON Schema, JSON Web Tokens, PostgreSQL, Lodash, Jest, SuperTest, Git, GitHub</div>
            </div>
        </div>
    )
}

export default Jobly;