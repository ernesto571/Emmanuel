import { useState, useEffect } from "react"
const roles = ["Full-Stack Developer", "React Engineer", "UI Builder"]
const art = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23F8E6D2'/%3E%3Ccircle cx='300' cy='110' r='125' fill='%23F2B97A'/%3E%3Crect x='36' y='80' width='328' height='240' rx='18' fill='%231a1a1a'/%3E%3Ccircle cx='62' cy='106' r='6' fill='%23F2B97A'/%3E%3Ccircle cx='82' cy='106' r='6' fill='%23F8E6D2'/%3E%3Ccircle cx='102' cy='106' r='6' fill='%238a8178'/%3E%3Crect x='64' y='134' width='90' height='10' rx='5' fill='%23F2B97A'/%3E%3Crect x='162' y='134' width='120' height='10' rx='5' fill='%23f5ede4'/%3E%3Crect x='64' y='160' width='60' height='10' rx='5' fill='%238a8178'/%3E%3Crect x='132' y='160' width='150' height='10' rx='5' fill='%23F2B97A'/%3E%3Crect x='88' y='186' width='110' height='10' rx='5' fill='%23f5ede4'/%3E%3Crect x='206' y='186' width='70' height='10' rx='5' fill='%238a8178'/%3E%3Crect x='88' y='212' width='140' height='10' rx='5' fill='%23F2B97A'/%3E%3Crect x='64' y='238' width='50' height='10' rx='5' fill='%23f5ede4'/%3E%3Crect x='122' y='238' width='86' height='10' rx='5' fill='%238a8178'/%3E%3Crect x='64' y='264' width='130' height='10' rx='5' fill='%23F2B97A'/%3E%3Crect x='214' y='262' width='150' height='96' rx='16' fill='%23fff'/%3E%3Ctext x='289' y='326' font-family='sans-serif' font-size='44' fontWeight='800' textAnchor='middle' fill='%231a1a1a'%3E%26lt%3B/%26gt%3B%3C/text%3E%3Ctext x='24' y='385' font-family='sans-serif' font-size='64' fontWeight='800' fill='%23F2B97A'%3E%7B %7D%3C/text%3E%3C/svg%3E")`
const tiles = [{ c: "mt-6", d: ".1s", x: "0%" }, { c: "", d: ".2s", x: "33.33%" }, { c: "mt-3", d: ".3s", x: "66.66%" }, { c: "mt-9", d: ".4s", x: "100%" }]
function Typewriter() {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const full = !del && n === roles[i].length
    const t = setTimeout(() => {
      if (full) return setDel(true)
      if (del && n === 0) { setDel(false); return setI((i + 1) % roles.length) }
      setN(n + (del ? -1 : 1))
    }, full ? 1400 : del ? 40 : 80)
    return () => clearTimeout(t)
  }, [i, n, del])
  return <><span>{roles[i].slice(0, n)}</span><span className="cur" /></>
}

export default function HeroSection() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="max-w-xs text-sm text-mute">I build clean, fast web products from database to pixel, with React on the front and reliable APIs behind it.</p>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-12">
          <div id="art" className="relative pb-10 md:col-span-5" style={{ "--p": art }}>
            <div className="grid grid-cols-4 items-start gap-2">
              {tiles.map((t) => (
                <div key={t.d} className={`rise ${t.c} h-40 md:h-80 rounded-b-xl rounded-t-full bg-tint bg-no-repeat md:h-[26rem]`} style={{ "--d": t.d, backgroundImage: "var(--p)", backgroundSize: "400% 100%", backgroundPosition: `${t.x} 50%` }} />
              ))}
            </div>
            <div className="absolute -bottom-2 right-0 w-40">
              <div className="float rounded-xl bg-acc p-4 text-black shadow-md">
                <p className="text-3xl font-extrabold">3+</p>
                <p className="text-xs font-semibold">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 md:col-span-7 md:-ml-16">
            <h1 className="text-5xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-7xl">Hi, I'm Emmanuel</h1>
            <p className="mt-3 text-3xl font-bold md:pl-24 md:text-5xl"><Typewriter /></p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 md:pl-24">
              <a href="#projects" className="group inline-flex items-center gap-4 rounded-full bg-ink py-2 pl-7 pr-2 text-sm font-bold text-bg shadow-md transition duration-200 hover:-translate-y-0.5">View Projects<span className="grid h-11 w-11 place-items-center rounded-full bg-acc text-black transition duration-300 group-hover:rotate-45"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span></a>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
                <li><a href="#" className="text-mute transition hover:text-ink">GitHub</a></li>
                <li><a href="#" className="text-mute transition hover:text-ink">LinkedIn</a></li>
                <li><a href="#" className="text-mute transition hover:text-ink">Twitter</a></li>
                <li><a href="#" className="text-mute transition hover:text-ink">Upwork</a></li>
              </ul>
            </div>
            <div className="mt-8 max-w-md rounded-2xl border border-line bg-bg p-5 shadow-sm md:ml-auto">
              <p className="text-sm text-mute">Passionate Full-Stack Developer with 3+ years of experience shipping React and Node apps. I care about speed, accessibility, and clear code.</p>
              <a href="#contact" className="mt-4 inline-flex items-center rounded-full bg-acc px-6 py-2.5 text-sm font-bold text-black shadow-md transition duration-200 hover:-translate-y-0.5">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}