import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

export default function LandingPage (){

    return(
        <section>
            <section id="home" >
                <HeroSection />
            </section>
            <Projects  />
            
        </section>
    )
}