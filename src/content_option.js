const logotext = "Kaushik";
const meta = {
    title: "Kaushik Chandrasekhar",
    description: "",
};

const introdata = {
    title: "Welcome",
    animated: {
        first: "MERN STACK",
        second: "WEB DEVELOPER",
        third: "CODE LIFE",
    },
    description: "Hi, I'm Kaushik Chandrasekhar, a passionate computing professional with expertise in web application development and data analytics. With a Master's in Computing and Data Analytics, I bring a strong background in programming languages like Java, Python, and the MERN stack, along with proficiency in data visualization tools such as SAS, Excel, and Tableau. Explore my portfolio to see my projects, learn about my professional journey, and discover how I combine technical skills with a commitment to excellence in everything I do. Let's connect and create something amazing together!",
    your_img_url: "https://i.imgur.com/z4RdFuB.jpeg",
    bg_img_url: "https://imgur.com/Gi9RfuS.jpeg",
};

const dataabout = {
    title: "A bit about me",
    aboutme: "Welcome to my portfolio! I am Kaushik Chandrasekhar, a versatile computing professional currently based in Edinburgh, United Kingdom. I hold a Master of Science in Computing from Edinburgh Napier University and a Master of Science in Data Analytics from De Montfort University, complemented by a Bachelor of Science in Computer Application from VLB Janakiammal College of Arts and Science. My educational journey has equipped me with a robust foundation in both web application development and data analytics, enabling me to tackle complex challenges with innovative solutions. Throughout my academic and professional career, I have honed my skills in various programming languages and frameworks. I specialize in web application development using the MERN stack, HTML, PHP, CSS, ASP.NET, and Java. My proficiency extends to Python scripting, which I use for a variety of tasks including automation and data analysis. My data analytics expertise is underscored by my ability to perform data exploration, cleansing, and visualization using tools such as SAS, Excel, and Tableau. I have applied these skills in several projects, including my dissertation on customer behavior with regard to online advertising, and a study on crime rate changes during the COVID-19 pandemic in the West Midlands Police jurisdiction. In addition to my technical skills, I have a range of professional experiences that highlight my adaptability and commitment to community involvement. As the Treasurer of the Edinburgh Napier Mountain Bike Club, I manage the club's finances and organize events. My volunteer work at the UCI World Downhill Championship and my role as a Bank Care Officer at Linkfield Residential Ltd demonstrate my ability to work effectively in diverse environments and my dedication to helping others. My career in digital strategy at Techno Software’s Integr Sdn Bhd involved optimizing search engines, managing local business listings, and creating social media handles for businesses. These roles have sharpened my strategic thinking and digital marketing capabilities. I invite you to explore my portfolio to see examples of my work and learn more about my professional journey. Whether through developing web applications, analyzing complex data sets, or volunteering in my community, I strive to make a meaningful impact in every endeavor I undertake. Thank you for visiting my portfolio, and I look forward to connecting with you.",
};
const worktimeline = [{
        jobtitle: "Part Time Bank Care Officer",
        where: "Linkfiled Residential",
        date: "2024",
    },
    {
        jobtitle: "Treasurer",
        where: "Edinburgh Napier Mountain Bike Club (NMTB)",
        date: "2024",
    },
    {
        jobtitle: "Media Volunteer",
        where: "UCI World Downhill Championship 2024",
        date: "2024",
    },
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Node",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 60,
    },
    {
        name: "ExpressJS",
        value: 85,
    },
];

// const services = [{
//         title: "Bookkeeping/Accounting: ",
//         description: "Based on our experience, we recognize that businesses often encounter challenges with managing their bookkeeping/Accounting. Irrespective of the size of your operation, we will assist you in handling these tasks using our current professional expertise. With a comprehensive understanding of the legal obligations in record-keeping, we offer guidance to ensure compliance, which forms the foundation of your tax return. We offer flexibility in our work arrangements, allowing us to operate either in your office or ours, depending on your preference. Additionally, we can evaluate your company's software to ensure it generates accurate and complete financial data.",
//     },
//     {
//         title: "Cost Control Services: ",
//         description: "Collaborating closely with your team, our accountants will analyse your processes and operations to offer insights into your business's key drivers and profitability. Utilizing our expertise in cost control, management, and accounting, we identify potential areas of inefficiency, duplicated efforts, and revenue avenues. Through our technical skills and competencies, we help to enhance your business's profitability by implementing strategic measures to reduce waste and capitalize on opportunities.",
//     },
//     {
//         title: "Individual/Personal Taxes:",
//         description: "If you are self-employed, we will handle the task of filing your tax returns, sparing you from the responsibility. Rest assured, we will see to it that your online self-assessments are submitted on time, and your paper versions are filed as at when due.",
//     },
//     {
//         title: "Business/Corporate Taxes: ",
//         description: "Our skilled tax team is dedicated to assisting you with the determination and filing of your corporate tax returns, ensuring that your company maximizes its eligible benefits.",
//     },
//     {
//         title: "Payroll Management: ",
//         description: "Every business desire dependable and precise payroll services. We possess comprehensive technical expertise and hands-on experience in PAYE and Pension auto-enrolment, utilizing specialized software to ensure absolute accuracy. Our team members are extensively trained and equipped with the latest skills in utilizing these specialized tools. Our services adhere strictly to relevant legislations. Our staff undergo continuous training to stay abreast of current and anticipated changes in payroll and pension regulations, guaranteeing your compliance at all times. Should you require it, we offer a fully managed payroll service with dedicated account personnel. This comprehensive service includes scheduled reviews aligned with agreed Service Level Agreements (SLAs) regardless of your company's size. For assistance with auto-enrolment, our advisors are available to support you as needed. Additionally, our BACS system facilitates seamless transfer of your payroll payments from your bank account. We handle various payroll tasks such as setting up starters and leavers, liaising with HMRC, configuring pensions and payroll deductions, as well as ensuring timely submissions and other requirements.",
//     },
//     {
//         title: "VAT Returns: ",
//         description: "At JiT Accountants, we handle the preparation and submission of VAT returns that fully comply with Making Tax Digital (MTD) regulations. Your dedicated in-house accountant meticulously prepares each return, ensuring your company remains current, timely, and compliant. Our VAT specialists at JiT Accountants oversee all aspects of this intricate process, conducting regular reviews of your VAT status to guarantee accurate payments. Allow us to alleviate the pressure and offer you reassurance regarding your VAT responsibilities.",
//     },
//     {
//         title: "Company Formation:",
//         description: "We offer virtual company secretary services, providing crucial support considering the increased complexity and legal responsibilities imposed on directors by statutory obligations, such as limited company registrations and restructuring. Our skilled team ensures compliance with the Companies laws, advising on disclosure and filing requirements to prevent potential prosecution and afford you a peace of mind.",
//     },
//     {
//         title: "Business Planning, Budgeting, and Forecasting:",
//         description: "Effective planning, budgeting, and forecasting are crucial factors influencing a business's outcome. We offer the expertise, techniques, and experience needed to establish and support these processes, fostering the growth and success of your business. Leveraging our insight into your operations, we utilize available business data to assist you in crafting budgets and forecasting future scenarios. This tailored approach ensures that your business is equipped with the necessary tools to navigate and thrive in dynamic market environments.",
//     },
// ];

const dataportfolio = [
    {
        img: "https://i.imgur.com/rFLSbUL.png",
        description: "Book management app that can perform CRUD operations using MERN stack",
        descFull: "The MERN Book Management Web App is a comprehensive, full-stack web application designed to facilitate efficient book management. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this project showcases my skills in developing modern web applications with a focus on CRUD (Create, Read, Update, Delete) operations.",
        link: "https://github.com/kaushik315/mernbookwithCRUD",
    },
    {
        img: "https://i.imgur.com/Rmt90V7.png",
        description: "Food Delivery WebApp Clone",
        descFull: "The Food Delivery Web App is a user-friendly platform designed to facilitate the online ordering and delivery of food. Built using PHP, MySQL, and CSS, this project highlights my skills in web development, database management, and front-end design, providing a seamless and efficient user experience for both customers and restaurant owners.",
        link: "https://github.com/kaushik315/foodDelivery_html_php",
    },
    {
        img: "https://i.imgur.com/5QH7u9i.png",
        description: "Petition Filing WebApp Clone Using ASP.NET",
        descFull: "The Petition Clone Web App is a dynamic and interactive platform that allows users to create, sign, and share petitions. Inspired by popular petition websites, this project is built using ASP.NET and Entity Framework, showcasing my proficiency in developing robust and scalable web applications with a focus on user engagement and community-building.",
        link: "https://github.com/kaushik315/petitionClone",
    }
    
];

const contactConfig = {
    YOUR_EMAIL: "kaushik315@gmail.com",
    YOUR_FONE: "+44 7776596367",
    ADDRESS: "28/5 Hutchison Place, Edinburgh. EH14 1QJ. United Kingdom",
    description: "Feel free to reach out for collaborations, inquiries, or just a friendly chat. I'm eager to connect and explore opportunities together ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/kaushik315",
    facebook: "https://www.facebook.com/kaushik315",
    linkedin: "https://www.linkedin.com/in/kaushik-chandrasekhar-a03193175/",
    twitter: "https://x.com/kaushik315",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    // services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};