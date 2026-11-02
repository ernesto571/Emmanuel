import About from "./components/About";
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
            
        </section>
    )
}