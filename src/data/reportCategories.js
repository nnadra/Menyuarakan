import air from "../assets/images/categories/air.svg";
import kontruksi from "../assets/images/categories/kontruksi.svg";
import pembakaran from "../assets/images/categories/pembakaran.svg";
import plastik from "../assets/images/categories/plastik.svg";
import tps from "../assets/images/categories/tps.svg";
import tumpukan from "../assets/images/categories/tumpukan.svg";
import limbah from "../assets/images/categories/limbah.svg";
import lainnya from "../assets/images/categories/lainnya.svg";

export const CATEGORIES = [
  {
    value: "Tumpukan Sampah Liar",
    label: "Tumpukan Sampah Liar",
    emoji: "🗑️",
    image: tumpukan,
    desc: "Volume besar di lokasi ilegal.",
  },
  {
    value: "Sampah di Saluran Air",
    label: "Sampah di Saluran Air",
    emoji: "🌊",
    image: air,
    desc: "Sampah di sungai, selokan, atau danau.",
  },
  {
    value: "Limbah Berbahaya (B3)",
    label: "Limbah Berbahaya (B3)",
    emoji: "💀",
    image: limbah,
    desc: "Material kimia, medis, atau beracun.",
  },
  {
    value: "Pembakaran Sampah",
    label: "Pembakaran Sampah",
    emoji: "🔥",
    image: pembakaran,
    desc: "Pembakaran ilegal yang menyebabkan polusi asap.",
  },
  {
    value: "Plastik Berserakan",
    label: "Plastik Berserakan",
    emoji: "🥤",
    image: plastik,
    desc: "Kantong, botol, dan plastik kecil berserakan di area publik.",
  },
  {
    value: "Sampah Konstruksi",
    label: "Sampah Konstruksi",
    emoji: "🧱",
    image: kontruksi,
    desc: "Puing bangunan, kayu, semen, atau material renovasi.",
  },
  {
    value: "Fasilitas Sampah Penuh/Rusak",
    label: "Fasilitas Penuh/Rusak",
    emoji: "🛑",
    image: tps,
    desc: "TPS atau tempat sampah umum yang tidak berfungsi.",
  },
  {
    value: "Lainnya",
    label: "Lainnya",
    emoji: "📦",
    image: lainnya,
    desc: "Permasalahan sampah lainnya",
  },
];
