// --- AUTO LOCATION ---
export const getAutoLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Device kamu gak support lokasi.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          const address = data?.display_name || "Alamat tidak ditemukan";

          resolve({
            address,
            latitude,
            longitude
          });
        } catch (err) {
          reject("Gagal mengambil alamat dari koordinat.");
        }
      },
      () => reject("Gagal mengambil lokasi.")
    );
  });
};


// --- FILE VALIDATION ---
export const validateFile = (file) => {
  if (!file) return { valid: false, error: "File tidak ditemukan." };

  if (file.size > 5 * 1024 * 1024) {
    return { valid: false, error: "Ukuran file maksimal 5MB." };
  }

  return { valid: true, error: null };
};


// --- BASIC REQUIRED FIELDS ---
export const validateForm = (data) => {
  if (!data.title || !data.location || !data.category || !data.file) {
    return "Mohon isi Judul, Lokasi, Pilih Kategori, dan Unggah Foto.";
  }
  return null;
};
