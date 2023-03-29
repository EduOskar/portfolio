import { Description } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    "Oskar Åhling är en ung man som bor i Sundsvall, en stad i norra Sverige. Han är känd för sin passion för friluftsliv och äventyr, och han spenderar ofta sin fritid med att vandra i de vackra skogarna och bergen som omger staden.\n\nEnligt lokala nyheter har Oskar deltagit i flera utmanande vandringar och klättringar i regionen, inklusive bestigningen av det högsta berget i norra Europa, Kebnekaise. Han har även varit involverad i miljöskyddsaktiviteter och arbetat med att bevara naturområden i regionen.\n\nUtöver hans passion för friluftsliv är Oskar också känd för sitt arbete som programmerare. Han har en examen i datavetenskap och har varit involverad i utvecklingen av flera digitala projekt, inklusive en mobilapplikation för vandrare som ger information om lederna i området.\n\nTrots att Oskar är ung har han redan gjort sig ett namn i Sundsvall som en modig och engagerad person som älskar utmaningar och strävar efter att göra en positiv skillnad i samhället.",
  experiences: [
    {
      title: "work1",
      date: "2018-present",
      description: "Workworkwork sugsug",
    },
    {
      title: "work2",
      date: "2016-2018",
      description: "Workworkwork sugsug",
    },
    {
      title: "work3",
      date: "2014-2017",
      description: "Workworkwork sugsug",
    },
  ],
  education: [
    {
      title: "education1",
      date: "2010-2013",
      description: "yesyes i did the study",
    },
    {
      title: "education2",
      date: "2013-2015",
      description: "yesyes i did the study",
    },
  ],
};
