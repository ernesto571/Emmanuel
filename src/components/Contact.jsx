import { Copy } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact () {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [msgError, setMsgError] = useState("")

    const refs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { entry.target.classList.add("animate-in"); observer.unobserve(entry.target) }
            })
        }, { threshold: 0.12 })
        refs.current.forEach((el) => { if (el) observer.observe(el) })
        return () => observer.disconnect()
    }, [])

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText("emmanueladesemoye@gmail.com")
          toast.success("Email copied to clipboard")
        } catch { toast.error("Couldn't copy. Please copy it manually.") }
    }

    const validate = () => {
        const name = formData.name.trim().length < 2 ? "Please enter your name." : ""
        const email = !/^\S+@\S+\.\S+$/.test(formData.email.trim()) ? "Enter a valid email address." : ""
        const message = formData.message.trim().length < 10 ? "Message must be at least 10 characters." : ""
        setNameError(name); setEmailError(email); setMsgError(message)
        return !name && !email && !message
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return

        setIsSubmitting(true);

        
        const messageContent = `
        Name: ${formData.name}
        Email: ${formData.email}
    
        💬 Message:
        ${formData.message}
        `;
    
        console.log("Sending contact form:", {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          formatted: messageContent,
        });
    
        emailjs
          .send(
            "service_yhjh0yt" , // 🔹 your EmailJS service ID
            "template_e42qj4k", // 🔹 your EmailJS template ID
            {
              name: formData.name,
              email: formData.email,
              message: messageContent,
            },
            "C2I28fYoOv0B9BlV1" // 🔹 your EmailJS public key
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              toast.success(" Message sent successfully!");
              setFormData({ name: "", email: "", message: "" });
              setIsSubmitting(false);
            },
            (error) => {
              console.log("FAILED...", error);
              toast.error(` Failed to send: ${error.text || "Please try again."}`);
              setIsSubmitting(false);
            }
          );
      };

    return (
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16" >
            <div className="grid gap-10 md:grid-cols-2" >
                <div ref={(el) => { refs.current[0] = el }} className="fade-up" >
                    <span className="inline-block rounded-full border border-acc px-4 py-1 text-xs font-semibold text-acc">Contact</span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Let's Build Something Together</h2>
                    <p className="mt-4 max-w-sm text-mute">Have a project, role, or idea? Send a message or copy my email below.</p>
                    <button onClick={handleCopy} className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-soft active:scale-95" >
                        <Copy className="w-5 h-5" />
                        emmanueladesemoye@gmail.com
                    </button>
                </div>

                <div ref={(el) => { refs.current[1] = el }} className="card-anim space-y-4 rounded-3xl border border-line bg-soft p-6 shadow-md" style={{ transitionDelay: "0.15s" }} >
                    <div><label className="text-sm font-semibold" >Name</label><input name="name" value={formData.name} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none transition focus:border-acc" /><p className="err mt-1  text-xs text-red-500">{nameError} </p></div>

                    <div><label className="text-sm font-semibold" >Email</label><input name="email" type="email"  value={formData.email} onChange={handleChange}  className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none transition focus:border-acc" /><p className=" mt-1  text-xs text-red-500">{emailError} </p></div>

                    <div><label className="text-sm font-semibold" >Message</label><textarea name="message" value={formData.message} onChange={handleChange}  id="msg" rows="4" className="mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none transition focus:border-acc"></textarea><p className=" mt-1  text-xs text-red-500">{msgError} </p></div>

                    <button disabled={isSubmitting} onClick={handleSubmit} className="w-full rounded-full bg-acc px-6 py-3 text-sm font-bold text-black transition duration-200 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50">{isSubmitting ? "Sending..." : "Send Message"}</button>
                </div>
            </div>

        </section>
    )
}