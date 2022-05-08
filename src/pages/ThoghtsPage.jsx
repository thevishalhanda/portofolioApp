import React from "react";
import {
  Grid,
  Typography,
  Card,
  Button,
  CardContent,
  TextField,
} from "@material-ui/core";
import { gridStyle } from "../global/gridStyle";
import { cardStyle } from "../global/cardStyle";
import { headingStyle } from "../global/typography";
import "../global/css/thoughts.css";
import homeImage from "../global/images/homeImage.png";
import heartImage from "../global/images/heartImage.png"

const ThoughtsPage = () => {
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
              <br />
              <br />
              <br />

              <img className="thought-Image" src={homeImage} alt="" />
              <p className="heading">Prashant Thoughts</p>

              <p className="info">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br />
                responsive Webflow designs and development Webflow designs and .
              </p>
             
             <div className="subscribe-btn">
               <input /> 
               <button>Subscribe</button>
              
              <h4> Website made by <img src = {heartImage} /> &  Vishal Handa </h4>
              
             </div>
                
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ThoughtsPage;
