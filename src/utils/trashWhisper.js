export const generateWhisper = (category) => {
  switch (category) {
    case 'Sampah di Saluran Air':
      return "'Aku sampah yang kebawa arus terus nyangkut di saluran air ini. Karena numpuk, alirannya jadi melambat dan airnya mulai makin keruh. Kalau dibiarkan, aku bisa bikin banjir kecil atau bikin bau nggak enak. Makasih udah laporin aku. Semoga aku cepat diangkat sebelum bikin masalah lebih gede.'";

    case 'Limbah Berbahaya (B3)':
      return "'Aku limbah berbahaya yang lagi bocor/terbuang sembarangan… dan ini nggak baik sama sekali. Bahan di dalam aku bisa ngeganggu tanah, air, bahkan makhluk hidup di sekitar sini. Semakin lama aku dibiarkan, efeknya makin parah. Untung kamu lihat aku. Aku cuma pengen diberesin sebelum bikin lingkungan di sini tambah capek.'";

    case 'Tumpukan Sampah Liar':
      return "'Akhirnya ada yang ngeh sama aku… Aku tumpukan sampah yang numpuk di sini udah lama banget. Isinya campur-aduk: sisa makanan, plastik, kardus, kadang barang aneh yang nggak jelas asalnya. Kalau aku dibiarkan terus, aku bakal makin bau, ngundang serangga, dan bikin area sini nggak nyaman buat siapa pun. Makasih udah peduli. Semoga aku segera diberesin biar tempat ini bisa napas lagi.'";

    case 'Pembakaran Sampah':
      return "'Akhirnya ada yang notice. Aku lagi dibakar sembarangan di sini, dan asapku nyebar ke mana-mana—bikin udara sesek, bikin bau nyegrak, bikin langit kusam. Aku cuma sampah, tapi kalau dipaksa kebakar gini, aku berubah jadi racun buat semua makhluk. Makasih udah laporin aku sebelum aku bikin lingkungan makin sesak.'";

    case 'Fasilitas Sampah Penuh/Rusak':
      return "'Syukurlah kamu lihat aku. Aku tempat sampah yang udah kewalahan. Isinya numpuk, tutupku nggak nutup, beberapa bagianku juga udah mulai rusak karena lama nggak dirawat. Sampah yang meluber ini gampang banget kebawa angin atau hewan, jadinya makin berantakan. Makasih udah ngelaporin aku, biar lingkungan sekitar nggak makin kacau gara-gara kondisiku yang begini.'";

    case 'Plastik Berserakan':
      return "'Akhirnya ada yang lihat aku! Aku plastik yang terbang dari tangan orang. Kalau aku kelamaan di sini, aku bisa pecah jadi mikroplastik dan masuk ke tanah atau sungai. Makasih udah laporin aku, semoga aku segera dibersihin sebelum aku bikin bumi sedih!'";

    case 'Sampah Konstruksi':
      return "'Aku puing-puing dari proyek yang ditinggal gitu aja. Debuku beterbangan, serpihanku tajam, dan kalau hujan aku bisa nyumbat saluran air. Orang kira aku 'urusan pembangunan', padahal kalau dibiarkan, aku cuma bikin jalanan kacau dan lingkungan makin berantakan. Makasih udah peduli, aku butuh diambil sebelum chaos makin numpuk.'";

    default:
      return "Hai Penyuara! Laporanmu sudah masuk. Makasih udah bantu ngejaga lingkungan. Setiap laporan ngaruh banget buat kondisi di sekitar sini.";

  }
};
