import React from 'react';

const sports = [
  { name: 'CRICKET', description: 'Cricket adalah olahraga yang dimainkan antara dua tim beranggotakan 11 pemain di lapangan oval besar dengan pitch di tengahnya. Dengan satu tim yang memukul dan tim lainnya yang melempar bola.', icon: 'cricket.png' },
  { name: 'SOCCER', description: 'Sepak bola adalah permainan dengan 2 tim beranggotakan 11 pemain, bertujuan mencetak gol ke gawang lawan tanpa menggunakan tangan. Pertandingan berlangsung 2 babak, waktu 45 menit.', icon: 'soccer.png' },
  { name: 'TENNIS', description: 'Tenis adalah olahraga raket di mana 2 pemain memukul bola melewati net ke area lawan. Dengan mengandalkan kekuatan, ketepatan, dan strategi.', icon: 'tennis.png' },
  { name: 'SWIMMING', description: 'Swimming adalah olahraga air dengan berbagai gaya seperti bebas, punggung, kupu-kupu, dan dada. Ini meningkatkan kesehatan fisik dan mengembangkan kekuatan.', icon: 'swim.png' },
  { name: 'WRESTLING', description: 'Wrestling adalah olahraga kontak di mana 2 atlet berusaha untuk menjatuhkan lawan mereka ke mat. Terdapat gaya gulat seperti greco-romawi, freestyle, dan gulat klasik.', icon: 'wrestling.png' },
  { name: 'BADMINTON', description: 'Badminton adalah olahraga raket di mana pemain memukul kok melewati net ke area lawan, mengandalkan kecepatan, ketepatan, dan strategi.', icon: 'badminton.png' },
  { name: 'KARATE', description: 'Karate adalah seni bela diri dengan teknik pukulan, tendangan, dan gerakan tubuh kuat. Gaya seperti Shotokan, Shito-ryu, Goju-ryu, dan Wado-ryu.', icon: 'karate.png' },
];

const SportsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-white py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom pertama, baris pertama: judul */}
          <div className="col-span-1 row-span-3 lg:row-span-3  flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-48">Jenis Olahraga</h2>
            <div className="flex items-start space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg shadow-md">
              <img src={process.env.PUBLIC_URL + '/' + sports[2].icon} alt={sports[2].name} className="w-16 h-16 object-contain transition-transform transform hover:scale-110" />
              <div>
                <h3 className="text-xl font-bold mb-2">{sports[2].name}</h3>
                <p className="text-gray-700">{sports[2].description}</p>
              </div>
            </div>
          </div>
          {/* Kolom kedua, baris pertama: Cricket */}
          <div className="col-span-3 lg:col-span-1 flex items-start space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg shadow-md">
            <img src={process.env.PUBLIC_URL + '/' + sports[0].icon} alt={sports[0].name} className="w-16 h-16 object-contain transition-transform transform hover:scale-110" />
            <div>
              <h3 className="text-xl font-bold mb-2">{sports[0].name}</h3>
              <p className="text-gray-700">{sports[0].description}</p>
            </div>
          </div>
          {/* Sisanya diatur dalam grid */}
          {sports.slice(1, 2).map((sport, index) => (
            <div key={index + 1} className="col-span-2 lg:col-span-1 flex items-start space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg shadow-md">
              <img src={process.env.PUBLIC_URL + '/' + sport.icon} alt={sport.name} className="w-16 h-16 object-contain transition-transform transform hover:scale-110" />
              <div>
                <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                <p className="text-gray-700">{sport.description}</p>
              </div>
            </div>
          ))}
          {sports.slice(3, 5).map((sport, index) => (
            <div key={index + 1} className="col-span-2 lg:col-span-1 flex items-start space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg shadow-md">
              <img src={process.env.PUBLIC_URL + '/' + sport.icon} alt={sport.name} className="w-16 h-16 object-contain transition-transform transform hover:scale-110" />
              <div>
                <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                <p className="text-gray-700">{sport.description}</p>
              </div>
            </div>
          ))}
          {sports.slice(5).map((sport, index) => (
            <div key={index + 1} className="col-span-2 lg:col-span-1 flex items-start space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg shadow-md">
              <img src={process.env.PUBLIC_URL + '/' + sport.icon} alt={sport.name} className="w-16 h-16 object-contain transition-transform transform hover:scale-110" />
              <div>
                <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                <p className="text-gray-700">{sport.description}</p>
              </div>
            </div>
          ))}
          {/* Kolom pertama, baris ketiga: kosong */}
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
});

export default SportsSection;
