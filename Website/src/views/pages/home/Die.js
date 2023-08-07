import React, { useState } from "react";
import { Container, Grid, Typography, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Carousel from "react-material-ui-carousel";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  desktopViewSlider: {
    [theme.breakpoints.only("lg")]: {
      display: "block !important",
    },
    [theme.breakpoints.only("md")]: {
      display: "block !important",
    },
    [theme.breakpoints.only("xs")]: {
      display: "none !important",
    },
    [theme.breakpoints.only("sm")]: {
      display: "none !important",
    },
  },

  mobileViewSlider: {
    [theme.breakpoints.only("lg")]: {
      display: "none !important",
   
    },
    [theme.breakpoints.only("md")]: {
      display: "none !important",


    },
    [theme.breakpoints.only("xs")]: {
      display: "block !important",
  

    },
    [theme.breakpoints.only("sm")]: {
      display: "block !important",
     

    },
  },

  img: {
    // backgroundImage: `url(${"/images/die.svg"})`,
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
    [theme.breakpoints.only("md")]: {
      height: "100vh",
    },
    [theme.breakpoints.only("xs")]: {
      height: "150vh",
    },
    [theme.breakpoints.only("sm")]: {
      height: "180vh",
    },
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  intext: {
    fontFamily: "Verdana",
    fontWeight: "700",

    fontSize: "66px",
    textAlign: "center",
    [theme.breakpoints.only("md")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "38px",
    },
  },
  imgtext: {
    display: "flex",
  },
  txt: {
    fontFamily: "Verdana",
    fontWeight: "400",
    fontSize: "35px",
    color: "#000",
    marginTop: "25rem",
    textAlign: "left",
    transition: "fadeIn .5s ease, margin-top .5s ease, margin-bottom .5s ease",
    [theme.breakpoints.only("md")]: {
      fontSize: "26px",
      padding: "0px 4px !important",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "20px",
    },
  },
  description: {
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "20px",
    color: "#000",
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0s, opacity 0.5s linear",
  },
  txtMobile: {
    fontFamily: "Verdana",
    fontWeight: "400",
    fontSize: "35px",
    color: "#000",
    marginTop: "18rem",
    textAlign: "left",
  },
  descriptionMobile: {
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "20px",
    color: "#000",
  },
  diversion: {
    padding: " 30px 5rem",
    [theme.breakpoints.only("xs")]: {
      padding: " 30px 0px",

    },
    [theme.breakpoints.only("sm")]: {
      padding: " 26px 0px",
    },
  },
  diversionmobile: {
    padding: " 30px 5rem",
    [theme.breakpoints.only("xs")]: {
      padding: " 30px 0px",

    },
    [theme.breakpoints.only("xs")]: {
      padding: " 26px 0px",
    },
  },
  gridCarosal: {
    paddingLeft: "2rem !important",
    transition: "background 100ms linear",
    height: "80vh",
  },
  gridCarosalMobile: {
    paddingLeft: "2rem !important",
  },
}));

var items = [
  {
    slideNo: 1,
    img: "/images/dubai.png",
    data: [
      {
        id: 1,
        name: "Alex Zinder",
        description:
          ("Ledger Enterprise"),
        img: "/images/Alex.png",
      },
      {
        id: 2,
        name: "Dina Sam'an",
        description: `(CoinMENA)`,
        img: "/images/Dina.png",
      },
      {
        id: 3,
        name: "Gracy Chen",
        description:
          "(Bitget)",
        img: "/images/Gracy.png",
      },
      {
        id: 4,
        name: "Helen Hai ",
        description:
          "(Binance)",
        img: "/images/Helen.png",
      },
    ],
  },
  {
    slideNo: 2,
    img: "/images/dubai.png",
    data: [
      {
        id: 5,
        name: "Jason Allegrante",
        description:
          "(Fireblocks)",
        img: "/images/Jason.png",
      },
      {
        id: 6,
        name: "Jean Charles-Gaudechon",
        description:
          "(OneFootball Labs)",
        img: "/images/Jean.png",
      },
      {
        id: 7,
        name: "Max Kordek ",
        description:
          "(Lisk)",
        img: "/images/Max.png",
      },
      {
        id: 8,
        name: "Mohammed Alblooshi",
        description:
          "(Dubai International Financial Centre Authority)",
        img: "/images/Mohammed.png",
      },
    ],
  },
  {
    slideNo: 3,
    img: "/images/dubai.png",
    data: [
      {
        id: 9,
        name: "Nena Dokuzov",
        description:
          "(Alserkal Group)",
        img: "/images/Nena.png",
      },
      {
        id: 10,
        name: "Nicole Purin",
        description:
          " (OKX)",
        img: "/images/Nicole.png",
      },
      {
        id: 11,
        name: "Reece Merrick",
        description:
          "(Ripple)",
        img: "/images/Reece.png",
      },
      {
        id: 12,
        name: "Sunny Lu",
        description:
          "(Vechain)",
        img: "/images/Sunny-Lu.png",
      },
    ],
  },
];

var itemsMobile = [
  {
    id: 1,
    name: "Alex Zinder",
    description:
      ("Ledger Enterprise"),
    img: "/images/Alex.png",
  },
  {
    id: 2,
    name: "Dina Sam'an",
    description: `(CoinMENA)`,
    img: "/images/Dina.png",
  },
  {
    id: 3,
    name: "Gracy Chen",
    description:
      "(Bitget)",
    img: "/images/Gracy.png",

  },
  {
    id: 4,
    name: "Helen Hai ",
    description:
      "(Binance)",
    img: "/images/Helen.png",

  },
  {
    id: 5,
    name: "Jason Allegrante",
    description:
      "(Fireblocks)",
    img: "/images/Jason.png",

  },
  {
    id: 6,
    name: "Jean Charles-Gaudechon",
    description:
      "(OneFootball Labs)",
    img: "/images/Jean.png",

  },
  {
    id: 7,
    name: "Max Kordek ",
    description:
      "(Lisk)",
    img: "/images/Max.png",

  },
  {
    id: 8,
    name: "Mohammed Alblooshi",
    description:
      "(Dubai International Financial Centre Authority)",
    img: "/images/Mohammed.png",

  },
  {
    id: 9,
    name: "Nena Dokuzov",
    description:
      "(Alserkal Group)",
    img: "/images/Nena.png",


  },
  {
    id: 10,
    name: "Nicole Purin",
    description:
      " (OKX)",
    img: "/images/Nicole.png",


  },
  {
    id: 11,
    name: "Reece Merrick",
    description:
      "(Ripple)",
    img: "/images/Reece.png",


  },
  {
    id: 12,
    name: "Sunny Lu",
    description:
      "(Vechain)",
    img: "/images/Sunny-Lu.png",

  },
];

function DesktopViewSlider(props) {
  const classes = useStyles();

  return (
    <Carousel

      indicators={false}
      autoPlay={false}
      animation={"slide"}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function MobileViewSlider(props) {
  const classes = useStyles();

  return (
    <Carousel
      indicators={false}
      autoPlay={false}
      animation={"slide"}
      navButtonsAlwaysVisible={true}
    >
      {itemsMobile.map((item, i) => (
        <ItemMobile key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  const [bgImg, setBgImg] = useState("/images/dubai.png");

  function changeBackground(e, slide, item) {
    // e.target.style.background = 'red';

    items.forEach((element) => {
      if (element.slideNo == item.slideNo) {
        element.data.forEach((subElement) => {
          const imgq = document.getElementById(`imgq_${subElement.id}`);

          const desc = document.getElementById(`desc_${subElement.id}`);
          const title = document.getElementById(`title_${subElement.id}`);
          const grid = document.getElementById(`grid_${subElement.id}`);
          if (subElement.id == slide.id) {
            desc.style.visibility = "visible";
            desc.style.opacity = "1";
            title.style.marginTop = "16rem";
            grid.style.backgroundColor = "rgba(255, 99, 71, 0.2)";
          } else {
            desc.style.visibility = "hidden";
            desc.style.opacity = "0";
            title.style.marginTop = "25rem";
            grid.style.backgroundColor = "rgba(255, 99, 71, 0)";
          }
        });
      }
    });
    setBgImg(slide.img);
  }

  return (
    <>
      <Grid Container className={classes.diversion}>
        <Grid
          className={classes.img}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <Grid container spacing={3}>
            {props.item.data.map((slide) => {
              return (
                <>
                  <Grid
                    item
                    className={classes.gridCarosal}
                    id={`grid_${slide.id}`}
                    xs={6}
                    md={3}
                    lg={3}
                    onMouseOver={(e) => changeBackground(e, slide, props.item)}
                  >


                    <Typography
                      className={classes.txt}
                      id={`title_${slide.id}`}
                    >
                      {slide.imgq}
                      {slide.name}
                    </Typography>
                    <Typography
                      className={classes.description}
                      id={`desc_${slide.id}`}
                    >
                      {slide.description}
                    </Typography>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function ItemMobile(props) {
  const classes = useStyles();

  return (
    <>
      <Grid Container className={classes.diversionmobile}>
        <Grid
          className={classes.img}
          style={{ backgroundImage: `url(${props.item.img})` }}
        >
          <Grid container spacing={3}>
            <Grid item className={classes.gridCarosalMobile} xs={12}>

              <Typography className={classes.txtMobile}>
                {props.item.name}
              </Typography>
              <Typography className={classes.descriptionMobile}>
                {props.item.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function Die() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.text}>
        <Typography className={classes.intext}>
          OUR SPEAKERS
        </Typography>
      </Grid>
      <div id="desktopViewSlider">
        <DesktopViewSlider className={classes.desktopViewSlider} />
      </div>
      <div id="mobileViewSlider">
        <MobileViewSlider className={classes.mobileViewSlider} />
      </div>
    </>
  );
}
export default Die;
