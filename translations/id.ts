export default {
    code: 'id',
    name: 'Bahasa Indonesia',
    dir: 'ltr',
    
    // Shared
    day: 'Hari',
    month: 'Bulan',
    year: 'Tahun',
    days: 'hari',
    calculate: 'Hitung Sekarang',
    results: 'Hasil yang Diharapkan',
    from: 'Dari',
    to: 'hingga',
    months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Kalkulator Menstruasi",
      pregnancyCalculator: "Kalkulator Kehamilan",
      articles: "Artikel",
      aboutUs: "Tentang Kami",
      contactUs: "Hubungi Kami",
    },

    // Footer
    footer: {
      copyright: "© {year} Situs Web Anouthati. Hak cipta dilindungi undang-undang.",
    },

    // Home Page
    homePage: {
      title: "Kalkulator Siklus Menstruasi",
      subtitle: "Prediksi menstruasi berikutnya dan masa subur Anda dengan mudah",
      disclaimer: "* Tanggal-tanggal ini adalah perkiraan dan dapat bervariasi dari orang ke orang. Alat ini tidak boleh digunakan sebagai bentuk kontrasepsi.",
      form: {
        lastPeriodDate: "Hari pertama menstruasi terakhir Anda",
        cycleLength: "Panjang Siklus",
        periodDuration: "Durasi Menstruasi",
      },
      results: {
        nextPeriodIn: "Menstruasi Anda berikutnya diperkirakan akan dimulai dalam",
        itsTime: "Sudah Waktunya",
        ovulationDate: "Tanggal Ovulasi",
        fertileWindow: "Jendela Subur yang Diperkirakan",
        pmsWindow: "Jendela Sindrom Pramenstruasi (PMS)",
        pmsStart: "Dimulai kira-kira dari",
        tabs: ['Menstruasi Berikutnya', 'Menstruasi Kedua', 'Menstruasi Ketiga'],
      },
      errors: {
        fullDate: 'Silakan masukkan tanggal lengkap hari pertama menstruasi terakhir Anda.',
        invalidDate: 'Tanggal tidak valid. Hari yang dipilih tidak ada di bulan ini.',
      },
      faq: {
        title: "Pertanyaan yang Sering Diajukan",
        items: [
            {
              title: 'Bagaimana cara menghitung siklus menstruasi?',
              content: 'Siklus menstruasi dimulai pada hari pertama pendarahan menstruasi dan berakhir satu hari sebelum siklus berikutnya. Untuk menghitung panjang siklus Anda, hitung hari dari hari pertama menstruasi saat ini hingga hari pertama menstruasi berikutnya. Rata-rata adalah 28 hari, tetapi dapat bervariasi secara alami. Kalkulator kami mengotomatiskan proses ini untuk menghemat kesulitan perhitungan manual.',
            },
            {
              title: 'Menghitung siklus menstruasi yang teratur',
              content: 'Siklus dianggap teratur jika panjangnya kira-kira konstan setiap bulan (dengan selisih satu atau dua hari). Ini dihitung dengan menghitung hari dari hari pertama menstruasi saat ini hingga hari pertama menstruasi berikutnya. Jika siklus Anda teratur, kalkulator kami sangat akurat dalam memprediksi tanggal menstruasi yang akan datang dan ovulasi, membantu Anda merencanakan lebih baik.',
            },
            {
              title: 'Menghitung siklus menstruasi yang tidak teratur',
              content: 'Jika siklus Anda tidak teratur, prediksi bisa sulit. Metode terbaik adalah melacak siklus Anda selama beberapa bulan (3-6 bulan) dan menghitung panjang rata-ratanya. Gunakan siklus terpanjang dan terpendek Anda untuk mendapatkan rentang perkiraan untuk jendela subur Anda. Ingatlah bahwa kalkulator ini memberikan perkiraan, dan dalam kasus ketidakteraturan yang signifikan, disarankan untuk berkonsultasi dengan dokter.',
            },
            {
              title: 'Kalkulator siklus menstruasi dalam kalender Hijriah',
              content: 'Kalkulator siklus menstruasi medis terutama menggunakan kalender Gregorian karena lebih selaras dengan siklus biologis. Tahun Gregorian memiliki 365 hari, sedangkan tahun Hijriah sekitar 11 hari lebih pendek. Perbedaan ini membuat penggunaan kalender Hijriah untuk prediksi sulit dan tidak akurat. Untuk hasil terbaik, selalu disarankan untuk menggunakan tanggal Gregorian.',
            },
            {
              title: 'Bagan siklus menstruasi',
              content: 'Bagan siklus menstruasi adalah kalender yang menunjukkan tanggal yang diharapkan dari siklus Anda. Setelah menggunakan kalkulator kami, hasilnya ditampilkan sebagai garis waktu untuk tiga siklus berikutnya. Bagan ini meliputi: tanggal menstruasi berikutnya, hari ovulasi yang diharapkan, jendela subur (hari terbaik untuk pembuahan), dan periode sindrom pramenstruasi (PMS). Bagan ini membantu Anda melacak kesehatan Anda dan memahami ritme tubuh Anda.',
            },
            {
              title: 'Apa itu minggu ovulasi atau jendela subur?',
              content: 'Jendela subur adalah waktu selama siklus menstruasi Anda ketika Anda paling mampu untuk hamil. Periode ini berlangsung sekitar 6 hari, termasuk lima hari sebelum ovulasi dan hari ovulasi itu sendiri. Ovulasi terjadi ketika ovarium melepaskan sel telur yang matang, dan peluang kehamilan tertinggi selama waktu ini.',
            },
            {
              title: 'Haruskah hubungan seksual terjadi sebelum atau sesudah ovulasi?',
              content: 'Untuk meningkatkan peluang kehamilan, hubungan seksual dianjurkan pada hari-hari menjelang dan pada hari ovulasi. Ini karena sperma dapat hidup di dalam tubuh wanita hingga 5 hari, sedangkan sel telur hanya hidup selama 12-24 jam setelah dilepaskan. Oleh karena itu, melakukan hubungan seksual sebelum ovulasi memastikan bahwa sperma siap untuk membuahi sel telur segera setelah dilepaskan.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Kalkulator Kehamilan & Tanggal Lahir",
        subtitle: "Temukan perkiraan tanggal lahir dan tahap kehamilan Anda",
        disclaimer: "* Tanggal ini adalah perkiraan dan dapat bervariasi. Selalu konsultasikan dengan dokter Anda.",
        form: {
            lastPeriodDate: "Hari pertama menstruasi terakhir Anda",
        },
        calculateButton: "Hitung Tanggal Lahir",
        results: {
            dueDateIs: "Perkiraan tanggal lahir Anda adalah",
            youAreInWeek: "Anda hamil {weeks} minggu dan {days} hari",
            conceptionDate: "Tanggal Konsepsi yang Diperkirakan",
            endOfFirstTrimester: "Akhir Trimester Pertama",
            endOfSecondTrimester: "Akhir Trimester Kedua",
        },
        errors: {
            fullDate: 'Silakan masukkan tanggal lengkap hari pertama menstruasi terakhir Anda.',
            invalidDate: 'Tanggal tidak valid. Hari yang dipilih tidak ada di bulan ini.',
            futureDate: 'Tanggal menstruasi terakhir harus di masa lalu.',
        },
        info: {
            title: "Informasi yang Penting bagi Anda",
            items: [
                {
                  title: 'Kalkulator Kehamilan dan Cara Menggunakannya',
                  content: 'Kalkulator kehamilan adalah alat digital yang membantu Anda memperkirakan tanggal lahir dan melacak tahap kehamilan Anda. Cukup masukkan hari pertama menstruasi terakhir (HPHT) Anda, dan kalkulator akan melakukan sisanya, menghitung usia kehamilan dalam minggu dan hari, dan memberi Anda tanggal-tanggal penting seperti perkiraan tanggal lahir dan akhir setiap trimester.'
                },
                {
                  title: 'Bagaimana tanggal lahir dihitung?',
                  content: 'Perkiraan tanggal lahir (HPL) biasanya dihitung dengan menambahkan 280 hari (40 minggu) ke hari pertama menstruasi terakhir (HPHT) Anda. Ini adalah metode yang paling umum, yang dikenal sebagai aturan Naegele. Metode ini mengasumsikan siklus menstruasi Anda teratur dan 28 hari, dan ovulasi terjadi pada hari ke-14 siklus.',
                },
                {
                  title: 'Menghitung kehamilan dalam minggu dan bulan',
                  content: 'Kehamilan secara medis diukur dalam minggu, dengan total durasi 40 minggu. Minggu dimulai dari hari pertama menstruasi terakhir. Untuk mengkonversi ke perkiraan bulan:\n• Trimester Pertama: Minggu 1 hingga 13 (Bulan 1-3).\n• Trimester Kedua: Minggu 14 hingga 27 (Bulan 4-6).\n• Trimester Ketiga: Minggu 28 hingga 40 (Bulan 7-9).\nKalkulator kami menunjukkan dengan tepat minggu dan hari kehamilan Anda.'
                },
                {
                  title: 'Menghitung kehamilan dengan kalender Hijriah',
                  content: 'Kalkulator kehamilan medis mengandalkan kalender Gregorian karena tahun Gregorian (365 hari) lebih dekat dengan siklus kehamilan daripada tahun Hijriah (sekitar 354 hari). Untuk menghitung tanggal lahir dalam Hijriah, Anda harus terlebih dahulu menentukan tanggal dalam kalender Gregorian dan kemudian mengkonversinya. Ingatlah bahwa konversi ini mungkin tidak 100% akurat karena perbedaan panjang bulan antara kedua kalender.'
                },
                {
                  title: 'Tabel singkat pertumbuhan dan perkembangan janin',
                  content: 'Selama perjalanan kehamilan Anda, janin Anda mengalami perkembangan yang luar biasa:\n• Trimester Pertama: Organ-organ utama seperti jantung dan otak terbentuk, dan jantung mulai berdetak.\n• Trimester Kedua: Janin tumbuh dengan cepat, dan Anda bisa mulai merasakan gerakan pertamanya.\n• Trimester Ketiga: Paru-paru janin matang, dan berat badannya meningkat secara signifikan sebagai persiapan untuk kehidupan di luar rahim.'
                },
                {
                  title: 'Garis waktu kehamilan dan tanggal-tanggal penting',
                  content: 'Kalkulator kehamilan membantu Anda melacak garis waktu penting untuk kehamilan Anda. Tanggal-tanggal penting yang ditunjukkan oleh kalkulator adalah:\n• Tanggal konsepsi yang diperkirakan.\n• Akhir trimester pertama: tonggak penting dalam perkembangan janin.\n• Akhir trimester kedua: awal dari tahap akhir kehamilan.\n• Perkiraan tanggal lahir: hari yang Anda tunggu-tunggu untuk bertemu bayi Anda.'
                },
                {
                  title: 'Apakah kalkulator kehamilan akurat?',
                  content: 'Kalkulator kehamilan memberikan perkiraan yang baik tentang tanggal lahir, tetapi tidak 100% akurat. Hanya sekitar 5% bayi yang lahir tepat pada tanggal lahir mereka. Ini adalah alat yang sangat baik untuk perencanaan dan persiapan, tetapi Anda harus selalu berkonsultasi dengan dokter Anda untuk penilaian akurat tentang tanggal lahir dan kemajuan kehamilan.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Artikel dan Informasi Penting",
        articles: [
            {
                title: 'Bagaimana cara menghitung siklus menstruasi?',
                content: 'Siklus menstruasi dimulai pada hari pertama pendarahan menstruasi dan berakhir satu hari sebelum siklus berikutnya. Untuk menghitung panjang siklus Anda, hitung hari dari hari pertama menstruasi saat ini hingga hari pertama menstruasi berikutnya. Rata-rata adalah 28 hari, tetapi dapat bervariasi secara alami. Kalkulator kami mengotomatiskan proses ini untuk menghemat kesulitan perhitungan manual.',
            },
            {
                title: 'Menghitung siklus menstruasi yang tidak teratur',
                content: 'Jika siklus Anda tidak teratur, prediksi bisa sulit. Metode terbaik adalah melacak siklus Anda selama beberapa bulan (3-6 bulan) dan menghitung panjang rata-ratanya. Gunakan siklus terpanjang dan terpendek Anda untuk mendapatkan rentang perkiraan untuk jendela subur Anda. Ingatlah bahwa kalkulator ini memberikan perkiraan, dan dalam kasus ketidakteraturan yang signifikan, disarankan untuk berkonsultasi dengan dokter.',
            },
            {
                title: 'Apa itu minggu ovulasi atau jendela subur?',
                content: 'Jendela subur adalah waktu selama siklus menstruasi Anda ketika Anda paling mampu untuk hamil. Periode ini berlangsung sekitar 6 hari, termasuk lima hari sebelum ovulasi dan hari ovulasi itu sendiri. Ovulasi terjadi ketika ovarium melepaskan sel telur yang matang, dan peluang kehamilan tertinggi selama waktu ini.',
            },
            {
                title: 'Haruskah hubungan seksual terjadi sebelum atau sesudah ovulasi?',
                content: 'Untuk meningkatkan peluang kehamilan, hubungan seksual dianjurkan pada hari-hari menjelang dan pada hari ovulasi. Ini karena sperma dapat hidup di dalam tubuh wanita hingga 5 hari, sedangkan sel telur hanya hidup selama 12-24 jam setelah dilepaskan. Oleh karena itu, melakukan hubungan seksual sebelum ovulasi memastikan bahwa sperma siap untuk membuahi sel telur segera setelah dilepaskan.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Tentang Kami",
        paragraph1: "Selamat datang di \"Anouthati,\" tujuan tepercaya Anda untuk segala sesuatu yang berhubungan dengan kesehatan wanita. Kami percaya bahwa pengetahuan adalah kekuatan, dan tujuan kami adalah untuk menyediakan wanita dengan alat dan informasi yang mereka butuhkan untuk lebih memahami tubuh mereka dan membuat keputusan kesehatan yang terinformasi.",
        paragraph2: "Kami memulai dengan ide sederhana: membuat kalkulator siklus menstruasi yang akurat dan mudah digunakan dalam bahasa Arab. Dari sana, kami berevolusi menjadi platform komprehensif yang tidak hanya menawarkan alat pelacakan, tetapi juga artikel yang andal dan konten pendidikan tentang siklus menstruasi, kesuburan, dan hidup sehat secara umum.",
        missionTitle: "Misi Kami",
        missionText: "Misi kami adalah untuk mendobrak hambatan dan kesalahpahaman seputar kesehatan wanita dengan menyediakan konten ilmiah yang disederhanakan dan mendukung komunitas wanita kami dalam perjalanan mereka menuju kehidupan yang lebih sehat dan lebih bahagia.",
    },

    // Contact Page
    contactPage: {
        title: "Hubungi Kami",
        subtitle: "Kami di sini untuk membantu. Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi kami.",
        email: "Email",
        phone: "Telepon",
    }
}