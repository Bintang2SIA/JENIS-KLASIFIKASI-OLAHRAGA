import React, { useEffect, useRef } from 'react';

const AboutUs = React.forwardRef(({ scrollToBenefitsSection }, ref) => {
  const bottomSectionRef = useRef();

  useEffect(() => {
    if (bottomSectionRef.current) {
      bottomSectionRef.current.classList.add('animate-fadeInUp');
    }
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Bagian atas dengan gambar latar belakang */}
      <div className="relative h-1/2">
        <img
          src="Background.png"
          alt="Swimmer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian bawah dengan latar belakang putih */}
      <div
        ref={bottomSectionRef}
        className="relative h-1/2 mt-[-5vh] pt-[5vh] transform -translate-y-[20%] transition-transform duration-1000"
      >
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <div className="flex">
            {/* Konten teks */}
            <div className="flex-1 pr-8">
              <h2 className="text-1xl font-bold mb-4 text-yellow-10"></h2>
              <h2 className="text-2xl font-bold mb-4 text-black-500">Tentang Kami</h2>
              <p className="text-gray-700">
                Olahraga merupakan salah satu aktivitas fisik yang penting untuk menjaga kesehatan dan
                kebugaran tubuh. Saat ini, terdapat berbagai jenis olahraga yang populer di masyarakat, seperti
                cricket, wrestling, tennis, badminton, soccer, swimming, dan karate. Masing-masing jenis olahraga memiliki karakteristik dan aturan yang berbeda-beda.
                Bagi orang awam, mengenal dan membedakan jenis-jenis olahraga tersebut dapat menjadi hal
                yang sulit. Hal ini seringkali menyebabkan kebingungan dalam memilih olahraga yang tepat
                untuk dilakukan. Selain itu, informasi mengenai jenis-jenis olahraga tersebut seringkali
                tersebar di berbagai sumber, sehingga sulit untuk dicari dan diakses.
              </p>
            </div>

            {/* Gambar */}
            <div className="flex-none w-1/3">
              <img
                src="images.png"
                alt="Sport Field"
                className="w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToBenefitsSection}
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
