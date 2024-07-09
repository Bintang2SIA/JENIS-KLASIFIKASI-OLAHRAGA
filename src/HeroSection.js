// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg1.png)`,
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="relative z-10 grid grid-cols-2 w-full h-full"
        style={{ paddingLeft: '300px', paddingRight: '300px' }}
      >
        <div className="flex flex-col justify-center items-start">
          <div className="mb-4">
            <span className="text-2xl lg font-bold bg-yellow-500 bg-opacity-25 text-white px-2 py-1 rounded">
              SELAMAT DATANG
            </span>
          </div>
          <h1 className="text-6xl md:text-6xl font-bold mb-4">Klasifikasi Jenis Olahraga</h1>
          <p className="text-2xl lg mb-8">Ayo, temukan minat olahragamu di sini!</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
