export default {
    code: 'fr',
    name: 'Français',
    dir: 'ltr',
    
    // Shared
    day: 'Jour',
    month: 'Mois',
    year: 'Année',
    days: 'jours',
    calculate: 'Calculer maintenant',
    results: 'Résultats attendus',
    from: 'Du',
    to: 'au',
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Calculateur de règles",
      pregnancyCalculator: "Calculateur de grossesse",
      articles: "Articles",
      aboutUs: "À propos de nous",
      contactUs: "Contactez-nous",
    },

    // Footer
    footer: {
      copyright: "© {year} Site Web Anouthati. Tous droits réservés.",
    },

    // Home Page
    homePage: {
      title: "Calculateur de cycle menstruel",
      subtitle: "Prédisez facilement vos prochaines règles et votre fenêtre de fertilité",
      disclaimer: "* Ces dates sont des estimations et peuvent varier d'une personne à l'autre. Cet outil ne doit pas être utilisé comme moyen de contraception.",
      form: {
        lastPeriodDate: "Premier jour de vos dernières règles",
        cycleLength: "Durée du cycle",
        periodDuration: "Durée des règles",
      },
      results: {
        nextPeriodIn: "Vos prochaines règles devraient commencer dans",
        itsTime: "C'est le moment",
        ovulationDate: "Date d'ovulation",
        fertileWindow: "Fenêtre de fertilité estimée",
        pmsWindow: "Fenêtre du syndrome prémenstruel (SPM)",
        pmsStart: "Commence approximativement à partir de",
        tabs: ['Prochaines règles', 'Deuxièmes règles', 'Troisièmes règles'],
      },
      errors: {
        fullDate: 'Veuillez entrer la date complète du premier jour de vos dernières règles.',
        invalidDate: 'Date invalide. Le jour sélectionné n\'existe pas dans ce mois.',
      },
      faq: {
        title: "Questions fréquemment posées",
        items: [
            {
              title: 'Comment calculer le cycle menstruel ?',
              content: 'Le cycle menstruel commence le premier jour des saignements menstruels et se termine un jour avant le cycle suivant. Pour calculer la durée de votre cycle, comptez les jours à partir du premier jour des règles actuelles jusqu\'au premier jour des règles suivantes. La moyenne est de 28 jours, mais cela peut varier naturellement. Notre calculateur automatise ce processus pour vous éviter le calcul manuel.',
            },
            {
              title: 'Calcul d\'un cycle menstruel régulier',
              content: 'Un cycle est considéré comme régulier si sa durée est à peu près constante chaque mois (à un ou deux jours près). Il est calculé en comptant les jours à partir du premier jour de la menstruation actuelle jusqu\'au premier jour de la suivante. Si votre cycle est régulier, notre calculateur est très précis pour prédire les dates des prochaines règles et l\'ovulation, vous aidant à mieux planifier.',
            },
            {
              title: 'Calcul d\'un cycle menstruel irrégulier',
              content: 'Si votre cycle est irrégulier, la prédiction peut être difficile. La meilleure méthode est de suivre votre cycle pendant plusieurs mois (3-6 mois) et de calculer sa durée moyenne. Utilisez vos cycles les plus longs et les plus courts pour obtenir une fourchette approximative de votre fenêtre de fertilité. N\'oubliez pas que ce calculateur fournit des estimations et qu\'en cas d\'irrégularité importante, il est conseillé de consulter un médecin.',
            },
            {
              title: 'Calculateur de cycle menstruel dans le calendrier hégirien',
              content: 'Les calculateurs de cycle menstruel médicaux utilisent principalement le calendrier grégorien car il correspond mieux aux cycles biologiques. L\'année grégorienne compte 365 jours, tandis que l\'année hégirienne est plus courte d\'environ 11 jours. Cette différence rend l\'utilisation du calendrier hégirien pour la prédiction difficile et imprécise. Pour de meilleurs résultats, il est toujours recommandé d\'utiliser la date grégorienne.',
            },
            {
              title: 'Tableau du cycle menstruel',
              content: 'Un tableau du cycle menstruel est un calendrier indiquant les dates prévues de votre cycle. Après avoir utilisé notre calculateur, les résultats sont affichés sous forme de chronologie pour les trois prochains cycles. Ce tableau comprend : la date des prochaines règles, le jour d\'ovulation prévu, la fenêtre de fertilité (meilleurs jours pour la conception) et la période du syndrome prémenstruel (SPM). Ce tableau vous aide à suivre votre santé et à comprendre le rythme de votre corps.',
            },
            {
              title: 'Qu\'est-ce que la semaine d\'ovulation ou la fenêtre de fertilité ?',
              content: 'La fenêtre de fertilité est la période de votre cycle menstruel pendant laquelle vous êtes le plus susceptible de concevoir. Cette période dure environ 6 jours, y compris les cinq jours précédant l\'ovulation et le jour de l\'ovulation lui-même. L\'ovulation se produit lorsque l\'ovaire libère un ovule mature, et les chances de grossesse sont les plus élevées pendant cette période.',
            },
            {
              title: 'Les rapports sexuels doivent-ils avoir lieu avant ou après l\'ovulation ?',
              content: 'Pour augmenter les chances de grossesse, il est recommandé d\'avoir des rapports sexuels dans les jours précédant l\'ovulation et le jour de l\'ovulation. En effet, les spermatozoïdes peuvent vivre dans le corps d\'une femme jusqu\'à 5 jours, tandis que l\'ovule ne vit que 12 à 24 heures après sa libération. Par conséquent, avoir des rapports sexuels avant l\'ovulation garantit que les spermatozoïdes sont prêts à féconder l\'ovule dès sa libération.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Calculateur de grossesse et de date d'accouchement",
        subtitle: "Découvrez votre date d'accouchement estimée et les étapes de votre grossesse",
        disclaimer: "* Cette date est une estimation et peut varier. Consultez toujours votre médecin.",
        form: {
            lastPeriodDate: "Premier jour de vos dernières règles",
        },
        calculateButton: "Calculer la date d'accouchement",
        results: {
            dueDateIs: "Votre date d'accouchement estimée est",
            youAreInWeek: "Vous êtes enceinte de {weeks} semaines et {days} jours",
            conceptionDate: "Date de conception estimée",
            endOfFirstTrimester: "Fin du premier trimestre",
            endOfSecondTrimester: "Fin du deuxième trimestre",
        },
        errors: {
            fullDate: 'Veuillez entrer la date complète du premier jour de vos dernières règles.',
            invalidDate: 'Date invalide. Le jour sélectionné n\'existe pas dans ce mois.',
            futureDate: 'La date des dernières règles doit être dans le passé.',
        },
        info: {
            title: "Informations qui vous intéressent",
            items: [
                {
                  title: 'Calculateur de grossesse et comment l\'utiliser',
                  content: 'Un calculateur de grossesse est un outil numérique qui vous aide à estimer votre date d\'accouchement et à suivre les étapes de votre grossesse. Il vous suffit d\'entrer le premier jour de vos dernières règles (DDR), et le calculateur fait le reste, calculant l\'âge gestationnel en semaines et en jours, et vous donnant des dates importantes comme la date d\'accouchement prévue et la fin de chaque trimestre.'
                },
                {
                  title: 'Comment la date d\'accouchement est-elle calculée ?',
                  content: 'La date d\'accouchement estimée (DAE) est généralement calculée en ajoutant 280 jours (40 semaines) au premier jour de vos dernières règles (DDR). C\'est la méthode la plus courante, connue sous le nom de règle de Naegele. Cette méthode suppose que votre cycle menstruel est régulier et de 28 jours, et que l\'ovulation a lieu le 14ème jour du cycle.',
                },
                {
                  title: 'Calcul de la grossesse en semaines et en mois',
                  content: 'La grossesse est médicalement mesurée en semaines, avec une durée totale de 40 semaines. Les semaines commencent à partir du premier jour des dernières règles. Pour convertir en mois approximatifs :\n• Premier trimestre : Semaines 1 à 13 (Mois 1-3).\n• Deuxième trimestre : Semaines 14 à 27 (Mois 4-6).\n• Troisième trimestre : Semaines 28 à 40 (Mois 7-9).\nNotre calculateur vous indique exactement dans quelle semaine et quel jour vous vous trouvez.'
                },
                {
                  title: 'Calcul de la grossesse avec le calendrier hégirien',
                  content: 'Les calculateurs de grossesse médicaux s\'appuient sur le calendrier grégorien car l\'année grégorienne (365 jours) est plus proche des cycles de grossesse que l\'année hégirienne (environ 354 jours). Pour calculer la date d\'accouchement en hégirien, vous devez d\'abord déterminer la date dans le calendrier grégorien, puis la convertir. N\'oubliez pas que cette conversion peut ne pas être précise à 100 % en raison des différentes longueurs des mois entre les deux calendriers.'
                },
                {
                  title: 'Tableau résumé de la croissance et du développement du fœtus',
                  content: 'Au cours de votre grossesse, votre fœtus subit des développements étonnants :\n• Premier trimestre : Les organes principaux comme le cœur et le cerveau se forment, et le cœur commence à battre.\n• Deuxième trimestre : Le fœtus grandit rapidement, et vous pouvez commencer à sentir ses premiers mouvements.\n• Troisième trimestre : Les poumons du fœtus mûrissent, et son poids augmente considérablement en préparation à la vie hors de l\'utérus.'
                },
                {
                  title: 'Chronologie de la grossesse et dates importantes',
                  content: 'Le calculateur de grossesse vous aide à suivre une chronologie importante pour votre grossesse. Les dates clés indiquées par le calculateur sont :\n• Date estimée de la conception.\n• Fin du premier trimestre : une étape importante dans le développement du fœtus.\n• Fin du deuxième trimestre : le début de la dernière étape de la grossesse.\n• Date d\'accouchement estimée : le jour que vous attendez pour rencontrer votre bébé.'
                },
                {
                  title: 'Le calculateur de grossesse est-il précis ?',
                  content: 'Le calculateur de grossesse fournit une bonne estimation de la date d\'accouchement, mais il n\'est pas précis à 100 %. Seulement environ 5 % des bébés naissent à leur date d\'accouchement exacte. C\'est un excellent outil de planification et de préparation, mais vous devez toujours consulter votre médecin pour une évaluation précise de la date d\'accouchement et du déroulement de la grossesse.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Articles et informations importants",
        articles: [
            {
                title: 'Comment calculer le cycle menstruel ?',
                content: 'Le cycle menstruel commence le premier jour des saignements menstruels et se termine un jour avant le cycle suivant. Pour calculer la durée de votre cycle, comptez les jours à partir du premier jour des règles actuelles jusqu\'au premier jour des règles suivantes. La moyenne est de 28 jours, mais cela peut varier naturellement. Notre calculateur automatise ce processus pour vous éviter le calcul manuel.',
            },
            {
                title: 'Calcul d\'un cycle menstruel irrégulier',
                content: 'Si votre cycle est irrégulier, la prédiction peut être difficile. La meilleure méthode est de suivre votre cycle pendant plusieurs mois (3-6 mois) et de calculer sa durée moyenne. Utilisez vos cycles les plus longs et les plus courts pour obtenir une fourchette approximative de votre fenêtre de fertilité. N\'oubliez pas que ce calculateur fournit des estimations et qu\'en cas d\'irrégularité importante, il est conseillé de consulter un médecin.',
            },
            {
                title: 'Qu\'est-ce que la semaine d\'ovulation ou la fenêtre de fertilité ?',
                content: 'La fenêtre de fertilité est la période de votre cycle menstruel pendant laquelle vous êtes le plus susceptible de concevoir. Cette période dure environ 6 jours, y compris les cinq jours précédant l\'ovulation et le jour de l\'ovulation lui-même. L\'ovulation se produit lorsque l\'ovaire libère un ovule mature, et les chances de grossesse sont les plus élevées pendant cette période.',
            },
            {
                title: 'Les rapports sexuels doivent-ils avoir lieu avant ou après l\'ovulation ?',
                content: 'Pour augmenter les chances de grossesse, il est recommandé d\'avoir des rapports sexuels dans les jours précédant l\'ovulation et le jour de l\'ovulation. En effet, les spermatozoïdes peuvent vivre dans le corps d\'une femme jusqu\'à 5 jours, tandis que l\'ovule ne vit que 12 à 24 heures après sa libération. Par conséquent, avoir des rapports sexuels avant l\'ovulation garantit que les spermatozoïdes sont prêts à féconder l\'ovule dès sa libération.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "À propos de nous",
        paragraph1: "Bienvenue sur \"Anouthati\", votre destination de confiance pour tout ce qui concerne la santé des femmes. Nous croyons que la connaissance, c'est le pouvoir, et notre objectif est de fournir aux femmes les outils et les informations dont elles ont besoin pour mieux comprendre leur corps et prendre des décisions éclairées en matière de santé.",
        paragraph2: "Nous avons commencé avec une idée simple : créer un calculateur de cycle menstruel précis et facile à utiliser en arabe. De là, nous sommes devenus une plateforme complète qui offre non seulement des outils de suivi, mais aussi des articles fiables et du contenu éducatif sur le cycle menstruel, la fertilité et un mode de vie sain en général.",
        missionTitle: "Notre mission",
        missionText: "Notre mission est de briser les barrières et les idées fausses entourant la santé des femmes en fournissant un contenu scientifique simplifié et en soutenant notre communauté de femmes dans leur cheminement vers une vie plus saine et plus heureuse.",
    },

    // Contact Page
    contactPage: {
        title: "Contactez-nous",
        subtitle: "Nous sommes là pour vous aider. Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.",
        email: "E-mail",
        phone: "Téléphone",
    }
}