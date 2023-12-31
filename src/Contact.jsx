import { Link } from "react-router-dom";

import Back_To_Top from "./assets/Back_To_Top.png";

function Contact() {

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }

    return (
        <div className="text-lg pt-20 pb-20 xl:pt-36">
            <div className="grid grid-cols-10 gap-6">
                <div className="col-span-12 xl:col-span-3">
                    <div className="flex gap-6">
                        <div>Like what you see? Let&apos;s talk.</div>
                        <div className="invisible xl:visible">&#10141;</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:flex gap-6 opacity-50 xl:opacity-100">
                    <Link className="xl:hover:opacity-50" to="mailto:elise@elisengo.com">Email</Link>
                    <Link className="xl:hover:opacity-50" to="https://www.linkedin.com/in/elisengo/" target="_blank">LinkedIn</Link>
                    <Link className="xl:hover:opacity-50" to="https://github.com/elisetvy" target="_blank">GitHub</Link>
                    <Link className="xl:hover:opacity-50" to="https://calendly.com/elisengo" target="_blank">Calendly</Link>
                </div>
            </div>
            <div className="hidden pt-36 xl:flex flex justify-center items-center opacity-25">
                <img onClick={scrollToTop} className="h-10 w-10 hover:cursor-pointer" src={Back_To_Top} alt="back to top" />
            </div>
        </div>
    )
}

export default Contact;