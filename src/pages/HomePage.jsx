import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { gridStyle } from "../global/gridStyle";
import { cardStyle } from "../global/cardStyle";
import { headingStyle } from "../global/typography";
import homeImage from "../global/images/homeImage.png"
import { imageStyle } from "../global/imageStyle";
import "../global/css/homepage.css"
const HomePage = () => {
  return (
    <>
      <Grid container justifyContent="center" style={gridStyle.type}>
        <Grid items xs={12} sx={12} md={11} lg={11} align="center">
          <Card elevation={0} style={cardStyle.type}>
            <CardContent>
              <div className = "HomePage-container">

              <h2
                //  variant = "h3"
                className="heading"
                // style={headingStyle.type}
              >
                {" "}
                I’ve been a UX designer since before it was called that (7,783
                days to be exact)
              </h2>

              <h3
                //  variant = "h3"
                className="heading-info"
                // style={headingStyle.type1}
              >
                Flash, spacer GIFs, tables, system fonts... remember all that?
                If you do, you’re old—but back then you had to know how to code
                your own work, because that was the only way to get it done, and
                get it live. The years I spent designing and coding my work were
                a complete education in digital product development: I
                understand how elements in a static design will map to the
                functionality of the finished product, and the implications of
                those choices on UX. If you're like me, and you understand what
                it takes to create a great digital product, you know how you
                feel when you come across a poorly designed one.
                <br />
                Simplicity, clarity, and consistency remain my core design
                goals. To that end, I believe in the use of design systems and
                pattern libraries to create a clear logic and a solid UX.
                <br />
                Banfield Agency, in Ottawa, Canada, is where I currently design
                digital experiences across a
              </h3>
              <img  src = {homeImage} alt = "" style = {imageStyle.type} />
              </div>
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
