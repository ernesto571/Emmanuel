import { useState, useEffect, useRef } from "react"

const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"]

const extIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>

const ghIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>

const btn = "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition"

const projects = [
    {tag:"Web Apps", title:"Atelier Nord", sub:"Fashion e-commerce storefront with wishlist, cart, and Stripe checkout.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/supabase/supabase-original.svg", label:"Supabase"},{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/stripe.webp", label:"Stripe"}], live_url:"https://ateier-nord.vercel.app", github:"https://github.com/ernesto571/Atelier-Nord", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793628638/Screenshot_2026-11-02_at_11-35-36_Atelier_Nord_Everyday_Finds_ts9rab.png" },

    {tag:"AI Tools", title:"Auditr", sub:"Scans any public URL and returns an AI audit across UI/UX, performance, SEO, accessibility, and conversion in under 60 seconds.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793630309/google-gemini-icon_gtn8vz.svg", label:"Gemini API"}], live_url:"https://cruz-auditr.netlify.app", github:"https://github.com/ernesto571/Auditr", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608637/Screenshot_2026-06-28_at_01-49-51_Auditr_dvphw9.png" },

    {tag:"AI Tools", title:"MoodMap", sub:"Daily mood check-ins with weekly AI pattern analysis, trigger detection, and personal insights.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793630309/google-gemini-icon_gtn8vz.svg", label:"Gemini API"}], live_url:"https://cruz-moodmap.netlify.app", github:" ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608660/Screenshot_2026-06-28_at_01-47-31_MoodMap_jgbpjr.png" },

    {tag:"AI Tools", title:"ClarifyAI", sub:"Analyzes uploaded documents and flags contract risks with severity ratings.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"},{icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793630309/google-gemini-icon_gtn8vz.svg", label:"Gemini API"}], live_url:"https://cruz-clarifyai.netlify.app", github:"https://github.com/ernesto571/ClarifyAI ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608638/Screenshot_2026-06-28_at_01-48-43_ClarifyAI_b0rrx2.png" },

    {tag:"Web Apps", title:"Fortutech Solar Website", sub:"Responsive business website for a solar installation company.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/gsap.svg", label:"GSAP"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"}], live_url:"https://dadotech.netlify.app", github:"https://github.com/ernesto571/fortutech ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793627631/Screenshot_2026-11-02_at_14-45-41_Fortutech_Solar_Energy_Smart_Energy_For_A_Brighter_Tomorrow_zicg0j.png" },

    {tag:"Full-Stack", title:"Sunrise Stay", sub:"Hotel room booking and reservation app.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg", label:"TypeScript"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg", label:"Node.js"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", label:"PostgreSQL"}], live_url:"https://cruz-sunrise.netlify.app/", github:"https://github.com/ernesto571/hotel-management-system ", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782608637/Screenshot_2026-06-28_at_01-50-32_Sunrise-Stay_Hotel_rjckur.png" },

    {tag:"Full-Stack", title:"Coin Radar", sub:"Crypto tracker where users add coins to a portfolio and watch it.", stacks:[{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", label:"React"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/express/express-original.svg", label:"Express"},{icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg", label:"Tailwind CSS"}], live_url:"https://fullstack-crypto-app.onrender.com", github:" https://github.com/ernesto571/fullstack-crypto-app", img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1793627621/Screenshot_2026-11-02_at_14-50-13_CoinRadar_etpm3w.png" }
]

const categories = [
    {label:"All"},
    {label:"Full-Stack"},
    {label:"Web Apps"},
    {label:"AI Tools"}
]

function Card({ p }) {

  return (

    <article className="group flex h-full flex-col rounded-3xl border border-line bg-soft p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-tint"><img loading="lazy" src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-bold text-acc">{p.tag}</span>
        <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
        <p className="mt-1 text-sm text-mute">{p.sub}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.stacks.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-medium">
              {s.icon && <img src={s.icon} alt="" className="h-3.5 w-3.5" />}{s.label}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2 pt-5">
          {p.live_url.trim() && <a href={p.live_url.trim()} target="_blank" rel="noopener noreferrer" className={`${btn} bg-acc text-black hover:opacity-80`}>{extIcon}Live Demo</a>}
          {p.github.trim() && <a href={p.github.trim()} target="_blank" rel="noopener noreferrer" className={`${btn} border border-line hover:bg-bg`}>{ghIcon}GitHub</a>}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {

  const [active, setActive] = useState("All")
  const [seen, setSeen] = useState(false)
  const headingRef = useRef(null)
  const tabsRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        if (entry.target === gridRef.current) setSeen(true)
        else entry.target.classList.add("animate-in")
        observer.unobserve(entry.target)
      })
    }, { rootMargin: "0px 0px -10% 0px" })
    ;[headingRef, tabsRef, gridRef].forEach((r) => { if (r.current) observer.observe(r.current) })
    return () => observer.disconnect()
  }, [])

  const list = projects.filter((p) => active === "All" || p.tag === active)
  const grid = active === "All" ? "md:grid-cols-2 lg:grid-cols-6" : list.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
  return (

    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <div ref={headingRef} className="fade-up text-center"><span className="inline-block rounded-full border border-acc px-4 py-1 text-xs font-semibold text-acc">Portfolio</span><h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">My Recent Work</h2></div>
      <div ref={tabsRef} className="card-anim mx-auto mt-8 flex w-fit flex-wrap justify-center gap-1 rounded-full bg-tint p-1.5 text-sm font-semibold" style={{ transitionDelay: "0.1s" }}>
        {categories.map((c) => (
          <button key={c.label} onClick={() => setActive(c.label)} className={`rounded-full px-2.5 md:px-5 py-2 transition ${active === c.label ? "bg-acc text-black shadow-sm" : "text-mute hover:text-ink"}`}>{c.label}</button>
        ))}
      </div>
      <div ref={gridRef} key={active} className={`mt-8 grid gap-4 ${grid}`}>
        {list.map((p, i) => (
          <div key={p.title} className={`${seen ? "rise" : "opacity-0"} ${active === "All" ? spans[i] : ""}`} style={{ "--d": `${i * 0.08}s` }}><Card p={p} /></div>
        ))}
      </div>
    </section>
  )
}