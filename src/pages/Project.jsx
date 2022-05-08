import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { gridStyle } from "../global/gridStyle";
import { cardStyle } from "../global/cardStyle";
import { headingStyle } from "../global/typography";
import homeImage from "../global/images/homeImage.png";
import { imageStyle } from "../global/imageStyle";
import "../global/css/project.css";
import ProjectList from "../global/reusableComponents/ProjectList";
const RecentProject = () => {
  return (
    <>
      <Grid container justifyContent="center" style={gridStyle.type}>
        <Grid items xs={12} sx={12} md={11} lg={11} align="center">
          <Card elevation={0} style={cardStyle.type}>
            <CardContent>
              <p className="projectHeading" style={headingStyle.type2}>
                01 / Website
              </p>
              <p className="projectHeading2" style={headingStyle.type2}>
                Weather App
              </p>

              <p className="project-Info" style={headingStyle.type2}>
                The years I spent designing and coding my work were a complete
                education in digital product development: I understand how
                elements in a static design will map to the functionality of the
                finished product, and the implications of those choices on UX.
                If you're like me, and you understand what it takes to create a
                great digital product, you know how you feel when you come
                across a poorly designed one
              </p>
              <br />

              <ProjectList />

              <br />
              <br />

              <p className="projectHeading" style={headingStyle.type2}>
                02 / Website
              </p>
              <p className="projectHeading2" style={headingStyle.type2}>
                Lover App
              </p>

              <p className="project-Info" style={headingStyle.type2}>
                The years I spent designing and coding my work were a complete
                education in digital product development: I understand how
                elements in a static design will map to the functionality of the
                finished product, and the implications of those choices on UX.
                If you're like me, and you understand what it takes to create a
                great digital product,
              
                you know how you feel when you come across a poorly designed one
              </p>
              <br />

              <ProjectList />
              <br />
              <br />

              <p className="projectHeading" style={headingStyle.type2}>
                03 / Website
              </p>
              <p className="projectHeading2" style={headingStyle.type2}>
                Vizi App
              </p>

              <p className="project-Info" style={headingStyle.type2}>
                The years I spent designing and coding my work were a complete
                education in digital product development: I understand how
                elements in a static design will map to the functionality of the
                finished product, and the implications of those choices on UX.
                If you're like me, and you understand what it takes to create a
                great digital product,
               
                you know how you feel when you come across a poorly designed one
              </p>
              <br />

              <ProjectList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default RecentProject;
