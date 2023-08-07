import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "700",

  },
  maincontent: {
    display: "flex",
    justifyContent: "center",
    // marginTop: "60px",
    marginBottom: "60px",
  }
  , paragraph: {
    fontFamily: "Barlow",
    fontWeight: "700",
    color: " #0C0C0C",
    fontSize: "32px",
    [theme.breakpoints.only("xs")]: {
      fontSize: "17px",
    },
  }
}));

function Count() {
  const classes = useStyles();
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('number-counter');
    const scrollPosition = window.innerHeight + window.pageYOffset;

    if (element && scrollPosition > element.offsetTop && !isVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetNumbers = [10000, 80, 60, 30];
      const incrementValues = targetNumbers.map((number) => Math.ceil(number / 100));
      const timers = counts.map(() => null);

      timers.forEach((timer, index) => {
        timers[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            const increment = incrementValues[index];
            const newCount = newCounts[index] + increment;
            newCounts[index] = newCount >= targetNumbers[index] ? targetNumbers[index] : newCount;
            return newCounts;
          });
        }, 10);
      });

      return () => {
        timers.forEach((timer) => clearInterval(timer));
      };
    }
  }, [isVisible]);

  const blockData = [
    { text: 'Visitors', color: 'red' },
    { text: 'Companies', color: 'blue' },
    { text: 'Speakers', color: 'green' },
    { text: 'Countries', color: 'orange' },
    // { text: 'Metaverse Experiences Developed', color: 'purple' },
  ];


  return (
    <Grid container xs={12} className={classes.maincontent} style={{ textAlign: "center" }}>
      {counts.map((count, index) => (
        <Grid item lg={2} md={6} xs={12} style={{fontWeight: "700"}} className={classes.count} id="number-counter" key={index}>
          <h1 style={{color: "#000204", fontWeight: "bolder"}}>{count}+</h1>
          <p className={classes.paragraph}>{blockData[index].text}</p>
        </Grid>
      ))}
    </Grid>


  )
}
export default Count;




