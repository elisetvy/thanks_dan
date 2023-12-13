import { Link } from "react-router-dom";

function Contact() {

    return (
        <div className="px-8 xl:px-36 py-24 text-lg">
            <div className="grid grid-cols-10 gap-6">
                <div className="col-span-12 xl:col-span-3">
                    <div className="flex gap-6">
                        <div>Like what you see? Let&apos;s talk.</div>
                        <div className="invisible xl:visible">&#10141;</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:flex gap-6 opacity-50 xl:opacity-100">
                    <Link to="mailto:elisetvy@gmail.com">Email</Link>
                    <Link to="https://www.linkedin.com/in/elisetvy/" target="_blank">LinkedIn</Link>
                    <Link to="https://github.com/elisengo" target="_blank">GitHub</Link>
                    <Link to="https://calendly.com/elisengo" target="_blank">Calendly</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;