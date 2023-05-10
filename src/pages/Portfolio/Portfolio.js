import React from "react";
import { useEffect, useState } from "react";

import "../../App.css";

// const Portfolio = () => {
//   function loadRepositories() {
//     fetch("https://api.github.com/users/EduOskar/repos")
//       .then((response) => response.json())
//       .then((data) => {
//         setRepositories([...repos, data]);
//       });
//   }

//   const [repos, setRepositories] = useState([]);
//   useEffect(() => {
//     loadRepositories();
//   }, []);

//   if (repos.length === 0) {
//     return <p>loading</p>;
//   }

//   return (
//     <div className="portfolio_container">
//       <h6 className="section_title_text">Portfolio</h6>
//       <ul>
//         {repos &&
//           repos[0].map((repo) => {
//             return (
//               <div key={repo.id} className="">
//                 {repo.name} - {repo.description}
//               </div>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };

// export default Portfolio;
