import React from 'react';

const DosenPengampu = React.forwardRef((props, ref) => {
  const dosenList = [
    {
      name: 'Muhammad Mahrus Zain, S.S.T., M.T.I.',
      role: 'Dosen Framework Lanjutan',
      image: 'pakmahrus.png',
    },
    {
      name: 'Mardhiah Fadli, S.T., M.T.',
      role: 'Dosen Manajemen Proyek',
      image: 'bumardhiah.png',
    },
    {
      name: 'Dini Nurmalasari, S.T., M.T',
      role: 'Dosen Data Mining',
      image: 'budini.png',
    },
  ];

  return (
    <div ref={ref} className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Dosen Pengampu</h2>
        <div className="flex justify-center space-x-8">
          {dosenList.map((dosen, index) => (
            <div
              key={index}
              className="w-64 bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={dosen.image}
                  alt={dosen.name}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="p-4 bg-gray-800 text-white font-poppins flex-grow flex flex-col justify-between">
                {/* Apply Poppins font */}
                <div>
                  <h3 className="font-semibold text-lg">{dosen.name}</h3>
                  <p className="text-sm">{dosen.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default DosenPengampu;
