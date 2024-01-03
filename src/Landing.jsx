import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Nav from "./Nav";
import Resume from "./assets/EliseNgo_Resume_December2023.pdf";
import Experience from "./Experience";
import Contact from "./Contact";

function Landing () {
    const [fadeIn, setFadeIn] = useState(false);

useEffect(() => {
        setFadeIn(true);
      }, []);

    return (
        <div className="px-8 xl:px-36 pt-10">
            <Nav />
            <div className="pt-12 xl:pt-32 font-black text-4xl leading-[2.5rem] md:text-5xl md:leading-[3rem] xl:text-8xl xl:leading-[6rem]">
                <CSSTransition
                    in={fadeIn}
                    timeout={1000}
                    classNames="fade-in-1"
                >
                    <div>Hello.</div>
                </CSSTransition>
                <CSSTransition
                    in={fadeIn}
                    timeout={1000}
                    classNames="fade-in-2"
                >
                    <div>I&apos;m Elise Ngo,</div>
                </CSSTransition>
                <CSSTransition
                    in={fadeIn}
                    timeout={1000}
                    classNames="fade-in-3"
                >
                    <div>a Software Engineer.</div>
                </CSSTransition>
                <CSSTransition
                    in={fadeIn}
                    timeout={1000}
                    classNames="fade-in-4"
                >
                    <div>based in Long Beach.</div>
                </CSSTransition>
                <div className="mt-12  bg-black w-6 h-0.5"></div>
            </div>
            <div className="animate__delay-5s mt-12 text-lg max-w-[750px] mb-20 xl:mb-52">
                I build thoughtfully designed, empathetically engineered applications that prioritize the user and developer experience. I&apos;m passionate about leveraging my unique background to approach technical challenges in new and creative ways.
                <div className="mt-2 flex flex-col sm:flex-row gap-2 ">
                    <div>Check out some of my work below.</div>
                    <div onClick={() => window.open(Resume, "_blank")} className="opacity-50 hover:underline hover:underline-offset-4 hover:cursor-pointer">For my resume, click here.</div>
                </div>
            </div>
            <Experience />
            <Contact />
        </div>
    )
}

export default Landing;