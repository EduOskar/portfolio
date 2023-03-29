import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomTimeLine, {
  CustomTimelineSeperator,
} from "../../components/TimeLine/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

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
        <Grid container className="section">
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
        {/* skills */}
        <Grid container className="section"></Grid>
        {/* Services */}
        <Grid container className="section"></Grid>
        {/* Contact */}
        <Grid container className="section"></Grid>
      </div>
    );
  });
};

export default Resume;
