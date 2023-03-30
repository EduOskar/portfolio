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
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/oskar.ahling/",
      text: "MyFacebook ",
      icon: <FacebookIcon />,
    },
    Github: {
      link: "https://github.com/EduOskar",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Idrotten har spelat en viktig roll i mitt liv. En av de viktigaste lärdomarna jag har tagit med mig från idrotten är att jag måste göra mitt bästa för att gruppen ska ha största möjliga chans att nå slutmålet. Utöver detta har både idrott och arbetsliv gett mig andra fördelar. Jag trivs med att arbeta i högt tempo, men jag förstår också vikten av att inte stressa igenom projekt. Samarbetet mellan kollegor är viktigt för en bra gruppdynamik, men det är också viktigt för individen att vara förberedd att göra sin del av arbetet. Av allt jag har lärt mig vill jag dock betona en punkt som jag anser vara min största styrka: jag har en enorm motivation att lära mig nya saker, oavsett vad det handlar om. Ett av mina största intressen har alltid varit idrott, och jag har prövat på många olika sporter under min uppväxt. Jag fastnade tidigt för ishockey och fotboll och spelade dessa sporter i många år, men tyvärr tvingades jag sluta 2018. Efter detta började jag träna kampsport, och jag tränade MMA (mixed martial arts) och BJJ (braziliansk jiu-jitsu) i sex år innan jag tvingades sluta på grund av skador. Min förhoppning är att jag ska få möjlighet att visa min potential och att ni ger mig chansen att göra ett bra jobb hos er. Jag är övertygad om att ni inte kommer att bli besvikna. Mvh, Oskar Åhling.",
  experiences: [
    {
      title: "SJAB",
      date: "2017-2022",
      description: "Arbetade som tågvärd på SJ",
    },
    {
      title: "ExpressByrån",
      date: "2020-2021",
      description:
        "Arbetade som truckförare på expressbyrån i timrå innan den avdelningen stängdes ner",
    },
  ],
  education: [
    {
      title: "Hälsoutvecklare",
      date: "2016-2018",
      description:
        "Utbildade mig inom allt som skulle kunna klassa som hälsa: Personlig tränare, Kostrådgivare, Massör, HäsloCoach hos jakobsberg folkhögskola",
    },
    {
      title: "Systemutvecklare.Net",
      date: "2022-Ongoing",
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
      title: "Database",
      description: "Fortfarande under utbildning",
      icon: <StorageOutlinedIcon />,
    },
  ],

  skills: [
    {
      title: "Front-end",
      description: [
        "ReactJs",
        "JavaScript",
        "Typescript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Back-end",
      description: ["NodeJs", "C#", "Ms SQL Server", "MySQL", "ORM"],
    },
    {
      title: "Other",
      description: ["Git", "Github", "Agile"],
    },
  ],
};
