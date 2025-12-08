import { useState, useEffect } from "react";
import { Loader2, Send, XCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import UploadIcon from "../assets/images/file.svg";
import { CATEGORIES } from "../data/reportCategories";
import { generateWhisper } from "../utils/trashWhisper";
import { getAutoLocation, validateFile, validateForm } from "../utils/reportHelpers";

const ReportPage = () => {
  const [reportData, setReportData] = useState({
    title: "",
    location: "",
    description: "",
    category: "",
    file: null,
  });

  const [reportStatus, setReportStatus] = useState("input");
  const [whisperMessage, setWhisperMessage] = useState(null);
  const [error, setError] = useState(null);
  const [locLoading, setLocLoading] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (reportStatus === "input") {
        e.preventDefault();
        e.returnValue = ""; 
      }
    };

    window.addEventListener("beforeunload", handler);

    return () => window.removeEventListener("beforeunload", handler);
  }, [reportStatus]);

  const handleInputChange = (e) => {
    setReportData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // AUTO LOCATION
  const handleAutoLocation = async () => {
    setLocLoading(true);
    setError(null);

    try {
      const result = await getAutoLocation();
      const { address, latitude, longitude } = result;

      setReportData((prev) => ({
        ...prev,
        location: `${address} (${latitude}, ${longitude})`,
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLocLoading(false);
    }
  };

  // FILE UPLOAD
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { valid, error } = validateFile(file);

    if (!valid) return setError(error);

    setError(null);
    setReportData((prev) => ({ ...prev, file }));
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const formError = validateForm(reportData);
    if (formError) return setError(formError);

    setReportStatus("loading");

    setTimeout(() => {
      const message = generateWhisper(reportData.category);
      setWhisperMessage(message);
      setReportStatus("whispering");
    }, 2000);
  };

  const handleNewReport = () => {
    window.location.reload();
  };

  // RENDER FORM
  const renderInputForm = () => (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-4xl mb-20 mx-auto"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Laporan Kerusakan Lingkungan</h1>
        <p className="text-gray-500 py-4 border-b border-gray-800/30">
          Laporkan kondisi yang benar-benar mengganggu atau berpotensi bahaya. Sistem kami bakal cek ulang biar laporan yang penting bisa diprioritaskan.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 border border-red-300 rounded-lg">
          <XCircle size={20} />
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Judul Laporan</label>
        <input
          type="text"
          name="title"
          placeholder="Isi judul laporan"
          value={reportData.title}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-[#009A76]/20 focus:border-[#009A76] outline-none"
        />
      </div>

      {/* File Upload */}
      <div
        className="p-8 rounded-sm text-center cursor-pointer bg-[#BEFF61]/10 hover:bg-[#BEFF61]/20 transition"
        style={{
          outline: "3px dashed #BEFF61",
          outlineOffset: "-16px",
          borderRadius: "22px",
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (!file) return;
          const { valid, error } = validateFile(file);
          if (!valid) return setError(error);
          setError(null);
          setReportData((prev) => ({ ...prev, file }));
        }}
      >
        <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept="image/jpeg, image/png" />

        <label htmlFor="file-upload" className="block text-gray-600 cursor-pointer">
          <img src={UploadIcon} alt="upload" className="mx-auto mb-2 w-20 h-20" />
          <span className="font-semibold block">
            {reportData.file ? reportData.file.name : "Drag & drop file atau pilih manual"}
          </span>
          <p className="text-sm mt-1 text-gray-500">Format JPG/PNG — Maks 5MB</p>
        </label>

        <button
          type="button"
          className="mt-3 inline-flex items-center px-4 py-2 border-[#009A76] border text-[#009A76] rounded-lg text-sm hover:bg-[#009A76]/10"
          onClick={() => document.getElementById("file-upload").click()}
        >
          Choose File
        </button>
      </div>

      {/* Location */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Lokasi</label>
        <div className="flex gap-3">
          <input
            type="text"
            name="location"
            placeholder="Di mana lokasi tersebut?"
            value={reportData.location}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-[#009A76]/20 focus:border-[#009A76] outline-none"
          />

          <button
            type="button"
            onClick={handleAutoLocation}
            className="px-4 py-3 bg-[#009A76] text-white rounded-lg flex items-center justify-center hover:bg-[#007e63] transition"
          >
            {locLoading ? <Loader2 size={20} className="animate-spin" /> : <MapPin size={20} />}
          </button>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Deskripsi (Opsional)</label>
        <textarea
          name="description"
          placeholder="Tulis deskripsi disini"
          rows="3"
          value={reportData.description}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-4 focus:ring-[#009A76]/20 focus:border-[#009A76] outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">Kategori</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.value}
              onClick={() => setReportData((prev) => ({ ...prev, category: cat.value }))}
              className={`p-4 border-2 rounded-xl text-center cursor-pointer transition ${
                reportData.category === cat.value
                  ? "border-[#009A76] ring-2 ring-[#009A76]/50 bg-[#009A76]/10"
                  : "border-gray-200 bg-gray-50 hover:border-[#009A76]/50"
              }`}
            >
              <span className="text-3xl block mb-1">{cat.emoji}</span>
              <span className="font-semibold text-gray-800">{cat.label}</span>
              <p className="text-xs text-gray-500 mt-1 hidden md:block">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={reportStatus !== "input" || !reportData.category || !reportData.file}
        className="w-full flex items-center justify-center gap-2 bg-[#009A76] text-white px-5 py-3 rounded-full font-semibold text-lg hover:bg-[#009A76]/90 transition-all duration-300 disabled:opacity-50"
      >
        {reportStatus === "loading" ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
        Kirim Laporan
      </button>
    </form>
  );

  // LOADING
  const renderLoading = () => (
    <div className="py-24 text-center flex flex-col items-center">
      <Loader2 size={64} className="animate-spin text-[#009A76] mb-6" />
      <h2 className="text-3xl font-bold text-gray-800">Trash Whisperer Sedang Mendengarkan...</h2>
      <p className="text-gray-500 mt-2 text-lg">Menganalisis cerita di balik sampahmu.</p>
    </div>
  );

  // WHISPER RESULT
  const renderWhisper = () => {
    const currentCategory = CATEGORIES.find((c) => c.value === reportData.category);

    return (
      <div className="pt-8 text-center mx-auto relative">
        <Link to="/" className="inline-block">
          <span className="mx-4 inline-block bg-[#BEFF61]/50 text-[#005C46] px-4 py-1 rounded-full text-sm mb-4 cursor-pointer hover:shadow transition-all duration-200">
            Kamu mendapatkan 5 poin →
          </span>
        </Link>

        <h2 className="mx-4 text-3xl font-bold text-[#003327] mb-10">Laporan Berhasil Disuarakan!</h2>

        <div className="bg-[#FFF9E8] border border-[#F5D47A] p-8 rounded-xl shadow-sm max-w-2xl md:mx-auto mx-4 mb-6">
          <p className="text-md md:text-lg leading-relaxed text-gray-700">{whisperMessage}</p>
        </div>

        <img
          src={currentCategory?.image}
          alt="Whisper Illustration"
          className="w-full select-none mt-30 md:mt-0 pointer-events-none"
        />

        <button
          onClick={handleNewReport}
          className="absolute bottom-40 md:bottom-10 right-1/2 translate-x-1/2 bg-[#547AF6] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3D68F5] transition-all"
        >
          Laporkan Lagi
        </button>
      </div>
    );
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 pt-4 md:pt-8">
      <div className="w-full">
        {reportStatus === "input" && renderInputForm()}
        {reportStatus === "loading" && renderLoading()}
        {reportStatus === "whispering" && renderWhisper()}
      </div>
    </section>
  );
};

export default ReportPage;
