import React from "react";
import { Grid, Typography, Card, CardContent, TextField, Button } from "@material-ui/core";
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

              <p className="heading" style={headingStyle.type4}>
                Let's Connect
              </p>
              <p className="heading2" style={headingStyle.type4}>
                make something powerfull ,
              </p>
              <p className="heading3" style={headingStyle.type4}>
                meaningfull
              </p>

              <p className="info">
                Agencies are slow, expensive and hard to work with. Flowjam
                provides super-quick,
                <br /> responsive Webflow designs and development Webflow
                designs and
              </p>

              <br />
              <br />

              <Grid items xs={12} sx={12} md={12} lg={6} sm={10}
              align = "left"
              >
                <Card
                  style={{
                    //   width: "50%",
                    // background: "purple",
                    height: "100vh",
                    background: "#4568DC",  /* fallback for old browsers */
background: "-webkit-linear-gradient(to right, #B06AB3, #4568DC)",  /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #B06AB3, #4568DC)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

                  }}
                >
                  <h3>firstName</h3>
                  <TextField
                  style = {{
                    marginLeft:"4%"
                  }}
                  
                  />
                  <h3>lastName</h3>
                  <TextField
                  style = {{
                    marginLeft:"4%"
                  }}
                  />

                  <h3>email</h3>
                  <TextField
                  style = {{
                    marginLeft:"4%"
                  }}
                  />

                  <h3>message</h3>
                  <TextField
                  variant = "outlined"
                  style = {{
                    marginLeft:"4%",
                    height:"2000px"
                  }}
                  />
                  <br />

                  <Button
                  style={ {
                    marginBottm:"200px"
                  }}
                  >

                    Send
                  </Button>

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
