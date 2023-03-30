import { Grid, Icon, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import CustomTimeLine, {
  CustomTimelineSeperator,
} from "../../components/TimeLine/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CustomButton from "../../components/Button/Button";
import "./Resume.css";
import resumeDatajs from "../../utilities/resumeDatajs.json";
import resumeData from "../../utilities/resumeData";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import headerScroll from "../../components/Header/Header";

const Resume = () => {
  //Reading in from jsonfile
  return resumeDatajs.map((ohllabolla) => {
    return (
      <div>
        {/* About me */}
        <Grid container className="section pb_45">
          <Grid className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">About Me</h6>
          </Grid>
          <Grid item xs={12}>
            <Typography className="aboutme_text">{ohllabolla.about}</Typography>
          </Grid>
        </Grid>
        {/* Education and experiences */}
        <Grid container className="section pb_45">
          <Grid className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Resume</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="resume_timeline">
              {/* Experience */}
              <Grid item sm={12} md={6}>
                <CustomTimeLine title="Work" icon={<WorkIcon />}>
                  {resumeData.experiences.map((experiences) => (
                    <TimelineItem>
                      <CustomTimelineSeperator />
                      <TimelineContent>
                        <Typography className="timeline_title">
                          {experiences.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experiences.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {experiences.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeLine>
              </Grid>
              {/* Education */}
              <Grid item sm={12} md={6}>
                <CustomTimeLine title="Education" icon={<SchoolIcon />}>
                  {resumeData.education.map((educations) => (
                    <TimelineItem>
                      <CustomTimelineSeperator />
                      <TimelineContent>
                        <Typography className="timeline_title">
                          {educations.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {educations.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {educations.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeLine>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Services */}
        <Grid container className="section pb_45">
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">My Services</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              spacing={3}
              justifyContent="space-around"
              className="section pb_45"
            >
              {resumeData.services.map((service) => (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="service">
                    <Icon className="service_icon">{service.icon}</Icon>
                    <Typography className="service_title" variant="h6">
                      {service.title}
                    </Typography>
                    <Typography className="service_description" variant="body2">
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* skills */}
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          className="section pb_45"
        >
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} className="skill_container">
              <Paper elevation={0} className="skill">
                <Typography variant="h6" className="skills_title">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography>
                    <TimelineDot className="skill_timelinedot">
                      {element}
                    </TimelineDot>
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* Contact */}
        <Grid container className="section_contact">
          {/* Contact form */}

          {/* Contact information */}
          <Grid item xs={12} lg={5}>
            <Grid container className="contactInfo_socialsContainer">
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact information</h6>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Adress: </span> {resumeData.adress}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Phone: </span> {resumeData.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>E-mail: </span> {resumeData.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  });
};

export default Resume;
