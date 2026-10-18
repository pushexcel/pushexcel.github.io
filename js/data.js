window.DATA = {
 "cats": [
  {
   "id": "dasar",
   "nama": "Dasar Excel",
   "ket": "Sel, rumus pertama, format angka, dan kebiasaan kerja yang rapi."
  },
  {
   "id": "data",
   "nama": "Olah Data",
   "ket": "Urutkan, saring, validasi, pivot, dan merapikan data."
  },
  {
   "id": "rumus",
   "nama": "Rumus Dasar & Statistik",
   "ket": "SUM, MAX, AVERAGE, RANK, COUNTIF, dan kawan-kawannya."
  },
  {
   "id": "logika",
   "nama": "Logika dan IF",
   "ket": "Membuat Excel mengambil keputusan dari nilai sel."
  },
  {
   "id": "teks",
   "nama": "Fungsi Teks",
   "ket": "Memotong, menyambung, dan merapikan teks."
  },
  {
   "id": "lookup",
   "nama": "Pencarian & Referensi",
   "ket": "VLOOKUP, HLOOKUP, MATCH, dan fungsi alamat sel."
  },
  {
   "id": "tanggal",
   "nama": "Tanggal & Waktu",
   "ket": "Menghitung umur, selisih hari, hari kerja, dan jam."
  },
  {
   "id": "mate",
   "nama": "Matematika & Trigonometri",
   "ket": "Pembulatan, akar, logaritma, sudut, matriks, dan konversi."
  },
  {
   "id": "db",
   "nama": "Fungsi Database",
   "ket": "Menghitung dari tabel dengan rentang kriteria."
  },
  {
   "id": "uang",
   "nama": "Keuangan",
   "ket": "Cicilan, nilai masa depan, penyusutan, dan obligasi."
  },
  {
   "id": "macro",
   "nama": "Macro & VBA",
   "ket": "Merekam macro lalu menulis kode VBA sendiri."
  },
  {
   "id": "kasus",
   "nama": "Studi Kasus",
   "ket": "Gaji, IPK, absensi, pajak, invoice, dan kalender."
  }
 ],
 "lessons": [
  {
   "id": "rumus-pertama",
   "cat": "dasar",
   "judul": "Rumus pertama: awali dengan tanda sama dengan",
   "ringkas": "Rumus adalah perintah hitung untuk Excel. Kamu selalu mulai dengan tanda sama dengan (=), lalu tulis apa yang mau dihitung.",
   "intinya": "Tanda = memberi tahu Excel: tolong hitungkan ini.",
   "analogi": "Bayangkan Excel itu kalkulator pintar. Sebelum menekan angka, kamu bilang dulu, \"Hei kalkulator, aku mau menghitung.\" Tanda = adalah cara bilang begitu. Tanpa tanda =, Excel cuma menganggap tulisanmu sebagai tulisan biasa.",
   "sintaks": "=B2*C2",
   "argumen": [
    [
     "+  -  *  /",
     "Tambah, kurang, kali, bagi. Tanda * artinya kali dan tanda / artinya bagi."
    ],
    [
     "^",
     "Pangkat. =2^3 artinya 2 dikali dirinya 3 kali, hasilnya 8."
    ],
    [
     "&",
     "Menyambung tulisan, misalnya menyambung nama depan dan nama belakang."
    ],
    [
     "B2",
     "Alamat sebuah kotak. B berarti kolom B (arah ke samping), 2 berarti baris ke-2 (arah ke bawah)."
    ]
   ],
   "langkah": [
    "Klik kotak tempat jawaban akan muncul, misalnya D2.",
    "Ketik tanda =.",
    "Klik kotak Harga (B2), ketik *, lalu klik kotak Jumlah (C2).",
    "Tekan Enter. Jawabannya muncul di kotak. Rumusnya masih bisa kamu lihat di kotak panjang di atas (formula bar).",
    "Tarik kotak kecil di pojok kanan bawah kotak D2 ke bawah. Rumus yang sama tersalin ke baris lain."
   ],
   "tips": [
    "Pakai alamat kotak, jangan ketik angkanya langsung. Kalau harga berubah, jawabannya ikut berubah sendiri.",
    "Kalau kotak penuh tanda ####, artinya kolomnya terlalu sempit. Lebarkan kolomnya dengan menarik garis pembatas di judul kolom."
   ],
   "demo": {
    "data": [
     [
      "Barang",
      "Harga",
      "Jumlah"
     ],
     [
      "Pensil",
      3000,
      5
     ],
     [
      "Buku",
      8000,
      3
     ],
     [
      "Penggaris",
      5000,
      2
     ]
    ],
    "sel": "D2",
    "rumus": "=B2*C2",
    "coba": [
     [
      "=B2*C2",
      "Harga x jumlah"
     ],
     [
      "=B2+C2",
      "Tambah (tidak masuk akal di sini)"
     ],
     [
      "=SUM(B2:B4)",
      "Total harga satuan"
     ]
    ],
    "catatan": "Ubah angka di tabel atau rumusnya, lalu tekan Enter."
   },
   "kuis": {
    "q": "Rumus apa yang benar untuk mengalikan isi sel B2 dengan C2?",
    "opsi": [
     "B2*C2",
     "=B2*C2",
     "=B2xC2",
     "'=B2*C2"
    ],
    "jawab": 1,
    "bahas": "Rumus harus diawali tanda =. Operator kali ditulis dengan tanda bintang."
   },
   "kata": "rumus dasar sel formula bar operator",
   "gambar": []
  },
  {
   "id": "perkalian",
   "cat": "dasar",
   "judul": "Perkalian: operator * dan fungsi PRODUCT",
   "ringkas": "Untuk mengalikan banyak angka sekaligus, kamu bisa memakai PRODUCT. Lebih pendek daripada menulis tanda * berkali-kali.",
   "intinya": "PRODUCT mengalikan semua angka yang kamu tunjuk dalam satu rumus.",
   "analogi": "Bayangkan kamu menghitung isi kardus: 2 baris x 3 kolom x 4 tumpuk. Daripada menekan kali berkali-kali, kamu bilang ke Excel, \"Kalikan semua ini ya.\" Itulah PRODUCT.",
   "sintaks": "=PRODUCT(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Angka atau kotak pertama yang mau dikalikan. Boleh juga satu deretan kotak, misalnya B2:D2."
    ],
    [
     "angka2, ...",
     "Boleh ditambah angka atau kotak lain. Tidak wajib diisi."
    ]
   ],
   "langkah": [
    "Tulis beberapa angka di kotak yang berdampingan, misalnya B2, C2, dan D2.",
    "Klik kotak jawaban lalu ketik =PRODUCT( .",
    "Seret dari B2 sampai D2 dengan mouse. Excel menulis B2:D2 sendiri.",
    "Ketik tanda kurung tutup ) lalu tekan Enter."
   ],
   "tips": [
    "PRODUCT melewati kotak kosong dan tulisan. Kalau kamu memakai tanda *, kotak yang berisi tulisan membuat hasilnya salah (#VALUE!)."
   ],
   "demo": {
    "data": [
     [
      "Panjang",
      "Lebar",
      "Tinggi",
      "Volume"
     ],
     [
      4,
      3,
      2,
      ""
     ],
     [
      10,
      5,
      2,
      ""
     ]
    ],
    "sel": "D2",
    "rumus": "=PRODUCT(A2:C2)",
    "coba": [
     [
      "=A2*B2*C2",
      "Operator *"
     ],
     [
      "=PRODUCT(A2:C2)",
      "PRODUCT"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil =PRODUCT(2;3;4)?",
    "opsi": [
     "9",
     "24",
     "14",
     "234"
    ],
    "jawab": 1,
    "bahas": "2 x 3 x 4 = 24."
   },
   "kata": "perkalian product kali",
   "gambar": [
    "fungsi-argumen-product-300x183.jpg",
    "perkalian-dengan-microsoft-excel-3.jpg"
   ]
  },
  {
   "id": "pangkat",
   "cat": "dasar",
   "judul": "Pangkat, superscript, dan subscript",
   "ringkas": "Ada dua hal yang berbeda: menghitung pangkat (misalnya 2 pangkat 10) dan menulis angka kecil di atas huruf seperti m².",
   "intinya": "Untuk menghitung pakai ^ atau POWER. Untuk sekadar menulis angka kecil, pakai format Superscript.",
   "analogi": "Pangkat itu seperti melipat kertas. Dilipat 1 kali jadi 2 lapis, dilipat 2 kali jadi 4 lapis. Itu sebabnya 2 pangkat 10 adalah 1024. Sedangkan m² hanyalah tulisan dengan angka kecil, seperti stiker, bukan perhitungan.",
   "sintaks": "=angka^pangkat   atau   =POWER(angka; pangkat)",
   "argumen": [
    [
     "angka",
     "Angka yang dipangkatkan, disebut bilangan pokok."
    ],
    [
     "pangkat",
     "Berapa kali angka itu dikalikan dengan dirinya sendiri."
    ]
   ],
   "langkah": [
    "Untuk menghitung, ketik =2^10 lalu Enter. Hasilnya 1024. Cara lain: =POWER(2;10).",
    "Untuk menulis m², klik kotak lalu tekan F2 agar bisa mengetik di dalamnya.",
    "Blok (sorot) angka 2 di belakang m.",
    "Tekan Ctrl+1 untuk membuka Format Cells, lalu centang Superscript dan klik OK.",
    "Untuk angka kecil di bawah huruf seperti H₂O, caranya sama tetapi centang Subscript."
   ],
   "tips": [
    "Superscript hanya mengubah tampilan tulisan. Excel tidak menghitungnya sebagai pangkat."
   ],
   "demo": {
    "data": [
     [
      "Bilangan",
      "Pangkat",
      "Hasil"
     ],
     [
      2,
      10,
      ""
     ],
     [
      5,
      3,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=A2^B2",
    "coba": [
     [
      "=A2^B2",
      "Operator ^"
     ],
     [
      "=POWER(A2,B2)",
      "Fungsi POWER"
     ],
     [
      "=SQRT(A2)",
      "Akar kuadrat"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil =3^2?",
    "opsi": [
     "6",
     "9",
     "5",
     "32"
    ],
    "jawab": 1,
    "bahas": "3 pangkat 2 = 3 x 3 = 9."
   },
   "kata": "pangkat kuadrat power superscript subscript",
   "gambar": [
    "mengetik-pangkat-3-300x270.jpg",
    "subscripts-3.jpg",
    "subscripts-2.jpg"
   ]
  },
  {
   "id": "copy-paste",
   "cat": "dasar",
   "judul": "Salin dan tempel (Paste Special)",
   "ringkas": "Paste Special membiarkan kamu memilih apa yang ditempel: hasilnya saja, rumusnya, tampilannya, atau diputar (baris jadi kolom).",
   "intinya": "Paste biasa menempel semuanya. Paste Special menempel hanya bagian yang kamu mau.",
   "analogi": "Bayangkan kamu menyalin satu halaman buku. Paste biasa seperti memfotokopi seluruh halaman. Paste Special seperti memilih: fotokopi tulisannya saja, atau warnanya saja. Kamu yang memutuskan.",
   "langkah": [
    "Klik kotak yang mau disalin, lalu tekan Ctrl+C.",
    "Klik kotak tujuan. Buka Home, klik panah kecil di bawah Paste, lalu pilih Paste Special (atau tekan Ctrl+Alt+V).",
    "Pilih Values kalau mau hasil angkanya saja tanpa rumus. Pilih Formats kalau mau tampilannya saja. Pilih Transpose kalau mau baris berubah jadi kolom.",
    "Klik OK."
   ],
   "tips": [
    "Setelah menempel dengan Values, rumus aslinya hilang di tempat tujuan. Simpan salinan datamu dulu kalau kamu masih ragu."
   ],
   "kuis": {
    "q": "Pilihan Paste Special mana yang menempel hasil rumus tanpa rumusnya?",
    "opsi": [
     "Formats",
     "Values",
     "Comments",
     "Validation"
    ],
    "jawab": 1,
    "bahas": "Values menempel nilai akhirnya saja."
   },
   "kata": "copy paste salin tempel paste special values",
   "gambar": []
  },
  {
   "id": "tombol-excel",
   "cat": "dasar",
   "judul": "Mengenal tombol-tombol di Ribbon",
   "ringkas": "Ribbon adalah deretan tombol di bagian atas Excel. Kamu cukup kenal tiga tab dulu: Home, Formulas, dan Data.",
   "intinya": "Tombol di Excel dikelompokkan di dalam tab. Cari tombolmu di tab yang sesuai.",
   "analogi": "Ribbon itu seperti kotak perkakas yang punya beberapa laci. Laci Home isinya alat sehari-hari. Laci Formulas isinya alat rumus. Laci Data isinya alat mengurutkan dan menyaring. Kalau butuh palu, kamu tahu laci mana yang dibuka.",
   "langkah": [
    "Lihat tab Home. Kelompok Font mengatur huruf, Alignment mengatur letak tulisan, Number mengatur bentuk angka.",
    "Klik tab Formulas. Di sini ada daftar fungsi dan tombol AutoSum untuk menjumlah cepat.",
    "Klik tab Data. Di sini ada tombol untuk mengurutkan, menyaring, dan membatasi isian.",
    "Arahkan mouse ke sebuah tombol tanpa diklik. Muncul keterangan singkat tentang fungsinya."
   ],
   "kuis": {
    "q": "Di tab mana tombol AutoSum berada selain Home?",
    "opsi": [
     "Insert",
     "Formulas",
     "View",
     "Review"
    ],
    "jawab": 1,
    "bahas": "AutoSum juga ada di tab Formulas."
   },
   "kata": "tombol ribbon toolbar",
   "gambar": []
  },
  {
   "id": "warna-sel",
   "cat": "dasar",
   "judul": "Mewarnai sel dan batas tabel",
   "ringkas": "Warna dan garis tepi membuat tabel lebih mudah dibaca. Warna yang berubah sendiri nanti dibahas di materi Conditional Formatting.",
   "intinya": "Warnai dengan Fill Color, beri garis dengan Borders.",
   "analogi": "Tabel tanpa warna dan garis seperti halaman buku tulis yang kosong tanpa baris. Bisa dipakai, tapi mata cepat lelah. Warna dan garis membantu mata menemukan di mana baris dan kolomnya.",
   "langkah": [
    "Sorot kotak yang mau diwarnai dengan menyeret mouse.",
    "Klik Home lalu Fill Color (ikon ember cat) untuk warna latar. Font Color (huruf A berwarna) untuk warna tulisan.",
    "Klik Borders (ikon kotak-kotak) untuk memberi garis tepi.",
    "Mau menyalin tampilan ke kotak lain? Klik Format Painter (ikon kuas), lalu klik kotak tujuan."
   ],
   "kuis": {
    "q": "Alat apa yang menyalin tampilan satu sel ke sel lain?",
    "opsi": [
     "Find & Select",
     "Format Painter",
     "Flash Fill",
     "Freeze Panes"
    ],
    "jawab": 1,
    "bahas": "Format Painter menyalin format."
   },
   "kata": "warna sel fill color border",
   "gambar": [
    "tnd-warna-cel-1-300x163.jpg",
    "tnd-warna-cel-3-300x163.jpg",
    "warna-cell-pada-excel-4.jpg"
   ]
  },
  {
   "id": "nomor-urut",
   "cat": "dasar",
   "judul": "Nomor urut otomatis",
   "ringkas": "Nomor urut yang dibuat dengan rumus bisa menyesuaikan diri sendiri ketika ada baris yang ditambah atau dihapus.",
   "intinya": "=ROW()-1 menghitung nomor baris, lalu dikurangi baris judul.",
   "analogi": "Bayangkan antrean di loket. Kalau satu orang pulang, nomor orang di belakangnya maju. Rumus ROW membuat nomor urut Excel bersikap seperti itu: otomatis menyesuaikan.",
   "sintaks": "=ROW()-1",
   "argumen": [
    [
     "ROW()",
     "Memberi tahu nomor baris tempat rumus ini berada."
    ],
    [
     "-1",
     "Dikurangi 1 karena baris pertama dipakai untuk judul tabel."
    ]
   ],
   "langkah": [
    "Taruh judul tabel di baris 1 dan data mulai dari baris 2.",
    "Di kotak A2, ketik =ROW()-1 lalu tekan Enter. Muncul angka 1.",
    "Tarik kotak kecil di pojok kanan bawah A2 ke bawah. Muncul 2, 3, 4, dan seterusnya.",
    "Coba hapus satu baris. Nomor di bawahnya langsung menyesuaikan."
   ],
   "tips": [
    "Cara lain: ketik 1 dan 2 di dua kotak, sorot keduanya, lalu tarik ke bawah. Cara ini tidak menyesuaikan diri kalau ada baris yang dihapus."
   ],
   "demo": {
    "data": [
     [
      "No",
      "Nama"
     ],
     [
      "",
      "Antonio"
     ],
     [
      "",
      "Romansyah"
     ],
     [
      "",
      "Devi"
     ],
     [
      "",
      "Bagus"
     ]
    ],
    "sel": "A2",
    "rumus": "=ROW()-1",
    "coba": [
     [
      "=ROW()-1",
      "Nomor urut"
     ],
     [
      "=COUNTA(B$2:B2)",
      "Nomor hanya bila nama terisi"
     ]
    ],
    "catatan": "Salin rumus ke A3 sampai A5 dengan mengetik ulang."
   },
   "kuis": {
    "q": "Mengapa =ROW()-1 dipakai di A2 untuk nomor urut?",
    "opsi": [
     "Karena baris 1 berisi judul",
     "Karena Excel mulai dari nol",
     "Karena kolom A kosong",
     "Supaya hasilnya negatif"
    ],
    "jawab": 0,
    "bahas": "ROW() di baris 2 bernilai 2, dikurangi 1 menjadi nomor 1."
   },
   "kata": "nomor urut otomatis row",
   "gambar": [
    "data-2-pengaturan-nomor-urut-293x300.jpg",
    "nomor-urut-otomatis-1.jpg",
    "nomor-urut-otomatis-2.jpg"
   ]
  },
  {
   "id": "penomoran-gabungan",
   "cat": "dasar",
   "judul": "Penomoran gabungan teks dan angka",
   "ringkas": "Nomor seperti KD-001 atau NIS/2026/015 dibuat dengan menyambung tulisan dan angka. Angkanya diberi nol di depan memakai TEXT.",
   "intinya": "Sambung tulisan dengan & lalu atur jumlah digit angka dengan TEXT.",
   "analogi": "Bayangkan nomor kamar hotel: Kamar 007. Kata Kamar adalah tulisan tetap, 007 adalah nomor yang selalu tiga angka. Rumus ini menyambung keduanya, seperti merekatkan dua potong kertas menjadi satu.",
   "sintaks": "=\"KD-\"&TEXT(ROW()-1;\"000\")",
   "argumen": [
    [
     "&",
     "Perekat. Menyambung dua potong tulisan menjadi satu."
    ],
    [
     "TEXT(angka; \"000\")",
     "Mengubah angka jadi tulisan tiga angka, dengan nol di depan kalau perlu. 7 menjadi 007."
    ]
   ],
   "langkah": [
    "Di kotak pertama ketik =\"KD-\"&TEXT(ROW()-1;\"000\") . Tulisan tetap ditaruh di antara tanda kutip.",
    "Tekan Enter. Muncul KD-001.",
    "Tarik ke bawah. Muncul KD-002, KD-003, dan seterusnya."
   ],
   "demo": {
    "data": [
     [
      "Kode"
     ],
     [
      ""
     ],
     [
      ""
     ],
     [
      ""
     ]
    ],
    "sel": "A2",
    "rumus": "=\"KD-\"&TEXT(ROW()-1,\"000\")",
    "coba": [
     [
      "=\"KD-\"&TEXT(ROW()-1,\"000\")",
      "KD-001"
     ],
     [
      "=\"NIS/2026/\"&TEXT(ROW()-1,\"00\")",
      "NIS/2026/01"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil =\"A\"&TEXT(7;\"000\")?",
    "opsi": [
     "A7",
     "A007",
     "A0007",
     "7A"
    ],
    "jawab": 1,
    "bahas": "Format \"000\" membuat angka 7 menjadi 007."
   },
   "kata": "penomoran gabungan teks angka kode",
   "gambar": [
    "data-1-mengatur-penomoran-gabungan-teks-dan-angka-300x238.jpg",
    "data-2-mengatur-penomoran-gabungan-teks-dan-angka-300x263.jpg",
    "data-3-mengatur-penomoran-gabungan-teks-dan-angka-300x274.jpg"
   ]
  },
  {
   "id": "angka-nol",
   "cat": "dasar",
   "judul": "Menampilkan angka nol di depan",
   "ringkas": "Excel membuang nol di depan angka, jadi 007 berubah menjadi 7. Ada beberapa cara supaya nolnya tetap ada.",
   "intinya": "Kalau nol di depan harus tetap ada, jadikan kotak itu bertipe Text atau pakai format kustom.",
   "analogi": "Bagi Excel, 007 dan 7 itu angka yang sama, seperti uang Rp 7 dan Rp 007. Nol di depan dianggap tidak berguna lalu dibuang. Supaya nol tetap ada, kamu harus bilang, \"Ini bukan untuk dihitung, ini hanya tulisan,\" atau, \"Tampilkan selalu tiga angka.\"",
   "sintaks": "=TEXT(angka; \"0000\")",
   "langkah": [
    "Cara 1: sorot kotak, buka Home lalu Number Format, pilih Text. Setelah itu baru ketik angkanya.",
    "Cara 2: ketik tanda petik satu (') di depan angka, misalnya '007. Tanda petik itu tidak tampil.",
    "Cara 3: tekan Ctrl+1, pilih Custom, lalu tulis 000 di kotak Type. Angka selalu tampil tiga digit.",
    "Cara 4: pakai rumus =TEXT(angka;\"0000\") kalau hasilnya mau disambung dengan tulisan lain."
   ],
   "tips": [
    "Angka yang bertipe Text tidak bisa dijumlahkan dengan SUM. Kalau angkanya masih perlu dihitung, pakai cara Custom."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "Tampil"
     ],
     [
      7,
      ""
     ],
     [
      45,
      ""
     ],
     [
      123,
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=TEXT(A2,\"0000\")",
    "coba": [
     [
      "=TEXT(A2,\"0000\")",
      "Empat digit"
     ],
     [
      "=TEXT(A2,\"000\")",
      "Tiga digit"
     ]
    ]
   },
   "kuis": {
    "q": "Cara mana yang tetap membuat angkanya bisa dijumlahkan?",
    "opsi": [
     "Format Text",
     "Apostrof di depan",
     "Format Custom 000",
     "Spasi di depan"
    ],
    "jawab": 2,
    "bahas": "Format Custom hanya mengubah tampilan; nilainya tetap angka."
   },
   "kata": "nol di depan leading zero text",
   "gambar": [
    "cara-1-menampilkan-nol-dengan-format-teks-285x300.jpg",
    "contoh-penulisan-nol-dengan-tanda-koma-236x300.jpg",
    "hasil-pengaturan-dengan-format-teks-278x300.jpg"
   ]
  },
  {
   "id": "desimal",
   "cat": "dasar",
   "judul": "Mengatur jumlah desimal",
   "ringkas": "Tombol Increase Decimal dan Decrease Decimal hanya mengubah tampilan angka. Angka aslinya di dalam kotak tetap sama. Untuk benar-benar membulatkan, pakai ROUND.",
   "intinya": "Tombol desimal mengubah tampilan, ROUND mengubah nilainya.",
   "analogi": "Bayangkan kamu membungkus kue dengan kertas cantik. Bentuk kuenya sama, hanya bungkusnya yang berubah. Tombol desimal itu bungkusnya. ROUND itu memotong kuenya.",
   "langkah": [
    "Sorot kotak angka.",
    "Klik Home lalu Increase Decimal untuk menambah angka di belakang koma. Klik Decrease Decimal untuk mengurangi.",
    "Kalau angkanya harus benar-benar dibulatkan, tulis =ROUND(kotak; jumlah_angka_di_belakang_koma)."
   ],
   "kuis": {
    "q": "Apakah Decrease Decimal mengubah nilai yang tersimpan di sel?",
    "opsi": [
     "Ya",
     "Tidak, hanya tampilannya",
     "Hanya untuk teks",
     "Hanya pada kolom A"
    ],
    "jawab": 1,
    "bahas": "Nilai asli tetap utuh; hanya tampilannya yang dibulatkan."
   },
   "kata": "desimal decimal increase decrease",
   "gambar": [
    "4-8-gmbr-increase-decimal.jpg"
   ]
  },
  {
   "id": "cetak-judul",
   "cat": "dasar",
   "judul": "Mengatur halaman cetak dan judul berulang",
   "ringkas": "Tabel yang panjang akan terpotong ke beberapa lembar kertas. Print Titles membuat baris judul tercetak lagi di setiap lembar.",
   "intinya": "Print Titles mengulang baris judul di setiap halaman cetak.",
   "analogi": "Bayangkan buku daftar hadir yang panjangnya lima halaman. Kalau judul kolom hanya ada di halaman pertama, halaman keempat sulit dibaca. Dengan Print Titles, setiap halaman punya judul kolom sendiri.",
   "langkah": [
    "Buka tab Page Layout lalu klik Print Titles.",
    "Di kotak Rows to repeat at top, klik kotaknya lalu klik nomor baris judul di lembar kerja (misalnya baris 1).",
    "Klik Print Preview untuk melihat hasilnya.",
    "Kalau tabel terlalu lebar, ubah Margins atau Orientation menjadi Landscape (kertas diputar menyamping)."
   ],
   "kuis": {
    "q": "Fitur mana yang mengulang baris judul di tiap halaman cetak?",
    "opsi": [
     "Freeze Panes",
     "Print Titles",
     "Page Break",
     "Header"
    ],
    "jawab": 1,
    "bahas": "Print Titles di tab Page Layout."
   },
   "kata": "cetak print judul halaman",
   "gambar": [
    "cara-1-mencetak-judul-sama-tiap-halaman-300x95.jpg",
    "cara-2-mencetak-judul-sama-tiap-halaman-300x253.jpg",
    "contoh-dokumen-sesudah-diatur-300x207.jpg"
   ]
  },
  {
   "id": "freeze-panes",
   "cat": "dasar",
   "judul": "Freeze Panes: mengunci baris dan kolom",
   "ringkas": "Freeze Panes mengunci baris atau kolom tertentu supaya tetap terlihat saat kamu menggulir ke bawah atau ke samping.",
   "intinya": "Freeze Panes menahan judul tabel di tempatnya.",
   "analogi": "Bayangkan kamu membaca daftar panjang sambil menempelkan penggaris di bawah judul. Walau halaman digeser, judul tetap kelihatan. Freeze Panes adalah penggaris itu.",
   "langkah": [
    "Klik kotak yang letaknya tepat di bawah baris dan di kanan kolom yang mau dikunci.",
    "Buka tab View, klik Freeze Panes, lalu pilih Freeze Panes.",
    "Kalau hanya mau mengunci baris paling atas, pilih Freeze Top Row.",
    "Untuk melepas kunci, klik Freeze Panes lalu pilih Unfreeze Panes."
   ],
   "kuis": {
    "q": "Untuk mengunci baris 1 dan kolom A sekaligus, sel mana yang dipilih sebelum Freeze Panes?",
    "opsi": [
     "A1",
     "B2",
     "A2",
     "C3"
    ],
    "jawab": 1,
    "bahas": "Freeze Panes mengunci semua yang ada di atas dan di kiri sel terpilih."
   },
   "kata": "freeze panes kunci baris kolom",
   "gambar": [
    "freeze-panes-pada-excel-2.jpg",
    "freeze-panes-pada-excel-3.jpg",
    "freeze-panes-pada-excel-4.jpg"
   ]
  },
  {
   "id": "link-antar-file",
   "cat": "dasar",
   "judul": "Menghubungkan data antar sheet dan antar file",
   "ringkas": "Sebuah rumus bisa mengambil angka dari sheet lain atau bahkan dari file lain. Kalau angka sumbernya berubah, hasilnya ikut berubah.",
   "intinya": "Rumus yang menunjuk ke sheet atau file lain membuat datamu saling tersambung.",
   "analogi": "Bayangkan kamu menulis di buku catatan, \"Harga bensin: lihat papan di SPBU.\" Kamu tidak menyalin harganya, hanya menunjuk. Saat harga di papan berganti, catatanmu ikut benar. Link antar file bekerja begitu.",
   "sintaks": "=Sheet2!B5   atau   ='[Data.xlsx]Sheet1'!$B$5",
   "langkah": [
    "Buka dua file Excel. Klik View lalu View Side by Side supaya keduanya tampil berdampingan.",
    "Di file tujuan, ketik tanda = lalu klik kotak yang mau diambil di file sumber.",
    "Tekan Enter. Excel menuliskan alamat lengkapnya untuk kamu.",
    "Kalau file sumber pernah dipindah, buka Data lalu Edit Links untuk memperbaiki sambungannya."
   ],
   "tips": [
    "Jangan ganti nama atau memindahkan file sumber tanpa memperbarui link. Kalau tidak, rumusnya kehilangan jalan menuju datanya."
   ],
   "kuis": {
    "q": "Tanda apa yang memisahkan nama sheet dan alamat sel?",
    "opsi": [
     "!",
     "#",
     "$",
     "@"
    ],
    "jawab": 0,
    "bahas": "Contoh: Sheet2!B5."
   },
   "kata": "link file sheet eksternal referensi",
   "gambar": [
    "data-1-membuat-link-di-excel-300x276.jpg",
    "gambar-1-data-utama-link-dengan-rumus-300x273.jpg",
    "gambar-1-tampilan-office-button-advanced-300x246.jpg"
   ]
  },
  {
   "id": "pindah-sheet",
   "cat": "dasar",
   "judul": "Memindahkan dan menyalin sheet ke file lain",
   "ringkas": "Move or Copy memindahkan satu sheet beserta seluruh isinya ke file Excel lain, atau membuat salinannya.",
   "intinya": "Klik kanan nama sheet, lalu pilih Move or Copy.",
   "analogi": "Sheet itu seperti selembar kertas di dalam map. Move or Copy memindahkan kertas itu ke map lain. Kalau kamu centang Create a copy, kertas aslinya tetap di map lama dan map baru mendapat fotokopinya.",
   "langkah": [
    "Klik kanan nama sheet di bagian bawah layar, lalu pilih Move or Copy.",
    "Di kotak To book, pilih file tujuan.",
    "Centang Create a copy kalau sheet yang asli tetap harus ada.",
    "Klik OK."
   ],
   "kuis": {
    "q": "Centang apa yang menjaga sheet asli tetap ada setelah dipindah?",
    "opsi": [
     "Create a copy",
     "Before sheet",
     "New book",
     "Protect"
    ],
    "jawab": 0,
    "bahas": "Create a copy membuat salinan."
   },
   "kata": "pindah sheet move copy workbook",
   "gambar": [
    "gambar-dokumen-1-memindah-sheet-ke-file-lain.jpg",
    "gambar-dokumen-2-memindah-sheet-ke-file-lain.jpg",
    "ikon-move-or-copy.jpg"
   ]
  },
  {
   "id": "kontrol-formulir",
   "cat": "dasar",
   "judul": "Combo Box dan Option Button",
   "ringkas": "Combo Box dan Option Button adalah tombol pilihan yang bisa kamu taruh di lembar kerja. Orang tinggal memilih, tidak perlu mengetik.",
   "intinya": "Kontrol formulir menyimpan nomor pilihan di satu kotak, lalu rumus memakai nomor itu.",
   "analogi": "Bayangkan menu di restoran. Pelanggan tinggal menunjuk nomor menu. Combo Box adalah daftar menu yang bisa dibuka-tutup. Nomor yang ditunjuk dicatat di satu kotak khusus (Cell link). Rumusmu membaca nomor itu lalu mencari nama menunya.",
   "langkah": [
    "Aktifkan tab Developer: File, Options, Customize Ribbon, lalu centang Developer.",
    "Klik Developer, Insert, lalu pilih Combo Box di bagian Form Controls. Gambar kotaknya di lembar kerja.",
    "Klik kanan kotak itu lalu pilih Format Control. Isi Input range dengan daftar pilihan dan Cell link dengan satu kotak kosong untuk menyimpan nomor pilihan.",
    "Pakai rumus =INDEX(daftar; kotak_link) untuk menampilkan isi pilihan yang dipilih.",
    "Option Button bekerja sama. Setiap tombol mengisi Cell link dengan nomor urutnya."
   ],
   "kuis": {
    "q": "Apa yang disimpan di Cell link pada Combo Box?",
    "opsi": [
     "Teks pilihan",
     "Nomor urut pilihan",
     "Warna sel",
     "Nama sheet"
    ],
    "jawab": 1,
    "bahas": "Cell link menyimpan nomor urut pilihan; ambil teksnya dengan INDEX."
   },
   "kata": "combo box option button form control developer",
   "gambar": [
    "option-botton-excel-3.jpg",
    "option-botton-excel-2-300x196.jpg",
    "option-botton-excel-4.jpg"
   ]
  },
  {
   "id": "hapus-ganda",
   "cat": "data",
   "judul": "Menghapus data ganda (duplikat)",
   "ringkas": "Remove Duplicates membuang baris yang isinya sama, berdasarkan kolom yang kamu pilih.",
   "intinya": "Excel mencari baris kembar lalu menyisakan satu saja.",
   "analogi": "Bayangkan daftar absen yang tidak sengaja menulis nama Budi dua kali. Kamu cukup menyisakan satu Budi. Remove Duplicates melakukan itu untukmu, bahkan untuk ribuan baris.",
   "langkah": [
    "Sorot seluruh tabel datamu.",
    "Buka tab Data lalu klik Remove Duplicates.",
    "Centang kolom yang dipakai untuk menentukan kembar atau tidak.",
    "Klik OK. Excel memberi tahu berapa baris yang dihapus."
   ],
   "tips": [
    "Simpan salinan datamu dulu. Baris yang dihapus tidak bisa kembali kecuali kamu menekan Ctrl+Z langsung."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Kelas"
     ],
     [
      "Devi",
      "7A"
     ],
     [
      "Bagus",
      "7B"
     ],
     [
      "Devi",
      "7A"
     ],
     [
      "Maulana",
      "7C"
     ]
    ],
    "sel": "D2",
    "rumus": "=COUNTIF(A$2:A2,A2)",
    "coba": [
     [
      "=COUNTIF(A$2:A2,A2)",
      "Angka lebih dari 1 berarti duplikat"
     ],
     [
      "=IF(COUNTIF(A$2:A2,A2)>1,\"Ganda\",\"Unik\")",
      "Penanda"
     ]
    ],
    "catatan": "Salin rumus ke D3:D5 untuk melihat penanda duplikat."
   },
   "kuis": {
    "q": "Menu mana yang membuang baris duplikat?",
    "opsi": [
     "Data > Remove Duplicates",
     "Home > Clear",
     "Insert > Table",
     "View > Freeze"
    ],
    "jawab": 0,
    "bahas": "Remove Duplicates ada di tab Data."
   },
   "kata": "duplikat ganda remove duplicates",
   "gambar": [
    "menghapus-data-ganda-1-300x228.jpg",
    "menghapus-data-ganda-2-300x204.jpg"
   ]
  },
  {
   "id": "hapus-baris",
   "cat": "data",
   "judul": "Menghapus banyak baris sekaligus",
   "ringkas": "Baris kosong atau baris selang-seling bisa dihapus sekaligus. Kamu tidak perlu menghapus satu per satu.",
   "intinya": "Pilih semua kotak kosong sekaligus dengan Go To Special, lalu hapus barisnya.",
   "analogi": "Bayangkan kamu membersihkan lemari yang penuh rak kosong. Daripada membuang rak satu-satu, kamu menandai semua rak kosong dulu, lalu membuangnya bersamaan.",
   "langkah": [
    "Sorot kolom yang mengandung kotak kosong.",
    "Tekan F5, klik Special, pilih Blanks, lalu klik OK. Semua kotak kosong ikut terpilih.",
    "Klik kanan salah satu kotak yang terpilih, pilih Delete, lalu Entire row.",
    "Cara lain: pasang filter pada satu kolom, tampilkan baris yang mau dihapus saja, lalu hapus baris yang tampil."
   ],
   "kuis": {
    "q": "Tombol F5 > Special > Blanks dipakai untuk apa?",
    "opsi": [
     "Memilih semua sel kosong",
     "Menghapus semua angka",
     "Mengurutkan data",
     "Membuat grafik"
    ],
    "jawab": 0,
    "bahas": "Fitur ini memilih seluruh sel kosong di area terpilih."
   },
   "kata": "hapus baris blanks go to special",
   "gambar": [
    "data-1-menghapus-baris-bersamaan-300x173.jpg",
    "data-2-menghapus-baris-bersamaan-300x124.jpg",
    "data-3-menghapus-baris-bersamaan-300x130.jpg"
   ]
  },
  {
   "id": "urutkan",
   "cat": "data",
   "judul": "Mengurutkan data (Sort)",
   "ringkas": "Sort menyusun data dari kecil ke besar, dari A ke Z, atau berdasarkan beberapa kolom sekaligus.",
   "intinya": "Sort menyusun ulang baris tanpa memisahkan isi satu baris.",
   "analogi": "Bayangkan kartu nama yang berserakan di meja. Kamu susun dari A sampai Z supaya gampang dicari. Sort melakukannya, dan setiap kartu tetap utuh, tidak ada tulisan yang tertukar.",
   "langkah": [
    "Klik satu kotak di dalam tabel.",
    "Buka tab Data lalu klik Sort.",
    "Di Sort by, pilih kolom yang jadi patokan. Pilih A to Z (kecil ke besar) atau Z to A (besar ke kecil).",
    "Mau urut dua tingkat, misalnya kelas lalu nilai? Klik Add Level dan pilih kolom kedua.",
    "Pastikan My data has headers tercentang kalau tabelmu punya baris judul. Lalu klik OK."
   ],
   "kuis": {
    "q": "Agar baris judul tidak ikut terurut, kamu harus...",
    "opsi": [
     "Mencentang My data has headers",
     "Menghapus judul",
     "Menyembunyikan kolom",
     "Mengunci baris"
    ],
    "jawab": 0,
    "bahas": "Opsi tersebut membuat Excel memperlakukan baris pertama sebagai judul."
   },
   "kata": "sort urutkan ascending descending",
   "gambar": [
    "mengurutkan-data-1-300x200.jpg",
    "mengurutkan-data-2-300x184.jpg",
    "mengurutkan-data-5-300x202.jpg"
   ]
  },
  {
   "id": "filter",
   "cat": "data",
   "judul": "Filter: menampilkan data tertentu",
   "ringkas": "Filter menyembunyikan baris yang tidak cocok dengan syaratmu. Barisnya tidak dihapus, hanya tidak kelihatan.",
   "intinya": "Filter hanya menampilkan baris yang kamu cari, sisanya disembunyikan.",
   "analogi": "Bayangkan menyaring teh. Daun tehnya tertahan di saringan, tapi tidak dibuang dari dunia. Filter juga begitu: baris yang tidak cocok hanya disembunyikan dan bisa dimunculkan lagi.",
   "langkah": [
    "Klik satu kotak di dalam tabel.",
    "Buka tab Data lalu klik Filter (atau tekan Ctrl+Shift+L). Muncul panah kecil di judul kolom.",
    "Klik panah itu, lalu centang nilai yang mau ditampilkan.",
    "Untuk syarat seperti lebih besar dari, pilih Number Filters atau Text Filters.",
    "Klik Filter sekali lagi untuk mematikannya dan menampilkan semua baris."
   ],
   "kuis": {
    "q": "Apa yang terjadi pada baris yang tidak lolos filter?",
    "opsi": [
     "Dihapus permanen",
     "Disembunyikan",
     "Diubah warnanya",
     "Dipindah ke sheet baru"
    ],
    "jawab": 1,
    "bahas": "Baris hanya disembunyikan dan tampil lagi saat filter dibersihkan."
   },
   "kata": "filter autofilter saring",
   "gambar": [
    "data-1-fasilitas-filter-pada-excel-300x173.jpg",
    "data-2-fasilitas-filter-pada-excel-300x259.jpg",
    "data-3-fasilitas-filter-pada-excel-300x126.jpg"
   ]
  },
  {
   "id": "validasi",
   "cat": "data",
   "judul": "Data Validation: membatasi isian",
   "ringkas": "Data Validation membatasi apa yang boleh diketik di sebuah kotak, misalnya hanya angka 0 sampai 100 atau hanya pilihan dari daftar.",
   "intinya": "Validation mencegah salah ketik sebelum terjadi.",
   "analogi": "Bayangkan kotak surat dengan celah yang hanya muat amplop. Benda lain tidak bisa masuk. Data Validation membuat kotak Excel hanya menerima isian yang kamu izinkan.",
   "langkah": [
    "Sorot kotak yang mau dibatasi.",
    "Buka tab Data lalu klik Data Validation.",
    "Di kotak Allow, pilih jenis isian: Whole number (bilangan bulat), Decimal, List (daftar pilihan), Date, dan lainnya.",
    "Isi batasnya. Untuk List, isi sumber daftar, misalnya A1:A5.",
    "Tab Input Message dipakai untuk pesan petunjuk. Tab Error Alert dipakai untuk pesan peringatan kalau isiannya salah."
   ],
   "tips": [
    "Kalau kamu memilih List, di kotak muncul panah drop-down seperti di formulir online."
   ],
   "kuis": {
    "q": "Pilihan Allow mana yang membuat drop-down di sel?",
    "opsi": [
     "Whole number",
     "List",
     "Date",
     "Text length"
    ],
    "jawab": 1,
    "bahas": "List menghasilkan daftar pilihan."
   },
   "kata": "validation validasi dropdown daftar",
   "gambar": [
    "image003.jpg",
    "image004.jpg",
    "image005.jpg"
   ]
  },
  {
   "id": "proteksi",
   "cat": "data",
   "judul": "Proteksi sheet dan workbook",
   "ringkas": "Proteksi mengunci sheet supaya rumus dan isi pentingmu tidak terhapus atau berubah tanpa sengaja. Kamu boleh menambahkan kata sandi.",
   "intinya": "Semua kotak awalnya berstatus Locked. Kuncinya baru bekerja setelah kamu menyalakan Protect Sheet.",
   "analogi": "Bayangkan etalase toko. Semua barang dikunci di dalam kaca. Kamu hanya membuka satu pintu kecil untuk barang yang boleh disentuh pembeli. Kotak yang tidak dicentang Locked adalah pintu kecil itu.",
   "langkah": [
    "Sorot kotak yang boleh diubah orang lain, misalnya kotak isian.",
    "Tekan Ctrl+1, buka tab Protection, lalu hilangkan centang Locked. Klik OK.",
    "Buka tab Review lalu klik Protect Sheet.",
    "Isi kata sandi kalau mau (boleh dikosongkan), lalu pilih tindakan yang masih diizinkan. Klik OK.",
    "Untuk mengunci susunan sheet (tidak bisa tambah, hapus, atau pindah sheet), klik Review lalu Protect Workbook."
   ],
   "tips": [
    "Kata sandi yang lupa sangat sulit dipulihkan. Catat di tempat yang aman.",
    "Coba ketik di kotak yang terkunci. Kalau Excel menolak, berarti proteksinya sudah bekerja."
   ],
   "kuis": {
    "q": "Sel yang tetap bisa diubah setelah Protect Sheet adalah sel yang...",
    "opsi": [
     "Berwarna kuning",
     "Tidak dicentang Locked",
     "Berisi angka",
     "Di kolom A"
    ],
    "jawab": 1,
    "bahas": "Sel dengan Locked dimatikan tetap bisa diedit."
   },
   "kata": "proteksi protect password kunci",
   "gambar": [
    "protect-workbook-4.jpg",
    "proteksi-sheet-2.jpg",
    "proteksi-sheet-3-258x300.jpg"
   ]
  },
  {
   "id": "cond-format",
   "cat": "data",
   "judul": "Conditional Formatting: warna otomatis",
   "ringkas": "Conditional Formatting mewarnai kotak secara otomatis kalau isinya cocok dengan syaratmu. Contohnya nilai di bawah 70 menjadi merah.",
   "intinya": "Kamu menulis aturan sekali, Excel yang mewarnai sendiri.",
   "analogi": "Bayangkan guru yang menyiapkan pulpen merah. Setiap melihat nilai di bawah 70, ia langsung melingkarinya dengan merah. Conditional Formatting adalah guru itu, tetapi bekerja sendiri dan sangat cepat. Kalau nilainya berubah, warnanya ikut berubah.",
   "langkah": [
    "Sorot kotak-kotak nilai.",
    "Buka tab Home, klik Conditional Formatting, pilih Highlight Cells Rules, lalu Less Than (kurang dari).",
    "Ketik 70, pilih warna, lalu klik OK.",
    "Untuk syarat yang lebih rumit, pilih New Rule lalu Use a formula to determine which cells to format. Kamu menulis rumus yang hasilnya benar atau salah."
   ],
   "tips": [
    "Untuk menghapus aturan, klik Conditional Formatting lalu Clear Rules."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Status"
     ],
     [
      "Antonio",
      80,
      ""
     ],
     [
      "Romansyah",
      65,
      ""
     ],
     [
      "Devi",
      72,
      ""
     ],
     [
      "Bagus",
      55,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=IF(B2<70,\"Perlu remedial\",\"Tuntas\")",
    "coba": [
     [
      "=IF(B2<70,\"Perlu remedial\",\"Tuntas\")",
      "Syarat yang sama dengan aturan warna"
     ]
    ],
    "catatan": "Aturan Conditional Formatting memakai syarat logika yang sama dengan IF."
   },
   "kuis": {
    "q": "Aturan mana yang mewarnai sel bernilai kurang dari 70?",
    "opsi": [
     "Greater Than 70",
     "Less Than 70",
     "Equal To 70",
     "Between 70 and 100"
    ],
    "jawab": 1,
    "bahas": "Less Than berarti lebih kecil dari."
   },
   "kata": "conditional formatting warna otomatis",
   "gambar": [
    "conditional-formatting-3-300x290.jpg",
    "conditional-formatting-4-300x290.jpg",
    "image002-243x300.jpg"
   ]
  },
  {
   "id": "consolidate",
   "cat": "data",
   "judul": "Consolidate: menggabungkan beberapa tabel",
   "ringkas": "Consolidate menggabungkan beberapa tabel kecil (dari beberapa area atau sheet) menjadi satu ringkasan, misalnya total penjualan dari tiap cabang.",
   "intinya": "Consolidate menjumlahkan (atau merata-ratakan) data yang namanya sama, dari beberapa tempat sekaligus.",
   "analogi": "Bayangkan tiga warung melaporkan penjualan. Ada yang menjual gula, kopi, dan teh. Kamu ingin satu laporan total: berapa gula, berapa kopi, berapa teh dari semua warung. Consolidate adalah juru tulis yang mengelompokkan berdasarkan nama barang lalu menjumlahkannya.",
   "langkah": [
    "Klik satu kotak kosong sebagai tempat hasil.",
    "Buka tab Data lalu klik Consolidate.",
    "Di Function pilih Sum (jumlah) atau Average (rata-rata), dan sebagainya.",
    "Klik kotak Reference, sorot tabel pertama, lalu klik Add. Ulangi untuk tabel kedua dan seterusnya.",
    "Centang Top row dan Left column supaya Excel mencocokkan data berdasarkan nama (label), bukan berdasarkan posisi.",
    "Klik OK."
   ],
   "kuis": {
    "q": "Centang Left column pada Consolidate berguna untuk...",
    "opsi": [
     "Mencocokkan data lewat label baris",
     "Mengunci kolom",
     "Menyembunyikan kolom",
     "Mengurutkan kolom"
    ],
    "jawab": 0,
    "bahas": "Label di kolom kiri dipakai untuk mencocokkan baris dari tiap sumber."
   },
   "kata": "consolidate gabung konsolidasi",
   "gambar": [
    "fitur-consolidate-1-287x300.jpg",
    "fitur-consolidate-2.jpg",
    "fitur-consolidate-3-300x207.jpg"
   ]
  },
  {
   "id": "pivot",
   "cat": "data",
   "judul": "PivotTable: meringkas data besar",
   "ringkas": "PivotTable meringkas ribuan baris menjadi tabel kecil hanya dengan menyeret kolom. Tidak perlu rumus.",
   "intinya": "Kamu menyeret judul kolom ke kotak yang tepat, lalu Excel menyusun ringkasannya.",
   "analogi": "Bayangkan buku kas toko dengan 1000 catatan penjualan. Kamu ingin tahu total penjualan tiap jenis barang. Mencatatnya satu-satu sangat lama. PivotTable bisa menjawabnya dalam beberapa detik, seperti asisten yang memilah semua catatan ke dalam tumpukan sesuai jenisnya, lalu menghitung isi tiap tumpukan.",
   "langkah": [
    "Klik satu kotak di dalam data. Pastikan setiap kolom punya judul di baris paling atas.",
    "Buka tab Insert, klik PivotTable, lalu klik OK.",
    "Di daftar kolom yang muncul, seret kolom kategori (misalnya Jenis Barang) ke kotak Rows.",
    "Seret kolom angka (misalnya Penjualan) ke kotak Values. Excel langsung menjumlahkannya per kategori.",
    "Mau menghitung banyaknya, bukan jumlahnya? Klik kanan angka di tabel, pilih Value Field Settings, lalu ganti Sum menjadi Count atau Average.",
    "Kalau data sumber berubah, klik kanan PivotTable lalu pilih Refresh."
   ],
   "tips": [
    "PivotTable tidak ikut berubah otomatis. Selalu klik Refresh setelah datamu diubah."
   ],
   "kuis": {
    "q": "Setelah data sumber berubah, apa yang harus dilakukan pada PivotTable?",
    "opsi": [
     "Refresh",
     "Hapus",
     "Urutkan",
     "Protect"
    ],
    "jawab": 0,
    "bahas": "Pivot tidak otomatis ikut berubah; Refresh memperbaruinya."
   },
   "kata": "pivot table ringkasan",
   "gambar": [
    "funsi-pivottable-excel-1-300x221.jpg",
    "funsi-pivottable-excel-2-300x287.jpg",
    "funsi-pivottable-excel-5-300x223.jpg"
   ]
  },
  {
   "id": "subtotal",
   "cat": "data",
   "judul": "Subtotal: ringkasan per kelompok",
   "ringkas": "Subtotal menyisipkan baris total di setiap kelompok data. Datanya harus diurutkan dulu berdasarkan kelompoknya.",
   "intinya": "SUBTOTAL menghitung hanya baris yang tampil, jadi cocok dipakai bersama Filter.",
   "analogi": "Bayangkan daftar belanja yang dikelompokkan: sayur, buah, daging. Di akhir tiap kelompok kamu menulis \"jumlah sayur\", \"jumlah buah\", dan seterusnya. Fitur Subtotal menulis baris jumlah itu otomatis di akhir tiap kelompok.",
   "sintaks": "=SUBTOTAL(nomor_fungsi; rentang)",
   "argumen": [
    [
     "nomor_fungsi",
     "Angka yang menentukan jenis hitungan. 1 = rata-rata, 2 = banyaknya angka, 4 = terbesar, 5 = terkecil, 9 = jumlah."
    ],
    [
     "rentang",
     "Kotak-kotak yang dihitung."
    ]
   ],
   "langkah": [
    "Urutkan data berdasarkan kolom yang jadi kelompok, misalnya Kategori.",
    "Buka tab Data lalu klik Subtotal.",
    "Di At each change in, pilih kolom kelompok. Di Use function pilih Sum. Centang kolom yang mau dijumlahkan.",
    "Klik OK. Di sebelah kiri muncul tombol angka 1, 2, 3. Klik angka itu untuk meringkas atau membuka rincian."
   ],
   "tips": [
    "Angka 9 artinya jumlah. Angka 109 artinya jumlah juga, tetapi mengabaikan baris yang kamu sembunyikan sendiri."
   ],
   "kuis": {
    "q": "Nomor fungsi mana pada SUBTOTAL yang menjumlah?",
    "opsi": [
     "1",
     "9",
     "4",
     "2"
    ],
    "jawab": 1,
    "bahas": "9 untuk SUM."
   },
   "kata": "subtotal total kelompok",
   "gambar": [
    "penggunaan-fungsi-subtotal-excel-1-300x261.jpg",
    "penggunaan-fungsi-subtotal-excel-2-300x222.jpg",
    "penggunaan-fungsi-subtotal-excel-3-240x300.jpg"
   ]
  },
  {
   "id": "what-if",
   "cat": "data",
   "judul": "Data Table (What-If Analysis)",
   "ringkas": "Data Table menghitung satu rumus berkali-kali dengan angka masukan yang berbeda-beda, misalnya cicilan pada beberapa pilihan bunga.",
   "intinya": "Kamu menyiapkan rumus dan daftar angka percobaan, lalu Excel mengisi semua jawabannya sekaligus.",
   "analogi": "Bayangkan kamu bertanya, \"Kalau bunga 5 persen, cicilanku berapa? Kalau 6 persen? Kalau 7 persen?\" Biasanya kamu harus mengganti angka satu-satu. Data Table menjawab semua pertanyaan itu dalam satu tabel.",
   "langkah": [
    "Taruh rumus di pojok kiri atas tabel. Taruh angka percobaan di kolom tepat di bawahnya (atau di baris di sebelah kanannya).",
    "Sorot seluruh tabel itu, termasuk rumus dan angka percobaan.",
    "Buka tab Data, klik What-If Analysis, lalu pilih Data Table.",
    "Isi Column input cell dengan kotak masukan yang dipakai rumus kalau angka percobaanmu berderet ke bawah. Pakai Row input cell kalau berderet ke samping.",
    "Klik OK. Tabel terisi sendiri."
   ],
   "kuis": {
    "q": "Untuk nilai masukan yang berderet ke bawah, kotak mana yang diisi?",
    "opsi": [
     "Row input cell",
     "Column input cell",
     "Keduanya",
     "Tidak ada"
    ],
    "jawab": 1,
    "bahas": "Deret ke bawah (kolom) memakai Column input cell."
   },
   "kata": "data table what-if analysis",
   "gambar": [
    "data-table.jpg"
   ]
  },
  {
   "id": "diagram",
   "cat": "data",
   "judul": "Membuat diagram (grafik)",
   "ringkas": "Grafik mengubah angka menjadi gambar sehingga lebih mudah dibandingkan sekilas.",
   "intinya": "Sorot datamu, pilih jenis grafik yang cocok, selesai.",
   "analogi": "Angka itu seperti daftar panjang. Grafik seperti foto. Dengan satu pandangan kamu tahu mana yang tinggi dan mana yang rendah, tanpa membaca satu per satu.",
   "langkah": [
    "Sorot datamu, termasuk judul kolom dan judul baris.",
    "Buka tab Insert lalu pilih jenis grafik: Column (batang), Line (garis), Pie (lingkaran), dan lainnya.",
    "Klik grafiknya, lalu buka Chart Design untuk mengganti gaya dan warna.",
    "Klik tanda + di samping grafik untuk menambah judul dan label angka."
   ],
   "tips": [
    "Pie cocok untuk melihat bagian dari keseluruhan (misalnya pembagian kue). Line cocok untuk melihat perubahan dari waktu ke waktu. Column cocok untuk membandingkan beberapa hal."
   ],
   "kuis": {
    "q": "Jenis grafik yang cocok untuk tren dari waktu ke waktu adalah...",
    "opsi": [
     "Pie",
     "Line",
     "Radar",
     "Donut"
    ],
    "jawab": 1,
    "bahas": "Line menunjukkan perubahan terhadap waktu."
   },
   "kata": "diagram grafik chart",
   "gambar": [
    "diagram-dg-excel-1-300x161.jpg",
    "diagram-dg-excel-4-300x91.jpg"
   ]
  },
  {
   "id": "transpose",
   "cat": "data",
   "judul": "Mengubah baris menjadi kolom (Transpose)",
   "ringkas": "Transpose menukar baris menjadi kolom (atau sebaliknya) tanpa kamu mengetik ulang.",
   "intinya": "Transpose memutar tabel seperempat putaran.",
   "analogi": "Bayangkan kamu memegang selembar daftar lalu memutarnya ke samping. Yang tadinya berderet ke bawah sekarang berderet ke kanan. Itulah Transpose.",
   "langkah": [
    "Sorot data asal lalu tekan Ctrl+C.",
    "Klik satu kotak kosong sebagai tempat tujuan.",
    "Buka tab Home, klik panah di bawah Paste, pilih Paste Special.",
    "Centang Transpose lalu klik OK."
   ],
   "kuis": {
    "q": "Opsi Paste Special untuk menukar baris dan kolom adalah...",
    "opsi": [
     "Transpose",
     "Skip blanks",
     "Values",
     "Formats"
    ],
    "jawab": 0,
    "bahas": "Transpose."
   },
   "kata": "transpose baris kolom",
   "gambar": [
    "data-baris-menjadi-data-kolom-excel-3-300x191.jpg",
    "data-baris-menjadi-data-kolom-excel-4-300x267.jpg",
    "data-baris-menjadi-data-kolom-excel-5.jpg"
   ]
  },
  {
   "id": "pecah-teks",
   "cat": "data",
   "judul": "Memecah teks ke beberapa kolom",
   "ringkas": "Text to Columns memotong tulisan panjang dalam satu kotak menjadi beberapa kolom, berdasarkan tanda pemisah seperti koma atau spasi.",
   "intinya": "Kamu memberi tahu Excel tanda mana yang jadi tempat memotong.",
   "analogi": "Bayangkan sebuah roti panjang. Kamu memotongnya di setiap garis yang kamu tandai. Tanda itu bisa koma, spasi, atau titik. Hasilnya beberapa potong roti di kotak yang berbeda.",
   "langkah": [
    "Sorot kolom yang isinya tulisan gabungan.",
    "Buka tab Data lalu klik Text to Columns.",
    "Pilih Delimited kalau ada tanda pemisah. Pilih Fixed width kalau setiap potongan punya lebar yang sama.",
    "Centang tanda pemisahnya (Comma untuk koma, Space untuk spasi), lalu klik Next dan Finish.",
    "Pastikan kolom di sebelah kanan masih kosong. Kalau tidak, isinya akan tertimpa."
   ],
   "tips": [
    "Salin datamu dulu sebelum memotong. Kalau salah, kamu masih punya aslinya."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Depan",
      "Belakang"
     ],
     [
      "Budi Santoso",
      "",
      ""
     ],
     [
      "Siti Aminah",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LEFT(A2,FIND(\" \",A2)-1)",
    "coba": [
     [
      "=LEFT(A2,FIND(\" \",A2)-1)",
      "Kata pertama"
     ],
     [
      "=MID(A2,FIND(\" \",A2)+1,50)",
      "Sisanya"
     ]
    ],
    "catatan": "Rumus ini adalah alternatif Text to Columns yang tetap hidup bila data berubah."
   },
   "kuis": {
    "q": "Pilihan mana untuk teks yang dipisah koma?",
    "opsi": [
     "Fixed width",
     "Delimited",
     "Wrap Text",
     "Merge"
    ],
    "jawab": 1,
    "bahas": "Delimited memakai pemisah seperti koma."
   },
   "kata": "text to columns pecah teks delimiter",
   "gambar": [
    "mecah-teks-3-300x229.jpg",
    "mecah-teks-4-300x229.jpg",
    "mecah-teks-5-300x229.jpg"
   ]
  },
  {
   "id": "npwp",
   "cat": "data",
   "judul": "Mengubah format NPWP",
   "ringkas": "Nomor NPWP punya pola titik dan strip. Kamu bisa membuatnya dengan format kustom atau dengan rumus tulisan.",
   "intinya": "Format kustom menyisipkan titik dan strip tanpa mengubah angkanya.",
   "analogi": "Bayangkan 15 angka berderet tanpa jeda, sulit dibaca. Format kustom seperti penggaris yang menempelkan titik dan strip pada tempat yang benar, sehingga lebih mudah dibaca.",
   "langkah": [
    "Sorot kotak berisi nomor NPWP (15 digit).",
    "Tekan Ctrl+1, pilih Custom, lalu tulis 00.000.000.0-000.000 di kotak Type.",
    "Klik OK. Nomor tampil dengan titik dan strip, angkanya di dalam kotak tidak berubah.",
    "Cara lain: kalau nomornya berupa tulisan, ambil potongannya dengan LEFT, MID, dan RIGHT, lalu sambung dengan & dan tanda titik atau strip."
   ],
   "tips": [
    "Kalau nomor diawali angka 0, simpan sebagai Text supaya nol di depan tidak hilang."
   ],
   "demo": {
    "data": [
     [
      "NPWP 15 digit"
     ],
     [
      "123456789012345"
     ]
    ],
    "sel": "B2",
    "rumus": "=LEFT(A2,2)&\".\"&MID(A2,3,3)&\".\"&MID(A2,6,3)&\".\"&MID(A2,9,1)&\"-\"&MID(A2,10,3)&\".\"&RIGHT(A2,3)",
    "catatan": "Pola: 2-3-3-1-3-3 digit."
   },
   "kuis": {
    "q": "Fungsi apa yang mengambil beberapa karakter dari tengah teks?",
    "opsi": [
     "LEFT",
     "MID",
     "RIGHT",
     "LEN"
    ],
    "jawab": 1,
    "bahas": "MID."
   },
   "kata": "npwp format nomor",
   "gambar": [
    "merubah-format-npwp-1.jpg"
   ]
  },
  {
   "id": "currency",
   "cat": "data",
   "judul": "Format Currency dan Accounting",
   "ringkas": "Currency menaruh simbol mata uang tepat di depan angka. Accounting menaruh simbol di tepi kiri kotak sehingga simbol dan angka rapi berderet.",
   "intinya": "Keduanya hanya mengubah tampilan, bukan nilai angkanya.",
   "analogi": "Currency seperti menempelkan tulisan Rp di depan harga di label toko. Accounting seperti daftar harga di struk yang semua tanda Rp-nya berbaris lurus di kiri dan semua angkanya rata di kanan.",
   "langkah": [
    "Sorot kotak angka.",
    "Buka tab Home, klik Number Format, lalu pilih Currency atau Accounting.",
    "Mau mengganti simbol? Tekan Ctrl+1, pilih Currency, lalu pilih Rp di Symbol.",
    "Atur jumlah angka di belakang koma sesuai kebutuhan (Decimal places)."
   ],
   "kuis": {
    "q": "Perbedaan utama Accounting dibanding Currency?",
    "opsi": [
     "Simbol rata di tepi kiri sel",
     "Tidak bisa dijumlah",
     "Selalu merah",
     "Memakai huruf miring"
    ],
    "jawab": 0,
    "bahas": "Accounting meluruskan simbol dan desimal antar baris."
   },
   "kata": "currency accounting mata uang rupiah",
   "gambar": [
    "currency-dan-accounting.jpg"
   ]
  },
  {
   "id": "nomor-acak",
   "cat": "data",
   "judul": "Membuat nomor acak",
   "ringkas": "RAND dan RANDBETWEEN membuat angka acak. Angkanya berganti setiap kali lembar kerja dihitung ulang.",
   "intinya": "RANDBETWEEN mengundi satu angka bulat di antara dua batas yang kamu tentukan.",
   "analogi": "Bayangkan mengocok dadu. Setiap kali kamu mengocok, angkanya berbeda. =RANDBETWEEN(1;6) adalah dadu di dalam Excel. Kalau kamu mau angkanya berhenti berubah, kamu perlu menempelkan hasilnya sebagai angka biasa.",
   "sintaks": "=RANDBETWEEN(bawah; atas)",
   "argumen": [
    [
     "bawah",
     "Angka bulat terkecil yang boleh keluar."
    ],
    [
     "atas",
     "Angka bulat terbesar yang boleh keluar."
    ]
   ],
   "langkah": [
    "Ketik =RANDBETWEEN(1;100) lalu tekan Enter. Muncul satu angka dari 1 sampai 100.",
    "Tekan F9 untuk mengocok ulang.",
    "Mau angkanya tetap? Salin kotaknya (Ctrl+C), lalu Paste Special dan pilih Values."
   ],
   "tips": [
    "Angka acak berganti setiap kali kamu mengetik sesuatu di lembar kerja. Itu normal, bukan kerusakan."
   ],
   "demo": {
    "data": [
     [
      "Undian"
     ],
     [
      ""
     ]
    ],
    "sel": "A2",
    "rumus": "=RANDBETWEEN(1,100)",
    "coba": [
     [
      "=RANDBETWEEN(1,100)",
      "1 sampai 100"
     ],
     [
      "=RAND()",
      "Desimal 0 sampai 1"
     ]
    ],
    "catatan": "Ketik ulang rumus untuk memperoleh angka baru."
   },
   "kuis": {
    "q": "Apa yang menjaga angka acak tetap?",
    "opsi": [
     "Tekan F9",
     "Paste Special > Values",
     "Mengurutkan",
     "Menyembunyikan baris"
    ],
    "jawab": 1,
    "bahas": "Menempel sebagai Values menghapus rumus acaknya."
   },
   "kata": "acak random randbetween",
   "gambar": [
    "hasil-perumusan-279x300.jpg",
    "membuat-nomor-acak-2-300x266.jpg",
    "tabel-1-data-300x250.jpg"
   ]
  },
  {
   "id": "sum",
   "cat": "rumus",
   "judul": "SUM: menjumlahkan",
   "ringkas": "SUM menjumlahkan semua angka di satu atau beberapa deretan kotak. Ini rumus yang paling sering dipakai.",
   "intinya": "SUM sama seperti kamu menjumlahkan di kalkulator, hanya saja Excel yang menekan tombolnya.",
   "analogi": "Bayangkan kamu menghitung uang receh di meja. Kamu bilang, \"Tolong jumlahkan semua ini.\" SUM adalah tangan yang menjumlahkannya dengan cepat dan tanpa salah.",
   "sintaks": "=SUM(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Kotak, deretan kotak, atau angka pertama yang mau dijumlahkan."
    ],
    [
     "angka2, ...",
     "Tidak wajib. Tambahan kotak atau deretan lain."
    ]
   ],
   "langkah": [
    "Klik satu kotak kosong tepat di bawah deretan angka.",
    "Ketik =SUM( lalu seret mouse dari angka pertama sampai angka terakhir.",
    "Ketik tanda kurung tutup ) lalu tekan Enter.",
    "Jalan pintas: tekan Alt dan = bersamaan. Excel menuliskan SUM untukmu.",
    "Mau total kolom lain? Tarik rumusnya ke samping. Alamat kotak menyesuaikan sendiri."
   ],
   "tips": [
    "Tulisan dan kotak kosong di dalam deretan diabaikan. Hanya angka yang dijumlahkan.",
    "Total ke bawah dan total ke samping memakai pola yang sama."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "E2",
    "rumus": "=SUM(B2:D2)",
    "coba": [
     [
      "=SUM(B2:D2)",
      "Total nilai Antonio"
     ],
     [
      "=SUM(B2:B6)",
      "Total kolom Matematika"
     ],
     [
      "=SUM(B2:B6,D2:D6)",
      "Dua rentang sekaligus"
     ]
    ],
    "catatan": "Salin rumus ke E3:E6 dengan mengetik ulang untuk baris lain."
   },
   "kuis": {
    "q": "Pintasan keyboard untuk memasukkan AutoSum adalah...",
    "opsi": [
     "Alt+=",
     "Ctrl+S",
     "Shift+F3",
     "Ctrl+="
    ],
    "jawab": 0,
    "bahas": "Alt+= menulis rumus SUM otomatis."
   },
   "kata": "sum jumlah total penjumlahan",
   "gambar": [
    "fungsi-sum-pada-excel.jpg",
    "gambar-1-1.jpg",
    "gambar-2-1.jpg"
   ]
  },
  {
   "id": "max",
   "cat": "rumus",
   "judul": "MAX: nilai terbesar",
   "ringkas": "MAX mencari angka yang paling besar dari sekumpulan kotak.",
   "intinya": "MAX menjawab: siapa yang paling tinggi?",
   "analogi": "Bayangkan kamu membandingkan tinggi badan teman sekelas. MAX langsung menunjuk siapa yang paling tinggi, lalu menyebutkan tingginya.",
   "sintaks": "=MAX(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Kotak atau deretan kotak pertama."
    ],
    [
     "angka2, ...",
     "Tidak wajib. Tambahan kotak atau deretan lain."
    ]
   ],
   "langkah": [
    "Siapkan deretan angka.",
    "Klik kotak kosong untuk hasil, ketik =MAX( lalu seret deretan angkanya.",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=MAX(B2:B6)",
    "coba": [
     [
      "=MAX(B2:B6)",
      "Matematika tertinggi"
     ],
     [
      "=MAX(B2:D6)",
      "Nilai tertinggi seluruh tabel"
     ],
     [
      "=INDEX(A2:A6,MATCH(MAX(B2:B6),B2:B6,0))",
      "Nama pemilik nilai tertinggi"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MAX(4;9;2)?",
    "opsi": [
     "2",
     "4",
     "9",
     "15"
    ],
    "jawab": 2,
    "bahas": "MAX mengambil angka terbesar."
   },
   "kata": "max maksimum terbesar tertinggi",
   "gambar": [
    "1-4-contoh-data-rumus-max-300x158.jpg",
    "2-4-mengoperasikan-rumus-max-300x156.jpg",
    "4-4-hasil-aplikasi-rumus-max-300x156.jpg"
   ]
  },
  {
   "id": "min",
   "cat": "rumus",
   "judul": "MIN: nilai terkecil",
   "ringkas": "MIN mencari angka yang paling kecil dari sekumpulan kotak.",
   "intinya": "MIN menjawab: siapa yang paling rendah?",
   "analogi": "Kebalikan MAX. Kalau MAX mencari anak yang paling tinggi, MIN mencari anak yang paling pendek. Cocok untuk mencari harga termurah atau nilai terendah.",
   "sintaks": "=MIN(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Kotak atau deretan kotak pertama."
    ],
    [
     "angka2, ...",
     "Tidak wajib. Tambahan kotak atau deretan lain."
    ]
   ],
   "langkah": [
    "Klik kotak kosong untuk hasil.",
    "Ketik =MIN( lalu seret deretan angkanya.",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=MIN(B2:B6)",
    "coba": [
     [
      "=MIN(B2:B6)",
      "Matematika terendah"
     ],
     [
      "=MIN(B2:D6)",
      "Terendah di seluruh tabel"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MIN(4;9;2)?",
    "opsi": [
     "2",
     "4",
     "9",
     "0"
    ],
    "jawab": 0,
    "bahas": "MIN mengambil angka terkecil."
   },
   "kata": "min minimum terkecil terendah",
   "gambar": [
    "rumus-min-excel-contoh-1.jpg",
    "rumus-min-excel-contoh-2.jpg",
    "rumus-min-excel-data.jpg"
   ]
  },
  {
   "id": "average",
   "cat": "rumus",
   "judul": "AVERAGE: rata-rata",
   "ringkas": "AVERAGE menghitung rata-rata: semua angka dijumlahkan, lalu dibagi banyaknya angka. Kotak kosong dan tulisan diabaikan.",
   "intinya": "Rata-rata adalah angka tengah yang adil untuk semua.",
   "analogi": "Bayangkan tiga anak punya 70, 80, dan 90 permen. Kalau permennya dikumpulkan lalu dibagi rata, masing-masing mendapat 80. Itulah rata-rata.",
   "sintaks": "=AVERAGE(angka1; [angka2]; ...)",
   "argumen": [
    [
     "angka1",
     "Kotak atau deretan kotak pertama."
    ],
    [
     "angka2, ...",
     "Tidak wajib. Tambahan kotak atau deretan lain."
    ]
   ],
   "langkah": [
    "Klik kotak kosong untuk hasil.",
    "Ketik =AVERAGE( lalu seret deretan nilainya.",
    "Tutup dengan ) lalu tekan Enter. Atur jumlah angka di belakang koma kalau perlu."
   ],
   "tips": [
    "Kotak berisi angka 0 ikut dihitung. Kotak yang benar-benar kosong tidak ikut. Hati-hati dengan data yang belum diisi."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "E2",
    "rumus": "=AVERAGE(B2:D2)",
    "coba": [
     [
      "=AVERAGE(B2:D2)",
      "Rata-rata Antonio"
     ],
     [
      "=ROUND(AVERAGE(B2:D2),1)",
      "Dibulatkan 1 desimal"
     ],
     [
      "=AVERAGE(B2:B6)",
      "Rata-rata kolom Matematika"
     ]
    ]
   },
   "kuis": {
    "q": "Rata-rata dari 70, 80, 90 adalah...",
    "opsi": [
     "70",
     "80",
     "90",
     "240"
    ],
    "jawab": 1,
    "bahas": "240 dibagi 3 = 80."
   },
   "kata": "average rata-rata mean",
   "gambar": [
    "gambar-1-3average-300x136.jpg",
    "gambar-2-3average-300x125.jpg",
    "gambar-6-3-hasil-rumus-average-300x124.jpg"
   ]
  },
  {
   "id": "count",
   "cat": "rumus",
   "judul": "COUNT, COUNTA, dan COUNTBLANK",
   "ringkas": "COUNT menghitung kotak yang berisi angka. COUNTA menghitung kotak yang ada isinya (angka maupun tulisan). COUNTBLANK menghitung kotak yang kosong.",
   "intinya": "Tiga fungsi ini menjawab tiga pertanyaan: berapa angka, berapa yang terisi, berapa yang kosong.",
   "analogi": "Bayangkan satu baris kursi di bioskop. COUNT menghitung kursi yang ditempati orang. COUNTA menghitung kursi yang ada barangnya (tas, jaket, atau orang). COUNTBLANK menghitung kursi yang masih kosong.",
   "sintaks": "=COUNT(rentang)   =COUNTA(rentang)   =COUNTBLANK(rentang)",
   "argumen": [
    [
     "rentang",
     "Deretan kotak yang mau dihitung."
    ]
   ],
   "langkah": [
    "Klik kotak kosong untuk hasil.",
    "Ketik salah satu fungsi, misalnya =COUNT( lalu seret deretan kotaknya.",
    "Tutup dengan ) lalu tekan Enter.",
    "Coba ketiga fungsi pada deretan yang sama, lalu bandingkan hasilnya."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai"
     ],
     [
      "Antonio",
      80
     ],
     [
      "Romansyah",
      ""
     ],
     [
      "Devi",
      "hadir"
     ],
     [
      "Bagus",
      85
     ]
    ],
    "sel": "D2",
    "rumus": "=COUNT(B2:B5)",
    "coba": [
     [
      "=COUNT(B2:B5)",
      "Hanya angka"
     ],
     [
      "=COUNTA(B2:B5)",
      "Semua yang terisi"
     ],
     [
      "=COUNTBLANK(B2:B5)",
      "Sel kosong"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi mana yang menghitung sel kosong?",
    "opsi": [
     "COUNT",
     "COUNTA",
     "COUNTBLANK",
     "COUNTIF"
    ],
    "jawab": 2,
    "bahas": "COUNTBLANK."
   },
   "kata": "count counta countblank hitung jumlah data",
   "gambar": [
    "1-5-hasil-rumus-coun-300x180.jpg",
    "rumus-countblank-excel-21-300x192.jpg",
    "rumus-countblank-excel-300x212.jpg"
   ]
  },
  {
   "id": "countif",
   "cat": "rumus",
   "judul": "COUNTIF: menghitung sel yang memenuhi syarat",
   "ringkas": "COUNTIF menghitung berapa kotak yang cocok dengan satu syarat, misalnya berapa nilai yang di atas 75.",
   "intinya": "COUNTIF = hitung, tetapi hanya yang memenuhi syarat.",
   "analogi": "Bayangkan kamu berdiri di depan kelas dan berkata, \"Yang tingginya di atas 150 cm, angkat tangan.\" Lalu kamu menghitung tangan yang terangkat. COUNTIF melakukan hal yang sama pada kotak-kotak.",
   "sintaks": "=COUNTIF(rentang; kriteria)",
   "argumen": [
    [
     "rentang",
     "Kotak-kotak yang diperiksa."
    ],
    [
     "kriteria",
     "Syaratnya. Bisa angka, tulisan, atau perbandingan seperti \">75\"."
    ]
   ],
   "langkah": [
    "Ketik =COUNTIF( lalu seret deretan kotak yang diperiksa.",
    "Ketik tanda titik koma (;) lalu tulis syarat di dalam tanda kutip, misalnya \">75\".",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "tips": [
    "Tanda perbandingan seperti > atau >= harus berada di dalam tanda kutip: \">=70\".",
    "Tanda bintang (*) berarti \"huruf apa saja, berapa pun\". \"A*\" artinya semua tulisan yang diawali huruf A."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=COUNTIF(B2:B6,\">=80\")",
    "coba": [
     [
      "=COUNTIF(B2:B6,\">=80\")",
      "Nilai Matematika 80 ke atas"
     ],
     [
      "=COUNTIF(A2:A6,\"B*\")",
      "Nama berawalan B"
     ],
     [
      "=COUNTIF(C2:C6,\"<75\")",
      "IPA di bawah 75"
     ]
    ]
   },
   "kuis": {
    "q": "Rumus mana yang menghitung sel bernilai di atas 75?",
    "opsi": [
     "=COUNTIF(A1:A5;>75)",
     "=COUNTIF(A1:A5;\">75\")",
     "=COUNT(A1:A5>75)",
     "=IF(A1:A5>75)"
    ],
    "jawab": 1,
    "bahas": "Kriteria berisi operator harus diapit tanda kutip."
   },
   "kata": "countif hitung kondisi syarat",
   "gambar": [
    "data-rumus-countif-300x240.jpg",
    "function-arguments-countif-300x150.jpg"
   ]
  },
  {
   "id": "sumif",
   "cat": "rumus",
   "judul": "SUMIF: menjumlahkan dengan syarat",
   "ringkas": "SUMIF menjumlahkan angka, tetapi hanya dari baris yang cocok dengan syaratmu.",
   "intinya": "SUMIF = jumlahkan, tetapi hanya yang memenuhi syarat.",
   "analogi": "Bayangkan kamu punya celengan berisi uang dari beberapa anak. Kamu bertanya, \"Berapa uang milik Ani saja?\" Kamu hanya menjumlahkan uang yang bertuliskan nama Ani. Itulah SUMIF.",
   "sintaks": "=SUMIF(rentang; kriteria; [rentang_jumlah])",
   "argumen": [
    [
     "rentang",
     "Kotak-kotak yang diperiksa terhadap syarat, misalnya kolom nama."
    ],
    [
     "kriteria",
     "Syaratnya, misalnya \"Ani\"."
    ],
    [
     "rentang_jumlah",
     "Kotak-kotak yang dijumlahkan, misalnya kolom uang. Kalau dikosongkan, Excel menjumlahkan rentang pertama."
    ]
   ],
   "langkah": [
    "Ketik =SUMIF( lalu sorot kolom yang diperiksa (misalnya kolom nama).",
    "Ketik ; lalu tulis syaratnya di dalam tanda kutip, misalnya \"Ani\".",
    "Ketik ; lalu sorot kolom yang dijumlahkan (misalnya kolom uang).",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kategori",
      "Penjualan"
     ],
     [
      "Alat tulis",
      50000
     ],
     [
      "Buku",
      120000
     ],
     [
      "Alat tulis",
      30000
     ],
     [
      "Buku",
      80000
     ]
    ],
    "sel": "D2",
    "rumus": "=SUMIF(A2:A5,\"Buku\",B2:B5)",
    "coba": [
     [
      "=SUMIF(A2:A5,\"Buku\",B2:B5)",
      "Total penjualan buku"
     ],
     [
      "=SUMIF(B2:B5,\">60000\")",
      "Penjualan di atas 60.000"
     ],
     [
      "=SUMIFS(B2:B5,A2:A5,\"Alat tulis\",B2:B5,\">40000\")",
      "Dua syarat sekaligus"
     ]
    ]
   },
   "kuis": {
    "q": "Argumen ketiga SUMIF berisi...",
    "opsi": [
     "Kriteria",
     "Rentang yang dijumlahkan",
     "Tanggal",
     "Nama sheet"
    ],
    "jawab": 1,
    "bahas": "Rentang yang akan dijumlahkan."
   },
   "kata": "sumif jumlah kondisi syarat",
   "gambar": [
    "data-sumif-300x266.jpg",
    "function-arguments-sumif-300x174.jpg"
   ]
  },
  {
   "id": "averageif",
   "cat": "rumus",
   "judul": "AVERAGEIF: rata-rata dengan syarat",
   "ringkas": "AVERAGEIF menghitung rata-rata, tetapi hanya dari kotak yang cocok dengan syaratmu.",
   "intinya": "AVERAGEIF = rata-rata, tetapi hanya yang memenuhi syarat.",
   "analogi": "Bayangkan kamu ingin tahu rata-rata nilai anak laki-laki saja. Kamu hanya mengambil nilai anak laki-laki, lalu merata-ratakannya. Anak perempuan tidak ikut dihitung.",
   "sintaks": "=AVERAGEIF(rentang; kriteria; [rentang_rata2])",
   "argumen": [
    [
     "rentang",
     "Kotak-kotak yang diperiksa terhadap syarat."
    ],
    [
     "kriteria",
     "Syaratnya."
    ],
    [
     "rentang_rata2",
     "Kotak-kotak yang dirata-ratakan."
    ]
   ],
   "langkah": [
    "Ketik =AVERAGEIF( lalu sorot kolom yang diperiksa.",
    "Ketik ; lalu tulis syaratnya di dalam tanda kutip.",
    "Ketik ; lalu sorot kolom yang dirata-ratakan, tutup dengan ), lalu tekan Enter."
   ],
   "tips": [
    "Kalau tidak ada satu pun kotak yang cocok, hasilnya #DIV/0!. Artinya tidak ada yang bisa dirata-ratakan."
   ],
   "demo": {
    "data": [
     [
      "Kelas",
      "Nilai"
     ],
     [
      "7A",
      80
     ],
     [
      "7B",
      70
     ],
     [
      "7A",
      90
     ],
     [
      "7B",
      60
     ]
    ],
    "sel": "D2",
    "rumus": "=AVERAGEIF(A2:A5,\"7A\",B2:B5)",
    "coba": [
     [
      "=AVERAGEIF(A2:A5,\"7A\",B2:B5)",
      "Rata-rata kelas 7A"
     ],
     [
      "=AVERAGEIF(B2:B5,\">=70\")",
      "Rata-rata nilai 70 ke atas"
     ]
    ]
   },
   "kuis": {
    "q": "Kapan AVERAGEIF menghasilkan #DIV/0!?",
    "opsi": [
     "Bila tidak ada sel yang cocok",
     "Bila ada teks",
     "Bila rentang terlalu besar",
     "Tidak pernah"
    ],
    "jawab": 0,
    "bahas": "Tidak ada sel yang memenuhi syarat berarti tidak ada yang dirata-ratakan."
   },
   "kata": "averageif rata-rata kondisi",
   "gambar": [
    "averageif-2-300x296.jpg",
    "averageif-3-300x300.jpg"
   ]
  },
  {
   "id": "rank",
   "cat": "rumus",
   "judul": "RANK: peringkat",
   "ringkas": "RANK memberi tahu peringkat sebuah angka di antara angka-angka lain: juara 1, juara 2, dan seterusnya.",
   "intinya": "RANK menjawab: aku ada di urutan ke berapa?",
   "analogi": "Bayangkan lomba lari. Semua waktu dicatat, lalu kamu bertanya, \"Aku juara berapa?\" RANK membandingkan angkamu dengan semua angka lain lalu menyebutkan urutannya.",
   "sintaks": "=RANK(angka; rentang; [urutan])",
   "argumen": [
    [
     "angka",
     "Angka yang mau dicari peringkatnya."
    ],
    [
     "rentang",
     "Semua angka pembanding. Tulis dengan tanda $ supaya tidak bergeser saat disalin."
    ],
    [
     "urutan",
     "Kosong atau 0: angka terbesar jadi juara 1. Isi 1: angka terkecil jadi juara 1."
    ]
   ],
   "langkah": [
    "Siapkan nilai tiap siswa, misalnya di kolom E.",
    "Di kotak peringkat ketik =RANK(E2;$E$2:$E$6).",
    "Tanda $ mengunci deretan pembanding supaya tidak bergeser ke bawah saat rumus disalin. Tekan F4 setelah menyorot deretan untuk memberi tanda $ otomatis.",
    "Tekan Enter, lalu tarik rumus ke bawah."
   ],
   "tips": [
    "Kalau dua nilai sama, peringkatnya sama, lalu peringkat berikutnya dilewati. Contoh: dua juara 1, berikutnya juara 3."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Total"
     ],
     [
      "Antonio",
      240
     ],
     [
      "Romansyah",
      235
     ],
     [
      "Devi",
      235
     ],
     [
      "Bagus",
      242
     ],
     [
      "Maulana",
      253
     ]
    ],
    "sel": "C2",
    "rumus": "=RANK(B2,$B$2:$B$6)",
    "coba": [
     [
      "=RANK(B2,$B$2:$B$6)",
      "Peringkat dari terbesar"
     ],
     [
      "=RANK(B2,$B$2:$B$6,1)",
      "Peringkat dari terkecil"
     ]
    ],
    "catatan": "Perhatikan Romansyah dan Devi yang sama-sama peringkat 4."
   },
   "kuis": {
    "q": "Mengapa rentang pada RANK ditulis $B$2:$B$6?",
    "opsi": [
     "Agar rentang tidak bergeser saat disalin",
     "Agar hasilnya rupiah",
     "Agar tidak bisa diedit",
     "Agar hasilnya desimal"
    ],
    "jawab": 0,
    "bahas": "Tanda $ mengunci alamat."
   },
   "kata": "rank peringkat ranking juara",
   "gambar": [
    "5-5-hasil-rumus-rank-2-300x179.jpg",
    "gambar-2-5-rumus-1-300x169.jpg",
    "gambar-4-5-rumus-2-300x182.jpg"
   ]
  },
  {
   "id": "large",
   "cat": "rumus",
   "judul": "LARGE dan SMALL: nilai ke-n",
   "ringkas": "LARGE mengambil angka terbesar ke-sekian. SMALL mengambil angka terkecil ke-sekian.",
   "intinya": "LARGE dan SMALL menjawab: siapa juara kedua? juara ketiga?",
   "analogi": "MAX hanya menunjuk juara 1. LARGE bisa menunjuk juara 2, juara 3, dan seterusnya. Kamu cukup menyebut nomor urutnya.",
   "sintaks": "=LARGE(rentang; k)   =SMALL(rentang; k)",
   "argumen": [
    [
     "rentang",
     "Kumpulan angka."
    ],
    [
     "k",
     "Urutan yang diminta. 1 artinya yang pertama, 2 artinya yang kedua, dan seterusnya."
    ]
   ],
   "langkah": [
    "Ketik =LARGE( lalu sorot deretan angkanya.",
    "Ketik ; lalu isi k. Contoh: 2 untuk angka terbesar kedua.",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "tips": [
    "=LARGE(rentang;1) hasilnya sama dengan MAX. =SMALL(rentang;1) hasilnya sama dengan MIN."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Matematika",
      "IPA",
      "B.Indo"
     ],
     [
      "Antonio",
      80,
      75,
      85
     ],
     [
      "Romansyah",
      70,
      85,
      80
     ],
     [
      "Devi",
      75,
      70,
      90
     ],
     [
      "Bagus",
      85,
      77,
      80
     ],
     [
      "Maulana",
      90,
      88,
      75
     ]
    ],
    "sel": "F2",
    "rumus": "=LARGE(B2:B6,2)",
    "coba": [
     [
      "=LARGE(B2:B6,2)",
      "Kedua terbesar"
     ],
     [
      "=SMALL(B2:B6,2)",
      "Kedua terkecil"
     ],
     [
      "=LARGE(B2:B6,1)+LARGE(B2:B6,2)",
      "Jumlah dua terbesar"
     ]
    ]
   },
   "kuis": {
    "q": "=LARGE(A1:A5;1) sama dengan...",
    "opsi": [
     "MIN",
     "MAX",
     "AVERAGE",
     "COUNT"
    ],
    "jawab": 1,
    "bahas": "Terbesar ke-1 adalah MAX."
   },
   "kata": "large small terbesar kedua ke-n",
   "gambar": [
    "rumus-excel-large-3.jpg",
    "rumus-excel-large-data-300x173.jpg"
   ]
  },
  {
   "id": "percentrank",
   "cat": "rumus",
   "judul": "PERCENTRANK: posisi persentase",
   "ringkas": "PERCENTRANK menunjukkan posisi sebuah angka dalam bentuk persentase dari seluruh data, mulai 0 (paling bawah) sampai 1 (paling atas).",
   "intinya": "Hasilnya makin dekat ke 1, makin tinggi posisi angkamu.",
   "analogi": "Bayangkan kamu berdiri di barisan anak-anak yang diurutkan dari yang paling pendek. Kalau kamu di tengah, posisimu sekitar 0,5. Kalau kamu yang paling tinggi, posisimu 1.",
   "sintaks": "=PERCENTRANK(rentang; x; [digit])",
   "argumen": [
    [
     "rentang",
     "Seluruh data pembanding."
    ],
    [
     "x",
     "Angka yang mau dicari posisinya."
    ],
    [
     "digit",
     "Tidak wajib. Berapa angka di belakang koma pada hasil. Kalau kosong, 3 digit."
    ]
   ],
   "langkah": [
    "Ketik =PERCENTRANK( lalu sorot seluruh data.",
    "Ketik ; lalu isi angka (atau kotak) yang mau dinilai.",
    "Tutup dengan ) lalu tekan Enter.",
    "Mau tampil sebagai persen? Ubah format kotak menjadi Percentage di tab Home."
   ],
   "demo": {
    "data": [
     [
      "Nilai"
     ],
     [
      60
     ],
     [
      70
     ],
     [
      80
     ],
     [
      90
     ],
     [
      100
     ]
    ],
    "sel": "C2",
    "rumus": "=PERCENTRANK(A2:A6,80)",
    "coba": [
     [
      "=PERCENTRANK(A2:A6,80)",
      "Posisi nilai 80"
     ],
     [
      "=PERCENTRANK(A2:A6,90)",
      "Posisi nilai 90"
     ]
    ]
   },
   "kuis": {
    "q": "Nilai PERCENTRANK selalu berada di antara...",
    "opsi": [
     "0 dan 1",
     "1 dan 100",
     "-1 dan 1",
     "0 dan 10"
    ],
    "jawab": 0,
    "bahas": "Hasilnya pecahan dari 0 sampai 1."
   },
   "kata": "percentrank persentil posisi",
   "gambar": [
    "percentrank-2-300x130.jpg"
   ]
  },
  {
   "id": "sumproduct",
   "cat": "rumus",
   "judul": "SUMPRODUCT: kali lalu jumlah",
   "ringkas": "SUMPRODUCT mengalikan angka-angka yang sejajar, lalu menjumlahkan semua hasil kalinya. Cocok untuk total harga.",
   "intinya": "Kali dulu, jumlahkan kemudian, semuanya dalam satu rumus.",
   "analogi": "Bayangkan kamu belanja: 2 buku seharga 5 ribu dan 3 pensil seharga 2 ribu. Jumlah uangnya adalah (2 x 5) ditambah (3 x 2). SUMPRODUCT melakukan hitungan itu untuk puluhan barang sekaligus.",
   "sintaks": "=SUMPRODUCT(rentang1; [rentang2]; ...)",
   "argumen": [
    [
     "rentang1",
     "Deretan angka pertama, misalnya harga."
    ],
    [
     "rentang2",
     "Deretan angka kedua yang jumlahnya sama banyak, misalnya jumlah barang."
    ]
   ],
   "langkah": [
    "Pastikan kedua deretan punya jumlah baris yang sama.",
    "Ketik =SUMPRODUCT( lalu sorot deretan harga.",
    "Ketik ; lalu sorot deretan jumlah barang.",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Barang",
      "Harga",
      "Jumlah"
     ],
     [
      "Pensil",
      3000,
      5
     ],
     [
      "Buku",
      8000,
      3
     ],
     [
      "Penggaris",
      5000,
      2
     ]
    ],
    "sel": "E2",
    "rumus": "=SUMPRODUCT(B2:B4,C2:C4)",
    "coba": [
     [
      "=SUMPRODUCT(B2:B4,C2:C4)",
      "Total belanja"
     ],
     [
      "=SUM(B2:B4)",
      "Bandingkan: hanya total harga"
     ]
    ],
    "catatan": "Hasil sama dengan menjumlah kolom Harga x Jumlah."
   },
   "kuis": {
    "q": "Apa hasil =SUMPRODUCT({1;2};{3;4}) secara konsep?",
    "opsi": [
     "1x3 + 2x4",
     "1+2+3+4",
     "1x2x3x4",
     "3-1 + 4-2"
    ],
    "jawab": 0,
    "bahas": "Mengalikan pasangan lalu menjumlah: 3 + 8 = 11."
   },
   "kata": "sumproduct kali jumlah bobot",
   "gambar": [
    "sumproduct-1.jpg",
    "sumproduct-2-300x254.jpg",
    "sumproduct-4-300x222.jpg"
   ]
  },
  {
   "id": "korelasi",
   "cat": "rumus",
   "judul": "CORREL: korelasi dua data",
   "ringkas": "CORREL mengukur seberapa kompak dua deret angka bergerak bersama. Hasilnya antara -1 dan 1.",
   "intinya": "Dekat 1 artinya naik bersama. Dekat -1 artinya satu naik, satu turun. Dekat 0 artinya tidak ada hubungan.",
   "analogi": "Bayangkan jumlah es krim yang terjual dan suhu udara. Saat udara makin panas, es krim makin laku: keduanya naik bersama, korelasinya dekat 1. Sedangkan suhu dan jumlah jaket yang terjual: suhu naik, jaket turun, korelasinya dekat -1.",
   "sintaks": "=CORREL(data1; data2)",
   "argumen": [
    [
     "data1",
     "Deretan angka pertama."
    ],
    [
     "data2",
     "Deretan angka kedua. Jumlahnya harus sama dengan deretan pertama."
    ]
   ],
   "langkah": [
    "Taruh kedua deretan angka berdampingan.",
    "Ketik =CORREL( lalu sorot deretan pertama.",
    "Ketik ; lalu sorot deretan kedua. Tutup dengan ) lalu tekan Enter."
   ],
   "tips": [
    "Korelasi hanya menunjukkan dua hal bergerak bersama. Itu tidak membuktikan yang satu menyebabkan yang lain."
   ],
   "demo": {
    "data": [
     [
      "Jam belajar",
      "Nilai"
     ],
     [
      1,
      55
     ],
     [
      2,
      60
     ],
     [
      3,
      70
     ],
     [
      4,
      78
     ],
     [
      5,
      90
     ]
    ],
    "sel": "D2",
    "rumus": "=CORREL(A2:A6,B2:B6)",
    "coba": [
     [
      "=CORREL(A2:A6,B2:B6)",
      "Korelasi jam belajar dan nilai"
     ]
    ]
   },
   "kuis": {
    "q": "Korelasi mendekati -1 berarti...",
    "opsi": [
     "Dua data bergerak berlawanan",
     "Dua data sama",
     "Tidak ada data",
     "Data rusak"
    ],
    "jawab": 0,
    "bahas": "Naiknya satu data diikuti turunnya data lain."
   },
   "kata": "korelasi correl statistik",
   "gambar": [
    "korelasi-1-300x246.jpg",
    "korelasi-2-300x282.jpg"
   ]
  },
  {
   "id": "if-tunggal",
   "cat": "logika",
   "judul": "IF: memilih satu dari dua hasil",
   "ringkas": "IF memeriksa sebuah syarat. Kalau benar, Excel memberi satu jawaban. Kalau salah, Excel memberi jawaban lain.",
   "intinya": "IF = jika ... maka ..., kalau tidak ... maka ...",
   "analogi": "Bayangkan penjaga pintu. Ia bertanya, \"Apakah kamu membawa tiket?\" Kalau ya, kamu boleh masuk. Kalau tidak, kamu ditolak. IF adalah penjaga pintu itu di dalam Excel.",
   "sintaks": "=IF(syarat; hasil_jika_benar; hasil_jika_salah)",
   "argumen": [
    [
     "syarat",
     "Pertanyaan yang jawabannya benar atau salah, misalnya B2>=75."
    ],
    [
     "hasil_jika_benar",
     "Jawaban kalau syaratnya terpenuhi."
    ],
    [
     "hasil_jika_salah",
     "Jawaban kalau syaratnya tidak terpenuhi."
    ]
   ],
   "langkah": [
    "Tentukan dulu syaratnya. Contoh: nilai 75 atau lebih berarti Lulus.",
    "Di kotak hasil ketik =IF(B2>=75;\"Lulus\";\"Remedial\").",
    "Tekan Enter, lalu tarik ke bawah.",
    "Ingat: tulisan harus diapit tanda kutip. Angka tidak perlu."
   ],
   "tips": [
    "Tanda perbandingan: = (sama dengan), <> (tidak sama), < (kurang dari), > (lebih dari), <= (kurang dari atau sama dengan), >= (lebih dari atau sama dengan)."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Keterangan"
     ],
     [
      "Antonio",
      80,
      ""
     ],
     [
      "Romansyah",
      70,
      ""
     ],
     [
      "Devi",
      75,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=IF(B2>=75,\"Lulus\",\"Remedial\")",
    "coba": [
     [
      "=IF(B2>=75,\"Lulus\",\"Remedial\")",
      "Lulus atau remedial"
     ],
     [
      "=IF(B2>=75,B2,75)",
      "Nilai minimal 75"
     ],
     [
      "=IF(B2=\"\",\"\",IF(B2>=75,\"Lulus\",\"Remedial\"))",
      "Kosongkan bila nilai belum ada"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa kata Lulus harus diapit tanda kutip di dalam IF?",
    "opsi": [
     "Karena itu teks",
     "Karena itu angka",
     "Karena itu rumus",
     "Tidak perlu"
    ],
    "jawab": 0,
    "bahas": "Teks literal ditulis di antara tanda kutip."
   },
   "kata": "if jika logika kondisi lulus",
   "gambar": [
    "contoh-rumus-if-excel-tunggal-2.jpg",
    "contoh-rumus-if-excel-tunggal.jpg",
    "fungsi-argumen-if-300x160.jpg"
   ]
  },
  {
   "id": "if-ganda",
   "cat": "logika",
   "judul": "IF bertingkat dan kombinasi AND, OR",
   "ringkas": "Kalau pilihannya lebih dari dua, taruh IF di dalam IF. AND dan OR membantu menggabungkan beberapa syarat sekaligus.",
   "intinya": "IF bertingkat seperti pertanyaan berurutan. Excel berhenti di pertanyaan pertama yang jawabannya benar.",
   "analogi": "Bayangkan guru memberi nilai huruf. Ia bertanya, \"Apakah 85 atau lebih? Kalau ya, A. Kalau bukan, apakah 75 atau lebih? Kalau ya, B.\" Begitu seterusnya sampai ada yang cocok.",
   "sintaks": "=IF(syarat1; hasil1; IF(syarat2; hasil2; hasil_lain))",
   "argumen": [
    [
     "AND(a; b)",
     "Benar hanya kalau semua syarat benar. Contoh: nilai tugas dan nilai ujian sama-sama 75 ke atas."
    ],
    [
     "OR(a; b)",
     "Benar kalau salah satu syarat benar. Contoh: nilai tugas atau nilai ujian 75 ke atas."
    ]
   ],
   "langkah": [
    "Urutkan syarat dari yang paling tinggi atau paling ketat.",
    "Contoh nilai huruf: =IF(B2>=85;\"A\";IF(B2>=75;\"B\";IF(B2>=65;\"C\";\"D\"))).",
    "Untuk dua syarat sekaligus: =IF(AND(B2>=75;C2>=75);\"Lulus\";\"Gagal\").",
    "Hitung kurung buka dan kurung tutup. Jumlahnya harus sama."
   ],
   "tips": [
    "Excel 2007 ke atas boleh menumpuk sampai 64 IF. Versi lama hanya 7.",
    "Excel baru punya fungsi IFS yang lebih ringkas untuk IF bertingkat."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Predikat"
     ],
     [
      "Antonio",
      88,
      ""
     ],
     [
      "Romansyah",
      76,
      ""
     ],
     [
      "Devi",
      67,
      ""
     ],
     [
      "Bagus",
      50,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=IF(B2>=85,\"A\",IF(B2>=75,\"B\",IF(B2>=65,\"C\",\"D\")))",
    "coba": [
     [
      "=IF(B2>=85,\"A\",IF(B2>=75,\"B\",IF(B2>=65,\"C\",\"D\")))",
      "Predikat A sampai D"
     ],
     [
      "=IF(AND(B2>=70,B2<=90),\"Tengah\",\"Luar\")",
      "AND dua syarat"
     ],
     [
      "=IFS(B2>=85,\"A\",B2>=75,\"B\",B2>=65,\"C\",TRUE,\"D\")",
      "Versi IFS"
     ]
    ],
    "catatan": "Coba ubah batas nilainya."
   },
   "kuis": {
    "q": "Mengapa syarat IF bertingkat sebaiknya diurutkan dari nilai terbesar?",
    "opsi": [
     "Karena Excel berhenti di syarat pertama yang benar",
     "Agar rumus lebih pendek",
     "Agar tidak butuh kurung",
     "Tidak ada pengaruh"
    ],
    "jawab": 0,
    "bahas": "Syarat pertama yang benar langsung dipakai; urutan salah menghasilkan hasil keliru."
   },
   "kata": "if bertingkat nested and or predikat nilai",
   "gambar": [
    "1-8-aplikasi-if-ganda.jpg",
    "1-9-contoh-data.jpg",
    "2-9-hasilrumus.jpg"
   ]
  },
  {
   "id": "left",
   "cat": "teks",
   "judul": "LEFT: mengambil karakter dari kiri",
   "ringkas": "LEFT memotong sejumlah huruf dari awal (sisi kiri) sebuah tulisan.",
   "intinya": "LEFT = ambil dari kiri.",
   "analogi": "Bayangkan kamu menggunting kata KOMPUTER dari ujung kirinya. Kalau kamu minta 3 huruf, kamu dapat KOM.",
   "sintaks": "=LEFT(teks; [jumlah_karakter])",
   "argumen": [
    [
     "teks",
     "Tulisan atau kotak sumber."
    ],
    [
     "jumlah_karakter",
     "Berapa huruf yang diambil dari kiri. Kalau kosong, Excel mengambil 1 huruf."
    ]
   ],
   "langkah": [
    "Klik kotak hasil.",
    "Ketik =LEFT( lalu klik kotak sumber.",
    "Ketik ; lalu isi jumlah huruf, misalnya 3. Tutup dengan ).",
    "Tekan Enter, lalu tarik ke bawah."
   ],
   "tips": [
    "Hasil LEFT selalu berupa tulisan, walaupun yang diambil angka. Kalau mau dihitung, bungkus dengan VALUE."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LEFT(A2,3)",
    "coba": [
     [
      "=LEFT(A2,3)",
      "Tiga karakter pertama"
     ],
     [
      "=LEFT(A2,FIND(\"-\",A2)-1)",
      "Sampai tanda strip pertama"
     ],
     [
      "=VALUE(MID(A2,5,4))",
      "Angka tahun"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =LEFT(\"EXCEL\";2)?",
    "opsi": [
     "EX",
     "XC",
     "EL",
     "CE"
    ],
    "jawab": 0,
    "bahas": "Dua karakter pertama."
   },
   "kata": "left kiri potong teks",
   "gambar": [
    "fungsi-left-001.jpg",
    "g-1-left-300x135.jpg",
    "g-2-functions-arguments-left-300x152.jpg"
   ]
  },
  {
   "id": "right",
   "cat": "teks",
   "judul": "RIGHT: mengambil karakter dari kanan",
   "ringkas": "RIGHT memotong sejumlah huruf dari akhir (sisi kanan) sebuah tulisan.",
   "intinya": "RIGHT = ambil dari kanan.",
   "analogi": "Kebalikan LEFT. Kata KOMPUTER dipotong dari ujung kanannya. Kalau kamu minta 3 huruf, kamu dapat TER.",
   "sintaks": "=RIGHT(teks; [jumlah_karakter])",
   "argumen": [
    [
     "teks",
     "Tulisan atau kotak sumber."
    ],
    [
     "jumlah_karakter",
     "Berapa huruf yang diambil dari kanan."
    ]
   ],
   "langkah": [
    "Klik kotak hasil.",
    "Ketik =RIGHT( lalu klik kotak sumber.",
    "Ketik ; lalu isi jumlah huruf. Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=RIGHT(A2,4)",
    "coba": [
     [
      "=RIGHT(A2,4)",
      "Empat karakter terakhir"
     ],
     [
      "=VALUE(RIGHT(A2,4))+1",
      "Nomor berikutnya"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =RIGHT(\"EXCEL\";2)?",
    "opsi": [
     "EX",
     "CE",
     "EL",
     "XC"
    ],
    "jawab": 2,
    "bahas": "Dua karakter terakhir."
   },
   "kata": "right kanan potong teks",
   "gambar": [
    "fungsi-right-001.jpg",
    "g-7-right-teks-300x176.jpg",
    "g-8-right-angka-300x238.jpg"
   ]
  },
  {
   "id": "mid",
   "cat": "teks",
   "judul": "MID: mengambil karakter dari tengah",
   "ringkas": "MID mengambil sejumlah huruf mulai dari posisi yang kamu tentukan, di bagian tengah tulisan.",
   "intinya": "MID = ambil dari tengah.",
   "analogi": "Bayangkan huruf-huruf dalam kata punya nomor kursi: I=1, N=2, D=3, O=4, dan seterusnya. Kamu berkata, \"Mulai dari kursi nomor 3, ambil 4 orang.\" Hasilnya DONE (dari INDONESIA).",
   "sintaks": "=MID(teks; mulai; jumlah_karakter)",
   "argumen": [
    [
     "teks",
     "Tulisan sumber."
    ],
    [
     "mulai",
     "Nomor huruf pertama yang diambil. Huruf pertama bernomor 1."
    ],
    [
     "jumlah_karakter",
     "Berapa huruf yang diambil."
    ]
   ],
   "langkah": [
    "Hitung dulu huruf ke berapa yang jadi awal potongan.",
    "Ketik =MID( lalu klik kotak sumber.",
    "Ketik ; lalu nomor awal, ; lalu jumlah huruf. Tutup dengan ).",
    "Tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=MID(A2,5,4)",
    "coba": [
     [
      "=MID(A2,5,4)",
      "Empat karakter mulai posisi 5"
     ],
     [
      "=MID(A2,FIND(\"-\",A2)+1,4)",
      "Posisi dicari otomatis"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MID(\"INDONESIA\";3;4)?",
    "opsi": [
     "DONE",
     "NDON",
     "ONES",
     "INDO"
    ],
    "jawab": 0,
    "bahas": "Mulai dari karakter ke-3 (D), ambil 4: DONE."
   },
   "kata": "mid tengah potong teks",
   "gambar": [
    "fungsi-mid-001.jpg",
    "g-3-mid-teks-300x284.jpg",
    "g-4-mid-angka-300x240.jpg"
   ]
  },
  {
   "id": "len",
   "cat": "teks",
   "judul": "LEN: menghitung panjang teks",
   "ringkas": "LEN menghitung banyaknya huruf dalam tulisan, termasuk spasi.",
   "intinya": "LEN = berapa panjangnya?",
   "analogi": "Bayangkan kamu menghitung jumlah kotak huruf di teka-teki silang. Spasi juga dihitung sebagai satu kotak. LEN melakukannya untuk kamu.",
   "sintaks": "=LEN(teks)",
   "argumen": [
    [
     "teks",
     "Tulisan atau kotak yang dihitung."
    ]
   ],
   "langkah": [
    "Ketik =LEN( lalu klik kotak yang dihitung.",
    "Tutup dengan ) lalu tekan Enter.",
    "Ingat: spasi di awal atau di akhir ikut dihitung."
   ],
   "tips": [
    "Gabungkan dengan TRIM supaya spasi berlebih dibuang dulu sebelum dihitung."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Hasil"
     ],
     [
      "budi santoso",
      ""
     ],
     [
      "SITI NURHALIZA",
      ""
     ],
     [
      "Ahmad Dhani",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LEN(A2)",
    "coba": [
     [
      "=LEN(A2)",
      "Panjang teks"
     ],
     [
      "=LEN(TRIM(A2))",
      "Panjang tanpa spasi berlebih"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =LEN(\"Excel Dasar\")?",
    "opsi": [
     "10",
     "11",
     "12",
     "9"
    ],
    "jawab": 1,
    "bahas": "Termasuk satu spasi: 5 + 1 + 5 = 11."
   },
   "kata": "len panjang karakter",
   "gambar": [
    "fungsi-argumen-len-300x119.jpg",
    "rumus-len-300x112.jpg"
   ]
  },
  {
   "id": "huruf",
   "cat": "teks",
   "judul": "UPPER, LOWER, dan PROPER: mengubah huruf",
   "ringkas": "UPPER mengubah semua jadi huruf besar. LOWER mengubah semua jadi huruf kecil. PROPER membuat huruf pertama tiap kata jadi huruf besar.",
   "intinya": "Tiga fungsi ini hanya mengubah ukuran hurufnya, tulisannya sama.",
   "analogi": "UPPER seperti berteriak: BUDI SANTOSO. LOWER seperti berbisik: budi santoso. PROPER seperti menulis nama dengan rapi: Budi Santoso.",
   "sintaks": "=UPPER(teks)   =LOWER(teks)   =PROPER(teks)",
   "argumen": [
    [
     "teks",
     "Tulisan atau kotak sumber."
    ]
   ],
   "langkah": [
    "Ketik fungsinya, misalnya =PROPER( lalu klik kotak yang berisi nama.",
    "Tutup dengan ) lalu tekan Enter. Tarik ke bawah untuk baris lain.",
    "Mau mengganti data aslinya? Salin hasil, lalu pakai Paste Special dan pilih Values di kotak yang asli."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Hasil"
     ],
     [
      "budi santoso",
      ""
     ],
     [
      "SITI NURHALIZA",
      ""
     ],
     [
      "Ahmad Dhani",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=PROPER(A2)",
    "coba": [
     [
      "=PROPER(A2)",
      "Kapital tiap kata"
     ],
     [
      "=UPPER(A2)",
      "HURUF BESAR"
     ],
     [
      "=LOWER(A2)",
      "huruf kecil"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =PROPER(\"budi santoso\")?",
    "opsi": [
     "BUDI SANTOSO",
     "Budi Santoso",
     "budi santoso",
     "Budi santoso"
    ],
    "jawab": 1,
    "bahas": "PROPER mengkapitalkan huruf pertama tiap kata."
   },
   "kata": "upper lower proper huruf besar kecil kapital",
   "gambar": [
    "g-2-lower.jpg",
    "g-3-proper-a.jpg",
    "g-4-proper-b.jpg"
   ]
  },
  {
   "id": "text-value",
   "cat": "teks",
   "judul": "TEXT dan VALUE: angka menjadi teks dan sebaliknya",
   "ringkas": "TEXT mengubah angka atau tanggal menjadi tulisan dengan tampilan yang kamu atur. VALUE mengubah tulisan yang berbentuk angka menjadi angka sungguhan.",
   "intinya": "TEXT = jadikan tulisan dengan gaya tertentu. VALUE = jadikan angka lagi.",
   "analogi": "Bayangkan angka 5. Kamu ingin ia berpakaian rapi menjadi 005. TEXT adalah penjahitnya. Kebalikannya, VALUE adalah orang yang melepas pakaian itu lalu mengembalikannya jadi angka biasa yang bisa dijumlahkan.",
   "sintaks": "=TEXT(nilai; \"format\")   =VALUE(teks)",
   "argumen": [
    [
     "nilai",
     "Angka atau tanggal yang mau ditampilkan."
    ],
    [
     "format",
     "Pola tampilan, dituliskan di dalam tanda kutip. Contoh: \"000\" (tiga digit), \"#,##0\" (ada pemisah ribuan), \"dd/mm/yyyy\" (tanggal), \"dddd\" (nama hari)."
    ],
    [
     "teks",
     "Tulisan yang terlihat seperti angka."
    ]
   ],
   "langkah": [
    "Contoh TEXT: =TEXT(1234567;\"#,##0\") menghasilkan 1,234,567.",
    "Contoh nama hari: =TEXT(A2;\"dddd\") menghasilkan nama hari dari tanggal di A2.",
    "Contoh VALUE: =VALUE(\"250\")+1 menghasilkan 251.",
    "Pakai & untuk memasukkan hasil TEXT ke dalam kalimat."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Nilai",
      "Hasil"
     ],
     [
      "02/10/2026",
      7,
      ""
     ],
     [
      "15/08/2026",
      45,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=TEXT(A2,\"dddd, dd mmmm yyyy\")",
    "coba": [
     [
      "=TEXT(A2,\"dddd, dd mmmm yyyy\")",
      "Hari dan tanggal Indonesia"
     ],
     [
      "=TEXT(B2,\"000\")",
      "Tiga digit"
     ],
     [
      "=TEXT(1234567.5,\"#,##0.00\")",
      "Pemisah ribuan"
     ],
     [
      "=VALUE(\"250\")+1",
      "Teks menjadi angka"
     ]
    ],
    "catatan": "Format TEXT memakai titik untuk desimal dan koma untuk ribuan."
   },
   "kuis": {
    "q": "Hasil =TEXT(5;\"000\")?",
    "opsi": [
     "5",
     "005",
     "500",
     "0005"
    ],
    "jawab": 1,
    "bahas": "Format 000 mengisi nol di depan sampai tiga digit."
   },
   "kata": "text value format angka teks",
   "gambar": [
    "g-1-function-argument-text.jpg",
    "g-3-function-argument-value.jpg",
    "g-4-hasil-rumus-value.jpg"
   ]
  },
  {
   "id": "rept",
   "cat": "teks",
   "judul": "REPT: mengulang teks",
   "ringkas": "REPT menulis sebuah huruf atau tanda berulang-ulang. Berguna untuk grafik batang sederhana atau garis pemisah.",
   "intinya": "REPT = ulangi tulisan ini sekian kali.",
   "analogi": "Bayangkan kamu disuruh menulis \"ha\" sebanyak 3 kali sebagai hukuman. Kamu menulis hahaha. REPT melakukan itu dalam sekejap, berapa pun jumlahnya.",
   "sintaks": "=REPT(teks; jumlah)",
   "argumen": [
    [
     "teks",
     "Tulisan yang diulang."
    ],
    [
     "jumlah",
     "Berapa kali diulang."
    ]
   ],
   "langkah": [
    "Ketik =REPT(\"|\";B2). Garis tegak akan diulang sebanyak angka di B2, sehingga tampak seperti batang.",
    "Tarik ke bawah supaya setiap baris punya batangnya sendiri."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Nilai",
      "Batang"
     ],
     [
      "Antonio",
      8,
      ""
     ],
     [
      "Devi",
      5,
      ""
     ],
     [
      "Bagus",
      10,
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=REPT(\"|\",B2)",
    "coba": [
     [
      "=REPT(\"|\",B2)",
      "Batang"
     ],
     [
      "=REPT(\"*\",B2)",
      "Bintang"
     ],
     [
      "=REPT(\"★\",B2)",
      "Bintang penuh"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =REPT(\"ab\";3)?",
    "opsi": [
     "ababab",
     "aaabbb",
     "ab3",
     "abbbb"
    ],
    "jawab": 0,
    "bahas": "Mengulang teks tiga kali."
   },
   "kata": "rept ulang karakter diagram",
   "gambar": [
    "contoh-rumus-rept-dalam-excel-300x138.jpg",
    "rumus-excel-rept-300x97.jpg"
   ]
  },
  {
   "id": "find",
   "cat": "teks",
   "judul": "FIND dan SEARCH: mencari posisi teks",
   "ringkas": "FIND dan SEARCH memberi tahu posisi sebuah tulisan di dalam tulisan lain. FIND membedakan huruf besar dan kecil. SEARCH tidak membedakan.",
   "intinya": "FIND menjawab: huruf yang kucari ada di nomor berapa?",
   "analogi": "Bayangkan kamu mencari huruf di dalam kata dan memberi nomor urut dari kiri. Dalam kata BUDI SANTOSO, spasi ada di nomor 5. FIND memberi tahu nomor itu.",
   "sintaks": "=FIND(dicari; dalam_teks; [mulai])",
   "argumen": [
    [
     "dicari",
     "Tulisan yang dicari."
    ],
    [
     "dalam_teks",
     "Tulisan tempat mencari."
    ],
    [
     "mulai",
     "Tidak wajib. Mulai mencari dari nomor ke berapa. Kalau kosong, mulai dari awal."
    ]
   ],
   "langkah": [
    "Ketik =FIND(\" \";A2) untuk mencari spasi pertama di kotak A2.",
    "Gabungkan dengan LEFT atau MID untuk memotong tulisan tepat di tempat itu."
   ],
   "tips": [
    "Kalau yang dicari tidak ditemukan, hasilnya #VALUE!."
   ],
   "demo": {
    "data": [
     [
      "Nama lengkap",
      "Hasil"
     ],
     [
      "budi santoso",
      ""
     ],
     [
      "SITI NURHALIZA",
      ""
     ],
     [
      "Ahmad Dhani",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=FIND(\" \",A2)",
    "coba": [
     [
      "=FIND(\" \",A2)",
      "Posisi spasi"
     ],
     [
      "=SEARCH(\"SANTOSO\",A2)",
      "Tidak peka huruf besar"
     ],
     [
      "=LEFT(A2,FIND(\" \",A2)-1)",
      "Kata pertama"
     ]
    ]
   },
   "kuis": {
    "q": "Apa yang terjadi bila FIND tidak menemukan teksnya?",
    "opsi": [
     "#VALUE!",
     "0",
     "Kosong",
     "FALSE"
    ],
    "jawab": 0,
    "bahas": "Hasilnya galat #VALUE!. Bungkus dengan IFERROR."
   },
   "kata": "find search cari posisi",
   "gambar": [
    "membuat-fungsi-find-pada-excel-1-300x124.jpg",
    "membuat-fungsi-find-pada-excel-2-300x142.jpg",
    "membuat-fungsi-find-pada-excel-3-300x139.jpg"
   ]
  },
  {
   "id": "substitute",
   "cat": "teks",
   "judul": "SUBSTITUTE: mengganti teks",
   "ringkas": "SUBSTITUTE mengganti sebagian tulisan dengan tulisan lain. Bagian lainnya tidak berubah.",
   "intinya": "SUBSTITUTE = cari ini, ganti dengan itu.",
   "analogi": "Bayangkan kamu pakai fitur cari-dan-ganti di aplikasi menulis, tetapi hasilnya muncul di kotak lain lewat rumus. Data asli tetap aman.",
   "sintaks": "=SUBSTITUTE(teks; lama; baru; [urutan])",
   "argumen": [
    [
     "teks",
     "Tulisan sumber."
    ],
    [
     "lama",
     "Bagian yang mau diganti."
    ],
    [
     "baru",
     "Pengganti."
    ],
    [
     "urutan",
     "Tidak wajib. Ganti hanya kemunculan ke sekian. Kalau kosong, semua diganti."
    ]
   ],
   "langkah": [
    "Ketik =SUBSTITUTE(A2;\"-\";\"/\") untuk mengganti semua tanda strip dengan garis miring.",
    "Mau mengganti satu kemunculan saja? Tambahkan angka urutan di bagian akhir."
   ],
   "tips": [
    "Untuk menghapus sebagian tulisan, isi bagian baru dengan tanda kutip kosong \"\"."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hasil"
     ],
     [
      "SMP-2026-0015",
      ""
     ],
     [
      "SMA-2025-0102",
      ""
     ],
     [
      "SD-2024-0007",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=SUBSTITUTE(A2,\"-\",\"/\")",
    "coba": [
     [
      "=SUBSTITUTE(A2,\"-\",\"/\")",
      "Semua strip"
     ],
     [
      "=SUBSTITUTE(A2,\"-\",\"\",1)",
      "Strip pertama dihapus"
     ],
     [
      "=SUBSTITUTE(A2,\"-\",\"\")",
      "Hapus semua strip"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =SUBSTITUTE(\"a-b-c\";\"-\";\"\")?",
    "opsi": [
     "abc",
     "a-b-c",
     "a b c",
     "-"
    ],
    "jawab": 0,
    "bahas": "Semua strip diganti dengan teks kosong."
   },
   "kata": "substitute ganti teks",
   "gambar": [
    "rumus-subtitle-excel-penulisan-300x197.jpg",
    "rumus-subtitle-excel.jpg"
   ]
  },
  {
   "id": "menambah-kata",
   "cat": "teks",
   "judul": "Menambah kata pada banyak sel",
   "ringkas": "Tanda & menyambung tulisan tetap dengan isi kotak. Contohnya menambah kata Kelas di depan huruf kelas.",
   "intinya": "Tanda & adalah perekat tulisan.",
   "analogi": "Bayangkan kamu menempelkan stiker bertuliskan Kelas di depan setiap huruf A, B, atau C. Hasilnya Kelas A, Kelas B, Kelas C. Itulah =\"Kelas \"&A2.",
   "sintaks": "=\"Kelas \"&A2",
   "langkah": [
    "Di kotak kosong ketik =\"Kelas \"&A2. Tulisan tetap harus di dalam tanda kutip.",
    "Tekan Enter, lalu tarik ke bawah.",
    "Mau mengganti data aslinya? Salin hasilnya, lalu tempel sebagai Values di kotak yang asli."
   ],
   "tips": [
    "Jangan lupa spasi di dalam tanda kutip (\"Kelas \" bukan \"Kelas\"). Kalau lupa, hasilnya menempel: KelasA."
   ],
   "demo": {
    "data": [
     [
      "Kelas",
      "Lengkap"
     ],
     [
      "7A",
      ""
     ],
     [
      "7B",
      ""
     ],
     [
      "8A",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=\"Kelas \"&A2",
    "coba": [
     [
      "=\"Kelas \"&A2",
      "Tambah di depan"
     ],
     [
      "=A2&\" - Reguler\"",
      "Tambah di belakang"
     ],
     [
      "=CONCATENATE(\"Kelas \",A2)",
      "Dengan CONCATENATE"
     ]
    ]
   },
   "kuis": {
    "q": "Operator apa yang menyambung teks?",
    "opsi": [
     "+",
     "&",
     "#",
     "$"
    ],
    "jawab": 1,
    "bahas": "Ampersand (&)."
   },
   "kata": "tambah kata sambung concatenate gabung",
   "gambar": [
    "data-1-menambah-kata-pada-dokumen-excel-300x121.jpg",
    "data-2-menambah-kata-pada-dokumen-excel.jpg",
    "data-3-menambah-kata-pada-dokumen-excel-300x142.jpg"
   ]
  },
  {
   "id": "terbilang",
   "cat": "teks",
   "judul": "Angka terbilang di Excel",
   "ringkas": "Terbilang mengubah angka menjadi tulisan, misalnya 250 menjadi \"dua ratus lima puluh\". Excel tidak punya fungsi untuk ini, jadi kamu membuatnya sendiri dengan tabel bantu atau macro VBA.",
   "intinya": "Cara paling mudah: simpan sebuah fungsi VBA bernama Terbilang, lalu pakai seperti fungsi biasa.",
   "analogi": "Bayangkan kamu punya asisten yang bisa membaca angka dengan suara keras. Excel belum punya asisten itu. Kamu perlu mengajarinya dengan menulis sedikit kode (macro). Setelah diajari, kamu tinggal bilang =Terbilang(A1).",
   "langkah": [
    "Cara tabel bantu: buat daftar 0 sampai 9 beserta namanya (nol, satu, dua, ...). Lalu ambil angka satu per satu dengan MID dan cari namanya dengan VLOOKUP.",
    "Cara macro: simpan fungsi VBA bernama Terbilang di sebuah modul, lalu panggil =Terbilang(A1).",
    "Mau huruf besar di awal tiap kata? Bungkus hasilnya dengan PROPER.",
    "Mau huruf besar hanya di awal kalimat? Gabungkan UPPER(LEFT()) dan LOWER(MID()).",
    "Kalau memakai macro, simpan filenya sebagai .xlsm."
   ],
   "tips": [
    "Gambar di bawah menunjukkan langkah dan hasil akhirnya. Ikuti sambil melihat gambar.",
    "File biasa (.xlsx) tidak bisa menyimpan macro. Itu sebabnya harus .xlsm."
   ],
   "kuis": {
    "q": "Mengapa file dengan fungsi Terbilang harus disimpan sebagai .xlsm?",
    "opsi": [
     "Karena memuat macro",
     "Karena berisi gambar",
     "Karena ukurannya besar",
     "Karena memakai PROPER"
    ],
    "jawab": 0,
    "bahas": ".xlsm adalah format workbook yang mendukung macro."
   },
   "kata": "terbilang angka huruf",
   "gambar": [
    "angka-terbilang-pada-excel-dengan-huruf-kapital-pada-awal-kata.jpg",
    "angka-terbilang-pada-excel-dengan-huruf-kapital.jpg",
    "angka-terbilang-pada-excel.jpg"
   ]
  },
  {
   "id": "vlookup",
   "cat": "lookup",
   "judul": "VLOOKUP: mencari data ke bawah",
   "ringkas": "VLOOKUP mencari sebuah nilai di kolom paling kiri sebuah tabel, lalu mengambil isi kolom lain pada baris yang sama.",
   "intinya": "VLOOKUP = cari kata kunci di kolom pertama, lalu ambil jawaban dari kolom ke sekian.",
   "analogi": "Bayangkan buku telepon. Kamu mencari nama (kata kunci) di daftar nama, lalu membaca nomor teleponnya di sebelah kanan nama itu. VLOOKUP melakukan itu di dalam tabelmu.",
   "sintaks": "=VLOOKUP(dicari; tabel; kolom_ke; [persis])",
   "argumen": [
    [
     "dicari",
     "Kata kunci yang dicari. Harus ada di kolom paling kiri tabel."
    ],
    [
     "tabel",
     "Seluruh tabel tempat mencari. Kunci dengan tanda $."
    ],
    [
     "kolom_ke",
     "Jawaban ada di kolom nomor berapa? Kolom paling kiri dihitung nomor 1."
    ],
    [
     "persis",
     "Isi FALSE agar harus sama persis. TRUE (atau kosong) artinya perkiraan terdekat, dan tabel harus terurut."
    ]
   ],
   "langkah": [
    "Pastikan kata kunci ada di kolom paling kiri tabel.",
    "Ketik =VLOOKUP( lalu klik kotak kata kunci.",
    "Ketik ; lalu sorot seluruh tabel dan tekan F4 agar jadi $A$2:$C$5.",
    "Ketik ; lalu nomor kolom jawaban, ; lalu FALSE. Tutup dengan ) lalu tekan Enter."
   ],
   "tips": [
    "Hampir selalu pakai FALSE, kecuali kamu mencari rentang nilai seperti tabel nilai huruf.",
    "Kalau muncul #N/A, kata kuncinya tidak ketemu. Periksa spasi tersembunyi atau beda bentuk (angka vs tulisan)."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Barang",
      "Harga"
     ],
     [
      "A01",
      "Pensil",
      3000
     ],
     [
      "A02",
      "Buku",
      8000
     ],
     [
      "A03",
      "Penggaris",
      5000
     ],
     [
      "A04",
      "Penghapus",
      2000
     ],
     [],
     [
      "Cari kode:",
      "A03"
     ],
     [
      "Nama barang:",
      ""
     ]
    ],
    "sel": "B8",
    "rumus": "=VLOOKUP(B7,A2:C5,2,FALSE)",
    "coba": [
     [
      "=VLOOKUP(B7,A2:C5,2,FALSE)",
      "Nama barang"
     ],
     [
      "=VLOOKUP(B7,A2:C5,3,FALSE)",
      "Harga"
     ],
     [
      "=VLOOKUP(\"A99\",A2:C5,2,FALSE)",
      "Kunci tidak ada"
     ],
     [
      "=IFERROR(VLOOKUP(\"A99\",A2:C5,2,FALSE),\"Tidak ditemukan\")",
      "Dengan IFERROR"
     ]
    ],
    "catatan": "Ganti isi B7 dengan A01 atau A04 lalu lihat hasilnya."
   },
   "kuis": {
    "q": "Argumen keempat VLOOKUP sebaiknya diisi apa untuk pencarian yang harus persis?",
    "opsi": [
     "TRUE",
     "FALSE",
     "0.5",
     "1"
    ],
    "jawab": 1,
    "bahas": "FALSE atau 0 meminta kecocokan persis."
   },
   "kata": "vlookup cari tabel kolom",
   "gambar": [
    "g-1-vlookup-300x256.jpg",
    "rumus-vlookup-excel.jpg",
    "vlookup-laporan-2.jpg"
   ]
  },
  {
   "id": "hlookup",
   "cat": "lookup",
   "judul": "HLOOKUP: mencari data ke samping",
   "ringkas": "HLOOKUP sama dengan VLOOKUP, tetapi tabelnya mendatar. Kata kunci ada di baris paling atas.",
   "intinya": "HLOOKUP = cari kata kunci di baris pertama, lalu ambil jawaban dari baris ke sekian.",
   "analogi": "Bayangkan jadwal pelajaran yang hari-harinya berderet ke samping. Kamu mencari hari (di baris atas), lalu membaca ke bawah untuk menemukan pelajarannya. Itu HLOOKUP.",
   "sintaks": "=HLOOKUP(dicari; tabel; baris_ke; [persis])",
   "argumen": [
    [
     "dicari",
     "Kata kunci yang dicari di baris paling atas."
    ],
    [
     "tabel",
     "Seluruh tabel tempat mencari."
    ],
    [
     "baris_ke",
     "Jawaban ada di baris nomor berapa? Baris paling atas dihitung nomor 1."
    ],
    [
     "persis",
     "Isi FALSE agar harus sama persis."
    ]
   ],
   "langkah": [
    "Pastikan kata kunci ada di baris paling atas tabel.",
    "Ketik =HLOOKUP( lalu klik kata kunci, tabel, nomor baris, dan FALSE (dipisah ;).",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "A01",
      "A02",
      "A03"
     ],
     [
      "Barang",
      "Pensil",
      "Buku",
      "Penggaris"
     ],
     [
      "Harga",
      3000,
      8000,
      5000
     ],
     [],
     [
      "Cari kode:",
      "A02"
     ],
     [
      "Harga:",
      ""
     ]
    ],
    "sel": "B6",
    "rumus": "=HLOOKUP(B5,A1:D3,3,FALSE)",
    "coba": [
     [
      "=HLOOKUP(B5,A1:D3,3,FALSE)",
      "Harga"
     ],
     [
      "=HLOOKUP(B5,A1:D3,2,FALSE)",
      "Nama barang"
     ]
    ]
   },
   "kuis": {
    "q": "HLOOKUP mencari kunci di...",
    "opsi": [
     "Kolom pertama",
     "Baris pertama",
     "Sel terakhir",
     "Sheet lain"
    ],
    "jawab": 1,
    "bahas": "Baris paling atas."
   },
   "kata": "hlookup cari mendatar baris",
   "gambar": [
    "rumus-hlookup-excel-2.jpg",
    "rumus-hlookup-excel-3.jpg",
    "rumus-hlookup-excel-4.jpg"
   ]
  },
  {
   "id": "match-index",
   "cat": "lookup",
   "judul": "MATCH dan INDEX: pasangan pencari fleksibel",
   "ringkas": "MATCH mencari nomor urut sebuah isi dalam deretan. INDEX mengambil isi kotak pada nomor urut tertentu. Berdua, mereka bisa mencari ke kiri, hal yang tidak bisa dilakukan VLOOKUP.",
   "intinya": "MATCH menjawab \"ada di nomor berapa?\". INDEX menjawab \"apa isi di nomor itu?\".",
   "analogi": "Bayangkan perpustakaan. MATCH seperti pustakawan yang berkata, \"Buku itu ada di rak nomor 7.\" INDEX seperti kamu yang berjalan ke rak nomor 7 lalu mengambil bukunya. Dua langkah, tetapi sangat fleksibel.",
   "sintaks": "=MATCH(dicari; deret; [tipe])   =INDEX(rentang; baris; [kolom])",
   "argumen": [
    [
     "dicari",
     "Isi yang dicari (untuk MATCH)."
    ],
    [
     "deret",
     "Deretan kotak tempat mencari."
    ],
    [
     "tipe",
     "0 = harus sama persis. 1 = cari yang terbesar tetapi tidak melebihi (deret harus urut naik). -1 = cari yang terkecil tetapi tidak kurang (deret harus urut turun)."
    ],
    [
     "baris",
     "Nomor baris dalam rentang (untuk INDEX)."
    ],
    [
     "kolom",
     "Nomor kolom dalam rentang (untuk INDEX). Boleh dikosongkan kalau rentangnya hanya satu kolom."
    ]
   ],
   "langkah": [
    "Cari nomor urutnya dulu: =MATCH(kata_kunci; kolom_kunci; 0).",
    "Bungkus dengan INDEX: =INDEX(kolom_hasil; MATCH(kata_kunci; kolom_kunci; 0)).",
    "Kolom hasil dan kolom kunci boleh berada di sisi mana saja, termasuk kolom hasil di sebelah kiri."
   ],
   "tips": [
    "Selalu isi 0 pada bagian tipe MATCH kalau kamu mau pencarian yang persis."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Barang",
      "Harga"
     ],
     [
      "A01",
      "Pensil",
      3000
     ],
     [
      "A02",
      "Buku",
      8000
     ],
     [
      "A03",
      "Penggaris",
      5000
     ],
     [
      "A04",
      "Penghapus",
      2000
     ],
     [],
     [
      "Cari nama:",
      "Buku"
     ],
     [
      "Kode:",
      ""
     ]
    ],
    "sel": "B8",
    "rumus": "=INDEX(A2:A5,MATCH(B7,B2:B5,0))",
    "coba": [
     [
      "=MATCH(B7,B2:B5,0)",
      "Posisi"
     ],
     [
      "=INDEX(A2:A5,MATCH(B7,B2:B5,0))",
      "Kode (mencari ke kiri)"
     ],
     [
      "=INDEX(C2:C5,MATCH(B7,B2:B5,0))",
      "Harga"
     ]
    ]
   },
   "kuis": {
    "q": "Tipe pencocokan MATCH yang mencari nilai persis adalah...",
    "opsi": [
     "0",
     "1",
     "-1",
     "2"
    ],
    "jawab": 0,
    "bahas": "Isi 0 untuk pencocokan persis."
   },
   "kata": "match index cari posisi",
   "gambar": [
    "contoh-fungsi-match.jpg",
    "fungsi-match.jpg"
   ]
  },
  {
   "id": "choose",
   "cat": "lookup",
   "judul": "CHOOSE: memilih dari daftar",
   "ringkas": "CHOOSE mengambil pilihan ke sekian dari daftar yang kamu tulis langsung di rumus. Cocok untuk memberi nama pada angka 1 sampai 7.",
   "intinya": "CHOOSE = pilih nomor sekian dari daftar ini.",
   "analogi": "Bayangkan menu makanan dengan tiga pilihan bernomor. Kamu bilang, \"Aku pilih nomor 2.\" Pelayan langsung tahu pilihanmu adalah menu kedua. CHOOSE adalah pelayan itu.",
   "sintaks": "=CHOOSE(nomor; nilai1; nilai2; ...)",
   "argumen": [
    [
     "nomor",
     "Angka 1, 2, 3, dan seterusnya. Ini nomor pilihanmu."
    ],
    [
     "nilai1, nilai2, ...",
     "Daftar pilihan, ditulis berurutan."
    ]
   ],
   "langkah": [
    "Ketik =CHOOSE(A2;\"Senin\";\"Selasa\";\"Rabu\").",
    "Kalau A2 berisi 2, hasilnya Selasa."
   ],
   "tips": [
    "Kalau nomornya lebih besar dari jumlah pilihan, hasilnya #VALUE!."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Hari"
     ],
     [
      1,
      ""
     ],
     [
      3,
      ""
     ],
     [
      5,
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=CHOOSE(A2,\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\")",
    "coba": [
     [
      "=CHOOSE(A2,\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\")",
      "Nama hari"
     ],
     [
      "=CHOOSE(2,A2,A3,A4)",
      "Ambil sel ke-2"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =CHOOSE(2;\"x\";\"y\";\"z\")?",
    "opsi": [
     "x",
     "y",
     "z",
     "2"
    ],
    "jawab": 1,
    "bahas": "Item kedua."
   },
   "kata": "choose pilih daftar",
   "gambar": [
    "fungsi-argumen-choose-300x172.jpg",
    "fungsi-choose-excel-300x112.jpg"
   ]
  },
  {
   "id": "alamat-sel",
   "cat": "lookup",
   "judul": "ADDRESS, ROW, COLUMN, ROWS, COLUMNS, AREAS",
   "ringkas": "Ini kumpulan fungsi yang bertanya soal posisi: nomor baris, nomor kolom, jumlah baris atau kolom, dan alamat kotak dalam bentuk tulisan.",
   "intinya": "Fungsi-fungsi ini menjawab \"di mana?\" dan \"berapa banyak?\".",
   "analogi": "Bayangkan peta kota. ROW dan COLUMN seperti menyebut nomor jalan dan nomor gang. ADDRESS seperti menuliskan alamat lengkapnya. ROWS dan COLUMNS menghitung berapa jalan dan berapa gang di sebuah daerah.",
   "sintaks": "=ADDRESS(baris; kolom; [jenis])  =ROW([sel])  =COLUMN([sel])  =ROWS(rentang)  =COLUMNS(rentang)",
   "argumen": [
    [
     "baris",
     "Nomor baris (untuk ADDRESS)."
    ],
    [
     "kolom",
     "Nomor kolom (untuk ADDRESS)."
    ],
    [
     "jenis",
     "Bentuk alamat. 1 = $A$1, 2 = A$1, 3 = $A1, 4 = A1."
    ]
   ],
   "langkah": [
    "=ROW(C5) menghasilkan 5. =COLUMN(C5) menghasilkan 3 (C adalah kolom ketiga).",
    "=ROWS(A1:B10) menghasilkan 10. =COLUMNS(A1:B10) menghasilkan 2.",
    "=ADDRESS(2;3) menghasilkan tulisan $C$2.",
    "AREAS menghitung ada berapa area dalam sebuah acuan."
   ],
   "demo": {
    "data": [
     [
      "A",
      "B",
      "C"
     ],
     [
      1,
      2,
      3
     ],
     [
      4,
      5,
      6
     ]
    ],
    "sel": "E2",
    "rumus": "=ADDRESS(2,3)",
    "coba": [
     [
      "=ADDRESS(2,3)",
      "Teks alamat $C$2"
     ],
     [
      "=ADDRESS(2,3,4)",
      "Relatif C2"
     ],
     [
      "=ROW(C3)",
      "Nomor baris"
     ],
     [
      "=COLUMN(C3)",
      "Nomor kolom"
     ],
     [
      "=ROWS(A1:C3)",
      "Jumlah baris"
     ],
     [
      "=COLUMNS(A1:C3)",
      "Jumlah kolom"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =COLUMN(D1)?",
    "opsi": [
     "1",
     "3",
     "4",
     "D"
    ],
    "jawab": 2,
    "bahas": "Kolom D adalah kolom ke-4."
   },
   "kata": "address row column rows columns areas alamat",
   "gambar": [
    "areas-2.jpg",
    "row-1-001.jpg",
    "rows-2.jpg"
   ]
  },
  {
   "id": "lookup-jurusan",
   "cat": "lookup",
   "judul": "Lookup untuk laporan: jurusan dan tarif",
   "ringkas": "Ini contoh kasus nyata: sebuah laporan tiket kereta mengambil jurusan dan harga dari tabel data memakai kode kereta.",
   "intinya": "Gabungkan beberapa fungsi yang sudah kamu pelajari untuk menyelesaikan satu pekerjaan.",
   "analogi": "Bayangkan loket kereta. Petugas melihat kode kereta di tiketmu, lalu mencari jurusannya di buku daftar. Setelah itu ia melihat kelasmu (Eksekutif, Bisnis, atau Ekonomi) untuk menentukan harga. Kamu membuat petugas itu di dalam Excel.",
   "langkah": [
    "Siapkan tabel acuan yang berisi kode, nama kereta, jurusan, dan harga tiap kelas.",
    "Di laporan, ambil jurusan dengan VLOOKUP berdasarkan kode kereta.",
    "Pilih kolom harga sesuai kelas memakai IF atau MATCH.",
    "Bungkus dengan IFERROR supaya kode yang tidak ada tidak menampilkan #N/A."
   ],
   "tips": [
    "Kerjakan satu kolom dulu sampai benar, baru lanjut ke kolom berikutnya."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Kereta",
      "Jurusan",
      "Eksekutif",
      "Bisnis",
      "Ekonomi"
     ],
     [
      1,
      "Argo Anggrek",
      "Jakarta",
      350000,
      200000,
      150000
     ],
     [
      2,
      "Argo Lawu",
      "Semarang",
      300000,
      175000,
      125000
     ],
     [
      3,
      "Bima",
      "Yogyakarta",
      275000,
      150000,
      85000
     ],
     [],
     [
      "Kode:",
      2
     ],
     [
      "Kelas:",
      "Bisnis"
     ],
     [
      "Tarif:",
      ""
     ]
    ],
    "sel": "B8",
    "rumus": "=INDEX(D2:F4,MATCH(B6,A2:A4,0),MATCH(B7,D1:F1,0))",
    "coba": [
     [
      "=INDEX(D2:F4,MATCH(B6,A2:A4,0),MATCH(B7,D1:F1,0))",
      "Tarif dari dua penelusuran"
     ],
     [
      "=VLOOKUP(B6,A2:C4,3,FALSE)",
      "Jurusan"
     ]
    ],
    "catatan": "Ubah kode dan kelas untuk memeriksa tarif."
   },
   "kuis": {
    "q": "Kombinasi apa yang mencari berdasarkan baris dan kolom sekaligus?",
    "opsi": [
     "INDEX + MATCH + MATCH",
     "SUM + IF",
     "LEFT + MID",
     "COUNT + RANK"
    ],
    "jawab": 0,
    "bahas": "Satu MATCH untuk baris dan satu untuk kolom."
   },
   "kata": "lookup jurusan tiket kereta tarif",
   "gambar": [
    "contoh-data-300x214.jpg",
    "hasil-penggunaan-rumus-300x228.jpg",
    "tabel-data-jurusan-300x221.jpg"
   ]
  },
  {
   "id": "tanggal-dasar",
   "cat": "tanggal",
   "judul": "Cara Excel menyimpan tanggal",
   "ringkas": "Excel menyimpan tanggal sebagai nomor urut hari, dihitung sejak 1 Januari 1900. Karena itu tanggal bisa dikurangi atau ditambah seperti angka biasa.",
   "intinya": "Bagi Excel, tanggal sebenarnya hanya angka yang diberi tampilan tanggal.",
   "analogi": "Bayangkan kalender yang setiap harinya diberi nomor urut dari hari pertama. Tanggal 10 Oktober dan 1 Oktober dipisahkan 9 nomor. Karena hanya angka, kamu bisa menghitung selisihnya dengan mengurangkan.",
   "sintaks": "=DATE(tahun; bulan; hari)   =TODAY()   =NOW()",
   "argumen": [
    [
     "DATE",
     "Membuat tanggal dari tiga angka: tahun, bulan, hari."
    ],
    [
     "TODAY()",
     "Tanggal hari ini. Berubah setiap hari."
    ],
    [
     "NOW()",
     "Tanggal dan jam saat ini."
    ]
   ],
   "langkah": [
    "Ketik tanggal sesuai pengaturan komputermu, misalnya 02/10/2026.",
    "Kalau yang muncul angka aneh, ubah format kotaknya menjadi Short Date di tab Home.",
    "Menghitung selisih hari: =B2-A2.",
    "=A2+30 menghasilkan tanggal 30 hari setelah A2."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Tambah 30 hari"
     ],
     [
      "02/10/2026",
      ""
     ],
     [
      "15/08/2026",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=A2+30",
    "coba": [
     [
      "=A2+30",
      "30 hari kemudian"
     ],
     [
      "=DATE(2026,12,25)",
      "Natal 2026"
     ],
     [
      "=EDATE(A2,1)",
      "Bulan depan"
     ],
     [
      "=EOMONTH(A2,0)",
      "Akhir bulan"
     ],
     [
      "=A2",
      "Tampilan tanggal"
     ]
    ],
    "catatan": "Format tanggal: dd/mm/yyyy."
   },
   "kuis": {
    "q": "Bagaimana Excel menyimpan tanggal?",
    "opsi": [
     "Sebagai teks",
     "Sebagai nomor urut hari",
     "Sebagai gambar",
     "Sebagai tiga sel"
    ],
    "jawab": 1,
    "bahas": "Sebagai nomor urut, sehingga bisa dihitung."
   },
   "kata": "tanggal date today now serial",
   "gambar": [
    "date-dan-time-5.jpg",
    "date-dan-time-6.jpg",
    "fungsi-dmy.jpg"
   ]
  },
  {
   "id": "day-month-year",
   "cat": "tanggal",
   "judul": "DAY, MONTH, YEAR: memecah tanggal",
   "ringkas": "Tiga fungsi ini mengambil hari, bulan, atau tahun dari sebuah tanggal.",
   "intinya": "DAY = hari. MONTH = bulan. YEAR = tahun.",
   "analogi": "Bayangkan tanggal 2 Oktober 2026 sebagai sebuah kotak berisi tiga barang. DAY mengambil angka 2. MONTH mengambil angka 10. YEAR mengambil angka 2026.",
   "sintaks": "=DAY(tanggal)   =MONTH(tanggal)   =YEAR(tanggal)",
   "argumen": [
    [
     "tanggal",
     "Tanggal, atau kotak yang berisi tanggal."
    ]
   ],
   "langkah": [
    "Ketik =DAY(A2) untuk mendapat angka harinya.",
    "Ketik =MONTH(A2) untuk bulannya (1 sampai 12).",
    "Ketik =YEAR(A2) untuk tahunnya.",
    "Menyusun tanggal baru? Gabungkan dengan DATE. Contoh: =DATE(YEAR(A2)+1;MONTH(A2);DAY(A2)) menghasilkan tanggal yang sama satu tahun kemudian."
   ],
   "demo": {
    "data": [
     [
      "Tanggal lahir",
      "Hari",
      "Bulan",
      "Tahun"
     ],
     [
      "15/08/2000",
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=DAY(A2)",
    "coba": [
     [
      "=DAY(A2)",
      "Hari"
     ],
     [
      "=MONTH(A2)",
      "Bulan"
     ],
     [
      "=YEAR(A2)",
      "Tahun"
     ],
     [
      "=DATE(YEAR(A2)+17,MONTH(A2),DAY(A2))",
      "Ulang tahun ke-17"
     ],
     [
      "=TEXT(A2,\"mmmm\")",
      "Nama bulan"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =MONTH(DATE(2026;10;2))?",
    "opsi": [
     "2",
     "10",
     "2026",
     "1"
    ],
    "jawab": 1,
    "bahas": "Bulan Oktober adalah bulan ke-10."
   },
   "kata": "day month year hari bulan tahun",
   "gambar": [
    "fungsi-day.jpg",
    "fungsi-month.jpg",
    "fungsi-year.jpg"
   ]
  },
  {
   "id": "jam",
   "cat": "tanggal",
   "judul": "HOUR, MINUTE, SECOND: memecah jam",
   "ringkas": "Fungsi-fungsi ini mengambil jam, menit, atau detik dari sebuah waktu.",
   "intinya": "HOUR = jam. MINUTE = menit. SECOND = detik.",
   "analogi": "Bayangkan jam dinding yang menunjuk 14:35:20. HOUR mengambil angka 14. MINUTE mengambil 35. SECOND mengambil 20.",
   "sintaks": "=HOUR(waktu)   =MINUTE(waktu)   =SECOND(waktu)",
   "argumen": [
    [
     "waktu",
     "Waktu yang dipecah, misalnya hasil TIME atau NOW."
    ]
   ],
   "langkah": [
    "Ketik =HOUR(A2) untuk jam (0 sampai 23).",
    "Ketik =MINUTE(A2) untuk menit (0 sampai 59).",
    "Ketik =SECOND(A2) untuk detik (0 sampai 59)."
   ],
   "tips": [
    "Excel memakai jam 24, jadi jam 2 siang dihitung sebagai 14."
   ],
   "demo": {
    "data": [
     [
      "Waktu",
      "Jam",
      "Menit",
      "Detik"
     ],
     [
      "=TIME(13,45,30)",
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=HOUR(A2)",
    "coba": [
     [
      "=HOUR(A2)",
      "Jam"
     ],
     [
      "=MINUTE(A2)",
      "Menit"
     ],
     [
      "=SECOND(A2)",
      "Detik"
     ],
     [
      "=HOUR(A2)*60+MINUTE(A2)",
      "Total menit sejak tengah malam"
     ]
    ]
   },
   "kuis": {
    "q": "Rentang hasil HOUR adalah...",
    "opsi": [
     "1 sampai 12",
     "0 sampai 23",
     "0 sampai 59",
     "1 sampai 24"
    ],
    "jawab": 1,
    "bahas": "Jam dalam format 24 jam."
   },
   "kata": "hour minute second jam menit detik",
   "gambar": [
    "fungsi-second.jpg",
    "fungsi-minute.jpg"
   ]
  },
  {
   "id": "weekday",
   "cat": "tanggal",
   "judul": "WEEKDAY: mengetahui hari dalam seminggu",
   "ringkas": "WEEKDAY mengubah tanggal menjadi nomor hari dalam seminggu. Gabungkan dengan CHOOSE atau TEXT untuk menampilkan nama harinya.",
   "intinya": "WEEKDAY menjawab: tanggal ini hari apa?",
   "analogi": "Bayangkan setiap hari punya nomor. Kalau Senin nomor 1, maka Selasa nomor 2, dan Minggu nomor 7. Kamu bertanya, \"Tanggal 2 Oktober itu nomor hari berapa?\" WEEKDAY menjawabnya.",
   "sintaks": "=WEEKDAY(tanggal; [tipe])",
   "argumen": [
    [
     "tanggal",
     "Tanggal yang diperiksa."
    ],
    [
     "tipe",
     "1 (bawaan): Minggu = 1 sampai Sabtu = 7. 2: Senin = 1 sampai Minggu = 7."
    ]
   ],
   "langkah": [
    "Ketik =WEEKDAY(A2;2) supaya Senin bernilai 1.",
    "Mau nama harinya? Pakai =TEXT(A2;\"dddd\"), atau =CHOOSE(WEEKDAY(A2;2);\"Senin\";\"Selasa\";\"Rabu\";\"Kamis\";\"Jumat\";\"Sabtu\";\"Minggu\").",
    "Mau tahu apakah akhir pekan? Pakai syarat WEEKDAY(A2;2)>5. Artinya Sabtu atau Minggu."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "No hari",
      "Nama hari"
     ],
     [
      "02/10/2026",
      "",
      ""
     ],
     [
      "03/10/2026",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=WEEKDAY(A2,2)",
    "coba": [
     [
      "=WEEKDAY(A2,2)",
      "Senin = 1"
     ],
     [
      "=WEEKDAY(A2)",
      "Minggu = 1"
     ],
     [
      "=TEXT(A2,\"dddd\")",
      "Nama hari"
     ],
     [
      "=IF(WEEKDAY(A2,2)>5,\"Akhir pekan\",\"Hari kerja\")",
      "Akhir pekan atau bukan"
     ]
    ]
   },
   "kuis": {
    "q": "Dengan WEEKDAY(tanggal;2), hari Minggu bernilai...",
    "opsi": [
     "1",
     "7",
     "0",
     "2"
    ],
    "jawab": 1,
    "bahas": "Tipe 2: Senin = 1 hingga Minggu = 7."
   },
   "kata": "weekday hari minggu senin",
   "gambar": [
    "hari-weekday-2.jpg",
    "hari.jpg"
   ]
  },
  {
   "id": "selisih-hari",
   "cat": "tanggal",
   "judul": "Menghitung selisih hari, bulan, dan tahun",
   "ringkas": "Mengurangkan dua tanggal menghasilkan jumlah hari. Untuk jumlah bulan atau tahun penuh (misalnya umur), pakai DATEDIF.",
   "intinya": "DATEDIF menghitung jarak antara dua tanggal dalam satuan yang kamu pilih.",
   "analogi": "Bayangkan menghitung umur. Kamu tidak peduli berapa harinya, kamu ingin tahu berapa tahun penuh sejak lahir. DATEDIF memberi tahu itu, dan bisa juga memberi tahu bulan penuh atau hari penuh.",
   "sintaks": "=DATEDIF(awal; akhir; \"satuan\")",
   "argumen": [
    [
     "awal",
     "Tanggal mulai."
    ],
    [
     "akhir",
     "Tanggal akhir. Tidak boleh lebih kecil dari tanggal mulai."
    ],
    [
     "\"satuan\"",
     "\"Y\" = tahun penuh. \"M\" = bulan penuh. \"D\" = hari."
    ]
   ],
   "langkah": [
    "Selisih hari: =B2-A2. Ubah format hasil menjadi General supaya tampil sebagai angka.",
    "Umur: =DATEDIF(A2;TODAY();\"Y\").",
    "Masa kerja dalam bulan: =DATEDIF(A2;B2;\"M\")."
   ],
   "tips": [
    "DATEDIF tidak muncul di daftar saran Excel, tetapi tetap bekerja kalau kamu mengetiknya sendiri."
   ],
   "demo": {
    "data": [
     [
      "Tanggal lahir",
      "Tanggal acuan",
      "Umur"
     ],
     [
      "15/08/2000",
      "02/10/2026",
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=DATEDIF(A2,B2,\"Y\")",
    "coba": [
     [
      "=DATEDIF(A2,B2,\"Y\")",
      "Tahun penuh"
     ],
     [
      "=DATEDIF(A2,B2,\"M\")",
      "Bulan penuh"
     ],
     [
      "=B2-A2",
      "Selisih hari"
     ],
     [
      "=DAYS(B2,A2)",
      "DAYS"
     ]
    ]
   },
   "kuis": {
    "q": "Argumen satuan \"Y\" pada DATEDIF berarti...",
    "opsi": [
     "Tahun penuh",
     "Hari",
     "Bulan",
     "Minggu"
    ],
    "jawab": 0,
    "bahas": "Y = year."
   },
   "kata": "datedif selisih hari umur masa kerja",
   "gambar": [
    "hasil-rumus-rentang-hari-300x166.jpg"
   ]
  },
  {
   "id": "networkdays",
   "cat": "tanggal",
   "judul": "NETWORKDAYS: menghitung hari kerja",
   "ringkas": "NETWORKDAYS menghitung jumlah hari kerja (Senin sampai Jumat) di antara dua tanggal. Hari libur bisa dikecualikan.",
   "intinya": "NETWORKDAYS menghitung hari kerja saja, tanpa Sabtu dan Minggu.",
   "analogi": "Bayangkan kamu ingin tahu berapa hari kamu sekolah dalam satu bulan. Sabtu dan Minggu tidak dihitung, dan hari libur nasional juga tidak. NETWORKDAYS menghitungnya untukmu.",
   "sintaks": "=NETWORKDAYS(awal; akhir; [libur])",
   "argumen": [
    [
     "awal",
     "Tanggal mulai."
    ],
    [
     "akhir",
     "Tanggal selesai."
    ],
    [
     "libur",
     "Tidak wajib. Daftar tanggal libur yang dikecualikan."
    ]
   ],
   "langkah": [
    "Tulis daftar hari libur di beberapa kotak.",
    "Ketik =NETWORKDAYS( lalu klik tanggal awal.",
    "Ketik ; lalu klik tanggal akhir. Ketik ; lalu sorot daftar libur.",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "demo": {
    "data": [
     [
      "Mulai",
      "Selesai",
      "Hari kerja"
     ],
     [
      "01/10/2026",
      "31/10/2026",
      ""
     ],
     [],
     [
      "Libur"
     ],
     [
      "17/10/2026"
     ]
    ],
    "sel": "C2",
    "rumus": "=NETWORKDAYS(A2,B2)",
    "coba": [
     [
      "=NETWORKDAYS(A2,B2)",
      "Tanpa libur"
     ],
     [
      "=NETWORKDAYS(A2,B2,A5)",
      "Dikurangi satu hari libur"
     ],
     [
      "=WORKDAY(A2,10)",
      "Sepuluh hari kerja setelah awal"
     ]
    ]
   },
   "kuis": {
    "q": "Hari yang dihitung NETWORKDAYS sebagai hari kerja adalah...",
    "opsi": [
     "Senin sampai Jumat",
     "Senin sampai Sabtu",
     "Setiap hari",
     "Selasa sampai Sabtu"
    ],
    "jawab": 0,
    "bahas": "Sabtu dan Minggu tidak dihitung."
   },
   "kata": "networkdays hari kerja libur",
   "gambar": [
    "networksday-2-238x300.jpg",
    "networksday-3-300x226.jpg",
    "networksday-4-300x123.jpg"
   ]
  },
  {
   "id": "weeknum",
   "cat": "tanggal",
   "judul": "WEEKNUM: nomor minggu",
   "ringkas": "WEEKNUM memberi tahu nomor minggu dalam setahun. Berguna untuk laporan mingguan.",
   "intinya": "WEEKNUM menjawab: tanggal ini masuk minggu ke berapa?",
   "analogi": "Bayangkan setahun dibagi jadi 52 sampai 53 lembar halaman, satu halaman untuk satu minggu. WEEKNUM memberi tahu kamu tanggal itu ada di halaman nomor berapa.",
   "sintaks": "=WEEKNUM(tanggal; [tipe])",
   "argumen": [
    [
     "tanggal",
     "Tanggal yang diperiksa."
    ],
    [
     "tipe",
     "1 (bawaan): minggu dimulai hari Minggu. 2: minggu dimulai hari Senin."
    ]
   ],
   "langkah": [
    "Ketik =WEEKNUM(A2) lalu tekan Enter.",
    "Mau minggu yang dimulai Senin? Tulis =WEEKNUM(A2;2)."
   ],
   "tips": [
    "Minggu yang memuat 1 Januari dihitung sebagai minggu ke-1."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Minggu ke"
     ],
     [
      "02/10/2026",
      ""
     ],
     [
      "01/01/2026",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=WEEKNUM(A2)",
    "coba": [
     [
      "=WEEKNUM(A2)",
      "Nomor minggu"
     ]
    ]
   },
   "kuis": {
    "q": "Pada sistem default, minggu ke-1 adalah minggu yang memuat...",
    "opsi": [
     "1 Januari",
     "Hari Senin pertama",
     "1 Februari",
     "Tanggal 7 Januari"
    ],
    "jawab": 0,
    "bahas": "Minggu yang memuat 1 Januari."
   },
   "kata": "weeknum minggu ke",
   "gambar": [
    "39-fungsi-weeknum-excel.jpg"
   ]
  },
  {
   "id": "hijriyah",
   "cat": "tanggal",
   "judul": "Kalender Hijriyah",
   "ringkas": "Excel bisa menampilkan tanggal Masehi sebagai tanggal Hijriyah, kalau pengaturan komputermu mendukungnya.",
   "intinya": "Tanggalnya tetap sama. Yang berubah hanya cara menampilkannya.",
   "analogi": "Bayangkan satu hari yang punya dua nama, seperti orang yang punya nama panggilan. Hari yang sama bisa ditulis dalam kalender Masehi dan kalender Hijriyah.",
   "langkah": [
    "Ketik tanggal Masehi di sebuah kotak.",
    "Tekan Ctrl+1 untuk membuka Format Cells, lalu pilih Date.",
    "Pilih jenis kalender Hijri kalau tersedia di pengaturan regional komputermu.",
    "Ikuti gambar di bawah untuk melihat urutan klik dan hasil akhirnya."
   ],
   "tips": [
    "Kalau pilihan Hijri tidak muncul, cek dulu pengaturan bahasa dan wilayah (regional) di komputermu."
   ],
   "kuis": {
    "q": "Pengaturan tampilan kalender dilakukan melalui...",
    "opsi": [
     "Format Cells",
     "Insert Chart",
     "Data Validation",
     "Sort"
    ],
    "jawab": 0,
    "bahas": "Format Cells > Date."
   },
   "kata": "hijriyah kalender islam",
   "gambar": [
    "kalender-hijriyah-1.jpg",
    "kalender-hijriyah-2.jpg"
   ]
  },
  {
   "id": "abs-sqrt",
   "cat": "mate",
   "judul": "ABS dan SQRT: harga mutlak dan akar",
   "ringkas": "ABS membuang tanda minus pada angka. SQRT menghitung akar kuadrat. SQRT memberi #NUM! kalau angkanya negatif.",
   "intinya": "ABS membuat angka selalu positif. SQRT mencari angka yang kalau dikali dirinya sendiri hasilnya sama dengan angka itu.",
   "analogi": "ABS seperti jarak: berjalan 5 langkah ke depan atau 5 langkah ke belakang, jauhnya tetap 5. SQRT seperti mencari sisi sebuah kotak persegi. Luasnya 81, maka sisinya 9, karena 9 kali 9 sama dengan 81.",
   "sintaks": "=ABS(angka)   =SQRT(angka)",
   "argumen": [
    [
     "angka",
     "Angka atau kotak yang dihitung."
    ]
   ],
   "langkah": [
    "=ABS(-12) menghasilkan 12.",
    "=SQRT(81) menghasilkan 9.",
    "Kalau angkanya mungkin negatif, tulis =SQRT(ABS(A2))."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "ABS",
      "Akar"
     ],
     [
      -16,
      "",
      ""
     ],
     [
      25,
      "",
      ""
     ],
     [
      81,
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=ABS(A2)",
    "coba": [
     [
      "=ABS(A2)",
      "Harga mutlak"
     ],
     [
      "=SQRT(ABS(A2))",
      "Akar dari harga mutlak"
     ],
     [
      "=SQRT(A2)",
      "Galat bila negatif"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =SQRT(-9)?",
    "opsi": [
     "3",
     "-3",
     "#NUM!",
     "0"
    ],
    "jawab": 2,
    "bahas": "Akar bilangan negatif tidak terdefinisi: #NUM!."
   },
   "kata": "abs sqrt akar mutlak",
   "gambar": [
    "function-arg-abs.jpg",
    "fungsi-abs.jpg",
    "rumus-sqrt-300x192.jpg"
   ]
  },
  {
   "id": "round",
   "cat": "mate",
   "judul": "ROUND, ROUNDUP, ROUNDDOWN: pembulatan",
   "ringkas": "ROUND membulatkan seperti biasa. ROUNDUP selalu membulatkan ke atas (menjauhi nol). ROUNDDOWN selalu membuang sisanya (mendekati nol).",
   "intinya": "Tiga fungsi ini memotong angka sampai jumlah angka di belakang koma yang kamu tentukan.",
   "analogi": "Bayangkan kamu membayar di warung dan uang receh diabaikan. ROUND membulatkan ke yang terdekat. ROUNDUP selalu membulatkan ke atas, seperti penjual yang tidak mau rugi. ROUNDDOWN selalu membuang sisanya, seperti penjual yang baik hati.",
   "sintaks": "=ROUND(angka; digit)",
   "argumen": [
    [
     "angka",
     "Angka yang dibulatkan."
    ],
    [
     "digit",
     "Berapa angka di belakang koma. Angka negatif membulatkan ke puluhan, ratusan, dan seterusnya."
    ]
   ],
   "langkah": [
    "=ROUND(2,345;2) menghasilkan 2,35.",
    "=ROUND(1234;-2) menghasilkan 1200.",
    "=ROUNDUP(2,341;2) menghasilkan 2,35.",
    "=ROUNDDOWN(2,349;2) menghasilkan 2,34."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "ROUND",
      "ROUNDUP",
      "ROUNDDOWN"
     ],
     [
      2.345,
      "",
      "",
      ""
     ],
     [
      1234.5678,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=ROUND(A2,2)",
    "coba": [
     [
      "=ROUND(A2,2)",
      "Dua desimal"
     ],
     [
      "=ROUNDUP(A2,2)",
      "Ke atas"
     ],
     [
      "=ROUNDDOWN(A2,2)",
      "Ke bawah"
     ],
     [
      "=ROUND(A2,-2)",
      "Ke ratusan"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =ROUNDDOWN(7,89;1)?",
    "opsi": [
     "7,8",
     "7,9",
     "8",
     "7"
    ],
    "jawab": 0,
    "bahas": "Dipotong ke bawah pada satu desimal."
   },
   "kata": "round roundup rounddown bulat",
   "gambar": [
    "function-arg-round-300x161.jpg",
    "function-arg-rounddown-300x160.jpg",
    "function-arg-roundup-300x161.jpg"
   ]
  },
  {
   "id": "int",
   "cat": "mate",
   "judul": "INT: bagian bulat",
   "ringkas": "INT membulatkan ke bawah menjadi bilangan bulat terdekat yang tidak lebih besar dari angka itu.",
   "intinya": "INT = turun ke bilangan bulat di bawahnya.",
   "analogi": "Bayangkan tangga. Kamu berdiri di antara anak tangga 8 dan 9. INT selalu menurunkanmu ke anak tangga di bawahmu, yaitu 8. Kalau kamu ada di bawah nol, misalnya di -8,1, anak tangga di bawahmu adalah -9.",
   "sintaks": "=INT(angka)",
   "argumen": [
    [
     "angka",
     "Angka yang dibulatkan ke bawah."
    ]
   ],
   "langkah": [
    "=INT(8,9) menghasilkan 8.",
    "=INT(-8,1) menghasilkan -9, karena -9 adalah bilangan bulat di bawah -8,1.",
    "Mau hanya membuang angka di belakang koma tanpa melihat tanda? Pakai TRUNC."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "INT",
      "TRUNC"
     ],
     [
      8.9,
      "",
      ""
     ],
     [
      -8.1,
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=INT(A2)",
    "coba": [
     [
      "=INT(A2)",
      "INT"
     ],
     [
      "=TRUNC(A2)",
      "TRUNC"
     ],
     [
      "=MOD(A2,1)",
      "Sisa desimal"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =INT(-2,5)?",
    "opsi": [
     "-2",
     "-3",
     "-2,5",
     "2"
    ],
    "jawab": 1,
    "bahas": "INT membulatkan ke bawah, yaitu -3."
   },
   "kata": "int bulat integer",
   "gambar": [
    "rumus-int-data.jpg"
   ]
  },
  {
   "id": "log",
   "cat": "mate",
   "judul": "LOG, LN, LOG10: logaritma",
   "ringkas": "LOG menghitung logaritma, yaitu pertanyaan \"10 harus dipangkatkan berapa untuk menjadi angka ini?\". LN memakai basis e. LOG10 selalu basis 10.",
   "intinya": "Logaritma adalah kebalikan dari pangkat.",
   "analogi": "Kalau 10 pangkat 3 sama dengan 1000, maka logaritma 1000 adalah 3. Logaritma bertanya mundur: \"Berapa pangkatnya?\"",
   "sintaks": "=LOG(angka; [basis])   =LN(angka)   =LOG10(angka)",
   "argumen": [
    [
     "angka",
     "Angka positif yang dicari logaritmanya."
    ],
    [
     "basis",
     "Tidak wajib. Basis logaritma. Kalau kosong, Excel memakai 10."
    ]
   ],
   "langkah": [
    "=LOG(1000) menghasilkan 3.",
    "=LOG(8;2) menghasilkan 3, karena 2 pangkat 3 sama dengan 8.",
    "=LN(EXP(1)) menghasilkan 1."
   ],
   "tips": [
    "Angka nol atau negatif tidak punya logaritma. Hasilnya #NUM!."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "LOG",
      "LN",
      "LOG basis 2"
     ],
     [
      8,
      "",
      "",
      ""
     ],
     [
      1000,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=LOG(A2)",
    "coba": [
     [
      "=LOG(A2)",
      "Basis 10"
     ],
     [
      "=LN(A2)",
      "Basis e"
     ],
     [
      "=LOG(A2,2)",
      "Basis 2"
     ],
     [
      "=LOG10(A2)",
      "LOG10"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =LOG(100)?",
    "opsi": [
     "1",
     "2",
     "10",
     "100"
    ],
    "jawab": 1,
    "bahas": "10 pangkat 2 = 100."
   },
   "kata": "log ln logaritma",
   "gambar": [
    "data-dan-hasil-rumus-lnloglog-10.jpg",
    "function-arg-log-10.jpg"
   ]
  },
  {
   "id": "trigonometri",
   "cat": "mate",
   "judul": "SIN, COS, TAN dan kebalikannya",
   "ringkas": "Fungsi trigonometri di Excel bekerja dengan satuan radian, bukan derajat. Ubah derajat menjadi radian dulu dengan RADIANS.",
   "intinya": "SIN(30) tidak sama dengan 0,5 di Excel kecuali kamu mengubah 30 derajat menjadi radian.",
   "analogi": "Bayangkan penggaris yang satuannya cm, tetapi kamu memberi angka dalam inci. Hasilnya salah. Excel mengira angkamu radian. RADIANS menerjemahkan derajat ke satuan yang dimengerti Excel.",
   "sintaks": "=SIN(RADIANS(derajat))   =ASIN(nilai)   =DEGREES(radian)",
   "argumen": [
    [
     "derajat",
     "Sudut dalam derajat."
    ],
    [
     "RADIANS()",
     "Mengubah derajat menjadi radian."
    ],
    [
     "DEGREES()",
     "Mengubah radian menjadi derajat."
    ]
   ],
   "langkah": [
    "=SIN(RADIANS(30)) menghasilkan 0,5.",
    "=COS(RADIANS(60)) juga menghasilkan 0,5.",
    "=DEGREES(ASIN(0,5)) menghasilkan 30.",
    "ASIN, ACOS, dan ATAN adalah kebalikan dari SIN, COS, dan TAN. Hasilnya dalam radian."
   ],
   "demo": {
    "data": [
     [
      "Sudut",
      "SIN",
      "COS",
      "TAN"
     ],
     [
      30,
      "",
      "",
      ""
     ],
     [
      45,
      "",
      "",
      ""
     ],
     [
      60,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=SIN(RADIANS(A2))",
    "coba": [
     [
      "=SIN(RADIANS(A2))",
      "SIN"
     ],
     [
      "=COS(RADIANS(A2))",
      "COS"
     ],
     [
      "=TAN(RADIANS(A2))",
      "TAN"
     ],
     [
      "=DEGREES(ASIN(0.5))",
      "ASIN kembali ke derajat"
     ]
    ],
    "catatan": "Kolom sudut dalam derajat."
   },
   "kuis": {
    "q": "Mengapa SIN(30) tidak menghasilkan 0,5 di Excel?",
    "opsi": [
     "Excel membaca 30 sebagai radian",
     "Excel salah hitung",
     "SIN hanya untuk 0 sampai 1",
     "Perlu tanda $"
    ],
    "jawab": 0,
    "bahas": "Gunakan RADIANS(30)."
   },
   "kata": "sin cos tan asin acos atan trigonometri sudut",
   "gambar": [
    "fungsi-asin.jpg",
    "fungsi-asinh-1.jpg",
    "rumus-asinh.jpg"
   ]
  },
  {
   "id": "even-odd",
   "cat": "mate",
   "judul": "EVEN, ODD, ISEVEN, ISODD",
   "ringkas": "EVEN dan ODD membulatkan angka ke bilangan genap atau ganjil terdekat (menjauhi nol). ISEVEN dan ISODD menjawab benar atau salah.",
   "intinya": "Genap itu habis dibagi 2. Ganjil itu tidak.",
   "analogi": "Bayangkan membagi permen berdua. Kalau permennya genap, tidak ada sisa. Kalau ganjil, ada satu sisa. ISEVEN memeriksa ada sisa atau tidak.",
   "sintaks": "=EVEN(angka)   =ODD(angka)   =ISEVEN(angka)   =ISODD(angka)",
   "argumen": [
    [
     "angka",
     "Angka yang diperiksa."
    ]
   ],
   "langkah": [
    "=EVEN(3) menghasilkan 4.",
    "=ODD(4) menghasilkan 5.",
    "=ISEVEN(8) menghasilkan TRUE (benar).",
    "Mau tulisan? Pakai =IF(ISEVEN(A2);\"Genap\";\"Ganjil\")."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "EVEN",
      "ODD",
      "Jenis"
     ],
     [
      3,
      "",
      "",
      ""
     ],
     [
      8,
      "",
      "",
      ""
     ],
     [
      11,
      "",
      "",
      ""
     ]
    ],
    "sel": "D2",
    "rumus": "=IF(ISEVEN(A2),\"Genap\",\"Ganjil\")",
    "coba": [
     [
      "=IF(ISEVEN(A2),\"Genap\",\"Ganjil\")",
      "Penanda"
     ],
     [
      "=EVEN(A2)",
      "EVEN"
     ],
     [
      "=ODD(A2)",
      "ODD"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =ODD(4)?",
    "opsi": [
     "3",
     "4",
     "5",
     "6"
    ],
    "jawab": 2,
    "bahas": "Dibulatkan ke ganjil terdekat menjauhi nol: 5."
   },
   "kata": "even odd genap ganjil",
   "gambar": [
    "iseven-2.jpg",
    "isood-1.jpg",
    "isood-2-1024x445.jpg"
   ]
  },
  {
   "id": "roman",
   "cat": "mate",
   "judul": "ROMAN dan ARABIC: angka Romawi",
   "ringkas": "ROMAN mengubah angka biasa menjadi angka Romawi. ARABIC mengubahnya kembali.",
   "intinya": "ROMAN = angka jadi Romawi. ARABIC = Romawi jadi angka.",
   "analogi": "Bayangkan penerjemah di antara dua bahasa. Satu bahasa adalah angka biasa (1, 2, 3), bahasa lain adalah angka Romawi (I, II, III). ROMAN dan ARABIC bolak-balik menerjemahkan.",
   "sintaks": "=ROMAN(angka)   =ARABIC(teks)",
   "argumen": [
    [
     "angka",
     "Angka bulat dari 0 sampai 3999."
    ],
    [
     "teks",
     "Angka Romawi dalam tanda kutip, misalnya \"XIV\"."
    ]
   ],
   "langkah": [
    "=ROMAN(2026) menghasilkan MMXXVI.",
    "=ARABIC(\"XIV\") menghasilkan 14."
   ],
   "demo": {
    "data": [
     [
      "Angka",
      "Romawi"
     ],
     [
      14,
      ""
     ],
     [
      1994,
      ""
     ],
     [
      2026,
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=ROMAN(A2)",
    "coba": [
     [
      "=ROMAN(A2)",
      "Angka Romawi"
     ],
     [
      "=ARABIC(\"MCMXCIV\")",
      "Kembali ke angka"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =ROMAN(9)?",
    "opsi": [
     "VIIII",
     "IX",
     "XI",
     "IV"
    ],
    "jawab": 1,
    "bahas": "9 ditulis IX."
   },
   "kata": "roman arabic romawi",
   "gambar": [
    "arabic-2.jpg",
    "arabic.jpg",
    "fungsi-argumen-roman-300x165.jpg"
   ]
  },
  {
   "id": "fpb-kpk",
   "cat": "mate",
   "judul": "GCD dan LCM: FPB dan KPK",
   "ringkas": "GCD mencari FPB (faktor persekutuan terbesar). LCM mencari KPK (kelipatan persekutuan terkecil).",
   "intinya": "FPB adalah angka terbesar yang bisa membagi habis keduanya. KPK adalah angka terkecil yang bisa dibagi habis oleh keduanya.",
   "analogi": "Bayangkan kamu punya 12 permen dan 18 cokelat. Kamu ingin membagi ke beberapa kantong dengan isi yang sama, tanpa sisa. Paling banyak 6 kantong. Itulah FPB. Sedangkan KPK adalah kapan dua lampu yang berkedip tiap 4 detik dan tiap 6 detik menyala bersamaan lagi: pada detik ke-12.",
   "sintaks": "=GCD(a; b; ...)   =LCM(a; b; ...)",
   "argumen": [
    [
     "a, b, ...",
     "Bilangan bulat positif. Boleh lebih dari dua."
    ]
   ],
   "langkah": [
    "=GCD(12;18) menghasilkan 6.",
    "=LCM(4;6) menghasilkan 12."
   ],
   "demo": {
    "data": [
     [
      "a",
      "b",
      "FPB",
      "KPK"
     ],
     [
      12,
      18,
      "",
      ""
     ],
     [
      8,
      20,
      "",
      ""
     ]
    ],
    "sel": "C2",
    "rumus": "=GCD(A2,B2)",
    "coba": [
     [
      "=GCD(A2,B2)",
      "FPB"
     ],
     [
      "=LCM(A2,B2)",
      "KPK"
     ],
     [
      "=A2*B2/GCD(A2,B2)",
      "KPK lewat FPB"
     ]
    ]
   },
   "kuis": {
    "q": "FPB dari 12 dan 18 adalah...",
    "opsi": [
     "3",
     "6",
     "12",
     "36"
    ],
    "jawab": 1,
    "bahas": "Faktor terbesar yang membagi keduanya adalah 6."
   },
   "kata": "gcd lcm fpb kpk",
   "gambar": [
    "rumus-fpb-matematika-1.jpg",
    "rumus-fpb-matematika-2.jpg",
    "rumus-fpb-matematika-4.jpg"
   ]
  },
  {
   "id": "matriks",
   "cat": "mate",
   "judul": "MMULT dan matriks",
   "ringkas": "MMULT mengalikan dua matriks (tabel angka). Hasilnya juga berupa tabel, jadi kamu harus menyorot area hasilnya dulu.",
   "intinya": "Matriks adalah tabel angka. MMULT mengalikan dua tabel dengan aturan khusus: baris dikali kolom.",
   "analogi": "Bayangkan dua tabel: harga barang dan jumlah barang yang dibeli beberapa orang. Kamu ingin tahu total belanja tiap orang. MMULT mengalikan baris tabel pertama dengan kolom tabel kedua, lalu menjumlahkannya.",
   "sintaks": "=MMULT(matriks1; matriks2)",
   "argumen": [
    [
     "matriks1",
     "Tabel angka pertama."
    ],
    [
     "matriks2",
     "Tabel angka kedua. Jumlah barisnya harus sama dengan jumlah kolom tabel pertama."
    ]
   ],
   "langkah": [
    "Sorot area hasil. Jumlah barisnya sama dengan baris tabel 1, jumlah kolomnya sama dengan kolom tabel 2.",
    "Ketik =MMULT( lalu sorot tabel pertama.",
    "Ketik ; lalu sorot tabel kedua. Tutup dengan ).",
    "Excel 365 langsung menampilkan hasilnya saat Enter. Excel versi lama perlu menekan Ctrl+Shift+Enter."
   ],
   "tips": [
    "Dua tabel hanya bisa dikalikan kalau jumlah kolom tabel pertama sama dengan jumlah baris tabel kedua."
   ],
   "kuis": {
    "q": "Syarat dua matriks bisa dikalikan adalah...",
    "opsi": [
     "Kolom matriks 1 = baris matriks 2",
     "Baris sama",
     "Ukuran sama persis",
     "Hanya berisi angka bulat"
    ],
    "jawab": 0,
    "bahas": "Jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua."
   },
   "kata": "mmult matriks perkalian",
   "gambar": [
    "fungsi-argumen-mmult-300x140.jpg",
    "matrik-excel3.jpg",
    "matrik-excel4.jpg"
   ]
  },
  {
   "id": "konversi",
   "cat": "mate",
   "judul": "CONVERT dan konversi bilangan",
   "ringkas": "CONVERT mengubah satuan, misalnya kilometer ke mil. DEC2BIN, DEC2OCT, dan DEC2HEX mengubah angka biasa ke sistem bilangan lain.",
   "intinya": "CONVERT = ubah satuan. DEC2BIN dan kawan-kawan = ubah cara menulis angka.",
   "analogi": "CONVERT seperti kalkulator konversi di ponsel: 10 kilometer sama dengan sekitar 6,2 mil. DEC2BIN seperti menulis angka dengan bahasa komputer yang hanya punya angka 0 dan 1.",
   "sintaks": "=CONVERT(angka; \"dari\"; \"ke\")   =DEC2OCT(angka)",
   "argumen": [
    [
     "angka",
     "Angka yang diubah."
    ],
    [
     "\"dari\", \"ke\"",
     "Kode satuan di dalam tanda kutip, misalnya \"km\" (kilometer), \"mi\" (mil), \"kg\" (kilogram), \"lbm\" (pon)."
    ]
   ],
   "langkah": [
    "=CONVERT(10;\"km\";\"mi\") menghasilkan sekitar 6,21.",
    "=DEC2BIN(10) menghasilkan 1010.",
    "=DEC2OCT(64) menghasilkan 100.",
    "=DEC2HEX(255) menghasilkan FF."
   ],
   "tips": [
    "Kode satuan membedakan huruf besar dan kecil. Tulis persis seperti kodenya."
   ],
   "demo": {
    "data": [
     [
      "Desimal",
      "Biner",
      "Oktal",
      "Heksa"
     ],
     [
      10,
      "",
      "",
      ""
     ],
     [
      64,
      "",
      "",
      ""
     ],
     [
      255,
      "",
      "",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=DEC2BIN(A2)",
    "coba": [
     [
      "=DEC2BIN(A2)",
      "Biner"
     ],
     [
      "=DEC2OCT(A2)",
      "Oktal"
     ],
     [
      "=DEC2HEX(A2)",
      "Heksadesimal"
     ],
     [
      "=OCT2DEC(DEC2OCT(A2))",
      "Desimal ke oktal lalu kembali"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil =DEC2BIN(5)?",
    "opsi": [
     "11",
     "101",
     "110",
     "1000"
    ],
    "jawab": 1,
    "bahas": "5 = 4 + 1 sehingga biner 101."
   },
   "kata": "convert konversi desimal oktal biner heksa",
   "gambar": [
    "merubah-desimal-ke-oktal-1-300x190.jpg",
    "merubah-desimal-ke-oktal-2-300x189.jpg",
    "merubah-desimal-ke-oktal-3-300x190.jpg"
   ]
  },
  {
   "id": "dsum-dcount",
   "cat": "db",
   "judul": "DSUM dan DCOUNT: jumlah dan banyak data dengan kriteria",
   "ringkas": "Fungsi database (D...) bekerja pada tabel berjudul kolom. Syaratnya ditulis di tabel kecil terpisah yang disebut rentang kriteria.",
   "intinya": "DSUM menjumlahkan dan DCOUNT menghitung, tetapi hanya baris yang cocok dengan kriteria di tabel kecil.",
   "analogi": "Bayangkan kamu menempelkan kertas catatan di samping tabel: \"Tampilkan hanya yang Pendidikan = S1.\" Fungsi D... membaca catatan itu lalu menghitung hanya baris yang sesuai.",
   "sintaks": "=DSUM(database; field; kriteria)   =DCOUNT(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Seluruh tabel, termasuk baris judul."
    ],
    [
     "field",
     "Kolom yang dihitung. Tulis judulnya di dalam tanda kutip, misalnya \"Gaji\", atau nomor kolomnya."
    ],
    [
     "kriteria",
     "Tabel kecil berisi judul kolom di baris atas dan syarat di bawahnya."
    ]
   ],
   "langkah": [
    "Buat tabel kriteria di luar tabel utama. Baris pertama berisi judul kolom yang sama persis dengan judul di tabel utama. Baris di bawahnya berisi syarat.",
    "Ketik =DSUM( lalu sorot tabel utama termasuk judulnya.",
    "Ketik ; lalu \"Gaji\" di dalam tanda kutip. Ketik ; lalu sorot tabel kriteria. Tutup dengan ).",
    "Syarat yang ada di satu baris yang sama berarti DAN (semua harus cocok). Syarat di baris yang berbeda berarti ATAU."
   ],
   "tips": [
    "DCOUNT hanya menghitung kotak berisi angka. Untuk menghitung kotak terisi apa pun, pakai DCOUNTA.",
    "Judul di tabel kriteria harus sama persis dengan judul di tabel utama."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Jabatan",
      "Gaji"
     ],
     [
      "Staf",
      ">=5000000"
     ]
    ],
    "sel": "G2",
    "rumus": "=DSUM(A1:C6,\"Gaji\",A8:B9)",
    "coba": [
     [
      "=DSUM(A1:C6,\"Gaji\",A8:B9)",
      "Total gaji Staf dengan gaji 5 juta ke atas"
     ],
     [
      "=DCOUNT(A1:C6,\"Gaji\",A8:B9)",
      "Banyaknya"
     ],
     [
      "=DAVERAGE(A1:C6,\"Gaji\",A8:A9)",
      "Rata-rata semua Staf (kriteria hanya Jabatan)"
     ]
    ],
    "catatan": "Ubah syarat di A9:B9, misalnya Manajer, lalu hitung ulang."
   },
   "kuis": {
    "q": "Apa yang harus identik antara tabel database dan rentang kriteria?",
    "opsi": [
     "Judul kolom",
     "Jumlah baris",
     "Warna sel",
     "Nama sheet"
    ],
    "jawab": 0,
    "bahas": "Judul kolom di rentang kriteria harus sama dengan judul di tabel."
   },
   "kata": "dsum dcount database kriteria",
   "gambar": [
    "contoh-data-dcount-300x182.jpg",
    "rumus-statistik-database-pegawai-1-280x300.jpg",
    "rumus-statistik-database-pegawai-2-280x300.jpg"
   ]
  },
  {
   "id": "dmax-dmin",
   "cat": "db",
   "judul": "DMAX dan DMIN: tertinggi dan terendah dengan kriteria",
   "ringkas": "DMAX dan DMIN mengambil angka terbesar atau terkecil, tetapi hanya dari baris yang cocok dengan kriteria.",
   "intinya": "Seperti MAX dan MIN, tetapi dengan syarat.",
   "analogi": "Bayangkan kamu bertanya, \"Siapa yang gajinya paling tinggi di antara yang lulusan S1?\" Kamu tidak peduli lulusan lain. DMAX menjawab pertanyaan itu.",
   "sintaks": "=DMAX(database; field; kriteria)   =DMIN(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Tabel beserta baris judul."
    ],
    [
     "field",
     "Kolom angka yang dicari."
    ],
    [
     "kriteria",
     "Tabel kecil berisi syarat."
    ]
   ],
   "langkah": [
    "Siapkan tabel kriteria, misalnya Pendidikan = S1.",
    "Ketik =DMAX( lalu sorot tabel utama, ketik ; lalu nama kolom di dalam tanda kutip, ketik ; lalu sorot tabel kriteria.",
    "Tutup dengan ). Untuk yang terendah, ganti DMAX dengan DMIN."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Jabatan",
      "Gaji"
     ],
     [
      "Staf",
      ">=5000000"
     ]
    ],
    "sel": "G2",
    "rumus": "=DMAX(A1:C6,\"Gaji\",A8:A9)",
    "coba": [
     [
      "=DMAX(A1:C6,\"Gaji\",A8:B9)",
      "Gaji tertinggi Staf (5 juta ke atas)"
     ],
     [
      "=DMIN(A1:C6,\"Gaji\",A8:B9)",
      "Gaji terendah di syarat yang sama"
     ]
    ],
    "catatan": "A8 berisi judul Jabatan tetapi A9 harus Staf agar kriteria bekerja."
   },
   "kuis": {
    "q": "DMAX mengambil nilai terbesar dari...",
    "opsi": [
     "Baris yang memenuhi kriteria",
     "Seluruh tabel",
     "Baris judul",
     "Kolom pertama"
    ],
    "jawab": 0,
    "bahas": "Hanya dari baris yang lolos kriteria."
   },
   "kata": "dmax dmin database tertinggi terendah",
   "gambar": [
    "contoh-data-dmax-300x184.jpg",
    "data-dmin-300x181.jpg",
    "gambar-2.jpg"
   ]
  },
  {
   "id": "daverage",
   "cat": "db",
   "judul": "DAVERAGE: rata-rata dengan kriteria",
   "ringkas": "DAVERAGE menghitung rata-rata kolom angka, tetapi hanya dari baris yang cocok dengan kriteria.",
   "intinya": "Seperti AVERAGE, tetapi dengan syarat di tabel kecil.",
   "analogi": "Bayangkan kamu ingin tahu rata-rata gaji khusus lulusan S1. DAVERAGE hanya mengambil baris S1 lalu merata-ratakannya.",
   "sintaks": "=DAVERAGE(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Tabel beserta baris judul."
    ],
    [
     "field",
     "Kolom yang dirata-ratakan."
    ],
    [
     "kriteria",
     "Tabel kecil berisi syarat."
    ]
   ],
   "langkah": [
    "Siapkan tabel kriteria di luar tabel utama.",
    "Ketik =DAVERAGE( lalu sorot tabel, nama kolom, dan tabel kriteria (dipisah ;).",
    "Tutup dengan ) lalu tekan Enter."
   ],
   "tips": [
    "Kalau tidak ada satu pun baris yang cocok, hasilnya #DIV/0!."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Jabatan",
      "Gaji"
     ],
     [
      "Staf",
      ">=5000000"
     ]
    ],
    "sel": "G2",
    "rumus": "=DAVERAGE(A1:C6,\"Gaji\",A8:B9)",
    "coba": [
     [
      "=DAVERAGE(A1:C6,\"Gaji\",A8:B9)",
      "Rata-rata gaji Staf 5 juta ke atas"
     ]
    ]
   },
   "kuis": {
    "q": "Apa hasil DAVERAGE bila tidak ada baris yang memenuhi kriteria?",
    "opsi": [
     "#DIV/0!",
     "0",
     "#N/A",
     "Kosong"
    ],
    "jawab": 0,
    "bahas": "Tidak ada angka yang dirata-ratakan."
   },
   "kata": "daverage rata-rata database",
   "gambar": [
    "contoh-data-300x164.jpg",
    "contoh-data-daverage-300x185.jpg",
    "fungsi-argumen-daverage-300x154.jpg"
   ]
  },
  {
   "id": "dget-dvarp",
   "cat": "db",
   "judul": "DGET dan DVARP: mengambil satu nilai dan varians",
   "ringkas": "DGET mengambil satu nilai dari baris yang cocok dengan kriteria. Harus ada tepat satu baris yang cocok. DVARP menghitung varians populasi (ukuran seberapa tersebar angka).",
   "intinya": "DGET mengambil satu jawaban saja, bukan banyak.",
   "analogi": "Bayangkan kamu mencari data murid dengan nomor induk tertentu. Nomor induk itu unik, jadi hanya ada satu murid. DGET mengambil data milik murid itu. Kalau ada dua murid dengan nomor yang sama, DGET bingung.",
   "sintaks": "=DGET(database; field; kriteria)",
   "argumen": [
    [
     "database",
     "Tabel beserta baris judul."
    ],
    [
     "field",
     "Kolom yang diambil isinya."
    ],
    [
     "kriteria",
     "Tabel kecil berisi syarat. Syaratnya harus cocok dengan tepat satu baris."
    ]
   ],
   "langkah": [
    "Buat kriteria yang unik, misalnya Kode = C.",
    "Ketik =DGET( lalu sorot tabel, nama kolom, dan tabel kriteria (dipisah ;). Tutup dengan ).",
    "Kalau lebih dari satu baris cocok, hasilnya #NUM!. Kalau tidak ada yang cocok, hasilnya #VALUE!."
   ],
   "demo": {
    "data": [
     [
      "Kode",
      "Jabatan",
      "Gaji"
     ],
     [
      "A",
      "Manajer",
      9000000
     ],
     [
      "B",
      "Staf",
      5000000
     ],
     [
      "C",
      "Staf",
      5500000
     ],
     [
      "D",
      "Manajer",
      8000000
     ],
     [
      "E",
      "Staf",
      4800000
     ],
     [],
     [
      "Kode"
     ],
     [
      "C"
     ]
    ],
    "sel": "E2",
    "rumus": "=DGET(A1:C6,\"Gaji\",A8:A9)",
    "coba": [
     [
      "=DGET(A1:C6,\"Gaji\",A8:A9)",
      "Gaji kode C"
     ],
     [
      "=DGET(A1:C6,\"Jabatan\",A8:A9)",
      "Jabatan kode C"
     ]
    ],
    "catatan": "Ganti isi A9 dengan kode lain."
   },
   "kuis": {
    "q": "DGET menghasilkan #NUM! bila...",
    "opsi": [
     "Lebih dari satu baris cocok",
     "Tidak ada yang cocok",
     "Field berupa teks",
     "Tabel kosong"
    ],
    "jawab": 0,
    "bahas": "DGET hanya boleh menemukan satu baris."
   },
   "kata": "dget dvarp database",
   "gambar": [
    "fungsi-dget.gif"
   ]
  },
  {
   "id": "pmt",
   "cat": "uang",
   "judul": "PMT: cicilan pinjaman per periode",
   "ringkas": "PMT menghitung besar cicilan tetap per periode untuk pinjaman dengan bunga tetap.",
   "intinya": "PMT menjawab: tiap bulan aku harus bayar berapa?",
   "analogi": "Bayangkan kamu meminjam uang untuk membeli sepeda motor. Kamu ingin tahu cicilan tiap bulan supaya lunas dalam jangka waktu tertentu. PMT menghitungnya.",
   "sintaks": "=PMT(bunga; jumlah_periode; nilai_sekarang; [nilai_akhir]; [tipe])",
   "argumen": [
    [
     "bunga",
     "Bunga per periode. Untuk cicilan bulanan, bagi bunga tahunan dengan 12."
    ],
    [
     "jumlah_periode",
     "Banyaknya cicilan. Kalau 3 tahun cicilan bulanan, ada 36."
    ],
    [
     "nilai_sekarang",
     "Jumlah pinjaman."
    ],
    [
     "nilai_akhir",
     "Tidak wajib. Sisa yang diinginkan di akhir. Kalau kosong, 0."
    ],
    [
     "tipe",
     "0 = bayar di akhir periode (bawaan). 1 = bayar di awal periode."
    ]
   ],
   "langkah": [
    "Pastikan satuan bunga dan periode sama. Cicilan bulanan berarti bunga bulanan dan jumlah bulan.",
    "Misalnya bunga tahunan di B2, lama pinjaman (tahun) di B3, pinjaman di B1. Ketik =PMT(B2/12;B3*12;B1).",
    "Hasilnya negatif karena itu uang yang keluar. Tambahkan tanda minus di depan PMT kalau mau angka positif."
   ],
   "tips": [
    "Total yang dibayar sampai lunas = cicilan x jumlah periode."
   ],
   "demo": {
    "data": [
     [
      "Pinjaman",
      10000000
     ],
     [
      "Bunga tahunan",
      "12%"
     ],
     [
      "Tenor (tahun)",
      1
     ],
     [
      "Cicilan/bulan",
      ""
     ],
     [
      "Total bayar",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=-PMT(B2/12,B3*12,B1)",
    "coba": [
     [
      "=-PMT(B2/12,B3*12,B1)",
      "Cicilan per bulan"
     ],
     [
      "=-PMT(B2/12,B3*12,B1)*B3*12",
      "Total yang dibayar"
     ],
     [
      "=-PMT(B2/12,B3*12,B1)*B3*12-B1",
      "Total bunga"
     ]
    ],
    "catatan": "Ubah tenor menjadi 2 atau 3 untuk melihat pengaruhnya."
   },
   "kuis": {
    "q": "Untuk pinjaman bulanan dengan bunga 12% per tahun, argumen bunga PMT diisi...",
    "opsi": [
     "12%",
     "12%/12",
     "12%*12",
     "1"
    ],
    "jawab": 1,
    "bahas": "Bunga per periode: 12%/12 = 1% per bulan."
   },
   "kata": "pmt cicilan angsuran pinjaman kredit",
   "gambar": [
    "fungsi-finansial-rumus-pmt-2-300x165.jpg",
    "fungsi-finansial-rumus-pmt-3-300x222.jpg",
    "fungsi-finansial-rumus-pmt-8-300x177.jpg"
   ]
  },
  {
   "id": "rate",
   "cat": "uang",
   "judul": "RATE: mencari suku bunga kredit",
   "ringkas": "RATE mencari bunga per periode kalau kamu sudah tahu cicilan, jumlah cicilan, dan pinjaman.",
   "intinya": "RATE menjawab: bunganya berapa?",
   "analogi": "Bayangkan toko menawarkan cicilan tanpa menyebut bunga. Kamu tahu harga, cicilan, dan berapa kali bayar. RATE membongkar bunga yang tersembunyi di dalamnya.",
   "sintaks": "=RATE(jumlah_periode; cicilan; nilai_sekarang; [nilai_akhir]; [tipe])",
   "argumen": [
    [
     "jumlah_periode",
     "Banyaknya cicilan."
    ],
    [
     "cicilan",
     "Besar tiap cicilan. Tulis negatif karena uang keluar."
    ],
    [
     "nilai_sekarang",
     "Jumlah pinjaman."
    ]
   ],
   "langkah": [
    "Ketik =RATE(12;-900000;10000000).",
    "Hasilnya adalah bunga per bulan. Kalikan 12 untuk bunga per tahun.",
    "Ubah format kotak menjadi Percentage supaya tampil sebagai persen."
   ],
   "demo": {
    "data": [
     [
      "Pinjaman",
      10000000
     ],
     [
      "Tenor (bulan)",
      12
     ],
     [
      "Cicilan",
      900000
     ],
     [
      "Bunga/bulan",
      ""
     ],
     [
      "Bunga/tahun",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=RATE(B2,-B3,B1)",
    "coba": [
     [
      "=RATE(B2,-B3,B1)",
      "Bunga per bulan"
     ],
     [
      "=RATE(B2,-B3,B1)*12",
      "Bunga per tahun"
     ]
    ]
   },
   "kuis": {
    "q": "Hasil RATE untuk cicilan bulanan adalah bunga per...",
    "opsi": [
     "Bulan",
     "Tahun",
     "Hari",
     "Minggu"
    ],
    "jawab": 0,
    "bahas": "Sesuai satuan periode yang dimasukkan."
   },
   "kata": "rate bunga kredit suku bunga",
   "gambar": [
    "menentukan-presentase-bunga-kredit-dengan-excel-1-300x131.jpg",
    "menentukan-presentase-bunga-kredit-dengan-excel-4-300x108.jpg",
    "menentukan-presentase-bunga-kredit-dengan-excel-5-300x110.jpg"
   ]
  },
  {
   "id": "fv-pv",
   "cat": "uang",
   "judul": "FV, PV, NPER: nilai masa depan dan masa kini",
   "ringkas": "FV menghitung nilai tabungan di masa depan. PV menghitung nilai uang sekarang. NPER menghitung berapa periode yang dibutuhkan.",
   "intinya": "FV = nanti jadi berapa? PV = sekarang senilai berapa? NPER = butuh berapa lama?",
   "analogi": "Bayangkan kamu menabung 1 juta tiap tahun di bank yang memberi bunga. FV memberi tahu berapa uangmu setelah 10 tahun. Kalau kamu ingin tahu berapa lama sampai tabungan mencapai target, itu NPER.",
   "sintaks": "=FV(bunga; periode; setoran; [nilai_sekarang]; [tipe])",
   "argumen": [
    [
     "bunga",
     "Bunga per periode."
    ],
    [
     "periode",
     "Banyaknya periode."
    ],
    [
     "setoran",
     "Setoran tetap tiap periode. Tulis negatif karena uang keluar dari kantongmu."
    ],
    [
     "nilai_sekarang",
     "Saldo awal. Tulis negatif juga."
    ]
   ],
   "langkah": [
    "Ketik =FV(5%;10;-1000000) untuk setoran 1 juta per tahun selama 10 tahun dengan bunga 5% per tahun.",
    "Hasilnya positif karena itu uang yang kamu terima nanti.",
    "Mau tahu lama menabung? Pakai NPER. Mau tahu nilai sekarang? Pakai PV."
   ],
   "demo": {
    "data": [
     [
      "Bunga/tahun",
      "5%"
     ],
     [
      "Tahun",
      10
     ],
     [
      "Setoran/tahun",
      1000000
     ],
     [
      "Saldo akhir",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=FV(B1,B2,-B3)",
    "coba": [
     [
      "=FV(B1,B2,-B3)",
      "Saldo di akhir"
     ],
     [
      "=PV(B1,B2,-B3)",
      "Nilai sekarang dari setoran"
     ],
     [
      "=NPER(B1,-B3,0,15000000)",
      "Tahun untuk mencapai 15 juta"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa setoran pada FV sering ditulis negatif?",
    "opsi": [
     "Arus kas keluar bertanda negatif",
     "Supaya hasil lebih besar",
     "Aturan penulisan sel",
     "Karena bunga negatif"
    ],
    "jawab": 0,
    "bahas": "Excel memperlakukan uang keluar sebagai negatif."
   },
   "kata": "fv pv nper tabungan nilai masa depan",
   "gambar": [
    "fungsi-fv.jpg",
    "fungsi-nper.gif",
    "rumus-fv-fungsi-finansial-3-225x300.jpg"
   ]
  },
  {
   "id": "npv-irr",
   "cat": "uang",
   "judul": "NPV, IRR, MIRR, XIRR: menilai investasi",
   "ringkas": "NPV menghitung nilai sekarang dari uang yang akan masuk di masa depan. IRR mencari tingkat keuntungan dari sebuah investasi.",
   "intinya": "NPV menjawab: investasi ini layak atau tidak? IRR menjawab: untungnya berapa persen per tahun?",
   "analogi": "Uang Rp 100 ribu hari ini lebih berharga daripada Rp 100 ribu setahun lagi, karena uang hari ini bisa kamu pakai atau tabung. NPV memperhitungkan itu, lalu memberi tahu apakah semua uang masuk di masa depan sebanding dengan modal yang kamu keluarkan sekarang.",
   "sintaks": "=NPV(tingkat; arus1; arus2; ...)   =IRR(arus; [tebakan])",
   "argumen": [
    [
     "tingkat",
     "Tingkat diskonto per periode. Anggap ini bunga yang kamu harapkan."
    ],
    [
     "arus",
     "Daftar uang masuk dan keluar tiap periode. Untuk IRR harus ada minimal satu angka negatif (modal) dan satu angka positif (hasil)."
    ]
   ],
   "langkah": [
    "NPV hanya menghitung arus kas yang terjadi di akhir tiap periode. Modal awal ditambahkan terpisah: =NPV(10%;B2:B4)+B1.",
    "IRR menerima seluruh deretan arus kas, termasuk modal awal: =IRR(B1:B4).",
    "Kalau arus kas tidak terjadi pada selang waktu yang sama (ada kolom tanggal), pakai XIRR."
   ],
   "tips": [
    "Kalau IRR lebih besar dari bunga yang kamu harapkan, investasinya layak dipertimbangkan."
   ],
   "demo": {
    "data": [
     [
      "Investasi awal",
      -1000
     ],
     [
      "Tahun 1",
      300
     ],
     [
      "Tahun 2",
      400
     ],
     [
      "Tahun 3",
      500
     ],
     [
      "NPV (10%)",
      ""
     ],
     [
      "IRR",
      ""
     ]
    ],
    "sel": "B5",
    "rumus": "=NPV(10%,B2:B4)+B1",
    "coba": [
     [
      "=NPV(10%,B2:B4)+B1",
      "NPV dengan investasi awal"
     ],
     [
      "=IRR(B1:B4)",
      "IRR"
     ]
    ]
   },
   "kuis": {
    "q": "IRR yang lebih tinggi dari biaya modal menandakan investasi...",
    "opsi": [
     "Layak dipertimbangkan",
     "Pasti rugi",
     "Tidak valid",
     "Tidak bisa dihitung"
    ],
    "jawab": 0,
    "bahas": "Pengembaliannya melebihi biaya modal."
   },
   "kata": "npv irr mirr xirr investasi",
   "gambar": [
    "fungsi-mirr.gif",
    "fungsi-mirr.jpg",
    "fungsi-xirr-pada-excel.jpg"
   ]
  },
  {
   "id": "penyusutan",
   "cat": "uang",
   "judul": "Penyusutan aset: SLN, SYD, DDB, DB",
   "ringkas": "Beberapa fungsi menghitung penyusutan aset (turunnya nilai barang karena dipakai) tiap periode, dengan cara hitung yang berbeda-beda.",
   "intinya": "Penyusutan adalah cara membagi harga barang ke beberapa tahun pemakaian.",
   "analogi": "Bayangkan membeli motor seharga 10 juta. Setelah 5 tahun nilainya tinggal 2 juta. Berarti nilainya turun 8 juta. SLN membagi 8 juta itu sama rata: 1,6 juta per tahun. Metode lain membuat penurunan lebih besar di tahun awal, seperti nilai motor yang memang turun cepat di tahun pertama.",
   "sintaks": "=SLN(biaya; sisa; umur)   =SYD(biaya; sisa; umur; periode)   =DDB(biaya; sisa; umur; periode)",
   "argumen": [
    [
     "biaya",
     "Harga beli barang."
    ],
    [
     "sisa",
     "Nilai sisa di akhir umur pakai."
    ],
    [
     "umur",
     "Umur pakai (berapa periode)."
    ],
    [
     "periode",
     "Periode ke berapa yang dihitung."
    ]
   ],
   "langkah": [
    "SLN: garis lurus. Beban penyusutan sama setiap tahun.",
    "SYD: jumlah angka tahun. Beban besar di awal lalu menurun.",
    "DDB: saldo menurun ganda. Beban di awal paling besar.",
    "DB: saldo menurun dengan tarif tetap.",
    "AMORDEGRC dan AMORLINC dipakai untuk akuntansi gaya Prancis. Jarang dipakai."
   ],
   "demo": {
    "data": [
     [
      "Biaya",
      10000000
     ],
     [
      "Sisa",
      1000000
     ],
     [
      "Umur",
      5
     ],
     [
      "SLN",
      ""
     ],
     [
      "SYD tahun 1",
      ""
     ],
     [
      "DDB tahun 1",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=SLN(B1,B2,B3)",
    "coba": [
     [
      "=SLN(B1,B2,B3)",
      "Garis lurus"
     ],
     [
      "=SYD(B1,B2,B3,1)",
      "SYD tahun 1"
     ],
     [
      "=DDB(B1,B2,B3,1)",
      "DDB tahun 1"
     ],
     [
      "=SYD(B1,B2,B3,5)",
      "SYD tahun 5"
     ]
    ]
   },
   "kuis": {
    "q": "Metode mana yang beban penyusutannya sama tiap tahun?",
    "opsi": [
     "SLN",
     "SYD",
     "DDB",
     "DB"
    ],
    "jawab": 0,
    "bahas": "SLN = straight line."
   },
   "kata": "sln syd ddb db penyusutan depresiasi",
   "gambar": [
    "fungsi-db-1024x576.jpg",
    "fungsi-syd.jpg",
    "sln-1.jpg"
   ]
  },
  {
   "id": "bunga-pokok",
   "cat": "uang",
   "judul": "IPMT, PPMT, ISPMT, CUMIPMT, CUMPRINC",
   "ringkas": "Setiap cicilan terdiri dari dua bagian: bunga dan pokok. Fungsi-fungsi ini memisahkan keduanya.",
   "intinya": "Bunga adalah ongkos meminjam. Pokok adalah uang pinjaman yang dikembalikan.",
   "analogi": "Bayangkan cicilanmu Rp 1 juta. Sebagian untuk membayar jasa bank (bunga), sebagian untuk mengurangi utang (pokok). Di awal pinjaman, bagian bunga lebih besar. Makin lama, bagian pokok makin besar.",
   "sintaks": "=IPMT(bunga; periode_ke; jumlah_periode; pinjaman)   =PPMT(...)",
   "argumen": [
    [
     "periode_ke",
     "Cicilan yang ke berapa."
    ],
    [
     "jumlah_periode",
     "Total jumlah cicilan."
    ],
    [
     "pinjaman",
     "Jumlah uang yang dipinjam."
    ]
   ],
   "langkah": [
    "IPMT menghasilkan bagian bunga dari cicilan ke sekian.",
    "PPMT menghasilkan bagian pokok dari cicilan ke sekian.",
    "IPMT ditambah PPMT sama dengan PMT (total cicilan).",
    "CUMIPMT dan CUMPRINC menjumlahkan bunga atau pokok untuk beberapa periode sekaligus."
   ],
   "demo": {
    "data": [
     [
      "Pinjaman",
      10000000
     ],
     [
      "Bunga/bulan",
      "1%"
     ],
     [
      "Tenor",
      12
     ],
     [
      "Cicilan",
      ""
     ],
     [
      "Bunga ke-1",
      ""
     ],
     [
      "Pokok ke-1",
      ""
     ]
    ],
    "sel": "B4",
    "rumus": "=-PMT(B2,B3,B1)",
    "coba": [
     [
      "=-PMT(B2,B3,B1)",
      "Cicilan"
     ],
     [
      "=-IPMT(B2,1,B3,B1)",
      "Bunga cicilan ke-1"
     ],
     [
      "=-PPMT(B2,1,B3,B1)",
      "Pokok cicilan ke-1"
     ],
     [
      "=-IPMT(B2,12,B3,B1)",
      "Bunga cicilan terakhir"
     ]
    ]
   },
   "kuis": {
    "q": "IPMT + PPMT pada periode yang sama sama dengan...",
    "opsi": [
     "PMT",
     "FV",
     "NPV",
     "RATE"
    ],
    "jawab": 0,
    "bahas": "Bunga ditambah pokok adalah satu cicilan."
   },
   "kata": "ipmt ppmt cumipmt cumprinc bunga pokok",
   "gambar": [
    "fungsi-cumprinc.jpg",
    "fungsi-ipmt.gif",
    "fungsi-ispmt.jpg"
   ]
  },
  {
   "id": "bunga-efektif",
   "cat": "uang",
   "judul": "EFFECT, NOMINAL, FVSCHEDULE, DOLLARDE",
   "ringkas": "Bunga nominal adalah bunga yang diumumkan. Bunga efektif adalah bunga sebenarnya setelah bunga dihitung berkali-kali dalam setahun.",
   "intinya": "EFFECT mengubah bunga nominal jadi efektif. NOMINAL mengubah sebaliknya.",
   "analogi": "Bayangkan bank mengumumkan 12% per tahun, tetapi menambahkan bunga tiap bulan. Bunga bulan depan dihitung juga dari bunga bulan ini. Jadi sebenarnya kamu mendapat sedikit lebih dari 12%.",
   "sintaks": "=EFFECT(nominal; per_tahun)   =NOMINAL(efektif; per_tahun)",
   "argumen": [
    [
     "nominal",
     "Bunga nominal per tahun."
    ],
    [
     "per_tahun",
     "Berapa kali bunga dihitung dalam setahun. Bulanan berarti 12."
    ]
   ],
   "langkah": [
    "=EFFECT(12%;12) menghasilkan bunga efektif sekitar 12,68%.",
    "=NOMINAL(12,68%;12) mengembalikannya menjadi sekitar 12%.",
    "FVSCHEDULE menghitung nilai akhir kalau bunga tiap tahun berbeda."
   ],
   "tips": [
    "Bunga efektif selalu sama atau lebih besar dari nominal. Makin sering dihitung, makin besar bedanya."
   ],
   "demo": {
    "data": [
     [
      "Nominal",
      "12%"
     ],
     [
      "Per tahun",
      12
     ],
     [
      "Efektif",
      ""
     ]
    ],
    "sel": "B3",
    "rumus": "=EFFECT(B1,B2)",
    "coba": [
     [
      "=EFFECT(B1,B2)",
      "Bunga efektif"
     ],
     [
      "=NOMINAL(EFFECT(B1,B2),B2)",
      "Kembali ke nominal"
     ]
    ]
   },
   "kuis": {
    "q": "Bunga efektif dibanding nominal biasanya...",
    "opsi": [
     "Lebih besar bila dimajemukkan lebih dari sekali setahun",
     "Selalu lebih kecil",
     "Sama",
     "Negatif"
    ],
    "jawab": 0,
    "bahas": "Pemajemukan membuat bunga efektif lebih besar."
   },
   "kata": "effect nominal bunga efektif",
   "gambar": [
    "fungsi-dollarde.jpg",
    "fungsi-fvschedule.jpg",
    "fungsi-nominal.jpg"
   ]
  },
  {
   "id": "obligasi",
   "cat": "uang",
   "judul": "Fungsi obligasi dan surat berharga",
   "ringkas": "Obligasi adalah surat utang. Kelompok fungsi ini menghitung harga, hasil, bunga berjalan, dan kupon obligasi.",
   "intinya": "Kamu cukup mengisi tanggal, bunga, dan frekuensi. Excel menghitung sisanya.",
   "analogi": "Bayangkan kamu meminjamkan uang ke pemerintah dan mendapat surat tanda utang. Pemerintah membayar bunga berkala (kupon) lalu mengembalikan uangmu saat jatuh tempo. Fungsi-fungsi ini membantu menghitung nilainya.",
   "sintaks": "=PRICE(penyelesaian; jatuh_tempo; kupon; imbal_hasil; penebusan; frekuensi)",
   "argumen": [
    [
     "penyelesaian",
     "Tanggal transaksi."
    ],
    [
     "jatuh_tempo",
     "Tanggal obligasi jatuh tempo."
    ],
    [
     "kupon",
     "Bunga kupon per tahun."
    ],
    [
     "imbal_hasil",
     "Imbal hasil per tahun yang diharapkan."
    ],
    [
     "penebusan",
     "Nilai yang dibayar kembali per nominal 100."
    ],
    [
     "frekuensi",
     "1 = tahunan, 2 = semesteran, 4 = kuartalan."
    ]
   ],
   "langkah": [
    "PRICE menghitung harga per nominal 100.",
    "YIELD menghitung imbal hasil dari harga.",
    "ACCRINT dan ACCRINTM menghitung bunga berjalan.",
    "COUPNUM, COUPNCD, COUPPCD, dan COUPDAYS menghitung jumlah dan tanggal kupon.",
    "TBILLEQ, TBILLPRICE, dan TBILLYIELD untuk surat utang jangka pendek.",
    "Lihat gambar di bawah untuk melihat isi argumen tiap fungsi."
   ],
   "tips": [
    "Tanggal pada fungsi ini harus ditulis dengan DATE(), bukan sebagai tulisan biasa."
   ],
   "kuis": {
    "q": "Frekuensi 2 pada fungsi obligasi berarti kupon dibayar...",
    "opsi": [
     "Setahun sekali",
     "Semesteran",
     "Kuartalan",
     "Bulanan"
    ],
    "jawab": 1,
    "bahas": "2 kali setahun."
   },
   "kata": "obligasi price yield accrint coup tbill",
   "gambar": [
    "pricerdisc-1.jpg",
    "rumus-received-pada-excel.jpg",
    "yielddisc2.jpg"
   ]
  },
  {
   "id": "macro-rekam",
   "cat": "macro",
   "judul": "Merekam macro pertama",
   "ringkas": "Macro adalah rangkaian langkah yang direkam lalu bisa diulang dengan satu klik. Excel menulis kode VBA-nya sendiri selama merekam.",
   "intinya": "Merekam macro seperti merekam video langkah-langkahmu. Memutarnya ulang melakukan semua langkah itu lagi.",
   "analogi": "Bayangkan kamu mengajari adikmu merapikan meja: letakkan buku di kiri, pensil di kanan. Kamu merekam semua gerakan. Besok kamu tinggal menekan tombol putar dan meja langsung rapi. Macro bekerja begitu.",
   "langkah": [
    "Aktifkan tab Developer: File, Options, Customize Ribbon, lalu centang Developer.",
    "Klik Developer lalu Record Macro. Beri nama tanpa spasi, misalnya FormatTabel. Boleh pilih tombol pintas.",
    "Lakukan langkah yang mau direkam, misalnya menebalkan judul dan mewarnai.",
    "Klik Stop Recording.",
    "Jalankan ulang: Developer, Macros, pilih nama macro, lalu Run. Atau tekan tombol pintasnya.",
    "Simpan file sebagai Excel Macro-Enabled Workbook (.xlsm)."
   ],
   "tips": [
    "Rekam hanya langkah yang perlu. Gerakan yang salah ikut terekam.",
    "Aktifkan Use Relative References kalau macro harus bekerja di kotak mana saja, bukan hanya kotak yang direkam."
   ],
   "kuis": {
    "q": "Format file yang menyimpan macro adalah...",
    "opsi": [
     ".xlsx",
     ".xlsm",
     ".csv",
     ".pdf"
    ],
    "jawab": 1,
    "bahas": ".xlsm = Macro-Enabled Workbook."
   },
   "kata": "macro rekam record developer",
   "gambar": [
    "3-memunculkan-kotak-isian-macro-pada-excel-300x247.jpg",
    "macro-excel-2.jpg",
    "7-macor-pada-excel-300x289.jpg"
   ]
  },
  {
   "id": "macro-error",
   "cat": "macro",
   "judul": "Mengatasi macro yang error",
   "ringkas": "Pesan seperti \"Macros have been disabled\" atau error saat macro berjalan biasanya disebabkan oleh pengaturan keamanan atau kode yang salah.",
   "intinya": "Ada dua sumber masalah: Excel memblokir macro (keamanan), atau kodenya yang salah.",
   "analogi": "Bayangkan satpam yang menahan tamu di pintu karena belum dikenal. Itulah pengaturan keamanan. Setelah kamu bilang, \"Dia tamuku,\" baru boleh masuk. Kalau tamunya sudah masuk tetapi salah jalan, itu kesalahan kode.",
   "langkah": [
    "Buka File, Options, Trust Center, Trust Center Settings, lalu Macro Settings.",
    "Pilih Disable all macros with notification. Saat file dibuka, muncul tombol Enable Content yang bisa kamu klik.",
    "Kalau ada error pada kode, klik Debug. Baris yang bermasalah disorot kuning.",
    "Perbaiki baris itu. Tekan F5 untuk melanjutkan, atau tombol Reset untuk berhenti."
   ],
   "tips": [
    "Hanya aktifkan macro dari file yang kamu percaya."
   ],
   "kuis": {
    "q": "Tombol yang membawa kamu ke baris kode yang bermasalah adalah...",
    "opsi": [
     "Debug",
     "End",
     "Help",
     "Cancel"
    ],
    "jawab": 0,
    "bahas": "Debug menyorot baris penyebab galat."
   },
   "kata": "macro error galat trust center",
   "gambar": [
    "mengatasi-program-macro-excel-yang-error-2.jpg",
    "mengatasi-program-macro-excel-yang-error-4.jpg",
    "mengatasi-program-macro-excel-yang-error-5.jpg"
   ]
  },
  {
   "id": "vba-editor",
   "cat": "macro",
   "judul": "Mengenal editor VBA",
   "ringkas": "Editor VBA adalah tempat menulis, membaca, dan mengubah kode macro. Buka dengan Alt+F11.",
   "intinya": "Macro tersimpan sebagai kode. Editor VBA adalah buku catatan untuk kode itu.",
   "analogi": "Bayangkan macro itu resep. Kamu merekamnya seperti memotret masakan. Editor VBA seperti buku resep tempat kamu bisa membaca langkah-langkahnya dan mengubahnya.",
   "sintaks": "Sub NamaMacro()\n    ' kode di sini\nEnd Sub",
   "langkah": [
    "Tekan Alt+F11 untuk membuka editor.",
    "Klik Insert lalu Module untuk membuat lembar kode kosong.",
    "Tulis kode di antara baris Sub dan End Sub.",
    "Tekan F5 untuk menjalankan, atau jalankan lewat Developer lalu Macros.",
    "Contoh: Range(\"A1\").Value = \"Halo\" mengisi kotak A1 dengan tulisan Halo."
   ],
   "tips": [
    "Tanda apostrof (') membuat sisa baris menjadi komentar. Komentar diabaikan saat kode berjalan."
   ],
   "kuis": {
    "q": "Pintasan untuk membuka editor VBA adalah...",
    "opsi": [
     "Alt+F11",
     "Ctrl+F11",
     "Shift+F11",
     "F11"
    ],
    "jawab": 0,
    "bahas": "Alt+F11."
   },
   "kata": "vba editor modul sub alt f11",
   "gambar": [
    "macro-vba-excel.gif",
    "belajar-vba-excel-2.gif",
    "macro-vba-excel-8.gif"
   ]
  },
  {
   "id": "vba-variabel",
   "cat": "macro",
   "judul": "Variabel dan Option Explicit",
   "ringkas": "Variabel adalah tempat menyimpan nilai sementara. Option Explicit memaksa kamu mendeklarasikan setiap variabel sehingga salah ketik langsung ketahuan.",
   "intinya": "Variabel itu seperti kotak berlabel. Kamu memberi nama pada kotak, lalu menyimpan sesuatu di dalamnya.",
   "analogi": "Bayangkan kotak penyimpanan dengan label \"umur\". Kamu menaruh angka 17 di dalamnya. Nanti, kamu menyebut \"umur\" dan VBA tahu kamu maksud angka 17. Option Explicit seperti aturan: semua kotak harus diberi label sebelum dipakai, supaya kamu tidak tersesat gara-gara salah menulis nama.",
   "sintaks": "Dim nama As String\nDim umur As Integer",
   "langkah": [
    "Tulis Option Explicit di baris pertama modul.",
    "Buat variabel dengan Dim nama As Tipe, misalnya Dim umur As Integer.",
    "Variabel di dalam Sub hanya berlaku di Sub itu (lokal).",
    "Variabel di bagian atas modul berlaku untuk semua Sub di modul itu. Public berlaku untuk seluruh proyek."
   ],
   "tips": [
    "Tipe yang umum: String (tulisan), Integer dan Long (bilangan bulat), Double (angka desimal), Boolean (benar atau salah)."
   ],
   "kuis": {
    "q": "Fungsi Option Explicit adalah...",
    "opsi": [
     "Mewajibkan deklarasi variabel",
     "Mempercepat macro",
     "Menyembunyikan kode",
     "Menghapus komentar"
    ],
    "jawab": 0,
    "bahas": "Variabel yang tidak dideklarasikan menimbulkan galat saat kompilasi."
   },
   "kata": "variabel dim option explicit scope",
   "gambar": [
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-2.jpg",
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-3.jpg",
    "mengenal-apa-itu-option-explicit-pada-macro-vba-excel-5.jpg"
   ]
  },
  {
   "id": "vba-debug",
   "cat": "macro",
   "judul": "Debugging: menelusuri kesalahan kode",
   "ringkas": "Debugging adalah menjalankan kode pelan-pelan, satu baris demi satu baris, untuk menemukan di mana letak kesalahannya.",
   "intinya": "Kamu menghentikan kode di tengah jalan supaya bisa mengintip isinya.",
   "analogi": "Bayangkan kamu mencari kesalahan dalam sebuah resep. Daripada menunggu masakan jadi, kamu berhenti di tiap langkah dan mencicipi. Titik berhentimu adalah breakpoint.",
   "langkah": [
    "Klik di margin abu-abu sebelah kiri baris kode. Muncul titik merah (breakpoint).",
    "Jalankan macro. Kode berhenti di titik merah.",
    "Tekan F8 untuk maju satu baris.",
    "Arahkan mouse ke sebuah variabel untuk melihat isinya. Atau buka Debug lalu Add Watch.",
    "Tekan F5 untuk melanjutkan sampai selesai."
   ],
   "kuis": {
    "q": "Tombol F8 di editor VBA berfungsi untuk...",
    "opsi": [
     "Menjalankan satu baris",
     "Menjalankan semua",
     "Menyimpan",
     "Menutup"
    ],
    "jawab": 0,
    "bahas": "F8 = Step Into."
   },
   "kata": "debug breakpoint f8 watch",
   "gambar": [
    "mengenal-debugging-pada-vba-macro-excel-programming-2.jpg",
    "mengenal-debugging-pada-vba-macro-excel-programming.jpg"
   ]
  },
  {
   "id": "vba-loop",
   "cat": "macro",
   "judul": "Perulangan: For Next dan Do While",
   "ringkas": "Loop (perulangan) menjalankan sekumpulan perintah berkali-kali. For dipakai kalau jumlah ulangannya sudah diketahui. Do While dipakai kalau berhenti tergantung syarat.",
   "intinya": "Loop menyuruh komputer: ulangi ini sampai selesai.",
   "analogi": "Bayangkan kamu disuruh menulis angka 1 sampai 10 di buku. Kamu tidak mau menulis perintah sepuluh kali. Kamu cukup bilang, \"Tulis angka, ulangi sepuluh kali.\" For Next adalah perintah itu.",
   "sintaks": "For i = 1 To 10\n    Cells(i, 1).Value = i\nNext i",
   "langkah": [
    "For i = 1 To 10 mengulang 10 kali. Nilai i berubah dari 1 sampai 10.",
    "Cells(baris, kolom) menunjuk kotak lewat nomor baris dan nomor kolom.",
    "Loop di dalam loop dipakai untuk mengisi tabel dua arah (baris dan kolom).",
    "Do While syarat ... Loop mengulang selama syaratnya masih benar. Pastikan suatu saat syaratnya menjadi salah."
   ],
   "tips": [
    "Kalau loop tidak mau berhenti, tekan Ctrl+Break untuk menghentikannya."
   ],
   "kuis": {
    "q": "Berapa kali loop For i = 1 To 5 berjalan?",
    "opsi": [
     "4",
     "5",
     "6",
     "1"
    ],
    "jawab": 1,
    "bahas": "i bernilai 1 sampai 5, jadi 5 kali."
   },
   "kata": "loop for next do while perulangan",
   "gambar": [
    "tutorial-excel-bagaimana-membuat-loop-menggunakan-vba-2.jpg",
    "tutorial-excel-bagaimana-membuat-loop-menggunakan-vba.jpg"
   ]
  },
  {
   "id": "vba-inputbox",
   "cat": "macro",
   "judul": "InputBox dan MsgBox",
   "ringkas": "InputBox meminta pengguna mengetik sesuatu. MsgBox menampilkan pesan di layar.",
   "intinya": "InputBox = bertanya. MsgBox = memberi tahu.",
   "analogi": "Bayangkan petugas loket. Ia bertanya, \"Siapa namamu?\" (itu InputBox). Kamu menjawab, lalu ia berkata, \"Halo, Budi!\" (itu MsgBox).",
   "sintaks": "nama = InputBox(\"Siapa namamu?\")\nMsgBox \"Halo \" & nama",
   "langkah": [
    "Buat Sub baru di sebuah modul.",
    "Simpan jawaban InputBox ke sebuah variabel, misalnya nama = InputBox(\"Siapa namamu?\").",
    "Tampilkan dengan MsgBox, atau tulis ke kotak: Range(\"A1\").Value = nama.",
    "Tekan F5 untuk menjalankan."
   ],
   "tips": [
    "Hasil InputBox selalu berupa tulisan (String), walaupun yang diketik angka."
   ],
   "kuis": {
    "q": "InputBox menghasilkan nilai bertipe...",
    "opsi": [
     "String (teks)",
     "Selalu angka",
     "Boolean",
     "Tanggal"
    ],
    "jawab": 0,
    "bahas": "Hasil InputBox berupa teks; ubah dengan CInt atau CDbl bila perlu angka."
   },
   "kata": "inputbox msgbox dialog",
   "gambar": [
    "belajar-vba-excel-untuk-membuat-input-box-2.jpg",
    "belajar-vba-excel-untuk-membuat-input-box-3.jpg",
    "input-box-5-300x127.jpg"
   ]
  },
  {
   "id": "vba-tanggal",
   "cat": "macro",
   "judul": "VBA untuk tanggal dan waktu",
   "ringkas": "VBA punya beberapa fungsi tanggal dan waktu: Date, Time, Now, Format, DateAdd, dan DateDiff.",
   "intinya": "Date = tanggal hari ini. Time = jam sekarang. Now = tanggal dan jam sekarang.",
   "analogi": "Bayangkan jam dan kalender di dinding. Date melihat kalender. Time melihat jam. Now melihat keduanya sekaligus. Format menentukan bagaimana tulisannya ditampilkan.",
   "sintaks": "Range(\"A1\").Value = Format(Now, \"dd/mm/yyyy hh:mm\")",
   "langkah": [
    "Date mengembalikan tanggal hari ini. Time mengembalikan jam sekarang. Now mengembalikan keduanya.",
    "Format(nilai, pola) mengatur tampilan, misalnya Format(Now, \"dd/mm/yyyy hh:mm\").",
    "DateAdd(\"d\", 7, Date) menambah 7 hari ke hari ini.",
    "DateDiff(\"d\", awal, akhir) menghitung selisih hari antara dua tanggal."
   ],
   "kuis": {
    "q": "Fungsi VBA yang mengembalikan tanggal dan jam sekaligus adalah...",
    "opsi": [
     "Date",
     "Time",
     "Now",
     "Day"
    ],
    "jawab": 2,
    "bahas": "Now."
   },
   "kata": "vba tanggal waktu now date format",
   "gambar": [
    "contoh-vba-excel-untuk-membuat-tanggal-dan-waktu-3.jpg"
   ]
  },
  {
   "id": "vba-string",
   "cat": "macro",
   "judul": "VBA untuk teks (manipulasi string)",
   "ringkas": "Fungsi teks di VBA mirip dengan yang ada di lembar kerja: Left, Right, Mid, Len, UCase, LCase, Trim, dan Replace.",
   "intinya": "Kalau kamu sudah bisa fungsi teks di Excel, di VBA hampir sama.",
   "analogi": "Bayangkan gunting dan lem untuk tulisan. Left memotong dari kiri. Mid memotong dari tengah. UCase mengubah jadi huruf besar. Replace mengganti sebagian tulisan.",
   "sintaks": "MsgBox UCase(\"hi tim\")",
   "langkah": [
    "Left(\"Excel\", 2) menghasilkan Ex.",
    "UCase(\"hi tim\") menghasilkan HI TIM.",
    "Replace(teks, lama, baru) mengganti bagian tulisan.",
    "Pakai & untuk menyambung tulisan. Pakai vbCrLf untuk membuat baris baru di dalam MsgBox."
   ],
   "tips": [
    "UCase di VBA sama dengan UPPER di Excel. LCase sama dengan LOWER."
   ],
   "kuis": {
    "q": "Padanan VBA untuk UPPER di lembar kerja adalah...",
    "opsi": [
     "UCase",
     "Upper",
     "Caps",
     "Big"
    ],
    "jawab": 0,
    "bahas": "UCase."
   },
   "kata": "vba string teks ucase left mid",
   "gambar": [
    "manipulasi-string-2.jpg"
   ]
  },
  {
   "id": "vba-formula",
   "cat": "macro",
   "judul": "Menulis rumus lewat VBA (Formula dan FormulaR1C1)",
   "ringkas": "VBA bisa menuliskan rumus ke dalam kotak. FormulaR1C1 memakai alamat relatif (jarak dari kotak itu sendiri), berguna untuk rumus yang akan disalin ke banyak kotak.",
   "intinya": "Formula = alamat biasa seperti B3. FormulaR1C1 = alamat berupa jarak, misalnya \"satu baris ke atas\".",
   "analogi": "Alamat biasa seperti \"Rumah nomor 5, Jalan Mawar\". Alamat relatif seperti \"dua rumah ke kiri dari sini\". Kalau kamu berpindah, alamat biasa tetap, sedangkan alamat relatif ikut bergeser.",
   "sintaks": "Range(\"D4\").Formula = \"=B3*10\"\nRange(\"D4\").FormulaR1C1 = \"=R[-1]C[-2]*10\"",
   "langkah": [
    "Formula memakai alamat biasa: Range(\"D4\").Formula = \"=B3*10\".",
    "FormulaR1C1 memakai R untuk baris (row) dan C untuk kolom (column).",
    "Angka di dalam kurung siku adalah jarak. R[-1]C[-2] berarti satu baris ke atas dan dua kolom ke kiri.",
    "R[-1]C[0] menunjuk kotak tepat di atasnya."
   ],
   "kuis": {
    "q": "R[-1]C[0] menunjuk sel...",
    "opsi": [
     "Tepat di atas",
     "Tepat di bawah",
     "Di kiri",
     "Di kanan"
    ],
    "jawab": 0,
    "bahas": "-1 baris berarti satu baris ke atas, kolom sama."
   },
   "kata": "formula formular1c1 r1c1",
   "gambar": [
    "fungsi-formular1c1-2.jpg",
    "fungsi-formular1c1-4.jpg"
   ]
  },
  {
   "id": "vba-tombol",
   "cat": "macro",
   "judul": "Tombol macro dan form isian data",
   "ringkas": "Command Button adalah tombol di lembar kerja. Saat diklik, macro berjalan. UserForm adalah formulir isian yang rapi untuk memasukkan data.",
   "intinya": "Tombol menjalankan macro. Formulir memudahkan orang mengisi data tanpa menyentuh tabel.",
   "analogi": "Bayangkan mesin ATM. Kamu tidak perlu tahu cara kerja bank di dalamnya. Kamu hanya menekan tombol dan mengisi layar. Tombol dan formulir VBA membuat Excel-mu semudah itu bagi orang lain.",
   "langkah": [
    "Buka Developer, Insert, lalu Command Button (ActiveX Control). Gambar tombol di lembar kerja.",
    "Klik ganda tombol itu. Editor VBA terbuka dan kamu bisa menulis kode untuk klik tombol.",
    "Contoh tombol hapus: Range(\"A2:C100\").ClearContents.",
    "Untuk formulir: di editor klik Insert lalu UserForm. Tambahkan TextBox untuk isian dan tombol Simpan.",
    "Kode tombol Simpan menulis isi TextBox ke baris kosong berikutnya.",
    "Matikan Design Mode supaya tombol bisa diklik."
   ],
   "tips": [
    "Tombol ActiveX hanya bekerja di Excel untuk Windows."
   ],
   "kuis": {
    "q": "Mode yang harus dimatikan agar tombol ActiveX bisa diklik adalah...",
    "opsi": [
     "Design Mode",
     "Page Layout",
     "Protected View",
     "Safe Mode"
    ],
    "jawab": 0,
    "bahas": "Matikan Design Mode di tab Developer."
   },
   "kata": "tombol button userform isian data",
   "gambar": [
    "data-vba-3.jpg",
    "isian-data-9-300x213.jpg",
    "isian-data-10-300x191.jpg"
   ]
  },
  {
   "id": "barcode",
   "cat": "macro",
   "judul": "Membuat kode barcode di Excel",
   "ringkas": "Barcode dibuat dengan memasang font barcode, lalu mengubah huruf kode menjadi font itu.",
   "intinya": "Barcode di Excel sebenarnya hanya tulisan yang memakai huruf khusus.",
   "analogi": "Bayangkan huruf-huruf yang bentuknya garis-garis tebal dan tipis, bukan huruf biasa. Kode yang kamu ketik tampil sebagai garis-garis itu. Pemindai di kasir bisa membacanya.",
   "langkah": [
    "Pasang font barcode (misalnya Code 39) di komputermu.",
    "Ketik kode di sebuah kotak. Untuk Code 39, awali dan akhiri dengan tanda bintang: *12345*.",
    "Ubah font kotak itu menjadi font barcode.",
    "Perbesar ukuran huruf supaya mudah dipindai."
   ],
   "tips": [
    "Font barcode harus terpasang di komputer yang membuka file. Kalau tidak, barcode tampil sebagai huruf biasa."
   ],
   "kuis": {
    "q": "Pada Code 39, kode diawali dan diakhiri dengan tanda...",
    "opsi": [
     "*",
     "#",
     "$",
     "%"
    ],
    "jawab": 0,
    "bahas": "Tanda bintang menjadi pembatas awal dan akhir."
   },
   "kata": "barcode kode font",
   "gambar": [
    "cara-membuat-kode-barcode-pada-excel.jpg",
    "kode-barcode-excel.jpg",
    "membuar-code-barcode-pada-excel.jpg"
   ]
  },
  {
   "id": "kasus-gaji",
   "cat": "kasus",
   "judul": "Menghitung gaji karyawan",
   "ringkas": "Gaji dihitung dari gaji pokok, tunjangan, lembur, dan potongan. Tunjangan sering bergantung pada golongan, jadi VLOOKUP atau IF sangat membantu.",
   "intinya": "Tabel golongan adalah daftar harga. VLOOKUP adalah cara melihat daftar itu.",
   "analogi": "Bayangkan slip gaji. Setiap golongan punya gaji pokok yang berbeda, seperti daftar harga di warung. Kamu menyebut golongan, lalu VLOOKUP membaca harganya.",
   "langkah": [
    "Siapkan tabel golongan yang berisi gaji pokok dan tunjangan.",
    "Ambil gaji pokok dengan VLOOKUP berdasarkan golongan.",
    "Hitung tunjangan, misalnya sekian persen dari gaji pokok.",
    "Total = gaji pokok + tunjangan + lembur - potongan.",
    "Ubah format hasil menjadi Currency."
   ],
   "demo": {
    "data": [
     [
      "Golongan",
      "Gaji pokok",
      "Tunjangan %"
     ],
     [
      "I",
      3000000,
      "10%"
     ],
     [
      "II",
      4000000,
      "15%"
     ],
     [
      "III",
      5000000,
      "20%"
     ],
     [],
     [
      "Golongan:",
      "II"
     ],
     [
      "Gaji pokok:",
      ""
     ],
     [
      "Tunjangan:",
      ""
     ],
     [
      "Total:",
      ""
     ]
    ],
    "sel": "B7",
    "rumus": "=VLOOKUP(B6,A2:C4,2,FALSE)",
    "coba": [
     [
      "=VLOOKUP(B6,A2:C4,2,FALSE)",
      "Gaji pokok"
     ],
     [
      "=VLOOKUP(B6,A2:C4,2,FALSE)*VLOOKUP(B6,A2:C4,3,FALSE)",
      "Tunjangan"
     ],
     [
      "=VLOOKUP(B6,A2:C4,2,FALSE)*(1+VLOOKUP(B6,A2:C4,3,FALSE))",
      "Total"
     ]
    ],
    "catatan": "Ubah golongan di B6 menjadi I atau III."
   },
   "kuis": {
    "q": "Fungsi mana yang mengambil gaji pokok berdasarkan golongan?",
    "opsi": [
     "VLOOKUP",
     "LEFT",
     "RANK",
     "ROUND"
    ],
    "jawab": 0,
    "bahas": "VLOOKUP mencari golongan lalu mengambil gaji pokok."
   },
   "kata": "gaji karyawan payroll tunjangan",
   "gambar": [
    "menghitung-gaji-dengan-excel-1-300x106.jpg",
    "menghitung-gaji-dengan-excel-4-300x106.jpg",
    "menghitung-gaji-dengan-excel-6-300x106.jpg"
   ]
  },
  {
   "id": "kasus-ipk",
   "cat": "kasus",
   "judul": "Menghitung IPK dan nilai raport",
   "ringkas": "IPK adalah rata-rata nilai mutu yang memperhitungkan bobot SKS. SUMPRODUCT dan SUM menghitungnya dalam satu rumus.",
   "intinya": "Mata kuliah dengan SKS besar lebih berpengaruh pada IPK.",
   "analogi": "Bayangkan nilai olahraga (1 SKS) dan nilai matematika (4 SKS). Matematika lebih \"berat\", jadi nilainya lebih menentukan. Rata-rata biasa menganggap semua sama berat. IPK tidak.",
   "sintaks": "=SUMPRODUCT(SKS; Nilai_mutu)/SUM(SKS)",
   "langkah": [
    "Ubah nilai huruf menjadi angka bobot (A = 4, B = 3, C = 2, D = 1) dengan VLOOKUP.",
    "Kalikan bobot dengan SKS tiap mata kuliah.",
    "Bagi jumlah hasil kali itu dengan jumlah SKS.",
    "Bulatkan dengan ROUND(...;2) supaya dua angka di belakang koma."
   ],
   "tips": [
    "Rumus lengkapnya ada di bagian sintaks di atas."
   ],
   "demo": {
    "data": [
     [
      "Mata kuliah",
      "SKS",
      "Nilai mutu"
     ],
     [
      "Matematika",
      3,
      4
     ],
     [
      "Fisika",
      2,
      3
     ],
     [
      "Kimia",
      3,
      3
     ],
     [
      "Bahasa",
      2,
      4
     ],
     [],
     [
      "IPK",
      ""
     ]
    ],
    "sel": "B7",
    "rumus": "=ROUND(SUMPRODUCT(B2:B5,C2:C5)/SUM(B2:B5),2)",
    "coba": [
     [
      "=ROUND(SUMPRODUCT(B2:B5,C2:C5)/SUM(B2:B5),2)",
      "IPK"
     ],
     [
      "=SUM(B2:B5)",
      "Total SKS"
     ],
     [
      "=AVERAGE(C2:C5)",
      "Rata-rata biasa (tanpa bobot)"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa IPK tidak sama dengan rata-rata biasa nilai mutu?",
    "opsi": [
     "Karena memperhitungkan bobot SKS",
     "Karena dibulatkan",
     "Karena nilai huruf diabaikan",
     "Karena memakai SUM"
    ],
    "jawab": 0,
    "bahas": "Mata kuliah ber-SKS besar berpengaruh lebih besar."
   },
   "kata": "ipk raport nilai sks",
   "gambar": [
    "contoh-format-raport-300x208.jpg",
    "menghitung-ipk-dengan-excel-1-300x178.jpg",
    "menghitung-ipk-dengan-excel-2-300x194.jpg"
   ]
  },
  {
   "id": "kasus-absensi",
   "cat": "kasus",
   "judul": "Absensi siswa",
   "ringkas": "Rekap kehadiran memakai COUNTIF untuk menghitung jumlah hadir, sakit, izin, dan alpa tiap siswa.",
   "intinya": "COUNTIF menghitung berapa kali huruf tertentu muncul di baris.",
   "analogi": "Bayangkan buku absensi. Setiap hari guru menulis huruf: H (hadir), S (sakit), I (izin), atau A (alpa). Di akhir bulan guru menghitung berapa huruf H. COUNTIF membantu guru menghitungnya dengan cepat.",
   "langkah": [
    "Isi kolom tanggal dengan kode H, S, I, atau A.",
    "Hitung hadir dengan =COUNTIF(B2:AF2;\"H\").",
    "Ulangi untuk S, I, dan A.",
    "Persentase hadir: =jumlah_hadir/COUNTA(B2:AF2).",
    "Tambahkan Data Validation tipe List supaya yang bisa diisi hanya H, S, I, atau A."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "1",
      "2",
      "3",
      "4",
      "5",
      "Hadir",
      "Sakit",
      "Persen"
     ],
     [
      "Antonio",
      "H",
      "H",
      "S",
      "H",
      "H",
      "",
      "",
      ""
     ],
     [
      "Devi",
      "H",
      "A",
      "H",
      "H",
      "I",
      "",
      "",
      ""
     ]
    ],
    "sel": "G2",
    "rumus": "=COUNTIF(B2:F2,\"H\")",
    "coba": [
     [
      "=COUNTIF(B2:F2,\"H\")",
      "Jumlah hadir"
     ],
     [
      "=COUNTIF(B2:F2,\"S\")",
      "Sakit"
     ],
     [
      "=COUNTIF(B2:F2,\"H\")/COUNTA(B2:F2)",
      "Proporsi hadir"
     ]
    ]
   },
   "kuis": {
    "q": "Rumus mana yang menghitung jumlah huruf H dalam B2:F2?",
    "opsi": [
     "=COUNTIF(B2:F2;\"H\")",
     "=SUM(B2:F2)",
     "=COUNT(B2:F2)",
     "=IF(B2:F2=\"H\")"
    ],
    "jawab": 0,
    "bahas": "COUNTIF menghitung sel yang sama dengan H."
   },
   "kata": "absensi kehadiran siswa countif",
   "gambar": [
    "absensi-siswa-dengan-excel-1-300x253.jpg",
    "absensi-siswa-dengan-excel-3-300x254.jpg",
    "absensi-siswa-dengan-excel-5-300x246.jpg"
   ]
  },
  {
   "id": "kasus-pajak",
   "cat": "kasus",
   "judul": "Menghitung pajak penghasilan (PPh 21)",
   "ringkas": "PPh 21 dihitung bertingkat. Setiap bagian penghasilan dikenai tarif yang berbeda. Tabel tarif dan SUMPRODUCT (atau IF bertingkat) bisa menghitung semuanya.",
   "intinya": "Tarif yang lebih tinggi hanya dikenakan pada bagian penghasilan yang masuk ke lapisan itu, bukan pada seluruh penghasilan.",
   "analogi": "Bayangkan tangga dengan beberapa anak tangga. Anak tangga pertama harganya murah. Anak tangga kedua lebih mahal, dan seterusnya. Kamu hanya membayar harga anak tangga tinggi untuk anak tangga yang benar-benar kamu injak.",
   "langkah": [
    "Hitung Penghasilan Kena Pajak (PKP) = penghasilan setahun dikurangi PTKP.",
    "Siapkan tabel lapisan tarif: batas bawah, batas atas, dan persen.",
    "Untuk setiap lapisan, hitung bagian PKP yang masuk ke lapisan itu, lalu kalikan dengan persentasenya.",
    "Jumlahkan hasil semua lapisan.",
    "Cek aturan tarif terbaru di situs resmi DJP karena bisa berubah."
   ],
   "tips": [
    "Tabel di gambar hanyalah contoh. Selalu cek tarif yang berlaku saat ini."
   ],
   "demo": {
    "data": [
     [
      "PKP",
      60000000
     ],
     [
      "Lapisan 1 (0-60 jt, 5%)",
      ""
     ],
     [
      "Lapisan 2 (60-250 jt, 15%)",
      ""
     ],
     [
      "Pajak",
      ""
     ]
    ],
    "sel": "B2",
    "rumus": "=MIN(B1,60000000)*5%",
    "coba": [
     [
      "=MIN(B1,60000000)*5%",
      "Lapisan 1"
     ],
     [
      "=MAX(MIN(B1,250000000)-60000000,0)*15%",
      "Lapisan 2"
     ],
     [
      "=MIN(B1,60000000)*5%+MAX(MIN(B1,250000000)-60000000,0)*15%",
      "Total pajak"
     ]
    ],
    "catatan": "Contoh dua lapisan saja untuk ilustrasi, bukan tarif resmi."
   },
   "kuis": {
    "q": "Pada pajak bertingkat, tarif lebih tinggi dikenakan pada...",
    "opsi": [
     "Hanya bagian penghasilan di lapisan itu",
     "Seluruh penghasilan",
     "Hanya penghasilan terkecil",
     "Tidak ada"
    ],
    "jawab": 0,
    "bahas": "Setiap lapisan dikenai tarifnya sendiri."
   },
   "kata": "pajak pph21 ptkp tarif",
   "gambar": [
    "menghitung-pajak-dengan-excel-1.jpg",
    "menghitung-pajak-dengan-excel-2.jpg",
    "menghitung-pajak-dengan-excel-6.jpg"
   ]
  },
  {
   "id": "kasus-invoice",
   "cat": "kasus",
   "judul": "Invoice dan billing",
   "ringkas": "Invoice (faktur) menghitung subtotal tiap barang, diskon, pajak, dan total yang harus dibayar.",
   "intinya": "Invoice = daftar belanja yang sudah dihitung rapi.",
   "analogi": "Bayangkan struk belanja di minimarket. Tiap barang punya jumlah dan harga. Di bawahnya ada total, diskon, pajak, dan jumlah yang harus dibayar. Kamu membuat struk itu sendiri di Excel.",
   "langkah": [
    "Buat kolom barang, jumlah, harga satuan, dan subtotal (=jumlah*harga).",
    "Total = SUM semua subtotal.",
    "Diskon = total x persen. PPN = (total - diskon) x 11%.",
    "Total bayar = total - diskon + PPN.",
    "Ambil harga dari tabel harga memakai VLOOKUP supaya tidak mengetik ulang.",
    "Atur area cetak supaya invoice muat di satu halaman."
   ],
   "demo": {
    "data": [
     [
      "Barang",
      "Jumlah",
      "Harga",
      "Subtotal"
     ],
     [
      "Pensil",
      10,
      3000,
      "=B2*C2"
     ],
     [
      "Buku",
      5,
      8000,
      "=B3*C3"
     ],
     [
      "Penggaris",
      3,
      5000,
      "=B4*C4"
     ],
     [],
     [
      "Total",
      ""
     ],
     [
      "Diskon 5%",
      ""
     ],
     [
      "PPN 11%",
      ""
     ],
     [
      "Bayar",
      ""
     ]
    ],
    "sel": "B6",
    "rumus": "=SUM(D2:D4)",
    "coba": [
     [
      "=SUM(D2:D4)",
      "Total"
     ],
     [
      "=SUM(D2:D4)*5%",
      "Diskon 5%"
     ],
     [
      "=(SUM(D2:D4)-SUM(D2:D4)*5%)*11%",
      "PPN 11%"
     ],
     [
      "=SUM(D2:D4)*0.95*1.11",
      "Total bayar"
     ]
    ],
    "catatan": "Subtotal tiap barang sudah berisi rumus =jumlah x harga."
   },
   "kuis": {
    "q": "Subtotal tiap baris pada invoice dihitung dengan...",
    "opsi": [
     "Jumlah x harga",
     "Jumlah + harga",
     "Harga / jumlah",
     "Jumlah - harga"
    ],
    "jawab": 0,
    "bahas": "Perkalian."
   },
   "kata": "invoice billing faktur tagihan ppn",
   "gambar": [
    "excel-untuk-invoice-pembayaran-3.jpg",
    "excel-untuk-invoice-pembayaran-5-300x187.jpg",
    "excel-untuk-invoice-pembayaran-6-300x186.jpg"
   ]
  },
  {
   "id": "kasus-kartu-ujian",
   "cat": "kasus",
   "judul": "Kartu ujian otomatis",
   "ringkas": "Satu lembar data siswa bisa diubah menjadi kartu ujian yang isinya berganti otomatis saat nomor peserta dipilih. Kuncinya VLOOKUP.",
   "intinya": "Pilih nomor peserta, lalu nama, kelas, dan ruang muncul sendiri.",
   "analogi": "Bayangkan buku daftar murid. Kamu menyebut nomor absen, lalu seseorang membacakan nama, kelas, dan ruang. VLOOKUP adalah orang yang membacakan itu.",
   "langkah": [
    "Siapkan sheet data berisi nomor peserta, nama, kelas, dan ruang.",
    "Di sheet kartu, sediakan satu kotak untuk nomor peserta (bisa pakai Data Validation tipe List).",
    "Isi nama dengan =VLOOKUP(nomor;Data!A:D;2;FALSE). Lakukan hal yang sama untuk kolom lain, ganti angka 2 dengan nomor kolom yang sesuai.",
    "Atur area cetak supaya satu kartu per halaman, atau beberapa kartu per halaman."
   ],
   "demo": {
    "data": [
     [
      "No",
      "Nama",
      "Kelas",
      "Ruang"
     ],
     [
      101,
      "Antonio",
      "9A",
      "R1"
     ],
     [
      102,
      "Devi",
      "9B",
      "R2"
     ],
     [
      103,
      "Bagus",
      "9A",
      "R1"
     ],
     [],
     [
      "Nomor peserta:",
      102
     ],
     [
      "Nama:",
      ""
     ],
     [
      "Kelas:",
      ""
     ],
     [
      "Ruang:",
      ""
     ]
    ],
    "sel": "B7",
    "rumus": "=VLOOKUP(B6,A2:D4,2,FALSE)",
    "coba": [
     [
      "=VLOOKUP(B6,A2:D4,2,FALSE)",
      "Nama"
     ],
     [
      "=VLOOKUP(B6,A2:D4,3,FALSE)",
      "Kelas"
     ],
     [
      "=VLOOKUP(B6,A2:D4,4,FALSE)",
      "Ruang"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi apa yang mengambil data siswa berdasarkan nomor peserta?",
    "opsi": [
     "VLOOKUP",
     "SUMIF",
     "ROUND",
     "REPT"
    ],
    "jawab": 0,
    "bahas": "VLOOKUP."
   },
   "kata": "kartu ujian vlookup data siswa",
   "gambar": [
    "excel-untuk-kartu-ujian-1-300x199.jpg",
    "excel-untuk-kartu-ujian-2-300x215.jpg",
    "excel-untuk-kartu-ujian-5.jpg"
   ]
  },
  {
   "id": "kasus-jam-kerja",
   "cat": "kasus",
   "judul": "Menghitung jam kerja dan lembur",
   "ringkas": "Selisih dua jam dihitung dengan pengurangan, lalu dikali 24 supaya menjadi angka jam biasa.",
   "intinya": "Excel menyimpan jam sebagai pecahan dari satu hari. Karena itu hasilnya harus dikali 24.",
   "analogi": "Bayangkan satu hari adalah satu kue utuh. Jam 12 siang adalah setengah kue (0,5). Untuk mengubah pecahan kue menjadi jumlah jam, kalikan dengan 24.",
   "sintaks": "=(jam_pulang - jam_masuk) * 24",
   "langkah": [
    "Ketik jam masuk dan jam pulang, misalnya 08:00 dan 17:00.",
    "Selisih: =C2-B2. Ubah format hasilnya menjadi [h]:mm.",
    "Dalam jam desimal: =(C2-B2)*24.",
    "Lembur kalau jam normal 8 jam: =MAX(0;(C2-B2)*24-8)."
   ],
   "demo": {
    "data": [
     [
      "Nama",
      "Masuk",
      "Pulang",
      "Jam kerja",
      "Lembur"
     ],
     [
      "Antonio",
      "=TIME(8,0,0)",
      "=TIME(18,30,0)",
      "",
      ""
     ]
    ],
    "sel": "D2",
    "rumus": "=(C2-B2)*24",
    "coba": [
     [
      "=(C2-B2)*24",
      "Jam kerja"
     ],
     [
      "=MAX(0,(C2-B2)*24-8)",
      "Lembur di atas 8 jam"
     ],
     [
      "=HOUR(C2-B2)&\" jam \"&MINUTE(C2-B2)&\" menit\"",
      "Dalam kalimat"
     ]
    ]
   },
   "kuis": {
    "q": "Mengapa selisih waktu dikalikan 24?",
    "opsi": [
     "Karena Excel menyimpan jam sebagai pecahan hari",
     "Karena ada 24 sel",
     "Agar hasilnya persen",
     "Aturan wajib"
    ],
    "jawab": 0,
    "bahas": "Satu hari = 1, jadi satu jam = 1/24."
   },
   "kata": "jam kerja lembur selisih waktu",
   "gambar": [
    "menghitung-jam-kerja-dengan-excel-3-300x153.jpg",
    "nenghitung-jam-kerja-dengan-excel-1-300x152.jpg"
   ]
  },
  {
   "id": "kasus-kalender",
   "cat": "kasus",
   "judul": "Membuat kalender dengan Excel",
   "ringkas": "Kalender bulanan bisa dibuat dengan DATE, WEEKDAY, dan rumus yang mengisi tanggal otomatis sesuai bulan dan tahun yang kamu pilih.",
   "intinya": "Kamu mengganti bulan dan tahun, lalu seluruh kalender berubah sendiri.",
   "analogi": "Bayangkan kalender dinding yang kertasnya bisa kamu ganti dengan sekali ketuk. Rumus mencari hari pertama bulan itu jatuh di hari apa, lalu mengisi tanggal ke kotak-kotak berikutnya.",
   "langkah": [
    "Sediakan kotak untuk tahun dan kotak untuk bulan.",
    "Tanggal pertama bulan itu: =DATE(tahun;bulan;1).",
    "Cari hari pertama jatuh di kolom mana dengan WEEKDAY.",
    "Isi tiap kotak dengan tanggal berikutnya (tambah 1 hari). Sembunyikan tanggal di luar bulan itu dengan IF(MONTH(...)=bulan;...;\"\").",
    "Pakai Conditional Formatting untuk mewarnai hari Minggu atau hari ini."
   ],
   "tips": [
    "EOMONTH memberi tanggal terakhir sebuah bulan. Berguna untuk mengetahui jumlah hari."
   ],
   "demo": {
    "data": [
     [
      "Tahun",
      2026
     ],
     [
      "Bulan",
      10
     ],
     [
      "Tanggal 1",
      ""
     ],
     [
      "Hari",
      ""
     ]
    ],
    "sel": "B3",
    "rumus": "=DATE(B1,B2,1)",
    "coba": [
     [
      "=DATE(B1,B2,1)",
      "Tanggal 1"
     ],
     [
      "=TEXT(DATE(B1,B2,1),\"dddd\")",
      "Hari pada tanggal 1"
     ],
     [
      "=EOMONTH(DATE(B1,B2,1),0)",
      "Akhir bulan"
     ],
     [
      "=DAY(EOMONTH(DATE(B1,B2,1),0))",
      "Jumlah hari"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi yang memberi tanggal terakhir sebuah bulan adalah...",
    "opsi": [
     "EOMONTH",
     "EDATE",
     "WEEKNUM",
     "DAYS"
    ],
    "jawab": 0,
    "bahas": "EOMONTH."
   },
   "kata": "kalender date weekday tanggal",
   "gambar": [
    "membuat-kalender-dengan-excel-1.jpg",
    "membuat-kalender-dengan-excel-6.jpg",
    "membuat-kalender-dengan-excel-7.jpg"
   ]
  },
  {
   "id": "kasus-dvd",
   "cat": "kasus",
   "judul": "Menghitung biaya sewa",
   "ringkas": "Biaya sewa dihitung dari lama sewa dikali tarif per hari, ditambah denda kalau terlambat.",
   "intinya": "Lama sewa adalah selisih tanggal kembali dan tanggal pinjam.",
   "analogi": "Bayangkan menyewa buku di perpustakaan. Tiap hari ada tarifnya. Kalau terlambat mengembalikan, kamu membayar denda untuk tiap hari terlambat. Kamu menghitung semua itu dengan rumus.",
   "langkah": [
    "Hitung lama sewa: =tanggal_kembali-tanggal_pinjam.",
    "Biaya = lama x tarif per hari.",
    "Denda: =MAX(0;lama-batas)*denda_per_hari.",
    "Total = biaya + denda."
   ],
   "tips": [
    "MAX(0; ...) dipakai supaya denda tidak pernah negatif. Kalau tidak terlambat, dendanya 0."
   ],
   "demo": {
    "data": [
     [
      "Pinjam",
      "02/10/2026"
     ],
     [
      "Kembali",
      "07/10/2026"
     ],
     [
      "Tarif/hari",
      3000
     ],
     [
      "Batas (hari)",
      3
     ],
     [
      "Denda/hari",
      1000
     ],
     [
      "Lama",
      ""
     ],
     [
      "Biaya",
      ""
     ],
     [
      "Denda",
      ""
     ],
     [
      "Total",
      ""
     ]
    ],
    "sel": "B6",
    "rumus": "=B2-B1",
    "coba": [
     [
      "=B2-B1",
      "Lama"
     ],
     [
      "=(B2-B1)*B3",
      "Biaya"
     ],
     [
      "=MAX(0,(B2-B1)-B4)*B5",
      "Denda"
     ],
     [
      "=(B2-B1)*B3+MAX(0,(B2-B1)-B4)*B5",
      "Total"
     ]
    ]
   },
   "kuis": {
    "q": "Fungsi MAX(0; x) pada denda dipakai agar...",
    "opsi": [
     "Denda tidak negatif",
     "Hasil dibulatkan",
     "Hasil tampil sebagai teks",
     "Denda selalu nol"
    ],
    "jawab": 0,
    "bahas": "Bila tidak terlambat, selisih negatif diganti 0."
   },
   "kata": "sewa dvd tarif denda",
   "gambar": [
    "menghitung-biaya-sewa-dvd-1-300x81.jpg",
    "menghitung-biaya-sewa-dvd-2-300x82.jpg",
    "menghitung-biaya-sewa-dvd-3-300x83.jpg"
   ]
  },
  {
   "id": "kasus-koreksi",
   "cat": "kasus",
   "judul": "Mengoreksi soal pilihan ganda",
   "ringkas": "Jawaban siswa dibandingkan dengan kunci jawaban. Skornya dihitung dengan IF dan SUM, atau dengan SUMPRODUCT.",
   "intinya": "Cocok dengan kunci berarti 1 poin. Tidak cocok berarti 0.",
   "analogi": "Bayangkan guru memeriksa ujian pilihan ganda dengan lembar kunci di sebelah. Ia mencocokkan satu per satu: benar atau salah. Excel melakukannya sangat cepat.",
   "langkah": [
    "Taruh kunci jawaban di satu baris, dan jawaban siswa di baris berikutnya.",
    "Benar atau salah: =IF(B3=B$2;1;0).",
    "Skor: =SUM(B4:K4)*10 untuk 10 soal.",
    "Atau pakai satu rumus: =SUMPRODUCT(--(B3:K3=B2:K2))*10.",
    "Kunci dengan tanda $ supaya tetap menunjuk baris kunci saat rumus disalin ke bawah."
   ],
   "demo": {
    "data": [
     [
      "Kunci",
      "A",
      "B",
      "C",
      "D",
      "A"
     ],
     [
      "Antonio",
      "A",
      "B",
      "C",
      "A",
      "A"
     ],
     [
      "Devi",
      "A",
      "C",
      "C",
      "D",
      "B"
     ]
    ],
    "sel": "G2",
    "rumus": "=SUMPRODUCT((B2:F2=B$1:F$1)*1)",
    "coba": [
     [
      "=SUMPRODUCT((B2:F2=B$1:F$1)*1)",
      "Jumlah benar"
     ],
     [
      "=SUMPRODUCT((B2:F2=B$1:F$1)*1)*20",
      "Skor (5 soal, @20)"
     ]
    ],
    "catatan": "Mulai dari G2, lalu coba ubah ke baris 3 dengan mengetik ulang."
   },
   "kuis": {
    "q": "Mengapa kunci jawaban dikunci dengan $ pada rumus koreksi?",
    "opsi": [
     "Agar tetap menunjuk baris kunci saat disalin",
     "Agar hasil rupiah",
     "Agar rumus lebih cepat",
     "Agar tampil merah"
    ],
    "jawab": 0,
    "bahas": "Alamat absolut tidak bergeser."
   },
   "kata": "koreksi pilihan ganda ujian skor",
   "gambar": [
    "koreksi-soal-pilihan-ganda-dengan-excel-1.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-3.jpg",
    "koreksi-soal-pilihan-ganda-dengan-excel-4.jpg"
   ]
  },
  {
   "id": "kasus-ttd",
   "cat": "kasus",
   "judul": "Kolom tanda tangan",
   "ringkas": "Kolom tanda tangan dibuat dengan menggabungkan beberapa kotak dan memberi garis batas.",
   "intinya": "Merge & Center menyatukan beberapa kotak menjadi satu kotak besar.",
   "analogi": "Bayangkan beberapa kotak kecil di kertas berpetak. Kamu menghapus garis di antaranya sehingga menjadi satu kotak besar. Di kotak besar itu orang bisa menandatangani.",
   "langkah": [
    "Sorot kotak-kotak yang akan jadi tempat tanda tangan.",
    "Buka tab Home lalu klik Merge & Center.",
    "Atur tinggi baris supaya cukup untuk tanda tangan.",
    "Beri garis batas dengan Borders.",
    "Tulis nama dan jabatan di baris bawahnya."
   ],
   "kuis": {
    "q": "Tombol yang menyatukan beberapa sel menjadi satu adalah...",
    "opsi": [
     "Merge & Center",
     "Wrap Text",
     "Format Painter",
     "Freeze"
    ],
    "jawab": 0,
    "bahas": "Merge & Center."
   },
   "kata": "tanda tangan merge sel laporan",
   "gambar": [
    "membuat-kolom-tanda-tangan-dengan-excel-2-300x190.jpg",
    "membuat-kolom-tanda-tangan-dengan-excel-3-300x192.jpg"
   ]
  },
  {
   "id": "kasus-laporan",
   "cat": "kasus",
   "judul": "Menyusun laporan keuangan",
   "ringkas": "Laporan keuangan sederhana memuat pemasukan, pengeluaran, dan saldo. Semuanya dihitung dengan SUM dan SUMIF.",
   "intinya": "Saldo adalah uang yang masuk dikurangi uang yang keluar.",
   "analogi": "Bayangkan buku catatan uang jajan. Kamu mencatat uang masuk dan uang keluar. Sisa uang adalah saldo. SUMIF membantumu menjawab, \"Berapa total yang kuhabiskan untuk makanan?\"",
   "langkah": [
    "Catat transaksi: tanggal, keterangan, kategori, pemasukan, pengeluaran.",
    "Saldo berjalan: =saldo_sebelumnya+pemasukan-pengeluaran.",
    "Ringkasan per kategori dengan SUMIF.",
    "Buat grafik dari ringkasan kategori."
   ],
   "tips": [
    "Saldo akhir sama dengan total masuk dikurangi total keluar. Gunakan ini untuk memeriksa hasilmu."
   ],
   "demo": {
    "data": [
     [
      "Tanggal",
      "Kategori",
      "Masuk",
      "Keluar",
      "Saldo"
     ],
     [
      "01/10/2026",
      "Gaji",
      5000000,
      0,
      ""
     ],
     [
      "03/10/2026",
      "Makan",
      0,
      300000,
      ""
     ],
     [
      "05/10/2026",
      "Transport",
      0,
      150000,
      ""
     ]
    ],
    "sel": "E2",
    "rumus": "=C2-D2",
    "coba": [
     [
      "=C2-D2",
      "Saldo baris 1"
     ],
     [
      "=SUMIF(B2:B4,\"Makan\",D2:D4)",
      "Pengeluaran makan"
     ],
     [
      "=SUM(C2:C4)-SUM(D2:D4)",
      "Saldo akhir"
     ]
    ]
   },
   "kuis": {
    "q": "Saldo akhir sama dengan...",
    "opsi": [
     "Total masuk - total keluar",
     "Total masuk + total keluar",
     "Rata-rata masuk",
     "Jumlah baris"
    ],
    "jawab": 0,
    "bahas": "Pemasukan dikurangi pengeluaran."
   },
   "kata": "laporan keuangan saldo",
   "gambar": []
  }
 ]
};
