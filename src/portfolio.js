/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  title: "Hello, I'm Aye Thandar Aung",
  subTitle: emoji(
    "I'm a software engineer  🚀  who builds across the full product surface — web, mobile, and the intelligent systems behind them."
  ),
  subTitle1: "Over the past 7 years, I've shipped React and Next.js interfaces, React Native and Flutter apps, Node.js and Python backends, and AI-powered features that turn raw data into something people actually use. My comfort zone stretches from pixel-level UI polish to model inference, from TypeScript to tensors.",
  subTitle2: "What ties it all together: I care about the whole product, not just my slice of it. I design systems that scale, write code that reads cleanly, and translate between product, design, and data teams without losing the thread.",
  resumeLink:
    "https://drive.google.com/file/d/1A9yyLxUrO58TiU91ai0f4J9Xww2NyPEt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AyeThandar655",
  linkedin: "https://www.linkedin.com/in/ayethandaraung/",
  gmail: "ayethandaraung544@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Web Development: I build fast, responsive, production-ready web apps with React, Next.js, Vue, and Angular — from marketing sites to complex dashboards with real users behind them."),
    emoji("⚡ Mobile Development: I design cross-platform mobile experiences in React Native, Flutter, and Ionic that feel native on both iOS and Android, without the overhead of maintaining two codebases."),
    emoji("⚡ Backend & APIs: I architect reliable backends with Node.js, Express, Laravel, and Python — designing clean APIs, optimizing database transactions, and building systems that don't break under load."),
    emoji("⚡ AI & Intelligent Features: I integrate LLMs, build RAG pipelines, and ship AI-powered features (chat, search, automation, content generation) that turn products from functional into genuinely useful."),
    emoji("⚡ Data Science & Analytics: I work with Python, Pandas, NumPy, and scikit-learn to clean messy data, build models, and turn information into decisions."),
    emoji("⚡ Integrations & Infrastructure: Firebase, AWS, Stripe, and the third-party services that make products real — wired up cleanly and built to scale.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "typescript-icon"
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Next Js",
      fontAwesomeClassname: "fab fa-neos"
    },
    {
      skillName: "Node Js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "King Mongkut’s University of Technology Thonburi",
      logo: require("./assets/images/kmuttLogo.png"),
      subHeader: "Master of Science (M.Sc.), Computer Engineering ",
      duration: "August 2025 - Present",
      country: "Thailand"
    },
    {
      schoolName: "University of Computer Studies, Hinthada",
      logo: require("./assets/images/universityLogo.png"),
      subHeader: "Bachelor of Computer Science ",
      duration: "December 2013 - November 2018",
      country: "Myanmar"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Buff Technology Co Ltd",
      location: "Thailand",
      companylogo: require("./assets/images/bufftechLogo.png"),
      date: "Dec 2023 – Present",
      companywebsite: "https://www.bufftechthailand.com/",
    },
    {
      role: "Frontend Developer",
      company: "Grid Plus Pte Ltd",
      location: "Singapore",
      companylogo: require("./assets/images/gridplusLogo.png"),
      date: "Jun 2022 – Dec 2023",
      companywebsite: "https://gridplus.com.sg/",
    },
    {
      role: "Frontend Developer",
      company: "Modus Operandi Co Ltd",
      location: "Myanmar",
      companylogo: require("./assets/images/moLogo.jpg"),
      date: "Sep 2021 - Jun 2022",
      companywebsite: "https://www.mo.com.mm/",
    },
    {
      role: "Frontend Developer",
      company: "Myanma Apex Bank",
      location: "Myanmar",
      companylogo: require("./assets/images/mabLogo.png"),
      date: "Dec 2020 – Sep 2021",
      companywebsite: "https://www.mabbank.com/",
    },
    {
      role: "Frontend Developer",
      company: "Myanmar Information Technology Co Ltd",
      location: "Myanmar",
      companylogo: require("./assets/images/mitLogo.png"),
      date: "Oct 2018 – Sep 2020",
      companywebsite: "https://www.mit.com.mm/",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const featuredProjects = {
  title: "Featured Projects",
  subtitle: "COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/vssapp.webp"),
      projectName: "VSS App",
      projectDesc: "GPS (Global Positioning System) is a satellite network-based system that provides navigation, positioning, and timing services.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.gridplus.vssapp&pli=1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/momoneyapp.webp"),
      projectName: "MoMoney App",
      projectDesc: "The MoMoney Application is a digital payment platform that facilitates financial transactions through a digital channel and over-the counter channel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.momoney.subscriber.prod&hl=en&gl=GB"
        }
      ]
    },
    {
      image: require("./assets/images/mabapp.webp"),
      projectName: "MAB Mobile",
      projectDesc: "MAB Mobile is a digital wallet that makes banking, payments, shopping, discovering deals effortless and readily accessible through your mobile device.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.ascend.money.rewards.app.mm&hl=en"
        }
      ]
    },
    {
      image: require("./assets/images/mammoLogo.png"),
      projectName: "Mammoworld",
      projectDesc: "MammoWorld is an e-commerce platform selling IT products, electronic devices, home appliances, and smart gadgets.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mammoworld.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bipLogo.png"),
      projectName: "BIP",
      projectDesc: "BIP started as a telecommunication infrastructure company and has expanded into sectors including HV electrical systems, chemical, and construction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bip.co.th/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Mobile Application Training",
      image: require("./assets/images/certificate.jpg"),
      imageAlt: "Certificate Logo"
    },
    {
      title: "Internship Certificate",
      image: require("./assets/images/intern_certificate.jpg"),
      imageAlt: "Google Assistant Action Logo",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "0816538290",
  email_address: "ayethandaraung544@gmail.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  featuredProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
