import React, { useState } from 'react';

const Header = ({ sportsRef, prediksiRef, aboutRef, benefitsRef, teamRef, coursesRef, fileUploadRef }) => {
  const [activeMenu, setActiveMenu] = useState('Beranda');

  const scrollToSection = (ref, menuName) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveMenu(menuName);
    }
  };

  // Function untuk scroll ke ImageProcessing
  const scrollToImageProcessing = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveMenu('Proses Data');
    }
  };

  return (
    <header className="bg-[#091242] text-white py-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" className="h-20 w-20 mr-2" />
          <div className="text-3xl font-bold">SPORTS</div>
        </div>
        <nav className="space-x-4 flex items-center" style={{ fontSize: '20px' }}>
          <button
            onClick={() => scrollToSection(sportsRef, 'Beranda')}
            className={`hover:text-gray-300 transition-colors duration-300 relative ${activeMenu === 'Beranda' ? 'border-b-2 border-white' : ''}`}
          >
            Beranda
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => scrollToSection(aboutRef, 'Tentang Kami')}
            className={`hover:text-gray-300 transition-colors duration-300 relative ${activeMenu === 'Tentang Kami' ? 'border-b-2 border-white' : ''}`}
          >
            Tentang Kami
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => scrollToSection(benefitsRef, 'Informasi')}
            className={`hover:text-gray-300 transition-colors duration-300 relative ${activeMenu === 'Informasi' ? 'border-b-2 border-white' : ''}`}
          >
            Informasi
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => scrollToSection(teamRef, 'Biodata')}
            className={`hover:text-gray-300 transition-colors duration-300 relative ${activeMenu === 'Biodata' ? 'border-b-2 border-white' : ''}`}
          >
            Biodata
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => scrollToSection(coursesRef, 'Mata Kuliah')}
            className={`hover:text-gray-300 transition-colors duration-300 relative ${activeMenu === 'Mata Kuliah' ? 'border-b-2 border-white' : ''}`}
          >
            Mata Kuliah
          </button>
        </nav>
        {/* Button Proses Data */}
        <button
          className="bg-white text-blue-900 text-xl px-4 py-2 rounded transition-transform duration-300 transform hover:scale-105"
          onClick={scrollToImageProcessing}
        >
          Proses Data
        </button>
      </div>
    </header>
  );
};

export default Header;
