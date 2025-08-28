export default {
    code: 'pl',
    name: 'Polski',
    dir: 'ltr',
    
    // Shared
    day: 'Dzień',
    month: 'Miesiąc',
    year: 'Rok',
    days: 'dni',
    calculate: 'Oblicz teraz',
    results: 'Oczekiwane rezultaty',
    from: 'Od',
    to: 'do',
    months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Typ kalendarza',
      gregorian: 'Gregoriański',
      hijri: 'Hidżry',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Kalkulator Okresu",
      pregnancyCalculator: "Kalkulator Ciąży",
      articles: "Artykuły",
      aboutUs: "O nas",
      contactUs: "Kontakt",
    },

    // Footer
    footer: {
      copyright: "© {year} Strona internetowa Anouthati. Wszelkie prawa zastrzeżone.",
    },

    // Home Page
    homePage: {
      title: "Kalkulator Cyklu Miesiączkowego",
      subtitle: "Łatwo przewiduj swój następny okres i okno płodności",
      disclaimer: "* Te daty są szacunkowe i mogą się różnić w zależności od osoby. Tego narzędzia nie należy używać jako formy antykoncepcji.",
      form: {
        lastPeriodDate: "Pierwszy dzień ostatniej miesiączki",
        cycleLength: "Długość cyklu",
        periodDuration: "Czas trwania okresu",
      },
      results: {
        nextPeriodIn: "Twój następny okres powinien rozpocząć się za",
        itsTime: "Już czas",
        ovulationDate: "Data owulacji",
        fertileWindow: "Szacowane okno płodności",
        pmsWindow: "Okno zespołu napięcia przedmiesiączkowego (PMS)",
        pmsStart: "Zaczyna się około od",
        tabs: ['Następny okres', 'Drugi okres', 'Trzeci okres'],
      },
      errors: {
        fullDate: 'Proszę podać pełną datę pierwszego dnia ostatniej miesiączki.',
        invalidDate: 'Nieprawidłowa data. Wybrany dzień nie istnieje w tym miesiącu.',
      },
      faq: {
        title: "Często zadawane pytania",
        items: [
            {
              title: 'Jak obliczyć cykl miesiączkowy?',
              content: 'Cykl miesiączkowy rozpoczyna się pierwszego dnia krwawienia miesiączkového i kończy dzień przed następnym cyklem. Aby obliczyć długość cyklu, policz dni od pierwszego dnia bieżącego okresu do pierwszego dnia następnego okresu. Średnia wynosi 28 dni, ale może się naturalnie różnić. Nasz kalkulator automatyzuje ten proces, aby zaoszczędzić Ci kłopotów z ręcznym obliczaniem.',
            },
            {
              title: 'Obliczanie regularnego cyklu miesiączkowego',
              content: 'Cykl uważa się za regularny, jeśli jego długość jest w przybliżeniu stała każdego miesiąca (z różnicą jednego lub dwóch dni). Oblicza się go, licząc dni od pierwszego dnia bieżącej miesiączki do pierwszego dnia następnej. Jeśli Twój cykl jest regularny, nasz kalkulator jest bardzo dokładny w przewidywaniu nadchodzących terminów okresu i owulacji, pomagając Ci lepiej planować.',
            },
            {
              title: 'Obliczanie nieregularnego cyklu miesiączkowego',
              content: 'Jeśli Twój cykl jest nieregularny, przewidywanie może być trudne. Najlepszą metodą jest śledzenie cyklu przez kilka miesięcy (3-6 miesięcy) i obliczenie jego średniej długości. Użyj swoich najdłuższych i najkrótszych cykli, aby uzyskać przybliżony zakres okna płodności. Pamiętaj, że ten kalkulator podaje szacunki, a w przypadkach znacznej nieregularności zaleca się konsultację z lekarzem.',
            },
            {
              title: 'Kalkulator cyklu miesiączkowego w kalendarzu Hidżry',
              content: 'Medyczne kalkulatory cyklu miesiączkowego używają głównie kalendarza gregoriańskiego, ponieważ lepiej pasuje on do cykli biologicznych. Rok gregoriański ma 365 dni, podczas gdy rok Hidżry jest o około 11 dni krótszy. Ta różnica sprawia, że używanie kalendarza Hidżry do przewidywania jest trudne i niedokładne. Aby uzyskać najlepsze wyniki, zawsze zaleca się używanie daty gregoriańskiej.',
            },
            {
              title: 'Wykres cyklu miesiączkowego',
              content: 'Wykres cyklu miesiączkowego to kalendarz pokazujący oczekiwane daty Twojego cyklu. Po użyciu naszego kalkulatora wyniki są wyświetlane jako oś czasu dla następnych trzech cykli. Wykres ten obejmuje: datę następnego okresu, przewidywany dzień owulacji, okno płodności (najlepsze dni na poczęcie) oraz okres zespołu napięcia przedmiesiączkowego (PMS). Wykres ten pomaga śledzić stan zdrowia i rozumieć rytm swojego ciała.',
            },
            {
              title: 'Czym jest tydzień owulacji lub okno płodności?',
              content: 'Okno płodności to okres w cyklu miesiączkowym, w którym jesteś najbardziej zdolna do poczęcia. Okres ten trwa około 6 dni i obejmuje pięć dni przed owulacją oraz sam dzień owulacji. Owulacja ma miejsce, gdy jajnik uwalnia dojrzałe jajo, a szanse na ciążę są w tym czasie największe.',
            },
            {
              title: 'Czy stosunek płciowy powinien odbyć się przed czy po owulacji?',
              content: 'Aby zwiększyć szanse na ciążę, zaleca się stosunek płciowy w dniach poprzedzających owulację i w dniu owulacji. Dzieje się tak, ponieważ plemniki mogą przetrwać w ciele kobiety do 5 dni, podczas gdy jajo żyje tylko 12-24 godziny po uwolnieniu. Dlatego stosunek płciowy przed owulacją zapewnia, że plemniki są gotowe do zapłodnienia jaja, gdy tylko zostanie ono uwolnione.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Kalkulator Ciąży i Terminu Porodu",
        subtitle: "Odkryj szacowany termin porodu i etapy ciąży",
        disclaimer: "* Ta data jest szacunkowa i może się różnić. Zawsze konsultuj się z lekarzem.",
        form: {
            lastPeriodDate: "Pierwszy dzień ostatniej miesiączki",
        },
        calculateButton: "Oblicz Termin Porodu",
        results: {
            dueDateIs: "Twój szacowany termin porodu to",
            youAreInWeek: "Jesteś w {weeks} tygodniu i {days} dniu ciąży",
            conceptionDate: "Szacowana Data Poczęcia",
            endOfFirstTrimester: "Koniec Pierwszego Trymestru",
            endOfSecondTrimester: "Koniec Drugiego Trymestru",
        },
        errors: {
            fullDate: 'Proszę podać pełną datę pierwszego dnia ostatniej miesiączki.',
            invalidDate: 'Nieprawidłowa data. Wybrany dzień nie istnieje w tym miesiącu.',
            futureDate: 'Data ostatniej miesiączki musi być w przeszłości.',
        },
        info: {
            title: "Informacje, które Cię interesują",
            items: [
                {
                  title: 'Kalkulator ciąży i jak go używać',
                  content: 'Kalkulator ciąży to cyfrowe narzędzie, które pomaga oszacować termin porodu i śledzić etapy ciąży. Wystarczy wpisać pierwszy dzień ostatniej miesiączki (OM), a kalkulator zrobi resztę, obliczając wiek ciążowy w tygodniach i dniach oraz podając ważne daty, takie jak przewidywany termin porodu i koniec każdego trymestru.'
                },
                {
                  title: 'Jak obliczany jest termin porodu?',
                  content: 'Przewidywany termin porodu (PTP) jest zazwyczaj obliczany poprzez dodanie 280 dni (40 tygodni) do pierwszego dnia ostatniej miesiączki (OM). Jest to najczęstsza metoda, znana jako reguła Naegelego. Metoda ta zakłada, że cykl miesiączkowy jest regularny i trwa 28 dni, a owulacja ma miejsce 14. dnia cyklu.',
                },
                {
                  title: 'Obliczanie ciąży w tygodniach i miesiącach',
                  content: 'Ciąża jest medycznie mierzona w tygodniach, a jej całkowity czas trwania wynosi 40 tygodni. Tygodnie zaczynają się od pierwszego dnia ostatniej miesiączki. Aby przeliczyć na przybliżone miesiące:\n• Pierwszy trymestr: Tygodnie od 1 do 13 (Miesiące 1-3).\n• Drugi trymestr: Tygodnie od 14 do 27 (Miesiące 4-6).\n• Trzeci trymestr: Tygodnie od 28 do 40 (Miesiące 7-9).\nNasz kalkulator pokazuje dokładnie, w którym tygodniu i dniu jesteś.'
                },
                {
                  title: 'Obliczanie ciąży za pomocą kalendarza Hidżry',
                  content: 'Medyczne kalkulatory ciąży opierają się na kalendarzu gregoriańskim, ponieważ rok gregoriański (365 dni) jest bliższy cyklom ciążowym niż rok Hidżry (około 354 dni). Aby obliczyć termin porodu w kalendarzu Hidżry, należy najpierw ustalić datę w kalendarzu gregoriańskim, a następnie ją przeliczyć. Pamiętaj, że to przeliczenie może nie być w 100% dokładne z powodu różnej długości miesięcy w obu kalendarzach.'
                },
                {
                  title: 'Krótka tabela wzrostu i rozwoju płodu',
                  content: 'Podczas podróży ciążowej Twój płód przechodzi niesamowite zmiany:\n• Pierwszy trymestr: Tworzą się główne narządy, takie jak serce i mózg, a serce zaczyna bić.\n• Drugi trymestr: Płód szybko rośnie i możesz zacząć odczuwać jego pierwsze ruchy.\n• Trzeci trymestr: Płuca płodu dojrzewają, a jego waga znacznie wzrasta w ramach przygotowań do życia poza macicą.'
                },
                {
                  title: 'Oś czasu ciąży i ważne daty',
                  content: 'Kalkulator ciąży pomaga śledzić ważną oś czasu dla Twojej ciąży. Kluczowe daty pokazywane przez kalkulator to:\n• Szacowana data poczęcia.\n• Koniec pierwszego trymestru: ważny kamień milowy w rozwoju płodu.\n• Koniec drugiego trymestru: początek ostatniego etapu ciąży.\n• Przewidywany termin porodu: dzień, na który czekasz, aby poznać swoje dziecko.'
                },
                {
                    title: 'Czy kalkulator ciążowy jest dokładny?',
                    content: 'Kalkulator ciążowy podaje dobre oszacowanie terminu porodu, ale nie jest w 100% dokładny. Tylko około 5% dzieci rodzi się dokładnie w wyznaczonym terminie porodu. Jest to doskonałe narzędzie do planowania i przygotowań, ale zawsze należy skonsultować się z lekarzem w celu dokładnej oceny terminu porodu i postępu ciąży.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Ważne artykuły i informacje",
        articles: [
            {
                title: 'Jak obliczyć cykl miesiączkowy?',
                content: 'Cykl miesiączkowy rozpoczyna się pierwszego dnia krwawienia miesiączkowego i kończy dzień przed następnym cyklem. Aby obliczyć długość cyklu, policz dni od pierwszego dnia bieżącego okresu do pierwszego dnia następnego okresu. Średnia wynosi 28 dni, ale może się naturalnie różnić. Nasz kalkulator automatyzuje ten proces, aby zaoszczędzić Ci kłopotów z ręcznym obliczaniem.',
            },
            {
                title: 'Obliczanie nieregularnego cyklu miesiączkowego',
                content: 'Jeśli Twój cykl jest nieregularny, przewidywanie może być trudne. Najlepszą metodą jest śledzenie cyklu przez kilka miesięcy (3-6 miesięcy) i obliczenie jego średniej długości. Użyj swoich najdłuższych i najkrótszych cykli, aby uzyskać przybliżony zakres okna płodności. Pamiętaj, że ten kalkulator podaje szacunki, a w przypadkach znacznej nieregularności zaleca się konsultację z lekarzem.',
            },
            {
                title: 'Czym jest tydzień owulacji lub okno płodności?',
                content: 'Okno płodności to okres w cyklu miesiączkowym, w którym jesteś najbardziej zdolna do poczęcia. Okres ten trwa około 6 dni i obejmuje pięć dni przed owulacją oraz sam dzień owulacji. Owulacja ma miejsce, gdy jajnik uwalnia dojrzałe jajo, a szanse na ciążę są w tym czasie największe.',
            },
            {
                title: 'Czy stosunek płciowy powinien odbyć się przed czy po owulacji?',
                content: 'Aby zwiększyć szanse na ciążę, zaleca się stosunek płciowy w dniach poprzedzających owulację i w dniu owulacji. Dzieje się tak, ponieważ plemniki mogą przetrwać w ciele kobiety do 5 dni, podczas gdy jajo żyje tylko 12-24 godziny po uwolnieniu. Dlatego stosunek płciowy przed owulacją zapewnia, że plemniki są gotowe do zapłodnienia jaja, gdy tylko zostanie ono uwolnione.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "O nas",
        paragraph1: "Witamy w \"Anouthati\", Twoim zaufanym miejscu na wszystko, co związane ze zdrowiem kobiet. Wierzymy, że wiedza to potęga, a naszym celem jest dostarczanie kobietom narzędzi i informacji, których potrzebują, aby lepiej zrozumieć swoje ciała i podejmować świadome decyzje zdrowotne.",
        paragraph2: "Zaczęliśmy od prostego pomysłu: stworzenia dokładnego i łatwego w użyciu kalkulatora cyklu miesiączkowego w języku arabskim. Stamtąd ewoluowaliśmy w kompleksową platformę, która oferuje nie tylko narzędzia do śledzenia, ale także rzetelne artykuły i treści edukacyjne na temat cyklu miesiączkowego, płodności i ogólnie zdrowego stylu życia.",
        missionTitle: "Nasza misja",
        missionText: "Naszą misją jest przełamywanie barier i błędnych przekonań dotyczących zdrowia kobiet poprzez dostarczanie uproszczonych treści naukowych i wspieranie naszej społeczności kobiet w ich podróży do zdrowszego i szczęśliwszego życia.",
    },

    // Contact Page
    contactPage: {
        title: "Skontaktuj się z nami",
        subtitle: "Jesteśmy tutaj, aby pomóc. Jeśli masz jakieś pytania lub sugestie, nie wahaj się z nami skontaktować.",
        email: "E-mail",
        phone: "Telefon",
    }
}
