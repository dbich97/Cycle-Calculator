export default {
    code: 'de',
    name: 'Deutsch',
    dir: 'ltr',
    
    // Shared
    day: 'Tag',
    month: 'Monat',
    year: 'Jahr',
    days: 'Tage',
    calculate: 'Jetzt berechnen',
    results: 'Erwartete Ergebnisse',
    from: 'Von',
    to: 'bis',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Periodenrechner",
      pregnancyCalculator: "Schwangerschaftsrechner",
      articles: "Artikel",
      aboutUs: "Über uns",
      contactUs: "Kontakt",
    },

    // Footer
    footer: {
      copyright: "© {year} Anouthati Webseite. Alle Rechte vorbehalten.",
    },

    // Home Page
    homePage: {
      title: "Menstruationszyklus-Rechner",
      subtitle: "Sagen Sie ganz einfach Ihre nächste Periode und Ihr fruchtbares Fenster voraus",
      disclaimer: "* Diese Daten sind Schätzungen und können von Person zu Person variieren. Dieses Tool sollte nicht als Verhütungsmittel verwendet werden.",
      form: {
        lastPeriodDate: "Erster Tag Ihrer letzten Periode",
        cycleLength: "Zykluslänge",
        periodDuration: "Periodendauer",
      },
      results: {
        nextPeriodIn: "Ihre nächste Periode wird voraussichtlich in",
        itsTime: "Es ist soweit",
        ovulationDate: "Datum des Eisprungs",
        fertileWindow: "Geschätztes fruchtbares Fenster",
        pmsWindow: "Prämenstruelles Syndrom (PMS) Fenster",
        pmsStart: "Beginnt ungefähr ab",
        tabs: ['Nächste Periode', 'Zweite Periode', 'Dritte Periode'],
      },
      errors: {
        fullDate: 'Bitte geben Sie das vollständige Datum des ersten Tages Ihrer letzten Periode ein.',
        invalidDate: 'Ungültiges Datum. Der ausgewählte Tag existiert in diesem Monat nicht.',
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
            {
              title: 'Wie berechnet man den Menstruationszyklus?',
              content: 'Der Menstruationszyklus beginnt am ersten Tag der Menstruationsblutung und endet einen Tag vor dem nächsten Zyklus. Um Ihre Zykluslänge zu berechnen, zählen Sie die Tage vom ersten Tag der aktuellen Periode bis zum ersten Tag der nächsten Periode. Der Durchschnitt liegt bei 28 Tagen, kann aber natürlich variieren. Unser Rechner automatisiert diesen Prozess, um Ihnen die Mühe der manuellen Berechnung zu ersparen.',
            },
            {
              title: 'Berechnung eines regelmäßigen Menstruationszyklus',
              content: 'Ein Zyklus gilt als regelmäßig, wenn seine Länge jeden Monat ungefähr konstant ist (mit einem Unterschied von ein oder zwei Tagen). Er wird berechnet, indem die Tage vom ersten Tag der aktuellen Menstruation bis zum ersten Tag der nächsten gezählt werden. Wenn Ihr Zyklus regelmäßig ist, ist unser Rechner sehr genau bei der Vorhersage der bevorstehenden Periodentermine und des Eisprungs, was Ihnen bei der besseren Planung hilft.',
            },
            {
              title: 'Berechnung eines unregelmäßigen Menstruationszyklus',
              content: 'Wenn Ihr Zyklus unregelmäßig ist, kann die Vorhersage schwierig sein. Die beste Methode ist, Ihren Zyklus mehrere Monate (3-6 Monate) zu verfolgen und seine durchschnittliche Länge zu berechnen. Verwenden Sie Ihre längsten und kürzesten Zyklen, um einen ungefähren Bereich für Ihr fruchtbares Fenster zu erhalten. Denken Sie daran, dass dieser Rechner Schätzungen liefert und bei erheblicher Unregelmäßigkeit empfohlen wird, einen Arzt zu konsultieren.',
            },
            {
              title: 'Menstruationszyklus-Rechner im Hijri-Kalender',
              content: 'Medizinische Menstruationszyklus-Rechner verwenden hauptsächlich den gregorianischen Kalender, da er besser mit den biologischen Zyklen übereinstimmt. Das gregorianische Jahr hat 365 Tage, während das Hijri-Jahr etwa 11 Tage kürzer ist. Dieser Unterschied macht die Verwendung des Hijri-Kalenders zur Vorhersage schwierig und ungenau. Für die besten Ergebnisse wird immer empfohlen, das gregorianische Datum zu verwenden.',
            },
            {
              title: 'Menstruationszyklus-Diagramm',
              content: 'Ein Menstruationszyklus-Diagramm ist ein Kalender, der die erwarteten Daten Ihres Zyklus anzeigt. Nach der Verwendung unseres Rechners werden die Ergebnisse als Zeitachse für die nächsten drei Zyklen angezeigt. Dieses Diagramm enthält: das Datum der nächsten Periode, den erwarteten Eisprungtag, das fruchtbare Fenster (beste Tage für die Empfängnis) und die Zeit des prämenstruellen Syndroms (PMS). Dieses Diagramm hilft Ihnen, Ihre Gesundheit zu verfolgen und den Rhythmus Ihres Körpers zu verstehen.',
            },
            {
              title: 'Was ist die Eisprungwoche oder das fruchtbare Fenster?',
              content: 'Das fruchtbare Fenster ist die Zeit während Ihres Menstruationszyklus, in der Sie am ehesten schwanger werden können. Dieser Zeitraum dauert etwa 6 Tage und umfasst die fünf Tage vor dem Eisprung und den Tag des Eisprungs selbst. Der Eisprung tritt auf, wenn der Eierstock eine reife Eizelle freisetzt, und die Chancen auf eine Schwangerschaft sind in dieser Zeit am höchsten.',
            },
            {
              title: 'Sollte der Geschlechtsverkehr vor oder nach dem Eisprung stattfinden?',
              content: 'Um die Chancen auf eine Schwangerschaft zu erhöhen, wird Geschlechtsverkehr in den Tagen vor und am Tag des Eisprungs empfohlen. Dies liegt daran, dass Spermien bis zu 5 Tage im Körper einer Frau überleben können, während die Eizelle nach der Freisetzung nur 12-24 Stunden lebt. Daher stellt der Geschlechtsverkehr vor dem Eisprung sicher, dass Spermien bereit sind, die Eizelle zu befruchten, sobald sie freigesetzt wird.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Schwangerschafts- & Geburtsterminrechner",
        subtitle: "Entdecken Sie Ihren geschätzten Geburtstermin und die Schwangerschaftsphasen",
        disclaimer: "* Dieses Datum ist eine Schätzung und kann variieren. Konsultieren Sie immer Ihren Arzt.",
        form: {
            lastPeriodDate: "Erster Tag Ihrer letzten Periode",
        },
        calculateButton: "Geburtstermin berechnen",
        results: {
            dueDateIs: "Ihr geschätzter Geburtstermin ist",
            youAreInWeek: "Sie sind in der {weeks}. Woche und am {days}. Tag schwanger",
            conceptionDate: "Geschätztes Empfängnisdatum",
            endOfFirstTrimester: "Ende des ersten Trimesters",
            endOfSecondTrimester: "Ende des zweiten Trimesters",
        },
        errors: {
            fullDate: 'Bitte geben Sie das vollständige Datum des ersten Tages Ihrer letzten Periode ein.',
            invalidDate: 'Ungültiges Datum. Der ausgewählte Tag existiert in diesem Monat nicht.',
            futureDate: 'Das Datum der letzten Periode muss in der Vergangenheit liegen.',
        },
        info: {
            title: "Informationen, die für Sie wichtig sind",
            items: [
                {
                  title: 'Schwangerschaftsrechner und wie man ihn benutzt',
                  content: 'Ein Schwangerschaftsrechner ist ein digitales Werkzeug, das Ihnen hilft, Ihren Geburtstermin zu schätzen und Ihre Schwangerschaftsphasen zu verfolgen. Geben Sie einfach den ersten Tag Ihrer letzten Menstruation (LMP) ein, und der Rechner erledigt den Rest, berechnet das Gestationsalter in Wochen und Tagen und gibt Ihnen wichtige Daten wie den erwarteten Geburtstermin und das Ende jedes Trimesters.'
                },
                {
                  title: 'Wie wird der Geburtstermin berechnet?',
                  content: 'Der geschätzte Geburtstermin (ET) wird normalerweise berechnet, indem 280 Tage (40 Wochen) zum ersten Tag Ihrer letzten Menstruation (LMP) hinzugefügt werden. Dies ist die häufigste Methode, bekannt als Naegele-Regel. Diese Methode geht davon aus, dass Ihr Menstruationszyklus regelmäßig und 28 Tage lang ist und der Eisprung am 14. Tag des Zyklus stattfindet.',
                },
                {
                  title: 'Berechnung der Schwangerschaft in Wochen und Monaten',
                  content: 'Die Schwangerschaft wird medizinisch in Wochen gemessen, mit einer Gesamtdauer von 40 Wochen. Die Wochen beginnen am ersten Tag der letzten Menstruation. Um in ungefähre Monate umzurechnen:\n• Erstes Trimester: Wochen 1 bis 13 (Monate 1-3).\n• Zweites Trimester: Wochen 14 bis 27 (Monate 4-6).\n• Drittes Trimester: Wochen 28 bis 40 (Monate 7-9).\nUnser Rechner zeigt Ihnen genau, in welcher Woche und an welchem Tag Sie sich befinden.'
                },
                {
                  title: 'Berechnung der Schwangerschaft mit dem Hijri-Kalender',
                  content: 'Medizinische Schwangerschaftsrechner stützen sich auf den gregorianischen Kalender, da das gregorianische Jahr (365 Tage) den Schwangerschaftszyklen näher kommt als das Hijri-Jahr (etwa 354 Tage). Um den Geburtstermin im Hijri-Kalender zu berechnen, müssen Sie zuerst das Datum im gregorianischen Kalender bestimmen und es dann umrechnen. Denken Sie daran, dass diese Umrechnung aufgrund der unterschiedlichen Längen der Monate zwischen den beiden Kalendern möglicherweise nicht 100% genau ist.'
                },
                {
                  title: 'Kurze Tabelle des fötalen Wachstums und der Entwicklung',
                  content: 'Während Ihrer Schwangerschaftsreise durchläuft Ihr Fötus erstaunliche Entwicklungen:\n• Erstes Trimester: Wichtige Organe wie Herz und Gehirn bilden sich, und das Herz beginnt zu schlagen.\n• Zweites Trimester: Der Fötus wächst schnell, und Sie können seine ersten Bewegungen spüren.\n• Drittes Trimester: Die Lungen des Fötus reifen, und sein Gewicht nimmt erheblich zu, um sich auf das Leben außerhalb des Mutterleibs vorzubereiten.'
                },
                {
                  title: 'Schwangerschaftszeitplan und wichtige Daten',
                  content: 'Der Schwangerschaftsrechner hilft Ihnen, einen wichtigen Zeitplan für Ihre Schwangerschaft zu verfolgen. Die vom Rechner angezeigten Schlüsseldaten sind:\n• Geschätztes Empfängnisdatum.\n• Ende des ersten Trimesters: Ein wichtiger Meilenstein in der fötalen Entwicklung.\n• Ende des zweiten Trimesters: Der Beginn der letzten Phase der Schwangerschaft.\n• Geschätzter Geburtstermin: Der Tag, auf den Sie warten, um Ihr Baby kennenzulernen.'
                },
                {
                  title: 'Ist der Schwangerschaftsrechner genau?',
                  content: 'Der Schwangerschaftsrechner liefert eine gute Schätzung des Geburtstermins, ist aber nicht 100% genau. Nur etwa 5% der Babys werden an ihrem genauen Geburtstermin geboren. Es ist ein ausgezeichnetes Werkzeug zur Planung und Vorbereitung, aber Sie sollten immer Ihren Arzt für eine genaue Beurteilung des Geburtstermins und des Schwangerschaftsverlaufs konsultieren.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Wichtige Artikel und Informationen",
        articles: [
            {
                title: 'Wie berechnet man den Menstruationszyklus?',
                content: 'Der Menstruationszyklus beginnt am ersten Tag der Menstruationsblutung und endet einen Tag vor dem nächsten Zyklus. Um Ihre Zykluslänge zu berechnen, zählen Sie die Tage vom ersten Tag der aktuellen Periode bis zum ersten Tag der nächsten Periode. Der Durchschnitt liegt bei 28 Tagen, kann aber natürlich variieren. Unser Rechner automatisiert diesen Prozess, um Ihnen die Mühe der manuellen Berechnung zu ersparen.',
            },
            {
                title: 'Berechnung eines unregelmäßigen Menstruationszyklus',
                content: 'Wenn Ihr Zyklus unregelmäßig ist, kann die Vorhersage schwierig sein. Die beste Methode ist, Ihren Zyklus mehrere Monate (3-6 Monate) zu verfolgen und seine durchschnittliche Länge zu berechnen. Verwenden Sie Ihre längsten und kürzesten Zyklen, um einen ungefähren Bereich für Ihr fruchtbares Fenster zu erhalten. Denken Sie daran, dass dieser Rechner Schätzungen liefert und bei erheblicher Unregelmäßigkeit empfohlen wird, einen Arzt zu konsultieren.',
            },
            {
                title: 'Was ist die Eisprungwoche oder das fruchtbare Fenster?',
                content: 'Das fruchtbare Fenster ist die Zeit während Ihres Menstruationszyklus, in der Sie am ehesten schwanger werden können. Dieser Zeitraum dauert etwa 6 Tage und umfasst die fünf Tage vor dem Eisprung und den Tag des Eisprungs selbst. Der Eisprung tritt auf, wenn der Eierstock eine reife Eizelle freisetzt, und die Chancen auf eine Schwangerschaft sind in dieser Zeit am höchsten.',
            },
            {
                title: 'Sollte der Geschlechtsverkehr vor oder nach dem Eisprung stattfinden?',
                content: 'Um die Chancen auf eine Schwangerschaft zu erhöhen, wird Geschlechtsverkehr in den Tagen vor und am Tag des Eisprungs empfohlen. Dies liegt daran, dass Spermien bis zu 5 Tage im Körper einer Frau überleben können, während die Eizelle nach der Freisetzung nur 12-24 Stunden lebt. Daher stellt der Geschlechtsverkehr vor dem Eisprung sicher, dass Spermien bereit sind, die Eizelle zu befruchten, sobald sie freigesetzt wird.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Über Uns",
        paragraph1: "Willkommen bei \"Anouthati\", Ihrem vertrauenswürdigen Ziel für alles rund um die Gesundheit von Frauen. Wir glauben, dass Wissen Macht ist, und unser Ziel ist es, Frauen die Werkzeuge und Informationen zur Verfügung zu stellen, die sie benötigen, um ihren Körper besser zu verstehen und fundierte Gesundheitsentscheidungen zu treffen.",
        paragraph2: "Wir begannen mit einer einfachen Idee: einen genauen und benutzerfreundlichen Menstruationszyklus-Rechner auf Arabisch zu erstellen. Von dort aus haben wir uns zu einer umfassenden Plattform entwickelt, die nicht nur Tracking-Tools, sondern auch zuverlässige Artikel und Bildungsinhalte über den Menstruationszyklus, die Fruchtbarkeit und ein gesundes Leben im Allgemeinen bietet.",
        missionTitle: "Unsere Mission",
        missionText: "Unsere Mission ist es, Barrieren und Missverständnisse rund um die Gesundheit von Frauen abzubauen, indem wir vereinfachte wissenschaftliche Inhalte bereitstellen und unsere Gemeinschaft von Frauen auf ihrem Weg zu einem gesünderen und glücklicheren Leben unterstützen.",
    },

    // Contact Page
    contactPage: {
        title: "Kontaktieren Sie uns",
        subtitle: "Wir sind hier, um zu helfen. Wenn Sie Fragen oder Anregungen haben, zögern Sie nicht, uns zu kontaktieren.",
        email: "E-Mail",
        phone: "Telefon",
    }
}