import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Stack from "./components/Stack";

export default function LandingPage (){

    return(
        <section>
            <section id="home" >
                <HeroSection />
            </section>
            <Projects  />
            <Resume />
            <Stack />
            <About />
            <Contact />

            <footer className="border-t border-line" >
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-mute">
                    <p>© 2026 Emmanuel Adesemoye. All rights reserved.</p>
                    <div className="flex gap-3">

                    <a href="https://github.com/ernesto571" aria-label="GitHub" target="_blank" rel="noopener noreferrer"  className="transition hover:text-ink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="github" className="lucide lucide-github h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>

                    <a href="https://www.upwork.com/freelancers/~01c54ee9730e1f1d6a" target="_blank" rel="noopener noreferrer"  aria-label="LinkedIn" className="transition hover:text-ink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>

                    <a href="https://www.upwork.com/freelancers/~01c54ee9730e1f1d6a" target="_blank" rel="noopener noreferrer"  aria-label="Upwork" className="transition hover:text-ink"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-5"><path d="M18.4 6.5c-2.5 0-4.4 1.6-5.2 4.1-.8-1.3-1.5-2.8-2-4.3H8.7v6.1c0 1.3-.7 2.1-1.8 2.1s-1.8-.8-1.8-2.1V6.3H2.5v6.1c0 3 1.7 4.9 4.4 4.9s4.4-1.9 4.4-4.9v-.5c.6 1.1 1.3 2.1 2.1 3l-1.7 5.1h2.9l1.2-3.7c.8.4 1.7.6 2.6.6 2.9 0 5-2.2 5-5.2s-2.1-5.2-5-5.2zm0 7.8c-.6 0-1.2-.2-1.7-.5l.9-2.8c.4-1.2 1-1.8 1.8-1.8 1.1 0 1.8 1 1.8 2.5s-1.1 2.6-2.8 2.6z"/></svg></a>
                    </div>
                </div>
            </footer>
            
        </section>
    )
}