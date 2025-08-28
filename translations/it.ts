export default {
    code: 'it',
    name: 'Italiano',
    dir: 'ltr',
    
    // Shared
    day: 'Giorno',
    month: 'Mese',
    year: 'Anno',
    days: 'giorni',
    calculate: 'Calcola Ora',
    results: 'Risultati Previsti',
    from: 'Dal',
    to: 'al',
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Calcolatore Ciclo",
      pregnancyCalculator: "Calcolatore Gravidanza",
      articles: "Articoli",
      aboutUs: "Chi Siamo",
      contactUs: "Contattaci",
    },

    // Footer
    footer: {
      copyright: "© {year} Sito Web Anouthati. Tutti i diritti riservati.",
    },

    // Home Page
    homePage: {
      title: "Calcolatore del Ciclo Mestruale",
      subtitle: "Prevedi facilmente il tuo prossimo ciclo e la finestra fertile",
      disclaimer: "* Queste date sono stime e possono variare da persona a persona. Questo strumento non deve essere usato come metodo contraccettivo.",
      form: {
        lastPeriodDate: "Primo giorno del tuo ultimo ciclo",
        cycleLength: "Durata del Ciclo",
        periodDuration: "Durata delle Mestruazioni",
      },
      results: {
        nextPeriodIn: "Il tuo prossimo ciclo dovrebbe iniziare tra",
        itsTime: "È Ora",
        ovulationDate: "Data di Ovulazione",
        fertileWindow: "Finestra Fertile Stimata",
        pmsWindow: "Finestra Sindrome Premestruale (PMS)",
        pmsStart: "Inizia approssimativamente dal",
        tabs: ['Prossimo Ciclo', 'Secondo Ciclo', 'Terzo Ciclo'],
      },
      errors: {
        fullDate: 'Inserisci la data completa del primo giorno del tuo ultimo ciclo.',
        invalidDate: 'Data non valida. Il giorno selezionato non esiste in questo mese.',
      },
      faq: {
        title: "Domande Frequenti",
        items: [
            {
              title: 'Come calcolare il ciclo mestruale?',
              content: 'Il ciclo mestruale inizia il primo giorno del sanguinamento mestruale e termina un giorno prima del ciclo successivo. Per calcolare la durata del tuo ciclo, conta i giorni dal primo giorno del ciclo attuale al primo giorno del ciclo successivo. La media è di 28 giorni, ma può variare naturalmente. Il nostro calcolatore automatizza questo processo per risparmiarti la fatica del calcolo manuale.',
            },
            {
              title: 'Calcolo di un ciclo mestruale regolare',
              content: 'Un ciclo è considerato regolare se la sua durata è approssimativamente costante ogni mese (con una differenza di un giorno o due). Si calcola contando i giorni dal primo giorno delle mestruazioni attuali al primo giorno delle successive. Se il tuo ciclo è regolare, il nostro calcolatore è molto preciso nel prevedere le date dei prossimi cicli e l\'ovulazione, aiutandoti a pianificare meglio.',
            },
            {
              title: 'Calcolo di un ciclo mestruale irregolare',
              content: 'Se il tuo ciclo è irregolare, la previsione può essere difficile. Il metodo migliore è monitorare il tuo ciclo per diversi mesi (3-6 mesi) e calcolarne la durata media. Usa i tuoi cicli più lunghi e più corti per ottenere un intervallo approssimativo della tua finestra fertile. Ricorda che questo calcolatore fornisce stime e, in caso di irregolarità significativa, è consigliabile consultare un medico.',
            },
            {
              title: 'Calcolatore del ciclo mestruale nel calendario Hijri',
              content: 'I calcolatori medici del ciclo mestruale utilizzano principalmente il calendario gregoriano perché si allinea meglio con i cicli biologici. L\'anno gregoriano ha 365 giorni, mentre l\'anno Hijri è più corto di circa 11 giorni. Questa differenza rende difficile e impreciso l\'uso del calendario Hijri per le previsioni. Per ottenere i migliori risultati, si consiglia sempre di utilizzare la data gregoriana.',
            },
            {
              title: 'Grafico del ciclo mestruale',
              content: 'Un grafico del ciclo mestruale è un calendario che mostra le date previste del tuo ciclo. Dopo aver utilizzato il nostro calcolatore, i risultati vengono visualizzati come una linea temporale per i prossimi tre cicli. Questo grafico include: la data del prossimo ciclo, il giorno previsto dell\'ovulazione, la finestra fertile (i giorni migliori per il concepimento) e il periodo della sindrome premestruale (PMS). Questo grafico ti aiuta a monitorare la tua salute e a capire il ritmo del tuo corpo.',
            },
            {
              title: 'Cos\'è la settimana dell\'ovulazione o la finestra fertile?',
              content: 'La finestra fertile è il periodo di tempo durante il tuo ciclo mestruale in cui hai maggiori probabilità di concepire. Questo periodo dura circa 6 giorni, inclusi i cinque giorni prima dell\'ovulazione e il giorno dell\'ovulazione stesso. L\'ovulazione si verifica quando l\'ovaio rilascia un ovulo maturo e le possibilità di gravidanza sono più alte durante questo periodo.',
            },
            {
              title: 'I rapporti sessuali dovrebbero avvenire prima o dopo l\'ovulazione?',
              content: 'Per aumentare le possibilità di gravidanza, si consiglia di avere rapporti sessuali nei giorni precedenti e il giorno dell\'ovulazione. Questo perché gli spermatozoi possono vivere nel corpo di una donna fino a 5 giorni, mentre l\'ovulo vive solo per 12-24 ore dopo essere stato rilasciato. Pertanto, avere rapporti sessuali prima dell\'ovulazione garantisce che gli spermatozoi siano pronti a fecondare l\'ovulo non appena viene rilasciato.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Calcolatore di Gravidanza e Data del Parto",
        subtitle: "Scopri la data presunta del parto e le fasi della gravidanza",
        disclaimer: "* Questa data è una stima e può variare. Consulta sempre il tuo medico.",
        form: {
            lastPeriodDate: "Primo giorno del tuo ultimo ciclo",
        },
        calculateButton: "Calcola Data del Parto",
        results: {
            dueDateIs: "La tua data presunta del parto è",
            youAreInWeek: "Sei incinta di {weeks} settimane e {days} giorni",
            conceptionDate: "Data di Concepimento Stimata",
            endOfFirstTrimester: "Fine del Primo Trimestre",
            endOfSecondTrimester: "Fine del Secondo Trimestre",
        },
        errors: {
            fullDate: 'Inserisci la data completa del primo giorno del tuo ultimo ciclo.',
            invalidDate: 'Data non valida. Il giorno selezionato non esiste in questo mese.',
            futureDate: 'La data dell\'ultimo ciclo deve essere nel passato.',
        },
        info: {
            title: "Informazioni che ti Interessano",
            items: [
                {
                  title: 'Calcolatore di Gravidanza e Come Usarlo',
                  content: 'Un calcolatore di gravidanza è uno strumento digitale che ti aiuta a stimare la data del parto e a monitorare le fasi della gravidanza. Inserisci semplicemente il primo giorno del tuo ultimo ciclo mestruale (UM), e il calcolatore fa il resto, calcolando l\'età gestazionale in settimane e giorni e fornendoti date importanti come la data presunta del parto e la fine di ogni trimestre.'
                },
                {
                  title: 'Come viene calcolata la data del parto?',
                  content: 'La data presunta del parto (DPP) viene solitamente calcolata aggiungendo 280 giorni (40 settimane) al primo giorno del tuo ultimo ciclo mestruale (UM). Questo è il metodo più comune, noto come regola di Naegele. Questo metodo presume che il tuo ciclo mestruale sia regolare e di 28 giorni, e che l\'ovulazione avvenga il 14° giorno del ciclo.',
                },
                {
                  title: 'Calcolo della gravidanza in settimane e mesi',
                  content: 'La gravidanza viene misurata medicalmente in settimane, con una durata totale di 40 settimane. Le settimane iniziano dal primo giorno dell\'ultimo ciclo mestruale. Per convertire in mesi approssimativi:\n• Primo Trimestre: Settimane da 1 a 13 (Mesi 1-3).\n• Secondo Trimestre: Settimane da 14 a 27 (Mesi 4-6).\n• Terzo Trimestre: Settimane da 28 a 40 (Mesi 7-9).\nIl nostro calcolatore ti mostra esattamente in quale settimana e giorno ti trovi.'
                },
                {
                  title: 'Calcolo della gravidanza con il calendario Hijri',
                  content: 'I calcolatori di gravidanza medici si basano sul calendario gregoriano perché l\'anno gregoriano (365 giorni) è più vicino ai cicli di gravidanza rispetto all\'anno Hijri (circa 354 giorni). Per calcolare la data del parto in Hijri, devi prima determinare la data nel calendario gregoriano e poi convertirla. Ricorda che questa conversione potrebbe non essere precisa al 100% a causa delle diverse lunghezze dei mesi tra i due calendari.'
                },
                {
                  title: 'Breve tabella della crescita e dello sviluppo fetale',
                  content: 'Durante il tuo percorso di gravidanza, il tuo feto subisce sviluppi sorprendenti:\n• Primo Trimestre: Si formano organi importanti come il cuore e il cervello, e il cuore inizia a battere.\n• Secondo Trimestre: Il feto cresce rapidamente e puoi iniziare a sentire i suoi primi movimenti.\n• Terzo Trimestre: I polmoni del feto maturano e il suo peso aumenta significativamente in preparazione alla vita fuori dall\'utero.'
                },
                {
                  title: 'Cronologia della gravidanza e date importanti',
                  content: 'Il calcolatore di gravidanza ti aiuta a monitorare una cronologia importante per la tua gravidanza. Le date chiave mostrate dal calcolatore sono:\n• Data stimata del concepimento.\n• Fine del primo trimestre: una tappa importante nello sviluppo fetale.\n• Fine del secondo trimestre: l\'inizio della fase finale della gravidanza.\n• Data presunta del parto: il giorno che aspetti per incontrare il tuo bambino.'
                },
                {
                  title: 'Il calcolatore di gravidanza è preciso?',
                  content: 'Il calcolatore di gravidanza fornisce una buona stima della data del parto, ma non è preciso al 100%. Solo circa il 5% dei bambini nasce nella data esatta del parto. È un ottimo strumento per la pianificazione e la preparazione, ma dovresti sempre consultare il tuo medico per una valutazione accurata della data del parto e del progresso della gravidanza.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Articoli e Informazioni Importanti",
        articles: [
            {
                title: 'Come calcolare il ciclo mestruale?',
                content: 'Il ciclo mestruale inizia il primo giorno del sanguinamento mestruale e termina un giorno prima del ciclo successivo. Per calcolare la durata del tuo ciclo, conta i giorni dal primo giorno del ciclo attuale al primo giorno del ciclo successivo. La media è di 28 giorni, ma può variare naturalmente. Il nostro calcolatore automatizza questo processo per risparmiarti la fatica del calcolo manuale.',
            },
            {
                title: 'Calcolo di un ciclo mestruale irregolare',
                content: 'Se il tuo ciclo è irregolare, la previsione può essere difficile. Il metodo migliore è monitorare il tuo ciclo per diversi mesi (3-6 mesi) e calcolarne la durata media. Usa i tuoi cicli più lunghi e più corti per ottenere un intervallo approssimativo della tua finestra fertile. Ricorda che questo calcolatore fornisce stime e, in caso di irregolarità significativa, è consigliabile consultare un medico.',
            },
            {
                title: 'Cos\'è la settimana dell\'ovulazione o la finestra fertile?',
                content: 'La finestra fertile è il periodo di tempo durante il tuo ciclo mestruale in cui hai maggiori probabilità di concepire. Questo periodo dura circa 6 giorni, inclusi i cinque giorni prima dell\'ovulazione e il giorno dell\'ovulazione stesso. L\'ovulazione si verifica quando l\'ovaio rilascia un ovulo maturo e le possibilità di gravidanza sono più alte durante questo periodo.',
            },
            {
                title: 'I rapporti sessuali dovrebbero avvenire prima o dopo l\'ovulazione?',
                content: 'Per aumentare le possibilità di gravidanza, si consiglia di avere rapporti sessuali nei giorni precedenti e il giorno dell\'ovulazione. Questo perché gli spermatozoi possono vivere nel corpo di una donna fino a 5 giorni, mentre l\'ovulo vive solo per 12-24 ore dopo essere stato rilasciato. Pertanto, avere rapporti sessuali prima dell\'ovulazione garantisce che gli spermatozoi siano pronti a fecondare l\'ovulo non appena viene rilasciato.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Chi Siamo",
        paragraph1: "Benvenuta su \"Anouthati\", la tua destinazione di fiducia per tutto ciò che riguarda la salute delle donne. Crediamo che la conoscenza sia potere e il nostro obiettivo è fornire alle donne gli strumenti e le informazioni di cui hanno bisogno per comprendere meglio il proprio corpo e prendere decisioni sanitarie consapevoli.",
        paragraph2: "Abbiamo iniziato con un'idea semplice: creare un calcolatore del ciclo mestruale preciso e facile da usare in arabo. Da lì, ci siamo evoluti in una piattaforma completa che offre non solo strumenti di monitoraggio, ma anche articoli affidabili e contenuti educativi sul ciclo mestruale, la fertilità e uno stile di vita sano in generale.",
        missionTitle: "La Nostra Missione",
        missionText: "La nostra missione è abbattere le barriere e le idee sbagliate sulla salute delle donne fornendo contenuti scientifici semplificati e sostenendo la nostra comunità di donne nel loro viaggio verso una vita più sana e felice.",
    },

    // Contact Page
    contactPage: {
        title: "Contattaci",
        subtitle: "Siamo qui per aiutarti. Se hai domande o suggerimenti, non esitare a contattarci.",
        email: "Email",
        phone: "Telefono",
    }
}