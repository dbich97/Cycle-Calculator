export default {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    
    // Shared
    day: 'Day',
    month: 'Month',
    year: 'Year',
    days: 'days',
    calculate: 'Calculate Now',
    results: 'Expected Results',
    from: 'From',
    to: 'to',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    hijriMonths: ['Muharram', 'Safar', 'Rabiʻ I', 'Rabiʻ II', 'Jumada I', 'Jumada II', 'Rajab', 'Shaʻban', 'Ramadan', 'Shawwal', 'Dhu al-Qiʻdah', 'Dhu al-Hijjah'],

    calendar: {
      type: 'Calendar Type',
      gregorian: 'Gregorian',
      hijri: 'Hijri',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Period Calculator",
      pregnancyCalculator: "Pregnancy Calculator",
      articles: "Articles",
      aboutUs: "About Us",
      contactUs: "Contact Us",
    },

    // Footer
    footer: {
      copyright: "© {year} Anouthati Website. All rights reserved.",
    },

    // Home Page
    homePage: {
      title: "Menstrual Cycle Calculator",
      subtitle: "Easily predict your next period and fertile window",
      disclaimer: "* These dates are estimates and may vary from person to person. This tool should not be used as a form of contraception.",
      form: {
        lastPeriodDate: "First day of your last period",
        cycleLength: "Cycle Length",
        periodDuration: "Period Duration",
      },
      results: {
        nextPeriodIn: "Your next period is expected to start in",
        itsTime: "It's Time",
        ovulationDate: "Ovulation Date",
        fertileWindow: "Estimated Fertile Window",
        pmsWindow: "Premenstrual Syndrome (PMS) Window",
        pmsStart: "Starts approximately from",
        tabs: ['Next Period', 'Second Period', 'Third Period'],
      },
      errors: {
        fullDate: 'Please enter the full date of the first day of your last period.',
        invalidDate: 'Invalid date. The selected day does not exist in this month.',
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
            {
              title: 'How to calculate the menstrual cycle?',
              content: 'The menstrual cycle starts on the first day of menstrual bleeding and ends one day before the next cycle. To calculate your cycle length, count the days from the first day of the current period to the first day of the next period. The average is 28 days, but it can vary naturally. Our calculator automates this process to save you the trouble of manual calculation.',
            },
            {
              title: 'Calculating a regular menstrual cycle',
              content: 'A cycle is considered regular if its length is roughly constant each month (with a difference of a day or two). It is calculated by counting the days from the first day of the current menstruation to the first day of the next. If your cycle is regular, our calculator is very accurate in predicting upcoming period dates and ovulation, helping you plan better.',
            },
            {
              title: 'Calculating an irregular menstrual cycle',
              content: 'If your cycle is irregular, prediction can be difficult. The best method is to track your cycle for several months (3-6 months) and calculate its average length. Use your longest and shortest cycles to get an approximate range for your fertile window. Remember that this calculator provides estimates, and in cases of significant irregularity, it is advisable to consult a doctor.',
            },
            {
              title: 'Menstrual cycle calculator in Hijri calendar',
              content: 'Medical menstrual cycle calculators primarily use the Gregorian calendar because it aligns better with biological cycles. The Gregorian year has 365 days, while the Hijri year is about 11 days shorter. This difference makes using the Hijri calendar for prediction difficult and inaccurate. For the best results, it is always recommended to use the Gregorian date.',
            },
            {
              title: 'Menstrual cycle chart',
              content: 'A menstrual cycle chart is a calendar showing the expected dates of your cycle. After using our calculator, the results are displayed as a timeline for the next three cycles. This chart includes: the date of the next period, the expected ovulation day, the fertile window (best days for conception), and the premenstrual syndrome (PMS) period. This chart helps you track your health and understand your body\'s rhythm.',
            },
            {
              title: 'What is the ovulation week or fertile window?',
              content: 'The fertile window is the time during your menstrual cycle when you are most able to conceive. This period lasts about 6 days, including the five days before ovulation and the day of ovulation itself. Ovulation occurs when the ovary releases a mature egg, and the chances of pregnancy are highest during this time.',
            },
            {
              title: 'Should intercourse occur before or after ovulation?',
              content: 'To increase the chances of pregnancy, intercourse is recommended in the days leading up to and on the day of ovulation. This is because sperm can live inside a woman\'s body for up to 5 days, while the egg only lives for 12-24 hours after being released. Therefore, having intercourse before ovulation ensures that sperm are ready to fertilize the egg as soon as it is released.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Pregnancy & Due Date Calculator",
        subtitle: "Discover your estimated due date and pregnancy stages",
        disclaimer: "* This date is an estimate and may vary. Always consult your doctor.",
        form: {
            lastPeriodDate: "First day of your last period",
        },
        calculateButton: "Calculate Due Date",
        results: {
            dueDateIs: "Your estimated due date is",
            youAreInWeek: "You are {weeks} weeks and {days} days pregnant",
            conceptionDate: "Estimated Conception Date",
            endOfFirstTrimester: "End of First Trimester",
            endOfSecondTrimester: "End of Second Trimester",
        },
        errors: {
            fullDate: 'Please enter the full date of the first day of your last period.',
            invalidDate: 'Invalid date. The selected day does not exist in this month.',
            futureDate: 'The date of the last period must be in the past.',
        },
        info: {
            title: "Information That Matters to You",
            items: [
                {
                  title: 'Pregnancy Calculator and How to Use It',
                  content: 'A pregnancy calculator is a digital tool that helps you estimate your due date and track your pregnancy stages. Simply enter the first day of your last menstrual period (LMP), and the calculator does the rest, calculating gestational age in weeks and days, and giving you important dates like the expected due date and the end of each trimester.'
                },
                {
                  title: 'How is the due date calculated?',
                  content: 'The estimated due date (EDD) is usually calculated by adding 280 days (40 weeks) to the first day of your last menstrual period (LMP). This is the most common method, known as Naegele\'s rule. This method assumes your menstrual cycle is regular and 28 days long, and that ovulation occurs on the 14th day of the cycle.',
                },
                {
                  title: 'Calculating pregnancy in weeks and months',
                  content: 'Pregnancy is medically measured in weeks, with a total duration of 40 weeks. The weeks start from the first day of the last menstrual period. To convert to approximate months:\n• First Trimester: Weeks 1 to 13 (Months 1-3).\n• Second Trimester: Weeks 14 to 27 (Months 4-6).\n• Third Trimester: Weeks 28 to 40 (Months 7-9).\nOur calculator shows you exactly which week and day you are in.'
                },
                {
                  title: 'Calculating pregnancy with the Hijri calendar',
                  content: 'Medical pregnancy calculators rely on the Gregorian calendar because the Gregorian year (365 days) is closer to pregnancy cycles than the Hijri year (about 354 days). To calculate the due date in Hijri, you must first determine the date in the Gregorian calendar and then convert it. Remember that this conversion may not be 100% accurate due to the different lengths of months between the two calendars.'
                },
                {
                  title: 'Brief table of fetal growth and development',
                  content: 'During your pregnancy journey, your fetus undergoes amazing developments:\n• First Trimester: Major organs like the heart and brain form, and the heart begins to beat.\n• Second Trimester: The fetus grows rapidly, and you can start to feel its first movements.\n• Third Trimester: The fetus\'s lungs mature, and its weight increases significantly in preparation for life outside the womb.'
                },
                {
                  title: 'Pregnancy timeline and important dates',
                  content: 'The pregnancy calculator helps you track an important timeline for your pregnancy. The key dates shown by the calculator are:\n• Estimated date of conception.\n• End of the first trimester: An important milestone in fetal development.\n• End of the second trimester: The beginning of the final stage of pregnancy.\n• Estimated due date: The day you are waiting for to meet your baby.'
                },
                {
                  title: 'Is the pregnancy calculator accurate?',
                  content: 'The pregnancy calculator provides a good estimate of the due date, but it is not 100% accurate. Only about 5% of babies are born on their exact due date. It is an excellent tool for planning and preparation, but you should always follow up with your doctor for an accurate assessment of the due date and pregnancy progress.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Important Articles and Information",
        articles: [
            {
                title: 'How to calculate the menstrual cycle?',
                content: 'The menstrual cycle starts on the first day of menstrual bleeding and ends one day before the next cycle. To calculate your cycle length, count the days from the first day of the current period to the first day of the next period. The average is 28 days, but it can vary naturally. Our calculator automates this process to save you the trouble of manual calculation.',
            },
            {
                title: 'Calculating an irregular menstrual cycle',
                content: 'If your cycle is irregular, prediction can be difficult. The best method is to track your cycle for several months (3-6 months) and calculate its average length. Use your longest and shortest cycles to get an approximate range for your fertile window. Remember that this calculator provides estimates, and in cases of significant irregularity, it is advisable to consult a doctor.',
            },
            {
                title: 'What is the ovulation week or fertile window?',
                content: 'The fertile window is the time during your menstrual cycle when you are most able to conceive. This period lasts about 6 days, including the five days before ovulation and the day of ovulation itself. Ovulation occurs when the ovary releases a mature egg, and the chances of pregnancy are highest during this time.',
            },
            {
                title: 'Should intercourse occur before or after ovulation?',
                content: 'To increase the chances of pregnancy, intercourse is recommended in the days leading up to and on the day of ovulation. This is because sperm can live inside a woman\'s body for up to 5 days, while the egg only lives for 12-24 hours after being released. Therefore, having intercourse before ovulation ensures that sperm are ready to fertilize the egg as soon as it is released.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "About Us",
        paragraph1: "Welcome to \"Anouthati,\" your trusted destination for everything related to women's health. We believe that knowledge is power, and our goal is to provide women with the tools and information they need to better understand their bodies and make informed health decisions.",
        paragraph2: "We started with a simple idea: to create an accurate and easy-to-use menstrual cycle calculator in Arabic. From there, we evolved into a comprehensive platform that offers not only tracking tools but also reliable articles and educational content about the menstrual cycle, fertility, and healthy living in general.",
        missionTitle: "Our Mission",
        missionText: "Our mission is to break down barriers and misconceptions surrounding women's health by providing simplified scientific content and supporting our community of women on their journey to a healthier and happier life.",
    },

    // Contact Page
    contactPage: {
        title: "Contact Us",
        subtitle: "We are here to help. If you have any questions or suggestions, do not hesitate to contact us.",
        email: "Email",
        phone: "Phone",
    }
}