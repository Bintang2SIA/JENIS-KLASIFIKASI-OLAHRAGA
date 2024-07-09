import React from 'react';

const benefits = [
  {
    title: "Meningkatkan Kesehatan Fisik",
    image: "three.jpg"
  },
  {
    title: "Meningkatkan Kesehatan Mental",
    image: "patient.jpg"
  },
  {
    title: "Meningkatkan Kualitas Tidur",
    image: "sleep.jpg"
  },
  {
    title: "Meningkatkan Energi dan Stamina",
    image: "runner.jpg"
  },
  {
    title: "Meningkatkan Kesehatan Otak dan Memori",
    image: "brain.jpg"
  }
];

const BenefitsSection = React.forwardRef(({ scrollToTeamSection }, ref) => {
  return (
    <div ref={ref} className="bg-white py-12">
      <h2 className="text-2xl text-[#1C1F35] font-bold text-center mb-8">Manfaat Jika Sering Berolahraga</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden w-64 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img 
              src={benefit.image} 
              alt={benefit.title} 
              className="w-full h-40 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-4 bg-[#091242] text-white">
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={scrollToTeamSection} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105">
          NEXT
        </button>
      </div>
    </div>
  );
});

export default BenefitsSection;
