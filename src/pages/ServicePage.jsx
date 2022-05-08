import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { gridStyle } from "../global/gridStyle";
import { cardStyle } from "../global/cardStyle";
import { headingStyle } from "../global/typography";
import "../global/css/service.css";
import napImage from "../global/images/nap.png";
import capImage from "../global/images/cap.png";
import folderImage from "../global/images/folder.png";

const ServicePage = () => {
  return (
    <>
      <Grid container justifyContent="center" style={gridStyle.type}>
        <Grid items xs={12} sx={12} md={11} lg={11} align="center">
          <Card elevation={0} style={cardStyle.type}>
            <CardContent>
              <br />
              <br />
              <br />
              <br />
              <h1 className="serviceHeading" style={headingStyle.type3}>
                Say goodbye to slow{" "}
              </h1>
              <h1 className="serviceHeading2" style={headingStyle.type3}>
                agencies and unreliable{" "}
              </h1>
              <h1 className="serviceHeading2" style={headingStyle.type3}>
                freelancers{" "}
              </h1>
              <p className="serviceInfo">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br />
                responsive Webflow designs and development Webflow designs and .
              </p>
              <img src={napImage} className="napImage" alt="" /> <br />
              <p className="servicePara" style={headingStyle.type4}>
                {" "}
                01 / Backend
              </p> <br />
              <p className="servicePara1"> Expert Webflow development. </p>
              <p className="servicePara2">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br />
                responsive Webflow designs and development Webflow designs and .
                k, responsive Webflow designs and deve
              </p>
              <br />
              <br />
              <br />
              <img src={capImage} className="capImage" alt="" /> <br />
              <p className="servicePara" style={headingStyle.type4}>
                {" "}
                02 / Desiging
              </p>  <br />
              <p className="servicePara1"> Expert Webflow development. </p>
              <p className="servicePara2">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br />
                responsive Webflow designs and development Webflow designs and .
                k, responsive Webflow designs and deve
              </p>
              <br />
              <br />
              <br />
              <img src={folderImage} className="folderImage" alt="" />
              <p className="servicePara" style={headingStyle.type4}>
                {" "}
                03 / Frontend
              </p>  <br />
              <p className="servicePara1"> Expert Webflow development. </p>
              <p className="servicePara2">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br />
                responsive Webflow designs and development Webflow designs and .
                k, responsive Webflow designs and deve
              </p>
              <br />
              <br />
              <br />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ServicePage;
