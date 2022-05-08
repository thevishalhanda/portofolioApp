import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import { gridStyle } from "../global/gridStyle";
import { cardStyle } from "../global/cardStyle";
import { headingStyle } from "../global/typography";
import homeImage from "../global/images/homeImage.png";
import { imageStyle } from "../global/imageStyle";
import "../global/css/connect.css";
const ConnectPage = () => {
  return (
    <>
      <Grid container justifyContent="center" style={gridStyle.type}>
        <Grid items xs={12} sx={12} md={11} lg={11} align="center">
          <Card elevation={0} style={cardStyle.type}>
            <CardContent>
              <br />
              <br />

              <div className="connect-Style">
                <h1 className="heading" style={headingStyle.type4}>
                  Let's Connect
                </h1>
                <h2 className="heading2" style={headingStyle.type4}>
                  make something powerfull
                </h2>
                <h3 className="heading3" style={headingStyle.type4}>
                  meaningfull
                </h3>

                <h4 className="info">
                  Agencies are slow, expensive and hard to work with. Flowjam
                  provides super-quick,
                  <br /> responsive Webflow designs and development Webflow
                  designs and
                </h4>
              </div>

              <br />
              <br />

              <Grid items xs={12} sx={12} md={12} lg={6} sm={10} align="left">
                <Card
                  style={{
                    //   width: "50%",
                    // background: "purple",
                    height: "70vh",
                    background: "#42275a" /* fallback for old browsers */,
                    background:
                      "-webkit-linear-gradient(to right, #734b6d, #42275a)" /* Chrome 10-25, Safari 5.1-6 */,
                    background:
                      "linear-gradient(to right, #734b6d, #42275a)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

                    //                     background: "#4568DC",  /* fallback for old browsers */
                    // background: "-webkit-linear-gradient(to right, #B06AB3, #4568DC)",  /* Chrome 10-25, Safari 5.1-6 */
                    // background: "linear-gradient(to right, #B06AB3, #4568DC)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  }}>

                    <div className="input-form">
                      <h1>Contact Us</h1>
                      <br />
                      <br />
                      <br />

                      
                      <input  placeholder="Enter your firstName"/>
                      <input  placeholder="Enter your lastName"/> <br />
                      <input  placeholder="Enter your email"/>
                      <input  placeholder="Enter your Phone"/> <br />
                      <textarea name="Text1" cols="40" rows="5"></textarea> <br />

                      <button>Send Message</button>

                    </div>
                  
              

                  <CardContent></CardContent>
                </Card>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ConnectPage;
