import { useState } from "react"

const categories = [
    {label:"All"},
    {label:"Full-Stack"},
    {label:"Web Apps"},
    {label:"AI Tools"}
]

const projects = [
    {tag:"Web Apps", title:"Atelier Nord", sub:"Fashion e-commerce storefront with wishlist, cart, and Stripe checkout.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"},{icon:"", label:"Zustand"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/supabase/supabase-original.svg", label:"Supabase"},{icon:"https://www.svgrepo.com/show/355283/stripe.svg", label:"Stripe"}], live_url:"https://ateier-nord.vercel.app", github:"https://github.com/ernesto571/Atelier-Nord", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793628638/Screenshot_2026-11-02_at_11-35-36_Atelier_Nord_Everyday_Finds_ts9rab.png" },

    {tag:"AI Tools", title:"Auditr", sub:"Scans any public URL and returns an AI audit across UI/UX, performance, SEO, accessibility, and conversion in under 60 seconds.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793630309/google-gemini-icon_gtn8vz.svg", label:"Gemini API"}], live_url:"https://cruz-auditr.netlify.app", github:"https://github.com/ernesto571/Auditr", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608637/Screenshot_2026-06-28_at_01-49-51_Auditr_dvphw9.png" },

    {tag:"AI Tools", title:"MoodMap", sub:"Daily mood check-ins with weekly AI pattern analysis, trigger detection, and personal insights.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793630309/google-gemini-icon_gtn8vz.svg", label:"Gemini API"}], live_url:"https://cruz-moodmap.netlify.app", github:" ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608660/Screenshot_2026-06-28_at_01-47-31_MoodMap_jgbpjr.png" },

    {tag:"AI Tools", title:"ClarifyAI", sub:"Analyzes uploaded documents and flags contract risks with severity ratings.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793630309/google-gemini-icon_gtn8vz.svg", label:"Gemini API"}], live_url:"https://cruz-clarifyai.netlify.app", github:"https://github.com/ernesto571/ClarifyAI ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608638/Screenshot_2026-06-28_at_01-48-43_ClarifyAI_b0rrx2.png" },

    {tag:"Web Apps", title:"Fortutech Solar Website", sub:"Responsive business website for a solar installation company.", stacks:[{icon:"", label:"GSAP"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"}], live_url:"https://dadotech.netlify.app", github:"https://github.com/ernesto571/fortutech ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793627631/Screenshot_2026-11-02_at_14-45-41_Fortutech_Solar_Energy_Smart_Energy_For_A_Brighter_Tomorrow_zicg0j.png" },

    {tag:"Full-Stack", title:"Sunrise Stay", sub:"Hotel room booking and reservation app.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"}], live_url:"https://cruz-sunrise.netlify.app/", github:"https://github.com/ernesto571/hotel-management-system ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608637/Screenshot_2026-06-28_at_01-50-32_Sunrise-Stay_Hotel_rjckur.png" },

    {tag:"Full-Stack", title:"Coin Radar", sub:"Crypto tracker where users add coins to a portfolio and watch it.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"}], live_url:"https://fullstack-crypto-app.onrender.com", github:" https://github.com/ernesto571/fullstack-crypto-app", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793627621/Screenshot_2026-11-02_at_14-50-13_CoinRadar_etpm3w.png" }
]

export default function Projects () {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredProjects = projects?.filter(
        (p) => activeCategory === "All" || p.tag === activeCategory
    )

    return(
        <section id="projects"  className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16" >
            <div class="text-center"><span class="inline-block rounded-full border border-acc px-4 py-1 text-xs font-semibold text-acc">Portfolio</span><h2 class="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">My Recent Work</h2></div>

            <div className="mx-auto mt-8 flex w-fit flex-wrap justify-center gap-1 rounded-full bg-tint p-1.5 text-sm font-semibold">
                { categories.map((c) => (
                    <button key={c.label} onClick={() => setActiveCategory(c.label)} className={`rounded-full px-5 py-2 transition ${activeCategory === c.label ? "bg-acc text-black shadow-sm" : "text-mute hover:text-ink " } `} >{c.label} </button>
                )) }
            </div>

            { activeCategory === "All" && (
                <div className="mt-8 grid gap-4 md:grid-cols-6" >
                    { filteredProjects.slice(0,1).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-4">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                    { filteredProjects.slice(1,2).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                    { filteredProjects.slice(2,3).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                    { filteredProjects.slice(3,4).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-4">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                    { filteredProjects.slice(4,5).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                    { filteredProjects.slice(5,6).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                    { filteredProjects.slice(6).map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }
                </div>
            ) }
            
            { activeCategory === "Full-Stack" || activeCategory ===  "Web Apps" && (
                <div className="mt-8 grid gap-4 md:grid-cols-2" >
                    { filteredProjects.map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }

                </div>
            ) }

            { activeCategory === "AI Tools"  && (
                <div className="mt-8 grid gap-4 md:grid-cols-3" >
                    { filteredProjects.map((p) => (
                        <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ">
                            <div class="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt="Atelier Nord" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                            <div className="flex flex-1 flex-col p-4" >
                                <span className="text-xs font-bold text-acc">{p.tag} </span>
                                <h3 className="mt-1 text-lg font-bold">{p.title} </h3>
                                <p className="mt-1 text-sm text-mute">{p.sub} </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    { p.stacks.map((s) => (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium" >
                                            <img src={s.icon} className="h-3.5 w-3.5 " />
                                            {s.label}
                                        </span>
                                    )) }
                                </div>
                                <div className="mt-auto flex gap-2 pt-5">
                                    <a href={p.live_url} target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-bold text-black transition hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="external-link" className="lucide lucide-external-link h-3.5 w-3.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live Demo</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-bold transition hover:bg-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round" data-lucide="github" className="lucide lucide-github h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>GitHub</a>
                                </div>
                            </div>
                        </article>
                    )) }

                </div>
            ) }

        </section>
    )
}