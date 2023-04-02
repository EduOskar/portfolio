import React from "react";
import { useEffect, useState } from "react";

const Portfolio = () => {
  function loadRepositories() {
    fetch("https://api.github.com/users/EduOskar/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories([...repos, data]);
      });
  }

  const [repos, setRepositories] = useState([]);
  useEffect(() => {
    loadRepositories();
  }, []);

  if (repos.length === 0) {
    return <p>loading</p>;
  }

  return (
    <div className="portfolio_container">
      Portfolio
      <ul>
        {repos &&
          repos[0].map((repo) => {
            return (
              <li key={repo.id}>
                {repo.name} - {repo.description}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Portfolio;
