import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer.tsx";
import HeroSection from "./components/HeroSection.tsx";
import WhoAmI from "./components/WhoAmISection.tsx";
import MySkillsSection from "./components/MySkillsSection.tsx";
import LatestProjects from "./components/LatestProjects.tsx";
import EducationSection from "./components/EducationSection.tsx";
import FeedbackSection from "./components/FeedbackSection.tsx";


function App() {

  return (
    <>
        <Header/>
        <HeroSection/>
        <WhoAmI/>
        <MySkillsSection/>
        <LatestProjects/>
        <EducationSection/>
        <FeedbackSection/>
        <Footer/>
    </>
  )
}

export default App
