import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { gridStyle } from "../global/gridStyle";
import { cardStyle } from "../global/cardStyle";
import { headingStyle } from "../global/typography";
import "../global/css/content.css";
import napImage from "../global/images/nap.png";
import capImage from "../global/images/cap.png";
import folderImage from "../global/images/folder.png";
import ContentList from "../global/reusableComponents/ContentList";

const ContentPage = () => {
    return (
        <>
       

           <Grid container justifyContent="center" style={gridStyle.type}>
        <Grid items xs={12} sx={12} md={11} lg={11} align="center">
          <Card elevation={0} style={cardStyle.type}>
            <CardContent>
            <br />
        <br />
        <br />
        <div className="headingfor-Content">
          <h1>
          Content and Blogs
          </h1>
          <h2>
          agencies and unreliable
          </h2>
          <h3>
          Journey
          </h3>
          <h4 className="info-forContentPage">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br />
                responsive Webflow designs and development Webflow designs and .
                k, responsive Webflow designs and deve
              </h4>
        </div>
               <br />
             
             
        <ContentList />
        <ContentList />
        <ContentList />
        </CardContent>
            </Card>
            </Grid>
            </Grid>

        </>
    )
}


export default ContentPage;