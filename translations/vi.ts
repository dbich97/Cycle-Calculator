export default {
    code: 'vi',
    name: 'Tiếng Việt',
    dir: 'ltr',
    
    // Shared
    day: 'Ngày',
    month: 'Tháng',
    year: 'Năm',
    days: 'ngày',
    calculate: 'Tính ngay',
    results: 'Kết quả dự kiến',
    from: 'Từ',
    to: 'đến',
    months: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    hijriMonths: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaaban', 'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'],

    calendar: {
        type: 'Loại lịch',
        gregorian: 'Dương lịch',
        hijri: 'Hồi lịch',
    },

    // Navbar
    navbar: {
      siteName: "Anouthati",
      periodCalculator: "Tính chu kỳ kinh nguyệt",
      pregnancyCalculator: "Tính ngày dự sinh",
      articles: "Bài viết",
      aboutUs: "Về chúng tôi",
      contactUs: "Liên hệ",
    },

    // Footer
    footer: {
      copyright: "© {year} Trang web Anouthati. Mọi quyền được bảo lưu.",
    },

    // Home Page
    homePage: {
      title: "Công cụ tính chu kỳ kinh nguyệt",
      subtitle: "Dễ dàng dự đoán kỳ kinh tiếp theo và cửa sổ thụ thai của bạn",
      disclaimer: "* Những ngày này là ước tính và có thể thay đổi tùy theo từng người. Công cụ này không nên được sử dụng như một hình thức tránh thai.",
      form: {
        lastPeriodDate: "Ngày đầu tiên của kỳ kinh cuối cùng",
        cycleLength: "Độ dài chu kỳ",
        periodDuration: "Thời gian hành kinh",
      },
      results: {
        nextPeriodIn: "Kỳ kinh tiếp theo của bạn dự kiến sẽ bắt đầu sau",
        itsTime: "Đã đến lúc",
        ovulationDate: "Ngày rụng trứng",
        fertileWindow: "Cửa sổ thụ thai ước tính",
        pmsWindow: "Cửa sổ Hội chứng tiền kinh nguyệt (PMS)",
        pmsStart: "Bắt đầu khoảng từ",
        tabs: ['Kỳ kinh tiếp theo', 'Kỳ kinh thứ hai', 'Kỳ kinh thứ ba'],
      },
      errors: {
        fullDate: 'Vui lòng nhập ngày đầy đủ của ngày đầu tiên của kỳ kinh cuối cùng của bạn.',
        invalidDate: 'Ngày không hợp lệ. Ngày được chọn không tồn tại trong tháng này.',
      },
      faq: {
        title: "Câu hỏi thường gặp",
        items: [
            {
              title: 'Làm thế nào để tính chu kỳ kinh nguyệt?',
              content: 'Chu kỳ kinh nguyệt bắt đầu vào ngày đầu tiên có kinh và kết thúc một ngày trước chu kỳ tiếp theo. Để tính độ dài chu kỳ của bạn, hãy đếm số ngày từ ngày đầu tiên của kỳ kinh hiện tại đến ngày đầu tiên của kỳ kinh tiếp theo. Trung bình là 28 ngày, nhưng có thể thay đổi một cách tự nhiên. Công cụ tính của chúng tôi tự động hóa quá trình này để giúp bạn không phải tính toán thủ công.',
            },
            {
              title: 'Tính toán chu kỳ kinh nguyệt đều đặn',
              content: 'Một chu kỳ được coi là đều đặn nếu độ dài của nó gần như không đổi mỗi tháng (chênh lệch một hoặc hai ngày). Nó được tính bằng cách đếm số ngày từ ngày đầu tiên của kỳ kinh hiện tại đến ngày đầu tiên của kỳ kinh tiếp theo. Nếu chu kỳ của bạn đều đặn, công cụ tính của chúng tôi rất chính xác trong việc dự đoán ngày kinh sắp tới và ngày rụng trứng, giúp bạn lập kế hoạch tốt hơn.',
            },
            {
              title: 'Tính toán chu kỳ kinh nguyệt không đều',
              content: 'Nếu chu kỳ của bạn không đều, việc dự đoán có thể khó khăn. Phương pháp tốt nhất là theo dõi chu kỳ của bạn trong vài tháng (3-6 tháng) và tính độ dài trung bình của nó. Sử dụng chu kỳ dài nhất và ngắn nhất của bạn để có được một khoảng thời gian gần đúng cho cửa sổ thụ thai của bạn. Hãy nhớ rằng công cụ tính này cung cấp các ước tính và trong trường hợp có sự bất thường đáng kể, bạn nên tham khảo ý kiến bác sĩ.',
            },
            {
              title: 'Công cụ tính chu kỳ kinh nguyệt theo lịch Hijri',
              content: 'Các công cụ tính chu kỳ kinh nguyệt y tế chủ yếu sử dụng lịch Gregorian vì nó phù hợp hơn với các chu kỳ sinh học. Năm Gregorian có 365 ngày, trong khi năm Hijri ngắn hơn khoảng 11 ngày. Sự khác biệt này làm cho việc sử dụng lịch Hijri để dự đoán trở nên khó khăn và không chính xác. Để có kết quả tốt nhất, bạn nên luôn sử dụng ngày Gregorian.',
            },
            {
              title: 'Biểu đồ chu kỳ kinh nguyệt',
              content: 'Biểu đồ chu kỳ kinh nguyệt là một lịch hiển thị các ngày dự kiến của chu kỳ của bạn. Sau khi sử dụng công cụ tính của chúng tôi, kết quả sẽ được hiển thị dưới dạng dòng thời gian cho ba chu kỳ tiếp theo. Biểu đồ này bao gồm: ngày của kỳ kinh tiếp theo, ngày rụng trứng dự kiến, cửa sổ thụ thai (những ngày tốt nhất để thụ thai) và giai đoạn hội chứng tiền kinh nguyệt (PMS). Biểu đồ này giúp bạn theo dõi sức khỏe và hiểu được nhịp điệu của cơ thể.',
            },
            {
              title: 'Tuần rụng trứng hoặc cửa sổ thụ thai là gì?',
              content: 'Cửa sổ thụ thai là khoảng thời gian trong chu kỳ kinh nguyệt của bạn khi bạn có khả năng thụ thai cao nhất. Giai đoạn này kéo dài khoảng 6 ngày, bao gồm năm ngày trước khi rụng trứng và ngày rụng trứng. Sự rụng trứng xảy ra khi buồng trứng giải phóng một quả trứng trưởng thành và khả năng mang thai là cao nhất trong thời gian này.',
            },
            {
              title: 'Nên quan hệ tình dục trước hay sau khi rụng trứng?',
              content: 'Để tăng cơ hội mang thai, nên quan hệ tình dục trong những ngày trước và trong ngày rụng trứng. Điều này là do tinh trùng có thể sống trong cơ thể phụ nữ tới 5 ngày, trong khi trứng chỉ sống được 12-24 giờ sau khi được giải phóng. Do đó, quan hệ tình dục trước khi rụng trứng đảm bảo rằng tinh trùng sẵn sàng thụ tinh với trứng ngay khi nó được giải phóng.',
            }
        ]
      }
    },

    // Pregnancy Calculator Page
    pregnancyPage: {
        title: "Công cụ tính ngày dự sinh & mang thai",
        subtitle: "Khám phá ngày dự sinh ước tính và các giai đoạn mang thai của bạn",
        disclaimer: "* Ngày này là một ước tính và có thể thay đổi. Luôn tham khảo ý kiến bác sĩ của bạn.",
        form: {
            lastPeriodDate: "Ngày đầu tiên của kỳ kinh cuối cùng",
        },
        calculateButton: "Tính ngày dự sinh",
        results: {
            dueDateIs: "Ngày dự sinh ước tính của bạn là",
            youAreInWeek: "Bạn đã mang thai được {weeks} tuần và {days} ngày",
            conceptionDate: "Ngày thụ thai ước tính",
            endOfFirstTrimester: "Kết thúc tam cá nguyệt thứ nhất",
            endOfSecondTrimester: "Kết thúc tam cá nguyệt thứ hai",
        },
        errors: {
            fullDate: 'Vui lòng nhập ngày đầy đủ của ngày đầu tiên của kỳ kinh cuối cùng của bạn.',
            invalidDate: 'Ngày không hợp lệ. Ngày được chọn không tồn tại trong tháng này.',
            futureDate: 'Ngày của kỳ kinh cuối cùng phải ở trong quá khứ.',
        },
        info: {
            title: "Thông tin quan trọng cho bạn",
            items: [
                {
                  title: 'Công cụ tính thai và cách sử dụng',
                  content: 'Công cụ tính thai là một công cụ kỹ thuật số giúp bạn ước tính ngày dự sinh và theo dõi các giai đoạn mang thai. Chỉ cần nhập ngày đầu tiên của kỳ kinh cuối cùng (LMP), công cụ sẽ thực hiện phần còn lại, tính tuổi thai theo tuần và ngày, và cung cấp cho bạn các ngày quan trọng như ngày dự sinh dự kiến và cuối mỗi tam cá nguyệt.'
                },
                {
                  title: 'Ngày dự sinh được tính như thế nào?',
                  content: 'Ngày dự sinh dự kiến (EDD) thường được tính bằng cách cộng 280 ngày (40 tuần) vào ngày đầu tiên của kỳ kinh cuối cùng (LMP) của bạn. Đây là phương pháp phổ biến nhất, được gọi là quy tắc Naegele. Phương pháp này giả định chu kỳ kinh nguyệt của bạn đều đặn và dài 28 ngày, và sự rụng trứng xảy ra vào ngày thứ 14 của chu kỳ.',
                },
                {
                  title: 'Tính tuổi thai theo tuần và tháng',
                  content: 'Thai kỳ được đo lường y tế theo tuần, với tổng thời gian là 40 tuần. Các tuần bắt đầu từ ngày đầu tiên của kỳ kinh cuối cùng. Để chuyển đổi sang tháng gần đúng:\n• Tam cá nguyệt thứ nhất: Tuần 1 đến 13 (Tháng 1-3).\n• Tam cá nguyệt thứ hai: Tuần 14 đến 27 (Tháng 4-6).\n• Tam cá nguyệt thứ ba: Tuần 28 đến 40 (Tháng 7-9).\nCông cụ tính của chúng tôi cho bạn biết chính xác bạn đang ở tuần và ngày nào.'
                },
                {
                  title: 'Tính tuổi thai theo lịch Hijri',
                  content: 'Các công cụ tính thai y tế dựa vào lịch Gregorian vì năm Gregorian (365 ngày) gần với chu kỳ mang thai hơn năm Hijri (khoảng 354 ngày). Để tính ngày dự sinh theo lịch Hijri, trước tiên bạn phải xác định ngày theo lịch Gregorian rồi chuyển đổi. Hãy nhớ rằng việc chuyển đổi này có thể không chính xác 100% do độ dài khác nhau của các tháng giữa hai lịch.'
                },
                {
                  title: 'Bảng tóm tắt sự tăng trưởng và phát triển của thai nhi',
                  content: 'Trong hành trình mang thai, thai nhi của bạn trải qua những phát triển đáng kinh ngạc:\n• Tam cá nguyệt thứ nhất: Các cơ quan chính như tim và não hình thành, và tim bắt đầu đập.\n• Tam cá nguyệt thứ hai: Thai nhi phát triển nhanh chóng, và bạn có thể bắt đầu cảm nhận được những cử động đầu tiên của bé.\n• Tam cá nguyệt thứ ba: Phổi của thai nhi trưởng thành, và cân nặng của bé tăng lên đáng kể để chuẩn bị cho cuộc sống bên ngoài tử cung.'
                },
                {
                  title: 'Mốc thời gian mang thai và những ngày quan trọng',
                  content: 'Công cụ tính thai giúp bạn theo dõi một mốc thời gian quan trọng cho thai kỳ của mình. Các ngày quan trọng mà công cụ tính hiển thị là:\n• Ngày thụ thai ước tính.\n• Kết thúc tam cá nguyệt thứ nhất: một cột mốc quan trọng trong sự phát triển của thai nhi.\n• Kết thúc tam cá nguyệt thứ hai: sự khởi đầu của giai đoạn cuối của thai kỳ.\n• Ngày dự sinh ước tính: ngày bạn mong chờ để gặp con yêu.'
                },
                {
                  title: 'Công cụ tính thai có chính xác không?',
                  content: 'Công cụ tính thai cung cấp một ước tính tốt về ngày dự sinh, nhưng nó không chính xác 100%. Chỉ có khoảng 5% trẻ sơ sinh được sinh ra vào đúng ngày dự sinh. Đây là một công cụ tuyệt vời để lập kế hoạch và chuẩn bị, nhưng bạn nên luôn theo dõi với bác sĩ để có đánh giá chính xác về ngày dự sinh và tiến triển của thai kỳ.',
                }
            ]
        }
    },

    // Articles Page
    articlesPage: {
        title: "Các bài viết và thông tin quan trọng",
        articles: [
            {
                title: 'Làm thế nào để tính chu kỳ kinh nguyệt?',
                content: 'Chu kỳ kinh nguyệt bắt đầu vào ngày đầu tiên có kinh và kết thúc một ngày trước chu kỳ tiếp theo. Để tính độ dài chu kỳ của bạn, hãy đếm số ngày từ ngày đầu tiên của kỳ kinh hiện tại đến ngày đầu tiên của kỳ kinh tiếp theo. Trung bình là 28 ngày, nhưng có thể thay đổi một cách tự nhiên. Công cụ tính của chúng tôi tự động hóa quá trình này để giúp bạn không phải tính toán thủ công.',
            },
            {
                title: 'Tính toán chu kỳ kinh nguyệt không đều',
                content: 'Nếu chu kỳ của bạn không đều, việc dự đoán có thể khó khăn. Phương pháp tốt nhất là theo dõi chu kỳ của bạn trong vài tháng (3-6 tháng) và tính độ dài trung bình của nó. Sử dụng chu kỳ dài nhất và ngắn nhất của bạn để có được một khoảng thời gian gần đúng cho cửa sổ thụ thai của bạn. Hãy nhớ rằng công cụ tính này cung cấp các ước tính và trong trường hợp có sự bất thường đáng kể, bạn nên tham khảo ý kiến bác sĩ.',
            },
            {
                title: 'Tuần rụng trứng hoặc cửa sổ thụ thai là gì?',
                content: 'Cửa sổ thụ thai là khoảng thời gian trong chu kỳ kinh nguyệt của bạn khi bạn có khả năng thụ thai cao nhất. Giai đoạn này kéo dài khoảng 6 ngày, bao gồm năm ngày trước khi rụng trứng và ngày rụng trứng. Sự rụng trứng xảy ra khi buồng trứng giải phóng một quả trứng trưởng thành và khả năng mang thai là cao nhất trong thời gian này.',
            },
            {
                title: 'Nên quan hệ tình dục trước hay sau khi rụng trứng?',
                content: 'Để tăng cơ hội mang thai, nên quan hệ tình dục trong những ngày trước và trong ngày rụng trứng. Điều này là do tinh trùng có thể sống trong cơ thể phụ nữ tới 5 ngày, trong khi trứng chỉ sống được 12-24 giờ sau khi được giải phóng. Do đó, quan hệ tình dục trước khi rụng trứng đảm bảo rằng tinh trùng sẵn sàng thụ tinh với trứng ngay khi nó được giải phóng.',
            }
        ]
    },

    // About Page
    aboutPage: {
        title: "Về chúng tôi",
        paragraph1: "Chào mừng bạn đến với \"Anouthati,\" điểm đến đáng tin cậy của bạn cho mọi thứ liên quan đến sức khỏe phụ nữ. Chúng tôi tin rằng kiến thức là sức mạnh, và mục tiêu của chúng tôi là cung cấp cho phụ nữ những công cụ và thông tin họ cần để hiểu rõ hơn về cơ thể của mình và đưa ra các quyết định sức khỏe sáng suốt.",
        paragraph2: "Chúng tôi bắt đầu với một ý tưởng đơn giản: tạo ra một công cụ tính chu kỳ kinh nguyệt chính xác và dễ sử dụng bằng tiếng Ả Rập. Từ đó, chúng tôi đã phát triển thành một nền tảng toàn diện không chỉ cung cấp các công cụ theo dõi mà còn có các bài viết đáng tin cậy và nội dung giáo dục về chu kỳ kinh nguyệt, khả năng sinh sản và lối sống lành mạnh nói chung.",
        missionTitle: "Sứ mệnh của chúng tôi",
        missionText: "Sứ mệnh của chúng tôi là phá bỏ các rào cản và quan niệm sai lầm xung quanh sức khỏe phụ nữ bằng cách cung cấp nội dung khoa học đơn giản hóa và hỗ trợ cộng đồng phụ nữ của chúng tôi trên hành trình hướng tới một cuộc sống khỏe mạnh và hạnh phúc hơn.",
    },

    // Contact Page
    contactPage: {
        title: "Liên hệ với chúng tôi",
        subtitle: "Chúng tôi ở đây để giúp đỡ. Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, đừng ngần ngại liên hệ với chúng tôi.",
        email: "Email",
        phone: "Điện thoại",
    }
}
