import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageProcessing = React.forwardRef((props, ref) => {
  const [fileName, setFileName] = useState("No File Chosen");
  const [predictedLabel, setPredictedLabel] = useState("");
  const [Manfaat, setManfaat] = useState("");
  const [TeknikBermain, setTeknikBermain] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [confidence, setConfidence] = useState("");

  const labelDescriptions = {
    0: {
      label: "BADMINTON",
      Manfaat: "Bermain badminton bermanfaat untuk kesehatan jantung, kebugaran fisik, fleksibilitas, dan kekuatan otot. Aktivitas ini juga mengurangi stres, meningkatkan keterampilan motorik, dan memperluas jaringan sosial.",
      TeknikBermain: "Pukulan forehand dan backhand untuk mengontrol kok, Gerakan lompatan dan lateral untuk mengambil kok dan menjangkau area lapangan, Teknik servis atas dan bawah untuk memulai permainan dan mengubah strategi, Strategi menyerang dengan pukulan keras dan bertahan dengan balasan konsisten."
    },
    1: {
      label: "CRICKET",
      Manfaat: "Bermain kriket meningkatkan kebugaran fisik, mengembangkan koordinasi mata-tangan, dan memperkuat kerjasama tim serta keterampilan komunikasi sosial.",
      TeknikBermain: "Teknik bermain kriket mencakup memukul dengan posisi tubuh yang tepat untuk menghindari out, melempar dengan variasi kecepatan dan sudut yang efektif, serta menangkap bola dengan teknik yang presisi. Pemahaman strategi permainan seperti manajemen posisi lapangan dan menekan lawan juga penting untuk mencapai kesuksesan dalam kriket."
    },
    2: {
      label: "KARATE",
      Manfaat: "Karate memberikan manfaat signifikan seperti peningkatan kekuatan fisik, fleksibilitas, keseimbangan, dan koordinasi. Latihan ini juga mengajarkan disiplin, kontrol diri, dan meningkatkan konsentrasi serta rasa percaya diri.",
      TeknikBermain: "Teknik bermain karate mencakup kihon (teknik dasar seperti pukulan dan tendangan), kata (urutan gerakan yang mengajarkan strategi dan fluensi), serta kumite (latihan pertarungan untuk mengasah reaksi cepat dan strategi dalam situasi nyata). Latihan ini juga fokus pada pengembangan kekuatan fisik, keseimbangan, fleksibilitas, dan konsentrasi mental."
    },
    3: {
      label: "SOCCER",
      Manfaat: "Bermain soccer meningkatkan kebugaran fisik, mengembangkan keterampilan motorik dan koordinasi tubuh, serta melatih keterampilan tim, komunikasi, dan strategi. Ini juga memberikan manfaat untuk kesehatan jantung dan keterampilan mental seperti konsentrasi dan pengambilan keputusan.",
      TeknikBermain: "Teknik bermain soccer mencakup menendang, menggiring bola, dan menyundul dengan presisi, serta mengembangkan strategi permainan untuk menjaga penguasaan bola dan menciptakan peluang gol."
    },
    4: {
      label: "SWIMMING",
      Manfaat: "Berenang memberikan manfaat signifikan seperti peningkatan kekuatan otot, kardiovaskular yang sehat, dan meningkatkan fleksibilitas tubuh. Selain itu, aktivitas ini dapat mengurangi stres dan meningkatkan suasana hati secara keseluruhan.",
      TeknikBermain: "Teknik berenang meliputi teknik pernapasan yang tepat, gaya renang seperti gaya bebas, punggung, dada, dan kupu-kupu, serta keterampilan mengatur irama dan posisi tubuh untuk meningkatkan kecepatan dan efisiensi dalam air."
    },
    5: {
      label: "TENIS",
      Manfaat: "Bermain tenis meningkatkan kebugaran fisik, keterampilan motorik, dan strategi permainan. Ini juga membantu mengurangi stres dan meningkatkan suasana hati secara keseluruhan.",
      TeknikBermain: "Teknik bermain tenis mencakup penguasaan pukulan dasar seperti forehand dan backhand, teknik servis, gerakan cepat di lapangan, dan strategi untuk mengatur permainan dan menanggapi lawan."
    },
    6: {
      label: "WRESTLING",
      Manfaat: "Wrestling memberikan manfaat berupa peningkatan kekuatan fisik, koordinasi, dan ketangkasan. Ini juga mengajarkan disiplin, kemandirian, dan memperkuat keterampilan sosial seperti komunikasi dan kerjasama tim.",
      TeknikBermain: "Teknik wrestling meliputi penempatan tubuh, pukulan dan serangan, teknik groundwork, penghindaran, pertahanan, serta pengembangan strategi dan taktik untuk mengontrol permainan dan mencapai kemenangan."
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));
    setFileName(file ? file.name : "No File Chosen");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://27bd-34-122-94-29.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setManfaat(labelData.Manfaat);
          setTeknikBermain(labelData.TeknikBermain);
          setConfidence(data.confidence.toFixed(2));
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus("");
    }, 3000); // Hides the status message after 3 seconds

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <div ref={ref} className="min-h-screen bg-[#091242] flex flex-col items-center justify-center p-4">
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
              <input type="file" className="hidden" onChange={handleFileUpload} />
              Choose File
            </label>
            <span className="ml-3 text-gray-700">{fileName}</span>
          </div>
          <button className="w-full bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Upload
          </button>
        </div>
      </div>

      {uploadedFile && (
        <div className="w-full max-w-6xl p-6 mt-6 flex justify-center">
          <div className="w-full max-w-6xl bg-[#FDCB67] p-8 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-10 bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between h-full">
                <div className="w-full lg:w-3/5 flex justify-center">
                  <img
                    src={uploadedFile}
                    alt="Uploaded"
                    className="object-cover w-full h-full p-5"
                  />
                </div>
                <div className="w-full lg:w-2/5 p-4 flex flex-col items-center justify-center">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#091242] font-poppins">RESULT</h2>
                    <h3 className="text-3xl font-bold text-[#FDAF3B] mb-4">{predictedLabel}</h3>
                  </div>
                  <div className="text-lg font-bold text-[#091242] mb-2">Manfaat</div>
                  <p className="text-[#091242] mb-4">{Manfaat}</p>
                  <div className="text-lg font-bold text-[#091242] mb-2">Teknik Bermain</div>
                  <p className="text-[#091242] mb-4">{TeknikBermain}</p>
                  <div className="text-lg font-bold text-[#091242] mb-2">Akurasi</div>
                  <p className="text-[#091242]">{confidence}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Message */}
      {status && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-lg z-50">
          {status}
        </div>
      )}
    </div>
  );
});

export default ImageProcessing;
