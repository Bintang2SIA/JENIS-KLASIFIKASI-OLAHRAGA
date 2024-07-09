import React from 'react';

const Prediksi = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-black text-center mb-6 font-poppins">
          Ini adalah bagian Prediksi
        </h1>
        {/* Prediksi content goes here */}
      </div>
    </div>
  );
});

export default Prediksi;
