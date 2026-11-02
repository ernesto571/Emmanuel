import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function LandingPage (){

    return(
        <section>
            <section id="home" >
                <HeroSection />
            </section>
            <Projects  />
            <Resume />
            
        </section>
    )
}