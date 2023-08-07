import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 27px !important",

    },
    [theme.breakpoints.only("sm")]: {
      padding: "10px 27px !important",

    },
    [theme.breakpoints.only("md")]: {
      padding: "100px 27px !important",

    },
    [theme.breakpoints.only("lg")]: {
      padding: "110px 65px !important",
    },

  },
  textmain: {
    display: "flex",
    fontFamily: 'Verdana',
    justifyContent: "center",
    alignitems: "center",
    alignContent: "center !important",
    fontWeight: "900",
    color: "#FFFFFF",
    fontSize: "90px",

    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "90px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "80px",
    },
  },
  textsmall: {
    fontWeight: "700",
    fontSize: "34px",
    display: "flex",
    fontFamily: 'Verdana',
    textAlign: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    lineHeight: "56.7px",
    [theme.breakpoints.only("md")]: {
      fontSize: "38px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "34px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "23px",
    },
  },
  button: {
    padding: "10px",
    width: "200px",
    fontFamily: 'Verdana',
    fontWeight: "700",
    fontSize: "18px",
    borderRadius: "10px",

    textDecoration: "none",
    borderStyle: "none",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  text: {
    textDecoration: "none",
    color: "#000000",
    fontFamily: 'Barlow',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "29px",
  }
}));

function Banner() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid xs={12}>
        <Grid className={classes.container}>
          <Box style={{ paddingTop: "5rem" }} className={classes.textmaincont}>
            <Typography className={classes.textmain}>
              BlockChain Expo World
            </Typography>

          </Box>
          <Box style={{ paddingTop: "3rem" }}>
            <Typography className={classes.textsmall}>
              August 30, 2023 at 5:30 PM. Dubai, ATLANTIS, THE PALM
            </Typography>
          </Box>
          <Box className={classes.btn}>
            <button className={classes.button}>
              <Link>
                <a className={classes.text}>
                  BUY TICKET
                </a>
              </Link>
            </button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;
