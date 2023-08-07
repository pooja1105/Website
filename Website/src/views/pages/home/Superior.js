import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";

const useStyles = makeStyles((theme) => ({
  maintittle: {
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "77px",
    lineHeight: "80px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.384px",
    textTransform: "uppercase",
    justifyContent: "center",
    color: "#000000",
    [theme.breakpoints.only("sm")]: {
      fontSize: "38px",
      paddingLeft: "40px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "75px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "50px",
      paddingLeft: "40px",
    },
  },
  maincontent: {
    paddingTop: "90px",
  },
  grp: {
    minHeight: "200px",
    border:
      "4px solid linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  nameimges: {
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
  },
}));

const Superior = () => {
  const classes = useStyles();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sponsors = [
    {
      name: "woodstockfund.com",
      image: "/images/img1.png",
    },
    {
      name: "tykheblock.ventures",
      image: "/images/img2.png",
    },
    {
      name: "momentum6.com",
      image: "/images/img3.png",
    },
    {
      name: "18ventures.co",
      image: "/images/img4.png",
    },

    {
      name: "888vc.co",
      image: "/images/img5.png",
    },
    {
      name: "annexinvestments.com",
      image: "/images/img6.png",
    },
    {
      name: "wegrowwithc3.com",
      image: "/images/img7.png",
    },
    {
      name: "dsainvestments.com",
      image: "/images/img7.png",
    },



  ];

  return (
    <>
      <Grid>
        <Grid className={classes.maintittle}>PREVIOUS SPONSORS</Grid>
        <Box className={classes.maincontent}>
          <Carousel {...carouselSettings}>
            {sponsors.map((sponsor, index) => (
              <Flippy
                key={index}
                flipOnHover={true}
                flipOnClick={true}
                flipDirection="horizontal"
              >
                <FrontSide>
                  <Card className={classes.grp}>
                    <CardContent>
                      <Typography className={classes.nameimges}>
                        {sponsor.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </FrontSide>
                <BackSide>
                  <Card
                    style={{
                      backgroundImage: `url(${sponsor.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100%",
                    }}
                    className={classes.grp}
                  ></Card>
                </BackSide>
              </Flippy>
            ))}
          </Carousel>
        </Box>
      </Grid>
    </>
  );
};

export default Superior;
