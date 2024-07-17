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
  title: "Hi all, I'm Borys Banaszkiewicz",
  subTitle: emoji(
    "A passionate Software Engineering student at Arizona State Univeristy's Ira A. Fulton School of Engineering 🚀 having a proficiency in Python, Java, C, C++, and Swift, I enjoy tackling complex challenges efficiently and creatively."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17jDMVgLas5dsyS2YNU6ZdOyhml5LLauS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const blogSection = {};

const talkSection = {};

const podcastSection = {};

const twitterDetails = {};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bbanaszk",
  linkedin: "https://www.linkedin.com/in/borys-banaszkiewicz-211989183",
  gmail: "bbanaszk@asu.edu",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DRIVEN SOFTWARE ENGINEER WITH A PASSION FOR INNOVATION AND PROBLEM-SOLVING",
  skills: [
    emoji(
      "⚡ Over 500 LeetCode problems solved, optimizing solutions until I outperform 99% of submissions"
    ),
    emoji("⚡ Skilled in Python, Java, Swift, C, and C++"),
    emoji(
      "⚡ Passionate about programming, with a deep understanding of software engineering principles"
    ),
    emoji(
      "⚡ Developed multiple client/server applications using AWS as a remote server"
    ),
    emoji(
      "⚡ Collaborated on a team using Scrum and GitHub to create a bus scheduling software"
    ),
    emoji(
      "⚡ Adhering to best practices for GitHub repository standards, commit messages, and teamwork"
    ),
    emoji(
      "⚡ Built multi-threaded client/server applications and a multi-threaded photo filter application"
    ),
    emoji(
      "⚡ Completed 100 days of SwiftUI training, focusing on iOS development as a hobby"
    ),
    emoji(
      "⚡ Proficient in data serialization with JSON and Protobuf protocols"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "gradle",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Microsoft Excel",
      fontAwesomeClassname: "fab fa-windows"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Arizona State University's Ira A. Fulton School of Engineering",
      logo: require("./assets/images/asu.png"),
      subHeader: "Bachelors of Science in Software Engineering",
      duration: "January 2021 - May 2025",
      grade: "4.0"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming and technical skills",
      progressPercentage: "90%"
    },
    {
      Stack: "Entrepreneurial skills", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Drive and dedication",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
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
  title: "School Projects",
  subtitle: "Here are some projects I have worked on in my degree",
  projects: [
    {
      projectName: "RPG_bbanaszk",
      projectDesc:
        "This project showcases the implementation of 3 design patterns that work concurrently to stimulate an RPG game where the player progresses through a dungeon fighting enemies, collecting loot, leveling up, and more.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/bbanaszk/RPG_bbanaszk"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "gRPC",
      projectDesc:
        "This project is an implementation of a gRPC-based Distributed System. It features multiple client-side services such as management of hometown data (city name, student name), encryption/decryption of a string using Caesar Cipher or XOR Cipher encryption/decryption algorithms which can be chosen by the user at runtime, and bill payment operations.",
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
      projectDesc:
        "This project implements a multi-threaded server-client system where multiple clients and nodes can connect simultaneously. Clients can view existing loans, request new loans, or pay back existing loans. Nodes authenticate and participate in loan approval processes. The server acts as a middle man by managing communication between client and nodes, ensuring loan requests are approved by a majority of nodes before proceeding. The system handles parallel voting among nodes for efficient decision-making and supports persistent data storage to maintain system integrity across restarts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/LoanService.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Multi-Threaded Filter",
      projectDesc:
        "The project involves implementing a program to process BMP images by applying filters like blur and Swiss cheese effects using multithreading techniques. It focuses on breaking down image processing tasks into smaller units distributed across multiple threads for improved performance. Skills emphasized include image manipulation, parallel algorithm design with pthreads, and efficient file handling for reading and writing BMP files.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Multi-Threaded-filter.git"
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
      projectDesc:
        "This game includes all check, checkmate, and stalemate logic. I also implemented captured pieces showing on either side of the board, the legal moves get displayed for whichever piece is currently selected, logic to undo a move all the way to beginning of the game, valid chess notation and a red glow behind opposing players pieces for any valid captures.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Chess.git"
        }
      ]
    },
    {
      projectName: "Alien Invasion",
      projectDesc:
        "This was my first programming project from 'Python Crash Course', and it is what started my programming journey. I gained proficiency in game development using Python and Pygame. This included creating interactive game elements, handling user inputs, and implementing game mechanics such as collision detection. These skills enhanced my understanding of Python programming and provided hands-on experience in developing interactive applications.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/beastlyx/Alien-Invasion.git"
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
  resume:
    "https://drive.google.com/file/d/17jDMVgLas5dsyS2YNU6ZdOyhml5LLauS/view?usp=sharing",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (630)-397-8092",
  email_address: "bbanaszk@asu.edu"
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
