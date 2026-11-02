import { useEffect, useState } from "react";
import { navLinks } from "../utils";
import { Menu, Moon, Sun } from "lucide-react";
import MenuSidebar from "./MenuSidebar";

const links = [
    {label:"HOME", to:"#home"},
    {label:"WORK", to:"#work"},
    {label:"RESUME", to:"#resume"},
    {label:"STACK", to:"#stack"},
    {label:"ABOUT", to:"#about"},
    {label:"CONTACT", to:"#contact"}
]

export default function Navbar (){
    
    const [isActive, setActive] = useState("HOME")

    return(
        <nav className="sticky top-0 z-40 border-b border-line bg-bg">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#home" class="flex items-center gap-2 text-lg font-bold"><span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-bg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="code-2" class="lucide lucide-code-2 h-4 w-4"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg></span>Emmanuel</a>

                <span className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-wider md:flex" >
                    { links.map((l) => (
                        <a href={l.to} onClick={() => setActive(l.label)} key={l.label} className={` ${isActive === l.label ? "text-acc" : "text-mute transition hover:text-ink"} `} >{l.label} </a>
                    )) }
                </span>

                <div className="flex items-center gap-2">
                    <a href="#" aria-label="GitHub" class="hidden h-9 w-9 place-items-center rounded-full text-mute transition hover:bg-soft hover:text-ink sm:grid"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="github" class="lucide lucide-github h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>

                    <a href="#" aria-label="LinkedIn" class="hidden h-9 w-9 place-items-center rounded-full text-mute transition hover:bg-soft hover:text-ink sm:grid"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="linkedin" class="lucide lucide-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>


                    <a href="https://www.upwork.com/" aria-label="Upwork" target="_blank" rel="noopener noreferrer" className="hidden h-9 w-9 place-items-center rounded-full text-mute transition hover:bg-soft hover:text-ink sm:grid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-5"><path d="M18.4 6.5c-2.5 0-4.4 1.6-5.2 4.1-.8-1.3-1.5-2.8-2-4.3H8.7v6.1c0 1.3-.7 2.1-1.8 2.1s-1.8-.8-1.8-2.1V6.3H2.5v6.1c0 3 1.7 4.9 4.4 4.9s4.4-1.9 4.4-4.9v-.5c.6 1.1 1.3 2.1 2.1 3l-1.7 5.1h2.9l1.2-3.7c.8.4 1.7.6 2.6.6 2.9 0 5-2.2 5-5.2s-2.1-5.2-5-5.2zm0 7.8c-.6 0-1.2-.2-1.7-.5l.9-2.8c.4-1.2 1-1.8 1.8-1.8 1.1 0 1.8 1 1.8 2.5s-1.1 2.6-2.8 2.6z"/></svg></a>

                    <button className="grid h-9 w-9 place-items-center rounded-full bg-tint transition active:scale-95"> 
                        <Moon className=" h-4 w-4 dark:hidden" /> 
                        <Sun className="hidden h-4 w-4 dark:block" /> 
                    </button>

                </div>
            </div>

        </nav>
    )
}