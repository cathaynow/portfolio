import {useState} from "react";
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert.jsx";
import {Particles} from "../components/Particles.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")

    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send("service_7vzzzse", "template_hwwz2sh", {
                from_name: formData.name,
                to_name: "Ali",
                from_email: formData.email,
                to_email: "dodeux81@gmail.com",
                message: formData.message,
            }, "cKJYjmqInXsKPGkBg")
            setIsLoading(false);
            setFormData({name: "", email: "", message: ""});
            showAlertMessage("success", "Your message has been sent!")

        } catch (error) {
            setIsLoading(false);
            showAlertMessage("danger", "Something went wrong!")

        }

    }

    return (
        <section className="relative flex items-center c-space section-spacing" id="contact">
            <Particles className="absolute inset-0 -z-50"
                       quantity={100}
                       ease={80}
                       color="#ffffff"
                       refresh

            />
            {showAlert && <Alert type={alertType} text={alertMessage}/>}
            <div
                className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex  flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="font-normal text-neutral-400">Whether you're looking to build a new website, improve
                        your existing
                        platform, or bring a unique
                        project to life, I'm here to help</p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required/>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">Email</label>
                        <input id="email" type="email" className="field-input field-input-focus"
                               placeholder="johndoe@gmail.com"
                               autoComplete="email" required value={formData.email} onChange={handleChange}
                               name="email"/>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">Message</label>
                        <textarea id="message" rows="4" className="field-input field-input-focus"
                                  placeholder="Share your thoughts..."
                                  autoComplete="message" required value={formData.message} onChange={handleChange}
                                  name="message"/>
                    </div>
                    <button
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial
                         from-lavender to-royal hover-animation" type="submit">
                        {!isLoading ? "Send" : "Sending"}


                    </button>
                </form>
            </div>
        </section>
    )
}
export default Contact
