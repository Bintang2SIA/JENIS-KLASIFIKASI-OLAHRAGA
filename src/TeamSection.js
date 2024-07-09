import React from 'react';

const teamMembers = [
  {
    name: "Bintang Puspita Dewi",
    company: "Back-End Developer",
    image: "bintang.png",
    quote: "Pada bagian Back-End Developer ini kami menggunakan bahasa python dengan bantuan framework flaks untuk mengelola data yang telah kami modelling dengan Machine Learning.",
    rating: 0
  },
  {
    name: "Arindi Frestisia Ningtias",
    company: "Front-End Developer",
    image: "arindi.png",
    quote: "Pada bagian Front-End Developer ini kami menggunakan pemrograman React dengan bantuan css berupa tailwind untuk menampilkan data dari sisi Back-End Developer.",
    rating: 0
  }
];

const TeamSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white py-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-[#1C1F35] animate-bounce">
            Anggota Kelompok
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`flex-1 overflow-hidden transition-transform transform hover:scale-105 shadow-lg rounded-lg ${index % 2 === 0 ? 'bg-[#F4F4F4]' : 'bg-[#091242] text-white'}`}
            >
              <div className="flex items-center p-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p>{member.company}</p>
                </div>
              </div>
              <div className="p-6">
                <p style={{ fontStyle: 'italic', color: member.name === 'Bintang Puspita Dewi' ? 'navy' : 'white' }}>{member.quote}</p>
                <div className="flex mt-4">
                  {[...Array(member.rating)].map((star, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.372 1.24.588 1.81l-3.123 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.538 1.118l-3.123-2.27a1 1 0 00-1.176 0l-3.123 2.27c-.783.57-1.838-.197-1.538-1.118l1.2-3.674a1 1 0 00-.364-1.118l-3.123-2.27c-.783-.57-.381-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default TeamSection;
