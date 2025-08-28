export default {
    code: 'es',
    name: 'Español',
    dir: 'ltr',
    
    // Shared
    day: 'Día',
    month: 'Mes',
    year: 'Año',
    days: 'días',
    calculate: 'Calcular ahora',
    results: 'Resultados esperados',
    from: 'Desde',
    to: 'hasta',
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Calculadora de Período",
      pregnancyCalculator: "Calculadora de Embarazo",
      articles: "Artículos",
      aboutUs: "Sobre nosotros",
      contactUs: "Contáctanos",
    },

    // Footer
    footer: {
      copyright: "© {year} Sitio Web Anouthati. Todos los derechos reservados.",
    },

    // Home Page
    homePage: {
      title: "Calculadora del Ciclo Menstrual",
      subtitle: "Predice fácilmente tu próximo período y tu ventana fértil",
      disclaimer: "* Estas fechas son estimaciones y pueden variar de persona a persona. Esta herramienta no debe utilizarse como método anticonceptivo.",
      form: {
        lastPeriodDate: "Primer día de tu último período",
        cycleLength: "Duración del ciclo",
        periodDuration: "Duración del período",
      },
      results: {
        nextPeriodIn: "Se espera que tu próximo período comience en",
        itsTime: "Es ahora",
        ovulationDate: "Fecha de ovulación",
        fertileWindow: "Ventana Fértil Estimada",
        pmsWindow: "Ventana del Síndrome Premenstrual (SPM)",
        pmsStart: "Comienza aproximadamente desde",
        tabs: ['Próximo Período', 'Segundo Período', 'Tercer Período'],
      },
      errors: {
        fullDate: 'Por favor, introduce la fecha completa del primer día de tu último período.',
        invalidDate: 'Fecha inválida. El día seleccionado no existe en este mes.',
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
            {
              title: '¿Cómo calcular el ciclo menstrual?',
              content: 'El ciclo menstrual comienza el primer día del sangrado menstrual y termina un día antes del siguiente ciclo. Para calcular la duración de tu ciclo, cuenta los días desde el primer día del período actual hasta el primer día del siguiente. El promedio es de 28 días, pero puede variar naturalmente. Nuestra calculadora automatiza este proceso para ahorrarte la molestia del cálculo manual.',
            },
            {
              title: 'Cálculo de un ciclo menstrual regular',
              content: 'Un ciclo se considera regular si su duración es aproximadamente constante cada mes (con una diferencia de uno o dos días). Se calcula contando los días desde el primer día de la menstruación actual hasta el primer día de la siguiente. Si tu ciclo es regular, nuestra calculadora es muy precisa para predecir las fechas de los próximos períodos y la ovulación, ayudándote a planificar mejor.',
            },
            {
              title: 'Cálculo de un ciclo menstrual irregular',
              content: 'Si tu ciclo es irregular, la predicción puede ser difícil. El mejor método es hacer un seguimiento de tu ciclo durante varios meses (3-6 meses) y calcular su duración promedio. Usa tus ciclos más largos y más cortos para obtener un rango aproximado de tu ventana fértil. Recuerda que esta calculadora proporciona estimaciones y, en casos de irregularidad significativa, es recomendable consultar a un médico.',
            },
            {
              title: 'Calculadora del ciclo menstrual en el calendario Hijri',
              content: 'Las calculadoras médicas del ciclo menstrual utilizan principalmente el calendario gregoriano porque se alinea mejor con los ciclos biológicos. El año gregoriano tiene 365 días, mientras que el año Hijri es unos 11 días más corto. Esta diferencia hace que el uso del calendario Hijri para la predicción sea difícil e inexacto. Para obtener los mejores resultados, siempre se recomienda utilizar la fecha gregoriana.',
            },
            {
              title: 'Gráfico del ciclo menstrual',
              content: 'Un gráfico del ciclo menstrual es un calendario que muestra las fechas esperadas de tu ciclo. Después de usar nuestra calculadora, los resultados se muestran como una línea de tiempo para los próximos tres ciclos. Este gráfico incluye: la fecha del próximo período, el día de ovulación esperado, la ventana fértil (los mejores días para la concepción) y el período del síndrome premenstrual (SPM). Este gráfico te ayuda a seguir tu salud y a comprender el ritmo de tu cuerpo.',
            },
            {
              title: '¿Qué es la semana de ovulación o la ventana fértil?',
              content: 'La ventana fértil es el período de tiempo durante tu ciclo menstrual en el que tienes más probabilidades de concebir. Este período dura unos 6 días, incluyendo los cinco días previos a la ovulación y el día de la ovulación en sí. La ovulación ocurre cuando el ovario libera un óvulo maduro, y las posibilidades de embarazo son más altas durante este tiempo.',
            },
            {
              title: '¿Las relaciones sexuales deben ocurrir antes o después de la ovulación?',
              content: 'Para aumentar las posibilidades de embarazo, se recomienda tener relaciones sexuales en los días previos a la ovulación y el día de la ovulación. Esto se debe a que los espermatozoides pueden vivir dentro del cuerpo de una mujer hasta 5 días, mientras que el óvulo solo vive de 12 a 24 horas después de ser liberado. Por lo tanto, tener relaciones sexuales antes de la ovulación asegura que los espermatozoides estén listos para fertilizar el óvulo tan pronto como sea liberado.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Calculadora de Embarazo y Fecha de Parto",
        subtitle: "Descubre tu fecha de parto estimada y las etapas del embarazo",
        disclaimer: "* Esta fecha es una estimación y puede variar. Consulta siempre a tu médico.",
        form: {
            lastPeriodDate: "Primer día de tu último período",
        },
        calculateButton: "Calcular Fecha de Parto",
        results: {
            dueDateIs: "Tu fecha de parto estimada es",
            youAreInWeek: "Tienes {weeks} semanas y {days} días de embarazo",
            conceptionDate: "Fecha Estimada de Concepción",
            endOfFirstTrimester: "Fin del Primer Trimestre",
            endOfSecondTrimester: "Fin del Segundo Trimestre",
        },
        errors: {
            fullDate: 'Por favor, introduce la fecha completa del primer día de tu último período.',
            invalidDate: 'Fecha inválida. El día seleccionado no existe en este mes.',
            futureDate: 'La fecha del último período debe ser en el pasado.',
        },
        info: {
            title: "Información que te Interesa",
            items: [
                {
                  title: 'Calculadora de Embarazo y Cómo Usarla',
                  content: 'Una calculadora de embarazo es una herramienta digital que te ayuda a estimar tu fecha de parto y a seguir las etapas de tu embarazo. Simplemente introduce el primer día de tu último período menstrual (UPM), y la calculadora hace el resto, calculando la edad gestacional en semanas y días, y dándote fechas importantes como la fecha de parto esperada y el final de cada trimestre.'
                },
                {
                  title: '¿Cómo se calcula la fecha de parto?',
                  content: 'La fecha estimada de parto (FEP) se calcula generalmente sumando 280 días (40 semanas) al primer día de tu último período menstrual (UPM). Este es el método más común, conocido como la regla de Naegele. Este método asume que tu ciclo menstrual es regular y de 28 días, y que la ovulación ocurre en el día 14 del ciclo.',
                },
                {
                  title: 'Cálculo del embarazo en semanas y meses',
                  content: 'El embarazo se mide médicamente en semanas, con una duración total de 40 semanas. Las semanas comienzan desde el primer día del último período menstrual. Para convertir a meses aproximados:\n• Primer Trimestre: Semanas 1 a 13 (Meses 1-3).\n• Segundo Trimestre: Semanas 14 a 27 (Meses 4-6).\n• Tercer Trimestre: Semanas 28 a 40 (Meses 7-9).\nNuestra calculadora te muestra exactamente en qué semana y día te encuentras.'
                },
                {
                  title: 'Cálculo del embarazo con el calendario Hijri',
                  content: 'Las calculadoras de embarazo médicas se basan en el calendario gregoriano porque el año gregoriano (365 días) está más cerca de los ciclos de embarazo que el año Hijri (alrededor de 354 días). Para calcular la fecha de parto en Hijri, primero debes determinar la fecha en el calendario gregoriano y luego convertirla. Recuerda que esta conversión puede no ser 100% precisa debido a las diferentes duraciones de los meses entre los dos calendarios.'
                },
                {
                  title: 'Breve tabla del crecimiento y desarrollo fetal',
                  content: 'Durante tu viaje de embarazo, tu feto experimenta desarrollos asombrosos:\n• Primer Trimestre: Se forman los órganos principales como el corazón y el cerebro, y el corazón comienza a latir.\n• Segundo Trimestre: El feto crece rápidamente y puedes comenzar a sentir sus primeros movimientos.\n• Tercer Trimestre: Los pulmones del feto maduran y su peso aumenta significativamente en preparación para la vida fuera del útero.'
                },
                {
                  title: 'Cronología del embarazo y fechas importantes',
                  content: 'La calculadora de embarazo te ayuda a seguir una cronología importante para tu embarazo. Las fechas clave que muestra la calculadora son:\n• Fecha estimada de concepción.\n• Fin del primer trimestre: Un hito importante en el desarrollo fetal.\n• Fin del segundo trimestre: El comienzo de la etapa final del embarazo.\n• Fecha estimada de parto: El día que esperas para conocer a tu bebé.'
                },
                {
                  title: '¿Es precisa la calculadora de embarazo?',
                  content: 'La calculadora de embarazo proporciona una buena estimación de la fecha de parto, pero no es 100% precisa. Solo alrededor del 5% de los bebés nacen en su fecha de parto exacta. Es una excelente herramienta para planificar y prepararse, pero siempre debes consultar a tu médico para una evaluación precisa de la fecha de parto y el progreso del embarazo.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Artículos e Información Importante",
        articles: [
            {
                title: '¿Cómo calcular el ciclo menstrual?',
                content: 'El ciclo menstrual comienza el primer día del sangrado menstrual y termina un día antes del siguiente ciclo. Para calcular la duración de tu ciclo, cuenta los días desde el primer día del período actual hasta el primer día del siguiente. El promedio es de 28 días, pero puede variar naturalmente. Nuestra calculadora automatiza este proceso para ahorrarte la molestia del cálculo manual.',
            },
            {
                title: 'Cálculo de un ciclo menstrual irregular',
                content: 'Si tu ciclo es irregular, la predicción puede ser difícil. El mejor método es hacer un seguimiento de tu ciclo durante varios meses (3-6 meses) y calcular su duración promedio. Usa tus ciclos más largos y más cortos para obtener un rango aproximado de tu ventana fértil. Recuerda que esta calculadora proporciona estimaciones y, en casos de irregularidad significativa, es recomendable consultar a un médico.',
            },
            {
                title: '¿Qué es la semana de ovulación o la ventana fértil?',
                content: 'La ventana fértil es el período de tiempo durante tu ciclo menstrual en el que tienes más probabilidades de concebir. Este período dura unos 6 días, incluyendo los cinco días previos a la ovulación y el día de la ovulación en sí. La ovulación ocurre cuando el ovario libera un óvulo maduro, y las posibilidades de embarazo son más altas durante este tiempo.',
            },
            {
                title: '¿Las relaciones sexuales deben ocurrir antes o después de la ovulación?',
                content: 'Para aumentar las posibilidades de embarazo, se recomienda tener relaciones sexuales en los días previos a la ovulación y el día de la ovulación. Esto se debe a que los espermatozoides pueden vivir dentro del cuerpo de una mujer hasta 5 días, mientras que el óvulo solo vive de 12 a 24 horas después de ser liberado. Por lo tanto, tener relaciones sexuales antes de la ovulación asegura que los espermatozoides estén listos para fertilizar el óvulo tan pronto como sea liberado.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Sobre Nosotros",
        paragraph1: "Bienvenida a \"Anouthati\", tu destino de confianza para todo lo relacionado con la salud de la mujer. Creemos que el conocimiento es poder, y nuestro objetivo es proporcionar a las mujeres las herramientas e información que necesitan para comprender mejor sus cuerpos y tomar decisiones de salud informadas.",
        paragraph2: "Comenzamos con una idea simple: crear una calculadora del ciclo menstrual precisa y fácil de usar en árabe. A partir de ahí, evolucionamos hasta convertirnos en una plataforma integral que ofrece no solo herramientas de seguimiento, sino también artículos y contenido educativo confiable sobre el ciclo menstrual, la fertilidad y la vida saludable en general.",
        missionTitle: "Nuestra Misión",
        missionText: "Nuestra misión es derribar barreras y conceptos erróneos sobre la salud de la mujer proporcionando contenido científico simplificado y apoyando a nuestra comunidad de mujeres en su viaje hacia una vida más saludable y feliz.",
    },

    // Contact Page
    contactPage: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para ayudarte. Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.",
        email: "Correo electrónico",
        phone: "Teléfono",
    }
}