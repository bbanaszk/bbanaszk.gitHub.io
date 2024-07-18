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
  username: "Borys Banaszkiewicz",
  title: "Hi all, I'm Borys",
  subTitle: emoji(
    "A passionate Software Engineering student at Arizona State Univeristy's Ira A. Fulton School of Engineering 🚀 having a proficiency in Python, Java, C, C++, and Swift, I enjoy tackling complex challenges efficiently and creatively."
  ),
  resumeLink: "https://drive.google.com/file/d/1qxmA0Hg7AfuYA4-139A77lXy4wV5MH-w/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


const blogSection = {

};

const talkSection = {

};

const podcastSection = {

};

const twitterDetails = {

};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bbanaszk",
  linkedin: "https://www.linkedin.com/in/borys-banaszkiewicz-211989183",
  gmail: "borysbanaszk@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Driven Software Engineer with a Passion for Innovation and Problem-Solving",
  skills: [
    emoji("⚡ Refined critical thinking and algorithm skills by solving over 500 LeetCode problems, focusing on data structures and efficiency."),
    emoji("⚡ Proficient in multiple programming languages including Python, Java, Swift, C, and C++"),
    emoji("⚡ Actively participated in Scrum projects, utilizing Taiga for project management and GitHub for source control"),
    emoji("⚡ Created several multi-threaded applications, ranging from client/server setups to image processing applications"),
    emoji("⚡ Completed 100 days of SwiftUI course to expand my knowledge with iOS development"),
    emoji("⚡ Proficient in data serialization using JSON and Protobuf (See gRPC project example for Protobuf)"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University's Ira A. Fulton School of Engineering",
      logo: require("./assets/images/asu.png"),
      subHeader: "Bachelors of Science in Software Engineering",
      duration: "January 2021 - May 2025",
      grade: "4.0"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java, Python",
      progressPercentage: "85%"
    },
    {
      Stack: "C, C++, Swift", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript, C#",
      progressPercentage: "50%"
    },
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Director of Operations",
      company: "Boost Carriers, Inc.",
      companylogo: require("./assets/images/boostcarriers.png"),
      date: "September 2019 – May 2022",
      desc: "Responsible for managing all operations; developing business and financial plans, recruiting strategies, and growing sales through marketing",
      descBullets: [
        "Implemented and managed the expansion of operations from 5 to 40 trucks, increasing yearly net revenue from $300K to $6M",
        "Managed the daily operations of 11 full-time employees, 40 independent contractors, and 40 trucks"
      ]
    },
    {
      role: "Founder",
      company: "Boost Auto Transport",
      companylogo: require("./assets/images/boostauto.png"),
      date: "August 2016 – September 2019",
      desc: "Independently founded a trucking and logistics company in Chicago, IL"
    },
    {
      role: "Assistant Operations Manager",
      company: "CHC Wellbeing",
      companylogo: require("./assets/images/chc.png"),
      date: "August 2015 – December 2016",
      desc: "Engaged with Account Managers and Sales Representatives to complete sales orders and implement customer incentive programs"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  projects: [
     {
      projectName: "Parallel Image Filtering",
      projectDesc: "Implemented a parallel processing application to apply blur and Swiss cheese filters on BMP images. This project utilizes efficient multi-threading techniques to enhance image processing performance, with the flexibility to adjust the number of threads dynamically to optimize workload distribution.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Multi-Threaded-filter.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Chess",
      projectDesc: "A comprehensive chess game featuring complete gameplay logic including castling, en passant, check, checkmate, and stalemate. Some features include visual indicators for legal moves and legal captures, full undo functionality, and accurate chess notation to manage game state.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Chess.git"
        }
      ]
    },
    {
      projectName: "RPG",
      projectDesc: "This project showcases the implementation of 3 design patterns that work concurrently to stimulate an RPG game, enhancing gameplay through tactical enemy encounters, loot collection, and player progression in a dungeon environment.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/RPG"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "gRPC",
      projectDesc: "This project is an implementation of a Distributed System using gRPC. It features multiple client-side services such as management of hometown data (city name, student name), Caesar and XOR Cipher encryption/decryption algorithms which can be chosen by the user at runtime, and bill payment services.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/gRPC-regOnOff"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "LoanService",
      projectDesc: "Developed a multi-threaded server-client system enabling simultaneous connections for loan management. This system allows clients to manage loans and nodes to handle approvals, with the server coordinating communication to ensure consensus among nodes for loan decisions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/LoanService.git"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const personalProjects = {
  title: "Personal Projects",
  subtitle: "Here are some personal projects I have worked on",
  projects: [
    {
      projectName: "Chess",
      projectDesc: "A comprehensive chess application featuring complete gameplay logic including castling, en passant, check, checkmate, and stalemate. Enhancements include display of captured pieces, visual indicators for legal moves and captures, full undo functionality, accurate chess notation, and intuitive visual feedback through a red glow for valid captures.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Chess.git"
        }
      ]
    },
    {
      projectName: "Alien Invasion",
      projectDesc: "This was my first programming project from 'Python Crash Course', and it is what started my programming journey. I gained proficiency in game development using Python and Pygame. This included creating interactive game elements, handling user inputs, and implementing game mechanics such as collision detection. These skills enhanced my understanding of Python programming and provided hands-on experience in developing interactive applications.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Alien-Invasion.git"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resume: "https://drive.google.com/file/d/1qxmA0Hg7AfuYA4-139A77lXy4wV5MH-w/view?usp=share_link",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "borysbanaszk@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  personalProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
