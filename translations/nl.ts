export default {
    code: 'nl',
    name: 'Nederlands',
    dir: 'ltr',
    
    // Shared
    day: 'Dag',
    month: 'Maand',
    year: 'Jaar',
    days: 'dagen',
    calculate: 'Bereken Nu',
    results: 'Verwachte Resultaten',
    from: 'Van',
    to: 'tot',
    months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Menstruatie Calculator",
      pregnancyCalculator: "Zwangerschaps Calculator",
      articles: "Artikelen",
      aboutUs: "Over Ons",
      contactUs: "Contact",
    },

    // Footer
    footer: {
      copyright: "© {year} Anouthati Website. Alle rechten voorbehouden.",
    },

    // Home Page
    homePage: {
      title: "Menstruatiecyclus Calculator",
      subtitle: "Voorspel eenvoudig je volgende menstruatie en vruchtbare periode",
      disclaimer: "* Deze datums zijn schattingen en kunnen per persoon verschillen. Dit hulpmiddel mag niet als anticonceptiemiddel worden gebruikt.",
      form: {
        lastPeriodDate: "Eerste dag van je laatste menstruatie",
        cycleLength: "Cycluslengte",
        periodDuration: "Duur van de menstruatie",
      },
      results: {
        nextPeriodIn: "Je volgende menstruatie wordt verwacht over",
        itsTime: "Het is tijd",
        ovulationDate: "Ovulatiedatum",
        fertileWindow: "Geschatte Vruchtbare Periode",
        pmsWindow: "Premenstrueel Syndroom (PMS) Periode",
        pmsStart: "Begint ongeveer vanaf",
        tabs: ['Volgende menstruatie', 'Tweede menstruatie', 'Derde menstruatie'],
      },
      errors: {
        fullDate: 'Voer de volledige datum in van de eerste dag van je laatste menstruatie.',
        invalidDate: 'Ongeldige datum. De geselecteerde dag bestaat niet in deze maand.',
      },
      faq: {
        title: "Veelgestelde Vragen",
        items: [
            {
              title: 'Hoe bereken je de menstruatiecyclus?',
              content: 'De menstruatiecyclus begint op de eerste dag van de menstruatiebloeding en eindigt één dag voor de volgende cyclus. Om de lengte van je cyclus te berekenen, tel je de dagen vanaf de eerste dag van de huidige menstruatie tot de eerste dag van de volgende. Het gemiddelde is 28 dagen, maar dit kan natuurlijk variëren. Onze calculator automatiseert dit proces om je de moeite van handmatige berekening te besparen.',
            },
            {
              title: 'Een regelmatige menstruatiecyclus berekenen',
              content: 'Een cyclus wordt als regelmatig beschouwd als de lengte ervan elke maand ongeveer constant is (met een verschil van een dag of twee). Dit wordt berekend door de dagen te tellen vanaf de eerste dag van de huidige menstruatie tot de eerste dag van de volgende. Als je cyclus regelmatig is, is onze calculator zeer nauwkeurig in het voorspellen van komende menstruatiedata en de ovulatie, wat je helpt beter te plannen.',
            },
            {
              title: 'Een onregelmatige menstruatiecyclus berekenen',
              content: 'Als je cyclus onregelmatig is, kan voorspellen moeilijk zijn. De beste methode is om je cyclus gedurende enkele maanden (3-6 maanden) bij te houden en de gemiddelde lengte te berekenen. Gebruik je langste en kortste cycli om een geschat bereik voor je vruchtbare periode te krijgen. Onthoud dat deze calculator schattingen geeft, en in geval van aanzienlijke onregelmatigheid is het raadzaam een arts te raadplegen.',
            },
            {
              title: 'Menstruatiecycluscalculator in de Hijri-kalender',
              content: 'Medische menstruatiecycluscalculators gebruiken voornamelijk de Gregoriaanse kalender omdat deze beter aansluit bij biologische cycli. Het Gregoriaanse jaar heeft 365 dagen, terwijl het Hijri-jaar ongeveer 11 dagen korter is. Dit verschil maakt het gebruik van de Hijri-kalender voor voorspellingen moeilijk en onnauwkeurig. Voor de beste resultaten wordt altijd aangeraden de Gregoriaanse datum te gebruiken.',
            },
            {
              title: 'Menstruatiecyclusgrafiek',
              content: 'Een menstruatiecyclusgrafiek is een kalender die de verwachte data van je cyclus toont. Na het gebruik van onze calculator worden de resultaten weergegeven als een tijdlijn voor de volgende drie cycli. Deze grafiek omvat: de datum van de volgende menstruatie, de verwachte ovulatiedag, de vruchtbare periode (beste dagen voor conceptie), en de periode van het premenstrueel syndroom (PMS). Deze grafiek helpt je je gezondheid bij te houden en het ritme van je lichaam te begrijpen.',
            },
            {
              title: 'Wat is de ovulatieweek of vruchtbare periode?',
              content: 'De vruchtbare periode is de tijd tijdens je menstruatiecyclus waarin je het meest vruchtbaar bent. Deze periode duurt ongeveer 6 dagen, inclusief de vijf dagen voor de ovulatie en de dag van de ovulatie zelf. Ovulatie vindt plaats wanneer de eierstok een rijpe eicel vrijgeeft, en de kans op zwangerschap is gedurende deze tijd het hoogst.',
            },
            {
              title: 'Moet geslachtsgemeenschap voor of na de ovulatie plaatsvinden?',
              content: 'Om de kans op zwangerschap te vergroten, wordt geslachtsgemeenschap aanbevolen in de dagen voorafgaand aan en op de dag van de ovulatie. Dit komt omdat sperma tot 5 dagen in het lichaam van een vrouw kan leven, terwijl de eicel slechts 12-24 uur na vrijgave leeft. Daarom zorgt geslachtsgemeenschap vóór de ovulatie ervoor dat er sperma klaarstaat om de eicel te bevruchten zodra deze wordt vrijgegeven.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Zwangerschaps- & Uitgerekende Datum Calculator",
        subtitle: "Ontdek je geschatte uitgerekende datum en zwangerschapsfasen",
        disclaimer: "* Deze datum is een schatting en kan variëren. Raadpleeg altijd je arts.",
        form: {
            lastPeriodDate: "Eerste dag van je laatste menstruatie",
        },
        calculateButton: "Bereken Uitgerekende Datum",
        results: {
            dueDateIs: "Je geschatte uitgerekende datum is",
            youAreInWeek: "Je bent {weeks} weken en {days} dagen zwanger",
            conceptionDate: "Geschatte Conceptiedatum",
            endOfFirstTrimester: "Einde van het Eerste Trimester",
            endOfSecondTrimester: "Einde van het Tweede Trimester",
        },
        errors: {
            fullDate: 'Voer de volledige datum in van de eerste dag van je laatste menstruatie.',
            invalidDate: 'Ongeldige datum. De geselecteerde dag bestaat niet in deze maand.',
            futureDate: 'De datum van de laatste menstruatie moet in het verleden liggen.',
        },
        info: {
            title: "Informatie die voor jou belangrijk is",
            items: [
                {
                  title: 'Zwangerschapscalculator en hoe deze te gebruiken',
                  content: 'Een zwangerschapscalculator is een digitaal hulpmiddel dat je helpt je uitgerekende datum te schatten en je zwangerschapsfasen bij te houden. Voer eenvoudig de eerste dag van je laatste menstruatie (LMP) in, en de calculator doet de rest, berekent de zwangerschapsduur in weken en dagen, en geeft je belangrijke data zoals de verwachte uitgerekende datum en het einde van elk trimester.'
                },
                {
                  title: 'Hoe wordt de uitgerekende datum berekend?',
                  content: 'De geschatte uitgerekende datum (EDD) wordt meestal berekend door 280 dagen (40 weken) op te tellen bij de eerste dag van je laatste menstruatie (LMP). Dit is de meest voorkomende methode, bekend als de regel van Naegele. Deze methode gaat ervan uit dat je menstruatiecyclus regelmatig is en 28 dagen duurt, en dat de ovulatie plaatsvindt op de 14e dag van de cyclus.',
                },
                {
                  title: 'Zwangerschap berekenen in weken en maanden',
                  content: 'Zwangerschap wordt medisch gemeten in weken, met een totale duur van 40 weken. De weken beginnen vanaf de eerste dag van de laatste menstruatie. Om om te rekenen naar geschatte maanden:\n• Eerste Trimester: Week 1 tot 13 (Maanden 1-3).\n• Tweede Trimester: Week 14 tot 27 (Maanden 4-6).\n• Derde Trimester: Week 28 tot 40 (Maanden 7-9).\nOnze calculator toont je precies in welke week en dag je bent.'
                },
                {
                  title: 'Zwangerschap berekenen met de Hijri-kalender',
                  content: 'Medische zwangerschapscalculators vertrouwen op de Gregoriaanse kalender omdat het Gregoriaanse jaar (365 dagen) dichter bij zwangerschapscycli ligt dan het Hijri-jaar (ongeveer 354 dagen). Om de uitgerekende datum in Hijri te berekenen, moet je eerst de datum in de Gregoriaanse kalender bepalen en deze vervolgens omrekenen. Onthoud dat deze omrekening mogelijk niet 100% nauwkeurig is vanwege de verschillende lengtes van de maanden tussen de twee kalenders.'
                },
                {
                  title: 'Korte tabel van foetale groei en ontwikkeling',
                  content: 'Tijdens je zwangerschapsreis ondergaat je foetus verbazingwekkende ontwikkelingen:\n• Eerste Trimester: Belangrijke organen zoals het hart en de hersenen worden gevormd, en het hart begint te kloppen.\n• Tweede Trimester: De foetus groeit snel, en je kunt de eerste bewegingen beginnen te voelen.\n• Derde Trimester: De longen van de foetus rijpen, en het gewicht neemt aanzienlijk toe ter voorbereiding op het leven buiten de baarmoeder.'
                },
                {
                  title: 'Zwangerschapstijdlijn en belangrijke data',
                  content: 'De zwangerschapscalculator helpt je een belangrijke tijdlijn voor je zwangerschap bij te houden. De belangrijkste data die de calculator toont zijn:\n• Geschatte datum van conceptie.\n• Einde van het eerste trimester: een belangrijke mijlpaal in de ontwikkeling van de foetus.\n• Einde van het tweede trimester: het begin van de laatste fase van de zwangerschap.\n• Geschatte uitgerekende datum: de dag waarop je wacht om je baby te ontmoeten.'
                },
                {
                  title: 'Is de zwangerschapscalculator nauwkeurig?',
                  content: 'De zwangerschapscalculator geeft een goede schatting van de uitgerekende datum, maar is niet 100% nauwkeurig. Slechts ongeveer 5% van de baby\'s wordt precies op hun uitgerekende datum geboren. Het is een uitstekend hulpmiddel voor planning en voorbereiding, maar je moet altijd je arts raadplegen voor een nauwkeurige beoordeling van de uitgerekende datum en de voortgang van de zwangerschap.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Belangrijke Artikelen en Informatie",
        articles: [
            {
                title: 'Hoe bereken je de menstruatiecyclus?',
                content: 'De menstruatiecyclus begint op de eerste dag van de menstruatiebloeding en eindigt één dag voor de volgende cyclus. Om de lengte van je cyclus te berekenen, tel je de dagen vanaf de eerste dag van de huidige menstruatie tot de eerste dag van de volgende. Het gemiddelde is 28 dagen, maar dit kan natuurlijk variëren. Onze calculator automatiseert dit proces om je de moeite van handmatige berekening te besparen.',
            },
            {
                title: 'Een onregelmatige menstruatiecyclus berekenen',
                content: 'Als je cyclus onregelmatig is, kan voorspellen moeilijk zijn. De beste methode is om je cyclus gedurende enkele maanden (3-6 maanden) bij te houden en de gemiddelde lengte te berekenen. Gebruik je langste en kortste cycli om een geschat bereik voor je vruchtbare periode te krijgen. Onthoud dat deze calculator schattingen geeft, en in geval van aanzienlijke onregelmatigheid is het raadzaam een arts te raadplegen.',
            },
            {
                title: 'Wat is de ovulatieweek of vruchtbare periode?',
                content: 'De vruchtbare periode is de tijd tijdens je menstruatiecyclus waarin je het meest vruchtbaar bent. Deze periode duurt ongeveer 6 dagen, inclusief de vijf dagen voor de ovulatie en de dag van de ovulatie zelf. Ovulatie vindt plaats wanneer de eierstok een rijpe eicel vrijgeeft, en de kans op zwangerschap is gedurende deze tijd het hoogst.',
            },
            {
                title: 'Moet geslachtsgemeenschap voor of na de ovulatie plaatsvinden?',
                content: 'Om de kans op zwangerschap te vergroten, wordt geslachtsgemeenschap aanbevolen in de dagen voorafgaand aan en op de dag van de ovulatie. Dit komt omdat sperma tot 5 dagen in het lichaam van een vrouw kan leven, terwijl de eicel slechts 12-24 uur na vrijgave leeft. Daarom zorgt geslachtsgemeenschap vóór de ovulatie ervoor dat er sperma klaarstaat om de eicel te bevruchten zodra deze wordt vrijgegeven.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Over Ons",
        paragraph1: "Welkom bij \"Anouthati,\" uw vertrouwde bestemming voor alles wat met de gezondheid van vrouwen te maken heeft. Wij geloven dat kennis macht is, en ons doel is om vrouwen de hulpmiddelen en informatie te bieden die ze nodig hebben om hun lichaam beter te begrijpen en weloverwogen gezondheidsbeslissingen te nemen.",
        paragraph2: "We zijn begonnen met een eenvoudig idee: een nauwkeurige en gebruiksvriendelijke menstruatiecycluscalculator in het Arabisch maken. Van daaruit zijn we geëvolueerd naar een uitgebreid platform dat niet alleen trackingtools biedt, maar ook betrouwbare artikelen en educatieve inhoud over de menstruatiecyclus, vruchtbaarheid en een gezonde levensstijl in het algemeen.",
        missionTitle: "Onze Missie",
        missionText: "Onze missie is om barrières en misvattingen rond de gezondheid van vrouwen te doorbreken door vereenvoudigde wetenschappelijke inhoud te bieden en onze gemeenschap van vrouwen te ondersteunen op hun reis naar een gezonder en gelukkiger leven.",
    },

    // Contact Page
    contactPage: {
        title: "Neem Contact Met Ons Op",
        subtitle: "We zijn hier om te helpen. Als u vragen of suggesties heeft, aarzel dan niet om contact met ons op te nemen.",
        email: "E-mail",
        phone: "Telefoon",
    }
}