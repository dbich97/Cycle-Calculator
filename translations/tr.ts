export default {
    code: 'tr',
    name: 'Türkçe',
    dir: 'ltr',
    
    // Shared
    day: 'Gün',
    month: 'Ay',
    year: 'Yıl',
    days: 'gün',
    calculate: 'Şimdi Hesapla',
    results: 'Beklenen Sonuçlar',
    from: '',
    to: '- arası',
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    hijriMonths: ['Muharrem', 'Safer', 'Rebiülevvel', 'Rebiülahir', 'Cemaziyelevvel', 'Cemaziyelahir', 'Recep', 'Şaban', 'Ramazan', 'Şevval', 'Zilkade', 'Zilhicce'],

    calendar: {
        type: 'Takvim Türü',
        gregorian: 'Miladi',
        hijri: 'Hicri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Adet Hesaplayıcı",
      pregnancyCalculator: "Hamilelik Hesaplayıcı",
      articles: "Makaleler",
      aboutUs: "Hakkımızda",
      contactUs: "İletişim",
    },

    // Footer
    footer: {
      copyright: "© {year} Anouthati Web Sitesi. Tüm hakları saklıdır.",
    },

    // Home Page
    homePage: {
      title: "Adet Döngüsü Hesaplayıcı",
      subtitle: "Bir sonraki adetinizi ve doğurganlık döneminizi kolayca tahmin edin",
      disclaimer: "* Bu tarihler tahminidir ve kişiden kişiye değişebilir. Bu araç bir doğum kontrol yöntemi olarak kullanılmamalıdır.",
      form: {
        lastPeriodDate: "Son adetinizin ilk günü",
        cycleLength: "Döngü Uzunluğu",
        periodDuration: "Adet Süresi",
      },
      results: {
        nextPeriodIn: "Bir sonraki adetinizin başlamasına kalan süre",
        itsTime: "Zamanı geldi",
        ovulationDate: "Yumurtlama Tarihi",
        fertileWindow: "Tahmini Doğurganlık Dönemi",
        pmsWindow: "Adet Öncesi Sendromu (PMS) Dönemi",
        pmsStart: "Yaklaşık olarak başlangıç",
        tabs: ['Sonraki Adet', 'İkinci Adet', 'Üçüncü Adet'],
      },
      errors: {
        fullDate: 'Lütfen son adetinizin ilk gününün tam tarihini girin.',
        invalidDate: 'Geçersiz tarih. Seçilen gün bu ayda mevcut değil.',
      },
      faq: {
        title: "Sıkça Sorulan Sorular",
        items: [
            {
              title: 'Adet döngüsü nasıl hesaplanır?',
              content: 'Adet döngüsü, adet kanamasının ilk gününde başlar ve bir sonraki döngüden bir gün önce sona erer. Döngü uzunluğunuzu hesaplamak için, mevcut adetin ilk gününden bir sonraki adetin ilk gününe kadar olan günleri sayın. Ortalama 28 gündür, ancak doğal olarak değişebilir. Hesaplayıcımız, manuel hesaplama zahmetinden sizi kurtarmak için bu süreci otomatikleştirir.',
            },
            {
              title: 'Düzenli bir adet döngüsünü hesaplama',
              content: 'Bir döngü, uzunluğu her ay kabaca sabitse (bir veya iki gün farkla) düzenli kabul edilir. Mevcut adetin ilk gününden bir sonraki adetin ilk gününe kadar olan günleri sayarak hesaplanır. Döngünüz düzenliyse, hesaplayıcımız yaklaşan adet tarihlerini ve yumurtlamayı tahmin etmede çok doğrudur ve daha iyi plan yapmanıza yardımcı olur.',
            },
            {
              title: 'Düzensiz bir adet döngüsünü hesaplama',
              content: 'Döngünüz düzensizse, tahmin yapmak zor olabilir. En iyi yöntem, döngünüzü birkaç ay (3-6 ay) boyunca takip etmek ve ortalama uzunluğunu hesaplamaktır. Doğurganlık pencereniz için yaklaşık bir aralık elde etmek için en uzun ve en kısa döngülerinizi kullanın. Bu hesaplayıcının tahminler sunduğunu ve önemli düzensizlik durumlarında bir doktora danışmanın tavsiye edildiğini unutmayın.',
            },
            {
              title: 'Hicri takvimde adet döngüsü hesaplayıcısı',
              content: 'Tıbbi adet döngüsü hesaplayıcıları, biyolojik döngülerle daha iyi uyum sağladığı için öncelikle Miladi takvimi kullanır. Miladi yıl 365 gündür, Hicri yıl ise yaklaşık 11 gün daha kısadır. Bu fark, tahmin için Hicri takvimi kullanmayı zor ve hatalı hale getirir. En iyi sonuçlar için her zaman Miladi tarihi kullanmanız önerilir.',
            },
            {
              title: 'Adet döngüsü tablosu',
              content: 'Bir adet döngüsü tablosu, döngünüzün beklenen tarihlerini gösteren bir takvimdir. Hesaplayıcımızı kullandıktan sonra, sonuçlar sonraki üç döngü için bir zaman çizelgesi olarak görüntülenir. Bu tablo şunları içerir: bir sonraki adetin tarihi, beklenen yumurtlama günü, doğurganlık penceresi (gebe kalmak için en iyi günler) ve adet öncesi sendrom (PMS) dönemi. Bu tablo, sağlığınızı izlemenize ve vücudunuzun ritmini anlamanıza yardımcı olur.',
            },
            {
              title: 'Yumurtlama haftası veya doğurganlık penceresi nedir?',
              content: 'Doğurganlık penceresi, adet döngünüz sırasında en çok gebe kalabileceğiniz zamandır. Bu dönem yaklaşık 6 gün sürer ve yumurtlamadan önceki beş günü ve yumurtlama gününü içerir. Yumurtlama, yumurtalık olgun bir yumurta bıraktığında meydana gelir ve bu süre zarfında hamilelik şansı en yüksektir.',
            },
            {
              title: 'İlişki yumurtlamadan önce mi sonra mı olmalı?',
              content: 'Hamilelik şansını artırmak için, yumurtlamadan önceki günlerde ve yumurtlama gününde ilişkiye girilmesi önerilir. Bunun nedeni, spermin bir kadının vücudunda 5 güne kadar yaşayabilmesi, yumurtanın ise bırakıldıktan sonra sadece 12-24 saat yaşamasıdır. Bu nedenle, yumurtlamadan önce ilişkiye girmek, yumurta bırakılır bırakılmaz spermin döllemeye hazır olmasını sağlar.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Hamilelik ve Doğum Tarihi Hesaplayıcı",
        subtitle: "Tahmini doğum tarihinizi ve hamilelik aşamalarını keşfedin",
        disclaimer: "* Bu tarih bir tahmindir ve değişebilir. Her zaman doktorunuza danışın.",
        form: {
            lastPeriodDate: "Son adetinizin ilk günü",
        },
        calculateButton: "Doğum Tarihini Hesapla",
        results: {
            dueDateIs: "Tahmini doğum tarihiniz",
            youAreInWeek: "{weeks} hafta {days} günlük hamilesiniz",
            conceptionDate: "Tahmini Döllenme Tarihi",
            endOfFirstTrimester: "İlk Trimester Sonu",
            endOfSecondTrimester: "İkinci Trimester Sonu",
        },
        errors: {
            fullDate: 'Lütfen son adetinizin ilk gününün tam tarihini girin.',
            invalidDate: 'Geçersiz tarih. Seçilen gün bu ayda mevcut değil.',
            futureDate: 'Son adetin tarihi geçmişte olmalıdır.',
        },
        info: {
            title: "Sizin İçin Önemli Bilgiler",
            items: [
                {
                  title: 'Hamilelik Hesaplayıcı ve Nasıl Kullanılır',
                  content: 'Bir hamilelik hesaplayıcısı, doğum tarihinizi tahmin etmenize ve hamilelik aşamalarını takip etmenize yardımcı olan dijital bir araçtır. Sadece son adet döneminizin (LMP) ilk gününü girin, gerisini hesaplayıcı halleder, gebelik yaşını hafta ve gün olarak hesaplar ve size beklenen doğum tarihi ve her üç aylık dönemin sonu gibi önemli tarihleri verir.'
                },
                {
                  title: 'Doğum tarihi nasıl hesaplanır?',
                  content: 'Tahmini doğum tarihi (EDD) genellikle son adet döneminizin (LMP) ilk gününe 280 gün (40 hafta) eklenerek hesaplanır. Bu, Naegele kuralı olarak bilinen en yaygın yöntemdir. Bu yöntem, adet döngünüzün düzenli ve 28 gün uzunluğunda olduğunu ve yumurtlamanın döngünün 14. gününde gerçekleştiğini varsayar.',
                },
                {
                  title: 'Hamileliği hafta ve ay olarak hesaplama',
                  content: 'Hamilelik tıbbi olarak haftalarla ölçülür ve toplam süresi 40 haftadır. Haftalar son adet döneminin ilk gününden başlar. Yaklaşık aylara dönüştürmek için:\n• İlk Trimester: 1 ila 13. Haftalar (1-3. Aylar).\n• İkinci Trimester: 14 ila 27. Haftalar (4-6. Aylar).\n• Üçüncü Trimester: 28 ila 40. Haftalar (7-9. Aylar).\nHesaplayıcımız tam olarak hangi hafta ve günde olduğunuzu gösterir.'
                },
                {
                  title: 'Hicri takvime göre hamilelik hesaplama',
                  content: 'Tıbbi hamilelik hesaplayıcıları Miladi takvime dayanır çünkü Miladi yıl (365 gün) Hicri yıldan (yaklaşık 354 gün) daha yakındır hamilelik döngülerine. Hicri olarak doğum tarihini hesaplamak için önce Miladi takvimde tarihi belirlemeli ve sonra dönüştürmelisiniz. Bu dönüşümün iki takvim arasındaki ay uzunlukları farklı olduğundan %100 doğru olmayabileceğini unutmayın.'
                },
                {
                  title: 'Fetal büyüme ve gelişimin kısa tablosu',
                  content: 'Hamilelik yolculuğunuz sırasında fetüsünüz inanılmaz gelişimler geçirir:\n• İlk Trimester: Kalp ve beyin gibi ana organlar oluşur ve kalp atmaya başlar.\n• İkinci Trimester: Fetüs hızla büyür ve ilk hareketlerini hissetmeye başlayabilirsiniz.\n• Üçüncü Trimester: Fetüsün ciğerleri olgunlaşır ve rahim dışındaki hayata hazırlık için ağırlığı önemli ölçüde artar.'
                },
                {
                  title: 'Hamilelik zaman çizelgesi ve önemli tarihler',
                  content: 'Hamilelik hesaplayıcısı, hamileliğiniz için önemli bir zaman çizelgesini izlemenize yardımcı olur. Hesaplayıcının gösterdiği önemli tarihler şunlardır:\n• Tahmini gebe kalma tarihi.\n• İlk trimesterin sonu: fetal gelişimde önemli bir kilometre taşı.\n• İkinci trimesterin sonu: hamileliğin son aşamasının başlangıcı.\n• Tahmini doğum tarihi: bebeğinizle tanışmayı beklediğiniz gün.'
                },
                {
                  title: 'Hamilelik hesaplayıcısı doğru mu?',
                  content: 'Hamilelik hesaplayıcısı doğum tarihi hakkında iyi bir tahmin sağlar, ancak %100 doğru değildir. Bebeklerin sadece yaklaşık %5\'i tam olarak beklenen doğum tarihinde doğar. Planlama ve hazırlık için mükemmel bir araçtır, ancak doğum tarihi ve hamilelik ilerlemesinin doğru bir değerlendirmesi için her zaman doktorunuza danışmalısınız.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Önemli Makaleler ve Bilgiler",
        articles: [
            {
                title: 'Adet döngüsü nasıl hesaplanır?',
                content: 'Adet döngüsü, adet kanamasının ilk gününde başlar ve bir sonraki döngüden bir gün önce sona erer. Döngü uzunluğunuzu hesaplamak için, mevcut adetin ilk gününden bir sonraki adetin ilk gününe kadar olan günleri sayın. Ortalama 28 gündür, ancak doğal olarak değişebilir. Hesaplayıcımız, manuel hesaplama zahmetinden sizi kurtarmak için bu süreci otomatikleştirir.',
            },
            {
                title: 'Düzensiz bir adet döngüsünü hesaplama',
                content: 'Döngünüz düzensizse, tahmin yapmak zor olabilir. En iyi yöntem, döngünüzü birkaç ay (3-6 ay) boyunca takip etmek ve ortalama uzunluğunu hesaplamaktır. Doğurganlık pencereniz için yaklaşık bir aralık elde etmek için en uzun ve en kısa döngülerinizi kullanın. Bu hesaplayıcının tahminler sunduğunu ve önemli düzensizlik durumlarında bir doktora danışmanın tavsiye edildiğini unutmayın.',
            },
            {
                title: 'Yumurtlama haftası veya doğurganlık penceresi nedir?',
                content: 'Doğurganlık penceresi, adet döngünüz sırasında en çok gebe kalabileceğiniz zamandır. Bu dönem yaklaşık 6 gün sürer ve yumurtlamadan önceki beş günü ve yumurtlama gününü içerir. Yumurtlama, yumurtalık olgun bir yumurta bıraktığında meydana gelir ve bu süre zarfında hamilelik şansı en yüksektir.',
            },
            {
                title: 'İlişki yumurtlamadan önce mi sonra mı olmalı?',
                content: 'Hamilelik şansını artırmak için, yumurtlamadan önceki günlerde ve yumurtlama gününde ilişkiye girilmesi önerilir. Bunun nedeni, spermin bir kadının vücudunda 5 güne kadar yaşayabilmesi, yumurtanın ise bırakıldıktan sonra sadece 12-24 saat yaşamasıdır. Bu nedenle, yumurtlamadan önce ilişkiye girmek, yumurta bırakılır bırakılmaz spermin döllemeye hazır olmasını sağlar.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Hakkımızda",
        paragraph1: "\"Anouthati\"ye hoş geldiniz, kadın sağlığı ile ilgili her şey için güvenilir adresiniz. Bilginin güç olduğuna inanıyoruz ve amacımız kadınlara vücutlarını daha iyi anlamaları ve bilinçli sağlık kararları vermeleri için ihtiyaç duydukları araçları ve bilgileri sağlamaktır.",
        paragraph2: "Basit bir fikirle başladık: Arapça'da doğru ve kullanımı kolay bir adet döngüsü hesaplayıcısı oluşturmak. Oradan, sadece izleme araçları değil, aynı zamanda adet döngüsü, doğurganlık ve genel olarak sağlıklı yaşam hakkında güvenilir makaleler ve eğitici içerikler sunan kapsamlı bir platforma dönüştük.",
        missionTitle: "Misyonumuz",
        missionText: "Misyonumuz, basitleştirilmiş bilimsel içerik sağlayarak ve kadın topluluğumuzu daha sağlıklı ve mutlu bir yaşama yolculuklarında destekleyerek kadın sağlığını çevreleyen engelleri ve yanlış anlamaları yıkmaktır.",
    },

    // Contact Page
    contactPage: {
        title: "Bize Ulaşın",
        subtitle: "Yardım etmek için buradayız. Herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin.",
        email: "E-posta",
        phone: "Telefon",
    }
}
