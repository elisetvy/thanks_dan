import Nav from "./Nav";
import Experience from "./Experience";
import Contact from "./Contact";

function Landing () {

    return (
        <div className="px-8 xl:px-36 pt-10">
            <Nav />
            <div className="pt-12 xl:pt-32 font-black text-4xl leading-[2.5rem] md:text-5xl md:leading-[3rem] xl:text-8xl xl:leading-[6rem]">
                <div>Hello.</div>
                <div>I&apos;m Elise Ngo,</div>
                <div>a Software Engineer</div>
                <div>based in Long Beach.</div>
                <div className="mt-12  bg-black w-6 h-0.5"></div>
            </div>
            <div className="mt-12 text-lg max-w-[750px] mb-20 xl:mb-52">
                I build thoughtfully designed applications that prioritize user experience. I&apos;m passionate about leveraging my background in Marketing and Language Studies to approach technical challenges in new and creative ways. Check out some of my work below.
            </div>
            <Experience />
            <Contact />
        </div>
    )
}

export default Landing;