import React from "react";
import Profile from "../assets/images/dashboard/profile.svg";
import Point from "../assets/images/dashboard/point.svg";
import LaporanImg from "../assets/images/dashboard/report-img.svg";
import TotalLaporanImg from "../assets/images/dashboard/total-laporan.svg";
import ValidLaporanImg from "../assets/images/dashboard/validation-img.svg";
import PendingImg from "../assets/images/dashboard/pending-img.svg";
import ImgReport from "../assets/images/dashboard/tumpukan-sampah.jpg";
import ImgReport2 from "../assets/images/dashboard/sampah-ditrotoar.webp";
import ImgReport3 from "../assets/images/dashboard/sampah-dihalte.jpeg";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Phone, Mail } from "lucide-react";

const Dashboard = () => {
  const data = [
    {
      img: ImgReport,
      lokasi: "Tangerang",
      waktu: "21/08/2025 (12.00)",
      status: "Valid",
      poin: 50,
    },
    {
      img: ImgReport2,
      lokasi: "Depok",
      waktu: "17/08/2025 (17.00)",
      status: "Valid",
      poin: 10,
    },
    {
      img: ImgReport3,
      lokasi: "Jakarta Utara",
      waktu: "12/08/2025 (13.00)",
      status: "Pending",
      poin: 30,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="px-16 py-10 grid grid-cols-12 gap-8 font-sans">

      {/* LEFT */}
      <div className="col-span-3 space-y-6">

        {/* PROFILE */}
       <div className="bg-[#E9EEFF] rounded-3xl p-6">
          <img src={Profile} className="mx-auto mb-4 w-32" />

          <h2 className="font-semibold text-lg text-center mb-6">
             Jadit naa
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#5B7CFA]" size={18} />
              <span>Jakarta Selatan</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="text-[#5B7CFA]" size={18} />
              <span>02 Februari 2000</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#5B7CFA]" size={18} />
              <span>+62 87679979988</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#5B7CFA]" size={18} />
              <span>alyaramadhani@gmail.com</span>
            </div>
          </div>
        </div>

        {/* BUAT LAPORAN */}
        <div className="bg-[#F4FFE5] rounded-3xl p-6 text-center">
          <img src={LaporanImg} className="mx-auto mb-6 w-32" />
          <button 
            onClick={() => navigate('/report')}
            className="bg-green-700 text-white px-6 py-3 rounded-xl w-full">
            Buat Laporan Baru
          </button>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("isLogin"); 
            navigate("/");
            window.location.reload(); 
          }}
          className="bg-green-700 text-white px-6 py-3 rounded-xl w-full"
        >
          Log Out
        </button>
      </div>

      {/* RIGHT */}
      <div className="col-span-9 space-y-8">

        {/* TOTAL POIN */}
        <div className="bg-[#E5FFF9] rounded-3xl p-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src={Point} className="w-20" />
            <div>
              <p className="text-green-700">Total Poin</p>
              <h1 className="text-5xl font-bold">1.250</h1>
            </div>
          </div>
          <button className="bg-green-700 text-white px-8 py-3 rounded-xl">
            Tukar Poin
          </button>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#F4FFE5] rounded-3xl p-6 flex items-center gap-4">
            <img src={TotalLaporanImg} className="w-16" />
            <div>
              <p>Total Laporan</p>
              <h1 className="text-4xl font-bold">25</h1>
            </div>
          </div>

          <div className="bg-[#E5FFF9] rounded-3xl p-6 flex items-center gap-4">
            <img src={ValidLaporanImg} className="w-16" />
            <div>
              <p>Valid</p>
              <h1 className="text-4xl font-bold">20</h1>
            </div>
          </div>

          <div className="bg-[#E9EEFF] rounded-3xl p-6 flex items-center gap-4">
            <img src={PendingImg} className="w-16" />
            <div>
              <p>Pending</p>
              <h1 className="text-4xl font-bold">5</h1>
            </div>
          </div>
        </div>

        {/* RIWAYAT */}
        <div className="bg-white p-8 rounded-3xl">
  <h2 className="text-xl font-semibold mb-6">Riwayat Laporan</h2>

  {/* HEADER */}
  <div className="grid grid-cols-7 text-gray-500 mb-4">
    <p>Foto</p>
    <p>Lokasi</p>
    <p className="col-span-2">Tanggal & Jam</p>
    <p>Status</p>
    <p>Poin</p>
    <p></p>
  </div>

  {data.map((item, i) => (
    <div key={i} className="grid grid-cols-7 items-center py-4 border-t">
      <img src={item.img} className="w-14 h-14 rounded-lg object-cover" />
      <p>{item.lokasi}</p>
      <p className="col-span-2">{item.waktu}</p>

      <span
        className={`px-4 py-2 rounded-full text-white text-sm w-fit ${
          item.status === "Valid" ? "bg-green-600" : "bg-blue-500"
        }`}
      >
        {item.status}
      </span>

      <p className="font-semibold">{item.poin}</p>

      <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full">
        Lihat Detail
      </button>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Dashboard;
