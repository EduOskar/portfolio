import { Description } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";

export default {
  name: "Oskar Åhling",
  title: "Fullstack developer",

  birthday: "1995-05-19",
  email: "oskarahling_95@hotmail.com",
  adress: "Fridhemsgatan 21",
  phone: "070 213 81 49",

  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/oskar-%C3%A5hling-708a99162/",
      text: "ClickMyLinkedIn",
      icon: <LinkedInIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/oskar.ahling/",
      text: "ClickMyFacebook ",
      icon: <FacebookIcon />,
    },
    Github: {
      link: "https://github.com/EduOskar",
      text: "ClickMyGithub",
      icon: <GitHubIcon />,
    },
  },
  about: "",
  experiences: [
    {
      title: "SJAB",
      date: "2017-2022",
      description: "Tågvärd på SJ",
    },
    {
      title: "Expresseyrån",
      date: "2020-2021",
      description: "Truckförare på Expressbyrån i Timrå",
    },
  ],
  education: [
    {
      title: "Hälsoutvecklare",
      date: "2016-2018",
      description:
        "Utbildade mig till häsloutvecklare hos Jakobsberg folkhögskola, där ingick: Personlig tränare, Kostrådgivare, Massör, HäsloCoach ",
    },
    {
      title: "Systemutvecklare.Net",
      date: "2022-Pågående",
      description:
        "Utbildar mig inom en rad ämnen som faller under systemutveckling inom .Net :ObjektOrienterad programmering, programmering av databaser, Agila metoder, webbutveckling frontend, WebbApplikationer i c#, ASP.Net, DesignMönster och arkitektur, DevOps, AI-Komponenter och machinelearning hos Edugrade ",
    },
  ],

  services: [
    {
      title: "Web Developer",
      description: "Fortfarande under utbildning",
      icon: <PublicOutlinedIcon />,
    },
    {
      title: "Databas",
      description: "Fortfarande under utbildning",
      icon: <StorageOutlinedIcon />,
    },
  ],

  skills: [
    {
      title: "Front-end",
      description: [
        "Webbutveckling Frotend",
        "React",
        "Html",
        "Css",
        "JavaScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Courses",
      description: [
        "Databaser och SQL",
        "C#",
        "Ms SQL Server",
        "MySQL",
        "LINQ och EF",
        "Webbapps i C#, ASP.NET",
        "Designmönster & arkitektur",
        "DevOps",
        "AI-komponenter & machine learning",
      ],
    },
    {
      title: "Other",
      description: ["Git", "Github", "Agile"],
    },
  ],
};
