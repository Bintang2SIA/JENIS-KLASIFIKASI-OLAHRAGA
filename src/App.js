import React, { useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SportSection from './SportSection';
import AboutUs from './AboutUs';
import BenefitsSection from './BenefitsSection';
import TeamSection from './TeamSection';
import DosenPengampu from './DosenPengampu';
import ImageProcessing from './imagePreprosesing';

const App = () => {
  const sportsRef = useRef(null);
  const prediksiRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamRef = useRef(null);
  const coursesRef = useRef(null);
  const fileUploadRef = useRef(null); // Tambahkan referensi ini

  const scrollToBenefitsSection = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTeamSection = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header 
        sportsRef={sportsRef} 
        prediksiRef={prediksiRef} 
        aboutRef={aboutRef} 
        benefitsRef={benefitsRef} 
        teamRef={teamRef} 
        coursesRef={coursesRef} 
        fileUploadRef={fileUploadRef} // Tambahkan ini
      />
      <HeroSection />
      <SportSection ref={sportsRef} />
      <AboutUs ref={aboutRef} scrollToBenefitsSection={scrollToBenefitsSection} />
      <BenefitsSection ref={benefitsRef} scrollToTeamSection={scrollToTeamSection} />
      <TeamSection ref={teamRef} />
      <DosenPengampu ref={coursesRef} />
      <ImageProcessing ref={fileUploadRef} />
      
    </div>
  );
};

export default App;
