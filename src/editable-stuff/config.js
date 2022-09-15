// Navigation Bar SECTION
const navBar = {
  show: true,
};

// , #ff9b11, #1ad7c0, #ff7f7f,

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff7f7f, #ecf0f1",
  firstName: "Thirawut",
  middleName: "",
  lastName: "Kaeophirom",
  message: " I'm a web developer and civil engineer. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/PalmThirawut",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/teerawut.keawphirom/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/pe_alm/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/thirawut-kaeophirom-058b17248/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Thirawut_k",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/thirawut.jpg"),
  imageSize: 375,
  message:
    "My name is Thirawut Kaeophirom. I’m a graduate of 2020 from Kasetsart University with a degree in Water Resources Engineering. After graduating I worked as a Civil Engineer, Site Engineer position, but I have a passion for web development. So I'm always starting to learn and practice myself. My goal is to keep improving myself and creating projects of the highest quality.",
  resume: "https://drive.google.com/file/d/1Viw1HD1cs3Ecc_wSxfrywwQ-OiVzopcq/view?usp=sharing",
};

const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "PalmThirawut", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Certificates",
  message:  
  "The Complete 2022 Web Development Bootcamp is only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.",
  images: [
    { 
      img: require("../editable-stuff/Certificate.jpeg"), 
      label: "", 
      paragraph: "" 
    }
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS"},
    { name: "JavaScript"},
    { name: "bootstrap"},
    { name: "Git/GitHub"},
    { name: "NodeJS"},
    { name: "RESTful API"},
    { name: "MongoDB"},
    { name: "React"},
  ],
  softSkills: [
    { name: "Goal-Oriented"},
    { name: "Collaboration"},
    { name: "Positivity"},
    { name: "Adaptability"},
    { name: "Problem Solving"},
    { name: "Empathy"},
    { name: "Organization"},
    { name: "Creativity"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Highly motivated professional seeking to obtain a position as a Front-End Developer. If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "keawphirom@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Site Engineer',
      companylogo: require('../assets/img/ap.png'),
      date: 'December 2020 – July 2022'
    },
    {
      role: 'Site Engineer',
      companylogo: require('../assets/img/nawarat.png'),
      date: 'June 2020 – November 2020'
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
