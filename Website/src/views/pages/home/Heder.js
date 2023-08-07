import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Select,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import { Link, animateScroll as scroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({


  routeLinkBox: {
    display: "flex",
    alignItems: "cneter",
    gap: "30px",
    "@media (min-width: 0px) and (max-width: 1279px)": {
      display: "none",
    },
  },
  menuBox: {
    "@media (min-width: 1279px)": {
      display: "none",
    },
  },


  actionBox: {
    display: "flex",
    gap: "10px",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
  actionBox2: {
    display: "none",
    "@media (max-width: 700px)": {
      display: "block",
    },
  },
  text: {
    fontFamily: "Roboto",

    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#FFFFFF",
    textDecoration: "none",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  dropdown: { display: "flex", gap: "5px", alignItems: "center", outline: "unset", border: "unset" },
  divider: {
    width: "2px",
    height: "41px",
    background: "#ffffff",
  },
  drawerBox: {
    "& .MuiDrawer-paperAnchorRight": {
      width: "100%",
      maxWidth: "182px",
      padding: "10px 23px",
    },
  },


  logoimg: {

    height: "100px",
    width: "100px",
    "@media(max-width: 650px)": {
      width: "100px",
    },
    "@media(max-width: 1200px)": {
      width: "80px",
    },
  },
  responsiveBox: {
    "@media(max-width: 1278px)": {
      display: "flex",
      gap: "10px",
    },
  },
}));

const Header = () => {

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerItems = [
    { label: "Home", href: "#", section: "section1" },
    { label: "About Us", href: "#", section: "section3" },
    { label: "Speakers", href: "#", section: "section4" },
    { label: "Sponsors", href: "#", section: "section5" },
    { label: "Partners", href: "#", section: "section6" },
    { label: "Floor plan", href: "#", section: "section6" },

  ];
  console.log(window.innerWidth, "window.innerWidth");
  const width = window.innerWidth;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("country2");
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box className={classes.header}>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",

            backgroundRepeat: "inherit",
          }}
        >
          <Box>
            <img
              className={classes.logoimg}
              src="/images/rabbit.png"
            />
          </Box>
          <Box className={classes.routeLinkBox}>
            {drawerItems.map((item, index) => (
              <Link
                to={item.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className={classes.text} href={item.href}>
                  {item.label}
                </a>
              </Link>
            ))}
          </Box>
          <Box className={classes.responsiveBox}>

            <Box className={classes.menuBox}>
              {" "}
              <IconButton onClick={toggleDrawer}>
                <MenuIcon style={{ color: "#ffffff" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <div>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer}
          className={classes.drawerBox}
        >
          <List>
            {drawerItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}{" "}
            <Box className={classes.actionBox2}>

              <Box className={classes.menuBox}>
                {" "}
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon style={{ color: "#ffffff" }} />
                </IconButton>
              </Box>
            </Box>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
