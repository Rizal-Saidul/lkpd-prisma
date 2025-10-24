# Demo UI — Belajar Bangun Ruang: Prisma

Ringkasan: proyek kecil ini adalah versi rapi dan siap-presentasi dari halaman pembelajaran tentang prisma. Struktur memisahkan markup, style, dan script sehingga lebih efektif untuk penyajian dan pengembangan.

Files:
- `index.html` — halaman utama, semantik, siap dipresentasikan.
- `css/style.css` — styles terpisah, responsif.
- `js/app.js` — rendering data, kuis, dan interaksi kecil.

Cara menjalankan:
1. Buka `index.html` di browser (double-click atau `open`/`xdg-open`).
2. Untuk server lokal (opsional) jalankan di direktori ini: `python3 -m http.server` lalu buka http://localhost:8000

Catatan efisiensi penulisan kode:
- CSS dan JS dipisah agar mudah dipresentasikan dan di-review.
- Data (daftar prisma dan pertanyaan kuis) dibuat sebagai array di `js/app.js` sehingga mudah diubah tanpa mengedit HTML.
- Struktur semantik (`header`, `main`, `section`, `footer`) meningkatkan aksesibilitas dan navigasi presentasi.

Next steps (opsional):
- Tambah unit tests kecil untuk skrip kuis.
- Tambah animasi kecil CSS untuk transisi saat berpindah bagian.
- Tambah mode cetak / slide untuk presentasi offline.
