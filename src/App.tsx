
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AnimatedBackground from "./components/AnimatedBackground";
import About from './components/About'; // Pastikan jalur import sesuai
import Technologies from './components/Technologies'; // Pastikan jalur import sesuai
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";



const App = () => {
  return (
      <main className="flex min-h-screen flex-col relative cursor-none"> 
        <AnimatedBackground/> 
        <CustomCursor/>

        <div className="top-0 left-0 w-full">
          <Navbar />
        </div>
        
        <div className="container mx-auto w-full  relative">
          <div className="px-12 py-4 ">
            <HeroSection/>
            <About/>
            <Technologies/>
            <Projects/>
            <Contact/>
            <footer className="flex max-w-4-xl mx-auto bottom-0 pb-4 pt-2 text-center flex-col">
              <p className="text-white ">©2025 Aria. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </main>
  )
}

export default App