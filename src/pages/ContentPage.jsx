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
               <p
               className="heading"
               style={headingStyle.type4}
               >Content and Blogs</p>
              <p
              className="heading2"
              style = {headingStyle.type4}
              >agencies and unreliable
              </p>
              <p
              className="heading3"
              style = {headingStyle.type4}
              >Journey
              </p>

              <p
              className="info"
            //   style={headingStyle.type5}
              >
              Agencies are slow, expensive and hard to work with. Flowjam provides super-quick,
 <br /> responsive Webflow designs and development Webflow designs and 
              </p>
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