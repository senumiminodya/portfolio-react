import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer.tsx";
import WhoAmI from "./components/WhoAmISection.tsx";
import MySkillsSection from "./components/MySkillsSection.tsx";
import LatestProjects from "./components/LatestProjects.tsx";
import EducationSection from "./components/EducationSection.tsx";
import FeedbackSection from "./components/FeedbackSection.tsx";
import HeroSection from "./components/HeroSection.tsx";


function App() {

    return (
    <>
        <Header/>
        <section id="home"><HeroSection/></section>
        <section id="whoami"><WhoAmI/></section>
        <section id="skills"><MySkillsSection/></section>
        <section id="projects"><LatestProjects/></section>
        <section id="education"><EducationSection/></section>
        <section id="feedback"><FeedbackSection/></section>
        <Footer/>
    </>
  )
}

export default App
