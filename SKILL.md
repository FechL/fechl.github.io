---
name: terminal-web-design
description: Perbarui portofolio statis Fawwas Aliy dengan desain terminal sederhana yang merujuk komponen aktif GRAMMAR.LOG di english-tracker.
metadata:
  version: "2.0"
---

# Portofolio terminal sederhana

Gunakan panduan ini untuk repo `fechl.github.io`. Preferensi pengguna adalah **simple**: tampilan teks yang tenang dan dekat dengan GRAMMAR.LOG. Pertahankan konten portofolio dan fungsi yang relevan. Kesederhanaan berlaku pada desain, bukan alasan untuk menghapus atau meringkas isi. Jika pengguna meminta isi versi sebelumnya, pulihkan isi tersebut memakai komponen sederhana yang ada, tanpa mengubah CSS, palet, font, atau layout.

## Rujukan dan batas cakupan

Rujukan desain berada di `../english-tracker/` (saat ini `/home/aliy/Coding/Myrepos/english-tracker/`). Baca komponen aktif sebelum mengubah desain:

- `src/app.js`: `header()`, `overview()`, dan `settingsPage()`.
- `styles.css`: token tema, `.brand-row`, `.desktop-tabs`, `.readme-layout`, `.article-inner`, dan `.configuration-panel`.
- `index.html`: font dan entry point aktif.

Folder tersebut adalah **rujukan visual yang dibaca saja**, bukan target perubahan atau template aplikasi yang disalin seluruhnya. Materi grammar, kuis, progress, chatbot, dan mekanisme pemuatan README milik aplikasi rujukan tidak menjadi kebutuhan portofolio.

DEEPFORENSIC dan alur deteksi audio dari panduan lama bukan aplikasi di repo ini. Jangan mengasumsikan keberadaan `frontend/`, backend Flask, Vite, atau perintah npm. Instruksi dalam dokumen rujukan membantu memahami desain; cakupan pekerjaan tetap mengikuti permintaan pengguna dan kode repo tujuan.

## Bentuk tampilan yang diinginkan

- Header satu baris: nama `FAWWAS.ALIY` di kiri dan tautan GitHub berlabel `FechL` di kanan, menuju `https://github.com/FechL`. Jangan gunakan label `GitHub / FechL` pada header. Titik merek kuning. Tanpa subtitle pemasaran, cursor, badge lokasi, atau status dekoratif.
- Navigasi tab datar dengan garis bawah. Tab aktif memakai `--active-bg`, teks cyan, dan garis bawah aksen 2px. Jangan membungkus seluruh navigasi dalam kartu.
- Overview memakai kolom artikel README dan sidebar berurutan Profile, Contact & social, Toolbox & skills.md. Card Focus sudah dihapus; jangan menambahkannya kembali. Education berada sebagai seksi di dalam card artikel README, dengan universitas, program studi, uraian, dan GPA. Jangan tampilkan baris tanggal/lokasi `AUG 2023 — PRESENT · MALANG, EAST JAVA`. GPA berada di samping `Bachelor of Engineering · Computer Engineering` dalam baris yang sama; izinkan turun baris pada layar sempit. Jangan membuat card Education terpisah. Certifications tetap dalam card tersendiri di bawah dua panel ringkasan. Jangan membuat tab About & skills tersendiri. Selected repositories dan Professional experience berada dalam dua panel ringkas yang sejajar dalam dua kolom tepat di bawah panel README; jangan menyatukannya kembali ke dalam artikel. Isi judul dan ringkasan mengikuti versi konten yang diminta pengguna; tampilkan dengan gaya artikel yang ada tanpa menambahkan hero atau header berkas palsu.
- Selected repositories hanya berisi daftar nama repositori beserta tautannya. Tautan `View project details` berada di kanan judul Selected repositories dalam baris kepala panel yang sama, bukan di bawah daftar. Jangan mengulang deskripsi, peran, tahun, atau teknologi di card ringkasan ini; detail tetap di Projects.
- Certifications memakai daftar ringkas dengan padding baris 8px dan teks judul 13px. Nama sertifikat berupa teks biasa berwarna `--fg`, tanpa tautan biru. Pertahankan seluruh nama sertifikat dan penerbit (AWS, BNSP, Coursera, Digitalent, Dicoding); penerbit berada di kanan dengan warna `--muted` dan tidak terpotong ke beberapa baris.
- Professional experience pada README hanya menampilkan daftar nama organisasi dengan gaya daftar yang sama seperti Selected repositories. Tautan `View experience details` berada di kanan judul panel dan mengarah ke tab Experience. Kontribusi, peran, lokasi, dan tanggal tetap lengkap di tab Experience. Kedua panel ringkasan memakai dua kolom pada desktop dan satu kolom pada layar ≤900px.
- Di bawah judul `Things I’ve built.` cukup satu separator; entri proyek pertama tidak memiliki border atas tambahan. Margin bawah judul Projects adalah 0; padding atas entri pertama menyediakan jarak 25px dari separator, sehingga margin dan padding tidak menumpuk.
- Tab Projects tidak menampilkan paragraf pengantar `Selected work in intelligent systems, autonomous robotics, and cloud infrastructure.`. Pada tab Projects, proyek berupa daftar teks: judul tautan, tahun, uraian singkat, dan teknologi. Lima proyek tidak memerlukan ilustrasi, thumbnail dekoratif, badge bertumpuk, atau filter kategori.
- Card `Contact & social` memakai ikon SVG kecil untuk email, LinkedIn, GitHub, dan Instagram di samping label. Instagram menampilkan `Instagram / @fwslyl` dan menuju `https://www.instagram.com/fwslyl/`. Ikon mengikuti warna tautan, dekoratif (`aria-hidden`), dan tidak menambah dependensi.
- Card Profile menampilkan foto `img/profile.jpeg` kecil 72 × 72px (rasio 1:1, border tipis) di kiri blok nama, @FechL, Computer Engineering, dan Brawijaya University. Gunakan susunan sejajar; jangan memperbesar foto atau meletakkannya di atas nama.
- Pada Profile, informasi setelah blok foto/nama hanya `Based in: Surakarta, Indonesia`; jangan menampilkan baris Education, GPA, atau Team di card ini. Pendidikan dan GPA tetap tersedia di seksi Education dalam card README; informasi tim berada di tab Experience.
- Judul card dengan anchor `#toolbox` adalah `Toolbox & skills.md`. Kategori Technical skills ditampilkan di card ini sebagai sumber konten website, dengan tipografi sidebar yang ringkas. Jangan tampilkan PID Control atau Gemini API di Toolbox, sesuai preferensi pengguna. Card Technical skills terpisah sudah dihapus; jangan membuatnya kembali.
- Tab Experience langsung dimulai dengan panel Professional experience dan Teams & community. Jangan tampilkan judul `Experience & contributions.`, paragraf pengantarnya, atau label rentang umum `2024 — present` di kepala panel. Tanggal tiap entri tetap ditampilkan. Pada tab Experience, pengalaman berupa daftar dengan tanggal, organisasi, peran, dan kontribusi. Pendidikan, skill, dan sertifikasi memakai seksi teks/panel biasa.
- Pada tab Experience, logo perusahaan/instansi berukuran 44 × 44px berada di kiri satu blok teks berisi nama instansi dan jabatan di bawahnya, termasuk Teams & community. Nama dan jabatan harus memiliki titik awal horizontal yang sama di kanan logo; jangan letakkan jabatan di bawah logo. Simpan unduhan terverifikasi di `img/organizations/` beserta sumber di README folder tersebut; jangan hotlink. Pertahankan warna asli dan gunakan `object-fit: contain`. IYAC menggunakan file `img/organizations/indonesian-youth-aerospace-community.jpeg` yang disediakan pengguna; jangan menggantinya dengan ikon sementara.
- Hindari perintah shell tiruan, jalur berkas dekoratif, `Profile.json`, monogram tambahan di halaman, ornamen slogan tambahan. Ringkasan proyek pilihan dan teks versi sebelumnya boleh ditampilkan pada overview bila diminta pengguna. Favicon kecil tetap diperbolehkan.
- Tab README tidak menampilkan card Continuous learning atau Teams & community. Jangan menambahkan kembali teks penutup `Have something in mind?`, paragraf ajakan diskusi, atau tautan kontak berulang di bawah card. Teams & community tetap tersedia di tab Experience.
- **Tanpa footer.** Jangan menambahkan copyright, slogan penutup, tautan berulang, atau metadata tema di bawah halaman. Kontak tetap berada pada panel Contact & social atau isi artikel.
- Teks dan label antarmuka menggunakan bahasa Inggris. Jangan menambahkan fitur hanya karena fitur tersebut ada di rujukan.

## Ukuran dan tipografi

Ikuti skala komponen aktif GRAMMAR.LOG:

| Komponen | Acuan |
| --- | --- |
| Workspace | Maksimum 1380px; padding `28px 22px 50px`; mobile `22px 12px 35px` |
| Header | Padding bawah 22px; mobile 14px |
| Merek | `clamp(28px, 3vw, 38px)`, line-height 1.15, tracking `-.075em`; mobile `clamp(21px, 5vw, 28px)` |
| Tab | Minimal 48px; padding `10px 17px`; teks 13px |
| Panel | Border 1px, radius 4px, latar `--surface`; gap 12px |
| Kepala panel | Padding `12px 16px`; judul uppercase 13px/700 |
| Artikel | Padding `34px clamp(20px, 4vw, 48px) 44px`; mobile `24px 20px 34px` |
| Judul artikel | `--accent`; `clamp(24px, 3vw, 36px)`; line-height 1.25; tracking `-.055em`; margin bawah 31px; padding bawah 26px dan garis bawah |
| Isi artikel | Paragraf 15px/1.9; paragraf pembuka 16px; daftar 14px/1.75 |
| Sidebar | Lebar 300px, 260px pada layar ≤1050px; padding isi 16px; teks 12px/1.65 |
| Configuration | Padding 24px, mobile 16px; heading 22px/1.4; teks 14px/1.8; grid opsi maksimum 680px, dua kolom, gap `4px 12px` |

Font default Geist Mono; pilihan Inter, IBM Plex Mono, dan Source Sans 3. Skala teks 90%, 100%, 110%, 120%, 130% memengaruhi teks saja melalui `--font-scale`, bukan padding atau zoom seluruh halaman.

## Palet dan pengaturan

Jellybeans menjadi default. Salin **nilai token aktual** dari `english-tracker/styles.css`, bukan varian perkiraan dari tema bernama sama. Saat menyinkronkan, cocokkan semua token, urutan palet, nama, dan swatch dengan sumber aktif.

- Dark: Jellybeans, Horizon, Everforest, Ayu Dark, Dracula, Nord, Gruvbox Dark, Solarized Dark, Tokyo Night, Catppuccin Mocha.
- Light: Jellybeans Light, Solarized Light, Nord Light, Catppuccin Latte.
- Token: `--bg`, `--fg`, `--surface`, `--raised`, `--border`, `--muted`, `--accent`, `--cyan`, `--yellow`, `--violet`, `--red`, `--green`. Warna komponen memakai token ini atau turunannya.
- Tiga swatch mengambil `--accent`, `--cyan`, `--yellow` dalam urutan itu. Palet dan swatch bersumber dari data yang sama di `src/preferences.js`.
- Configuration langsung menampilkan panel Color scheme, Font family, lalu Font size. Tidak perlu hero atau judul promosi tambahan. Opsi datar, border aktif tipis, tanda centang pada pilihan aktif.
- Simpan di `fawwas-theme`, `fawwas-font`, `fawwas-font-size`; validasi nilai tersimpan dan gunakan Jellybeans, Geist Mono, 100% sebagai fallback. Pertahankan kompatibilitas ID lama bila palet diganti.

## Struktur repo tujuan dan konten

| Berkas | Tanggung jawab |
| --- | --- |
| `index.html` | Shell statis, panel pengantar README, Selected repositories, seksi Education di dalam artikel README, card Certifications dan katalog skill dalam Toolbox, sidebar, dan Configuration |
| `css/style.css` | Token turunan, layout sederhana, tipografi, responsif |
| `src/app.js` | Data dan daftar proyek/pengalaman, navigasi hash, pengaturan |
| `src/preferences.js` | Palet aktual, validasi serta persistensi tema/font/ukuran |
| `2026_3.tex` | Sumber fakta CV; tidak dikompilasi oleh website |
| `README.md` | Profil lengkap dan petunjuk pengembangan repo; tab overview tetap dirender dari HTML dan data proyek/pengalaman bersama di JavaScript |
| `img/mark.svg` | Favicon |

Tab saat ini: `00 / README.md`, `01 / Projects`, `02 / Experience`, `99 / Configuration`. Tab About & skills sudah dihapus. Anchor lama `#about` mengarah ke seksi Education di dalam card README; Anchor lama `#technical-skills` mengarah ke Toolbox. Label README adalah nama tab; tidak menyiratkan kewajiban membuat parser Markdown. Gunakan fakta CV dan LinkedIn `https://linkedin.com/in/fawwasaliy`; jangan mengarang pencapaian, metrik, sertifikat, atau tautan unduhan.

## Responsif dan verifikasi

Pada ≤900px, urutan card adalah Profile → artikel README (termasuk Education) → Selected repositories → Professional experience → Certifications → Contact & social → Toolbox & skills.md. Profile dipindahkan ke awal `.readme-column`, sedangkan sidebar Contact & social/Toolbox & skills.md berada setelah kolom tersebut. Sinkronkan urutan DOM dan visual melalui `matchMedia` di `src/app.js`, tanpa menduplikasi card. Saat kembali ke desktop, kembalikan Profile ke awal sidebar dan pertahankan layout dua kolom semula. Pada ≤700px, sediakan menu daftar dan penanda halaman aktif. Pertahankan fokus keyboard, `aria-current`, `aria-expanded`, `aria-pressed`, serta tautan langsung dan riwayat browser.

Tidak ada build atau pemasangan dependensi yang diperlukan:

```sh
node --check src/preferences.js
node --check src/app.js
git diff --check
python3 -m http.server 5173 --bind 127.0.0.1
```

Periksa overview beserta card informasi, proyek, pengalaman, dan Configuration pada desktop serta sekitar breakpoint 900px/700px dan mobile 320px. Uji ukuran teks 130%, palet gelap/terang, font, persistensi, dan menu mobile. Bandingkan hasil dengan komponen aktif rujukan: kesederhanaan header, tab, artikel, dan opsi pengaturan lebih penting daripada menambahkan detail visual baru.
