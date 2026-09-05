// import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ExperienceEducation from './pages/ExperienceEducation';
import Certificate from './pages/Certificate';
import About from './pages/About';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </section>
        <section id="experience" className="scroll-mt-24">
          <ExperienceEducation />
        </section>
        <section id="certificate" className="scroll-mt-24">
          <Certificate />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
