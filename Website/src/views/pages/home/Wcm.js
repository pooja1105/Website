import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textmain: {
    fontWeight: "700",
    fontSize: "101px",
    paddingRight: "145px",
    fontFamily: "Verdana",
    paddingLeft: "46px",
    lineHeight: "unset",
    paddingRight: "46px",
    [theme.breakpoints.only("sm")]: {
      fontSize: "76px",
    },
    "@media only screen and (max-width:596px)": {
      fontSize: "50px",
      padding: "0px 60px",
    },
    "@media only screen and (max-width:515px)": {
      padding: "0px 70px",
    },
    "@media only screen and (max-width:352px)": {
      padding: "0px 35px",
      fontSize: "43px",
    },

  },
  textsmall: {
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",

    alignItems: "center",
    color: "#000000",
    paddingLeft: "40px",
    [theme.breakpoints.only("sm")]: {
      padding: "12px 51px",
    },
    "@media only screen and (max-width:596px)": {
      fontSize: "18px",
      padding: "0px 60px",
    },
    "@media only screen and (max-width:515px)": {
      padding: "0px 70px",
    },
  },

  textalign: {
    textAlign: "initial",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("md")]: {
      textAlign: "center",
    },
  },

}));
function Wcm() {
  const classes = useStyles();
  return (
    <Grid>
      <Grid container className={classes.maincontent}>
        <Grid item xs={12} className={classes.textalign} sm={12} md={12} lg={12}>
          <Box>
            <Typography className={classes.textmain}>About Event</Typography>

            <Typography className={classes.textsmall}>
              CryptoRABBIT is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the
              future of finance. The edition of the CryptoRABBIT will take place during on August 30, 2023 in Dubai, with the world's top crypto companies and blockchain
              entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, CryptoRABBIT will be the gathering in the
              region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future
              extensive networking opportunities and participation from more than 40 countries.

            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Wcm;
