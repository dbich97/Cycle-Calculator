export default {
    code: 'pt',
    name: 'Português',
    dir: 'ltr',
    
    // Shared
    day: 'Dia',
    month: 'Mês',
    year: 'Ano',
    days: 'dias',
    calculate: 'Calcular Agora',
    results: 'Resultados Esperados',
    from: 'De',
    to: 'a',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Tipo de Calendário',
      gregorian: 'Gregoriano',
      hijri: 'Islâmico',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Calculadora Menstrual",
      pregnancyCalculator: "Calculadora de Gravidez",
      articles: "Artigos",
      aboutUs: "Sobre Nós",
      contactUs: "Contato",
    },

    // Footer
    footer: {
      copyright: "© {year} Site Anouthati. Todos os direitos reservados.",
    },

    // Home Page
    homePage: {
      title: "Calculadora do Ciclo Menstrual",
      subtitle: "Preveja facilmente seu próximo período e janela fértil",
      disclaimer: "* Estas datas são estimativas e podem variar de pessoa para pessoa. Esta ferramenta não deve ser usada como forma de contracepção.",
      form: {
        lastPeriodDate: "Primeiro dia do seu último período",
        cycleLength: "Duração do Ciclo",
        periodDuration: "Duração da Menstruação",
      },
      results: {
        nextPeriodIn: "Seu próximo período deve começar em",
        itsTime: "É Agora",
        ovulationDate: "Data da Ovulação",
        fertileWindow: "Janela Fértil Estimada",
        pmsWindow: "Janela da Síndrome Pré-Menstrual (SPM)",
        pmsStart: "Começa aproximadamente em",
        tabs: ['Próximo Período', 'Segundo Período', 'Terceiro Período'],
      },
      errors: {
        fullDate: 'Por favor, insira a data completa do primeiro dia do seu último período.',
        invalidDate: 'Data inválida. O dia selecionado não existe neste mês.',
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
            {
              title: 'Como calcular o ciclo menstrual?',
              content: 'O ciclo menstrual começa no primeiro dia do sangramento menstrual e termina um dia antes do próximo ciclo. Para calcular a duração do seu ciclo, conte os dias desde o primeiro dia do período atual até o primeiro dia do próximo período. A média é de 28 dias, mas pode variar naturalmente. Nossa calculadora automatiza esse processo para poupar o trabalho do cálculo manual.',
            },
            {
              title: 'Calculando um ciclo menstrual regular',
              content: 'Um ciclo é considerado regular se sua duração for aproximadamente constante a cada mês (com uma diferença de um ou dois dias). É calculado contando os dias desde o primeiro dia da menstruação atual até o primeiro dia da próxima. Se o seu ciclo for regular, nossa calculadora é muito precisa na previsão das datas dos próximos períodos e da ovulação, ajudando você a planejar melhor.',
            },
            {
              title: 'Calculando um ciclo menstrual irregular',
              content: 'Se o seu ciclo for irregular, a previsão pode ser difícil. O melhor método é acompanhar seu ciclo por vários meses (3-6 meses) e calcular sua duração média. Use seus ciclos mais longos e mais curtos para obter um intervalo aproximado para sua janela fértil. Lembre-se que esta calculadora fornece estimativas e, em casos de irregularidade significativa, é aconselhável consultar um médico.',
            },
            {
              title: 'Calculadora do ciclo menstrual no calendário islâmico',
              content: 'As calculadoras médicas do ciclo menstrual usam principalmente o calendário gregoriano porque ele se alinha melhor com os ciclos biológicos. O ano gregoriano tem 365 dias, enquanto o ano islâmico é cerca de 11 dias mais curto. Essa diferença torna o uso do calendário islâmico para previsão difícil e impreciso. Para obter os melhores resultados, é sempre recomendável usar a data gregoriana.',
            },
            {
              title: 'Tabela do ciclo menstrual',
              content: 'Uma tabela do ciclo menstrual é um calendário que mostra as datas esperadas do seu ciclo. Depois de usar nossa calculadora, os resultados são exibidos como uma linha do tempo para os próximos três ciclos. Esta tabela inclui: a data do próximo período, o dia esperado da ovulação, a janela fértil (melhores dias para a concepção) e o período da síndrome pré-menstrual (SPM). Esta tabela ajuda você a acompanhar sua saúde e a entender o ritmo do seu corpo.',
            },
            {
              title: 'O que é a semana da ovulação ou janela fértil?',
              content: 'A janela fértil é o período durante o seu ciclo menstrual em que você tem maior probabilidade de engravidar. Este período dura cerca de 6 dias, incluindo os cinco dias antes da ovulação e o próprio dia da ovulação. A ovulação ocorre quando o ovário libera um óvulo maduro, e as chances de gravidez são mais altas durante esse período.',
            },
            {
              title: 'A relação sexual deve ocorrer antes ou depois da ovulação?',
              content: 'Para aumentar as chances de gravidez, a relação sexual é recomendada nos dias que antecedem e no dia da ovulação. Isso ocorre porque o esperma pode viver dentro do corpo de uma mulher por até 5 dias, enquanto o óvulo vive apenas de 12 a 24 horas após ser liberado. Portanto, ter relações sexuais antes da ovulação garante que o esperma esteja pronto para fertilizar o óvulo assim que ele for liberado.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Calculadora de Gravidez e Data do Parto",
        subtitle: "Descubra sua data prevista de parto e os estágios da gravidez",
        disclaimer: "* Esta data é uma estimativa e pode variar. Consulte sempre o seu médico.",
        form: {
            lastPeriodDate: "Primeiro dia do seu último período",
        },
        calculateButton: "Calcular Data do Parto",
        results: {
            dueDateIs: "Sua data prevista de parto é",
            youAreInWeek: "Você está com {weeks} semanas e {days} dias de gravidez",
            conceptionDate: "Data Estimada da Concepção",
            endOfFirstTrimester: "Fim do Primeiro Trimestre",
            endOfSecondTrimester: "Fim do Segundo Trimestre",
        },
        errors: {
            fullDate: 'Por favor, insira a data completa do primeiro dia do seu último período.',
            invalidDate: 'Data inválida. O dia selecionado não existe neste mês.',
            futureDate: 'A data do último período deve ser no passado.',
        },
        info: {
            title: "Informações que lhe Interessam",
            items: [
                {
                  title: 'Calculadora de Gravidez e Como Usá-la',
                  content: 'Uma calculadora de gravidez é uma ferramenta digital que ajuda a estimar a data do parto e a acompanhar os estágios da gravidez. Basta inserir o primeiro dia do seu último período menstrual (UPM), e a calculadora faz o resto, calculando a idade gestacional em semanas e dias, e fornecendo datas importantes como a data prevista do parto e o final de cada trimestre.'
                },
                {
                  title: 'Como a data do parto é calculada?',
                  content: 'A data prevista do parto (DPP) geralmente é calculada adicionando 280 dias (40 semanas) ao primeiro dia do seu último período menstrual (UPM). Este é o método mais comum, conhecido como regra de Naegele. Este método assume que seu ciclo menstrual é regular e de 28 dias, e que a ovulação ocorre no 14º dia do ciclo.',
                },
                {
                  title: 'Calculando a gravidez em semanas e meses',
                  content: 'A gravidez é medida clinicamente em semanas, com uma duração total de 40 semanas. As semanas começam a partir do primeiro dia do último período menstrual. Para converter para meses aproximados:\n• Primeiro Trimestre: Semanas 1 a 13 (Meses 1-3).\n• Segundo Trimestre: Semanas 14 a 27 (Meses 4-6).\n• Terceiro Trimestre: Semanas 28 a 40 (Meses 7-9).\nNossa calculadora mostra exatamente em que semana e dia você está.'
                },
                {
                  title: 'Calculando a gravidez com o calendário islâmico',
                  content: 'As calculadoras de gravidez médicas baseiam-se no calendário gregoriano porque o ano gregoriano (365 dias) está mais próximo dos ciclos de gravidez do que o ano islâmico (cerca de 354 dias). Para calcular a data do parto no calendário islâmico, primeiro você deve determinar a data no calendário gregoriano e depois convertê-la. Lembre-se de que essa conversão pode não ser 100% precisa devido aos diferentes comprimentos dos meses entre os dois calendários.'
                },
                {
                  title: 'Breve tabela de crescimento e desenvolvimento fetal',
                  content: 'Durante sua jornada de gravidez, seu feto passa por desenvolvimentos incríveis:\n• Primeiro Trimestre: Órgãos principais como o coração e o cérebro se formam, e o coração começa a bater.\n• Segundo Trimestre: O feto cresce rapidamente, e você pode começar a sentir seus primeiros movimentos.\n• Terceiro Trimestre: Os pulmões do feto amadurecem, e seu peso aumenta significativamente em preparação para a vida fora do útero.'
                },
                {
                  title: 'Cronograma da gravidez e datas importantes',
                  content: 'A calculadora de gravidez ajuda a acompanhar um cronograma importante para sua gravidez. As principais datas mostradas pela calculadora são:\n• Data estimada da concepção.\n• Fim do primeiro trimestre: Um marco importante no desenvolvimento fetal.\n• Fim do segundo trimestre: O início da fase final da gravidez.\n• Data prevista do parto: O dia que você está esperando para conhecer seu bebê.'
                },
                {
                  title: 'A calculadora de gravidez é precisa?',
                  content: 'A calculadora de gravidez fornece uma boa estimativa da data do parto, mas não é 100% precisa. Apenas cerca de 5% dos bebês nascem na data exata do parto. É uma excelente ferramenta para planejamento e preparação, mas você deve sempre consultar seu médico para uma avaliação precisa da data do parto e do progresso da gravidez.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Artigos e Informações Importantes",
        articles: [
            {
                title: 'Como calcular o ciclo menstrual?',
                content: 'O ciclo menstrual começa no primeiro dia do sangramento menstrual e termina um dia antes do próximo ciclo. Para calcular a duração do seu ciclo, conte os dias desde o primeiro dia do período atual até o primeiro dia do próximo período. A média é de 28 dias, mas pode variar naturalmente. Nossa calculadora automatiza esse processo para poupar o trabalho do cálculo manual.',
            },
            {
                title: 'Calculando um ciclo menstrual irregular',
                content: 'Se o seu ciclo for irregular, a previsão pode ser difícil. O melhor método é acompanhar seu ciclo por vários meses (3-6 meses) e calcular sua duração média. Use seus ciclos mais longos e mais curtos para obter um intervalo aproximado para sua janela fértil. Lembre-se que esta calculadora fornece estimativas e, em casos de irregularidade significativa, é aconselhável consultar um médico.',
            },
            {
                title: 'O que é a semana da ovulação ou janela fértil?',
                content: 'A janela fértil é o período durante o seu ciclo menstrual em que você tem maior probabilidade de engravidar. Este período dura cerca de 6 dias, incluindo os cinco dias antes da ovulação e o próprio dia da ovulação. A ovulação ocorre quando o ovário libera um óvulo maduro, e as chances de gravidez são mais altas durante esse período.',
            },
            {
                title: 'A relação sexual deve ocorrer antes ou depois da ovulação?',
                content: 'Para aumentar as chances de gravidez, a relação sexual é recomendada nos dias que antecedem e no dia da ovulação. Isso ocorre porque o esperma pode viver dentro do corpo de uma mulher por até 5 dias, enquanto o óvulo vive apenas de 12 a 24 horas após ser liberado. Portanto, ter relações sexuais antes da ovulação garante que o esperma esteja pronto para fertilizar o óvulo assim que ele for liberado.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Sobre Nós",
        paragraph1: "Bem-vinda ao \"Anouthati\", seu destino de confiança para tudo relacionado à saúde da mulher. Acreditamos que conhecimento é poder, e nosso objetivo é fornecer às mulheres as ferramentas e informações de que precisam para entender melhor seus corpos e tomar decisões de saúde informadas.",
        paragraph2: "Começamos com uma ideia simples: criar uma calculadora de ciclo menstrual precisa e fácil de usar em árabe. A partir daí, evoluímos para uma plataforma abrangente que oferece não apenas ferramentas de acompanhamento, mas também artigos confiáveis e conteúdo educacional sobre o ciclo menstrual, fertilidade e vida saudável em geral.",
        missionTitle: "Nossa Missão",
        missionText: "Nossa missão é quebrar barreiras e equívocos em torno da saúde da mulher, fornecendo conteúdo científico simplificado e apoiando nossa comunidade de mulheres em sua jornada para uma vida mais saudável e feliz.",
    },

    // Contact Page
    contactPage: {
        title: "Fale Conosco",
        subtitle: "Estamos aqui para ajudar. Se você tiver alguma dúvida ou sugestão, não hesite em nos contatar.",
        email: "E-mail",
        phone: "Telefone",
    }
}
