import { useEffect, useRef } from "react"
const frontend = [{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/html5/html5-original.svg", label:"HTML"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/css3/css3-original.svg", label:"CSS"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg", label:"JavaScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nextjs/nextjs-original.svg", label:"Next.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/gsap.svg", label:"GSAP"}]

const backend = [{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/python.webp", label:"Python"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/django.png", label:"Django"},{icon:"https://dashboardicons.com/api/icons/external/simpleicons/betterauth/light.png", label:"Better Auth"},{icon:"https://dashboardicons.com/api/icons/external/simpleicons/clerk/brand.png", label:"Clerk"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/jwt-io.webp", label:"JWT"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/oauth2.webp", label:"OAuth 2.0"}]

const database = [{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://cdn.jsdelivr.net/gh/selfhst/icons/webp/mongodb.webp", label:"MongoDB"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/supabase/supabase-original.svg", label:"Supabase"}]

const tools = [{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/git.webp", label:"Git"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/github.webp", label:"GitHub"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/netlify.webp", label:"Netlify"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/vercel.webp", label:"Vercel"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/aws.webp", label:"AWS"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/railway.webp", label:"Railway"},{icon:"https://cdn.jsdelivr.net/gh/selfhst/icons/webp/cloudinary.webp", label:"Cloudinary"}]

export default function Stack () {
    const headingRef = useRef(null)
    const cardRefs = useRef([])
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { entry.target.classList.add("animate-in"); observer.unobserve(entry.target) }
            })
        }, { threshold: 0.12 })
        if (headingRef.current) observer.observe(headingRef.current)
        cardRefs.current.forEach((el) => { if (el) observer.observe(el) })
        return () => observer.disconnect()
    }, [])

    return(
        <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16" >
            <div ref={headingRef} className="fade-up text-center"><span className="inline-block rounded-full border border-acc px-4 py-1 text-xs font-semibold text-acc">Toolbox</span><h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Tech Stack & Skills</h2></div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2" >
                <div ref={(el) => { cardRefs.current[0] = el }} className="card-anim rounded-3xl border border-line bg-soft p-6 shadow-sm" style={{ transitionDelay: "0s" }}>
                    <h3 className="font-bold">Frontend</h3>
                    <div className="mt-4 flex flex-wrap gap-2" >
                        { frontend.map((f) => (
                            <span key={f.label} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium">
                                <img src={f.icon} alt="" className="h-3.5 w-3.5 "/>
                                {f.label}
                            </span>
                        )) }
                    </div>
                </div>
                <div ref={(el) => { cardRefs.current[1] = el }} className="card-anim rounded-3xl border border-line bg-soft p-6 shadow-sm" style={{ transitionDelay: "0.1s" }}>
                    <h3 className="font-bold">Backend</h3>
                    <div className="mt-4 flex flex-wrap gap-2" >
                        { backend.map((f) => (
                            <span key={f.label} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium">
                                <img src={f.icon} alt="" className="h-3.5 w-3.5 "/>
                                {f.label}
                            </span>
                        )) }
                    </div>
                </div>
                <div ref={(el) => { cardRefs.current[2] = el }} className="card-anim rounded-3xl border border-line bg-soft p-6 shadow-sm" style={{ transitionDelay: "0.2s" }}>
                    <h3 className="font-bold">Databases</h3>
                    <div className="mt-4 flex flex-wrap gap-2" >
                        { database.map((f) => (
                            <span key={f.label} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium">
                                <img src={f.icon} alt="" className="h-3.5 w-3.5 "/>
                                {f.label}
                            </span>
                        )) }
                    </div>
                </div>
                <div ref={(el) => { cardRefs.current[3] = el }} className="card-anim rounded-3xl border border-line bg-soft p-6 shadow-sm" style={{ transitionDelay: "0.3s" }}>
                    <h3 className="font-bold">Tools</h3>
                    <div className="mt-4 flex flex-wrap gap-2" >
                        { tools.map((f) => (
                            <span key={f.label} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium">
                                <img src={f.icon} alt="" className="h-3.5 w-3.5 "/>
                                {f.label}
                            </span>
                        )) }
                    </div>
                </div>
            </div>
        </section>
    )
}