import { useState, useEffect, useRef } from "react"

const tabs = [
    { label:"About Me" },
    { label:"Experience" },
    { label:"Education" }
]

const bio = [
    {title:"Name", sub:"Emmanuel Adesemoye"},
    {title:"Role", sub:"Full-Stack Developer"},
    {title:"Email", sub:"emmanueladesemoye@gmail.com"},
    {title:"Location", sub:"Lagos, Nigeria"},
    {title:"Experience", sub:"3+ Years"},
    {title:"Languages", sub:"English, Yoruba"}
]

const exp = [
    { duration:"2025 - Present", role:"Full-Stack Developer", company:"Freelance", sub:"Built and shipped client websites and web apps end to end.",  impact:"Cut average page load time by 40%" }
]

const edu = [
    { duration:"2023 - 2028", degree:"Bsc. Chemical Engineering", uni:"Obafemi Awolowo University (OAU)" }
]

export default function Resume() {
    const [ activeTab, setActiveTab ] = useState("About Me")
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

    return (
        <section id="resume" className="scroll-mt-24 bg-soft py-16" >
            <div className="mx-auto max-w-6xl px-6">
                <div ref={(el) => { refs.current[0] = el }} className="fade-up text-center"><span className="inline-block rounded-full border border-acc px-4 py-1 text-xs font-semibold text-acc">Résumé</span><h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">My Resume</h2></div>

                <div ref={(el) => { refs.current[1] = el }} className="card-anim mx-auto mt-8 flex w-fit flex-wrap justify-center gap-1 rounded-full bg-tint p-1.5 text-sm font-semibold" style={{ transitionDelay: "0.1s" }}>
                    { tabs.map((t) => (
                        <button key={t.label} onClick={() => setActiveTab(t.label)} className={`rounded-full px-5 py-2 transition ${activeTab === t.label ? "bg-acc text-black shadow-sm" : "text-mute hover:text-ink " } `} >{t.label} </button>
                    )) }
                </div>

                <div className="mt-10 grid items-center gap-10 md:grid-cols-2" >
                    <div ref={(el) => { refs.current[2] = el }} className="card-anim min-h-[22rem] " style={{ transitionDelay: "0.2s" }}>
                        { activeTab === "About Me" && (
                            <div className="rise">
                                <h3 className="text-xl font-bold">Full-Stack Software Developer</h3>
                                <p className="mt-3 text-sm text-mute">Hi, I'm Emmanuel, a developer with a passion for building useful products. I work across the stack, from React interfaces to APIs and databases, and I care about speed, accessibility, and clear code.</p>

                                <dl className="mt-6 space-y-2.5 text-sm" >
                                    { bio.map((b) => (
                                        <div key={b.title} className="flex gap-4" >
                                            <dt className="w-28 font-semibold">{b.title} </dt>
                                            <dd className="text-mute">{b.sub} </dd>
                                        </div>
                                    )) }

                                </dl>
                            </div>
                        ) }

                        { activeTab === "Experience" && (
                            <div className="rise space-y-3" >
                                { exp.map((e) => (
                                    <div key={e.company} className="rounded-2xl border border-line bg-bg p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                                        <p className="text-xs font-semibold text-mute">{e.duration} </p>
                                        <h3 className="mt-1 font-bold">{e.role} <span className="font-medium text-mute">· {e.company}</span></h3>
                                        <p className="mt-1 text-sm text-mute">{e.sub}</p>
                                        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-acc px-3 py-1 text-xs font-bold text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="trending-up" className="lucide lucide-trending-up h-3.5 w-3.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>{e.impact} </p>
                                    </div>
                                )) }
                            </div>
                        ) }

                        { activeTab === "Education" && (
                            <div className="rise space-y-3" >
                                { edu.map((e) => (
                                    <div key={e.uni} className="rounded-2xl border border-line bg-bg p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                                        <p className="text-xs font-semibold text-mute">{e.duration} </p>
                                        <h3 className="mt-1 font-bold">{e.degree} </h3>
                                        <p className="mt-1 text-sm text-mute">{e.uni}</p>
                                    </div>
                                )) }
                            </div>
                        ) }
                    </div>

                    <div ref={(el) => { refs.current[3] = el }} className="card-anim mx-auto w-full max-w-sm rounded-3xl bg-tint p-2 shadow-md" style={{ transitionDelay: "0.3s" }}><svg viewBox="0 0 400 500" role="img" aria-label="Developer desk illustration" className="block aspect-[4/5] w-full rounded-2xl"><rect width="400" height="500" fill="#F8E6D2"></rect><circle cx="290" cy="130" r="105" fill="#F2B97A"></circle><rect x="56" y="150" width="288" height="190" rx="16" fill="#1a1a1a"></rect><circle cx="80" cy="172" r="5" fill="#F2B97A"></circle><circle cx="96" cy="172" r="5" fill="#F8E6D2"></circle><circle cx="112" cy="172" r="5" fill="#8a8178"></circle><rect x="80" y="204" width="100" height="10" rx="5" fill="#F2B97A"></rect><rect x="192" y="204" width="90" height="10" rx="5" fill="#f5ede4"></rect><rect x="80" y="228" width="60" height="10" rx="5" fill="#8a8178"></rect><rect x="150" y="228" width="130" height="10" rx="5" fill="#F2B97A"></rect><rect x="104" y="252" width="110" height="10" rx="5" fill="#f5ede4"></rect><rect x="226" y="252" width="64" height="10" rx="5" fill="#8a8178"></rect><rect x="104" y="276" width="120" height="10" rx="5" fill="#F2B97A"></rect><rect x="80" y="300" width="56" height="10" rx="5" fill="#f5ede4"></rect><rect x="148" y="300" width="90" height="10" rx="5" fill="#8a8178"></rect><rect x="30" y="340" width="340" height="16" rx="8" fill="#2f2f2f"></rect><rect x="0" y="356" width="400" height="144" fill="#FFF9F4"></rect><rect x="0" y="356" width="400" height="4" fill="#E8D5C0"></rect><path d="M78 380q-8-12 0-22M98 380q-8-12 0-22" fill="none" stroke="#1a1a1a" strokeOpacity=".3" strokeWidth="4" strokeLinecap="round"></path><rect x="60" y="392" width="58" height="64" rx="12" fill="#F2B97A"></rect><path d="M118 408h6a14 14 0 0 1 0 28h-6" fill="none" stroke="#F2B97A" strokeWidth="8"></path><rect x="150" y="398" width="100" height="70" rx="8" fill="#1a1a1a"></rect><rect x="162" y="412" width="48" height="8" rx="4" fill="#F2B97A"></rect><rect x="162" y="430" width="76" height="6" rx="3" fill="#8a8178"></rect><rect x="162" y="444" width="56" height="6" rx="3" fill="#8a8178"></rect><path d="M290 430h60l-8 50h-44z" fill="#1a1a1a"></path><path d="M320 430c-30-10-34-46-20-62 22 12 28 40 20 62z" fill="#F2B97A"></path><path d="M320 430c24-8 40-40 28-66-24 8-34 36-28 66z" fill="#1a1a1a"></path><g className="float"><rect x="244" y="118" width="112" height="60" rx="14" fill="#fff"></rect><text x="300" y="158" fontFamily="sans-serif" fontSize="30" fontWeight="800" textAnchor="middle" fill="#1a1a1a">&lt;/&gt;</text></g></svg></div>
                </div>
            </div>

                

        </section>
    )
}