import React, { useState } from 'react';

const FileUpload = React.forwardRef((props, ref) => {
  const [fileName, setFileName] = useState('No File Chosen');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : 'No File Chosen');
  };

  return (
    <div ref={ref} className="min-h-screen bg-[#091242] flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold text-white text-center mb-6 font-poppins hover:shadow-lg">
          Silahkan Upload File Untuk Proses Data
        </h1>
        <div className="bg-[#FDAF3B] rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-4 font-poppins animate-pulse">
            Upload Disini!
          </h2>
          <div className="mb-4">
            <label className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg cursor-pointer inline-block transition-colors duration-300 hover:bg-gray-300">
              <input type="file" className="hidden" onChange={handleFileChange} />
              Choose File
            </label>
            <span className="ml-3 text-gray-700">{fileName}</span>
          </div>
          <button className="w-full bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
});

export default FileUpload;
