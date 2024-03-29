import React from "react";
import { HomeRounded, key, Telegram } from "@mui/icons-material";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeData from "../../utilities/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathName;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link className="header_navlink" as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse
        className="navbar_collapse"
        aria-controls="basic-navbar-nav"
      >
        <Nav className="header_left">
          {/* Resume Link  */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Portfolio will be filled in when i get projects i have worked on outside of school/ that im proud of  */}

          <Nav.Link
            as={NavLink}
            to="./Portfolio"
            className={
              pathName == "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              link={resumeData.socials[key].link}
              href={resumeData.socials[key].Link}
              target="_blank"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          {/* <CustomButton text={"Hire Me"} icon={<Telegram />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
