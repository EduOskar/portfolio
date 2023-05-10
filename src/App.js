import { Container, Grid, Box, Typography } from "@mui/material/";
import React from "react";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import Resume from "./pages/Resume/Resume.js";
import { SecretComponent } from "./components/SecretComponent";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container className="top_60">
      <Grid container columnGap={7}>
        <Grid Spacing={10} item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "transparent" }}>
          <HashRouter>
            {/* <Header /> */}
            <div className="main-content container_shadow">
              <Routes>
                {/* <Route path="/" element={<Resume />} />
                <Route path="/Portfolio" element={<Portfolio />} /> */}
              </Routes>
            </div>
          </HashRouter>
          <SecretComponent />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
