import React from "react";
import Banner from "./Banner";
import Wcm from "./Wcm";
import Superior from "./Superior";
import Die from "./Die";
import Count from "./Count";
import Header from "./Heder";
import Counter from "./Counter";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  video1: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  Video: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    objectFit: "cover",
    height: "140%",
    zIndex: "-1",

  },

  Countdiv: {
    backgroundPosition: "center",
    overflow: "hidden",
    marginTop: "250px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      marginTop: "240px",

    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "270px",

    },
    [theme.breakpoints.only("md")]: {
      marginTop: "240px",

    },
  },

  diediv: {
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "9rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Wcmdiv: {
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "80px",
  },

  Content: {
    position: "relative",
    zIndex: "1",
    width: "100%",
  },


}));
function Index() {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.video1}
        style={{
          background: "0deg, rgba(128, 0, 0, 0.2), rgba(128, 0, 0, 0.2)",
        }}
      >
        <video autoPlay loop muted id="video" className={classes.Video}>
          <source src="/video/videomp4.mp4" type="video/mp4" />
        </video>
        <div className={classes.Content}>
          <Header />
          <div>
            <Banner />
          </div>
        </div>
      </div>

      <div className={classes.Countdiv}>
        <Count />
      </div>
      <div className={classes.Wcmdiv} id="section3">
        <Wcm />
      </div>
      <div className={classes.Superiordiv} id="section5">
        <Superior />
      </div>
      <div className={classes.diediv} id="section4">
        <Die />
      </div>
      <div id="section6">
        <Counter />
      </div>
    </>
  );
}

export default Index;
