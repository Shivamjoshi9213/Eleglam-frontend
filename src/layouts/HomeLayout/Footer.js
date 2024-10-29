import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ECDACE",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
    padding: "0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  logoImage: {
    margin: "0 10%",
  },
  logo: {
    height: "180px",
  },
  knowMore: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%",
    flexWrap: "wrap",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%",
    flexWrap: "wrap",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    listStyleType: "none",
  },
  li: {
    marginLeft: "20px",
    fontFamily: "Nunito Sans",
    fontWeight: "600px",
    fontSize: "16px",
  },
  link: {
    textDecoration: "none",
    fontWeight: "600px",
    fontSize: "16px",
  },
  divider: {
    width: "1px",
    height: "30px",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
    orientation: "vertical",
    marginLeft: "20px",
  },
  cart: {
    marginLeft: "20px",
  },
  loginButton: {
    marginLeft: "20px",
    backgroundColor: "#7E563D",
    height: "40px",
    width: "120px",
    borderRadius: "30px",
    textTransform: "none",
    color: "white",
    fontWeight: "600px",
    fontSize: "16px",
  },
  iconGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  location: {
    "@media (max-width: 560px)": {
      maxWidth: "200px",
      margin: "auto",
    },
    color: "#7E563D",
    display: "flex",
    // alignItems: "center",
    marginLeft: "5px",
    fontFamily:" Nunito Sans",
    fontSize:"16px",
    fontWeight:"400"
  },
  contact2:{
    color: "#7E563D",
    display: "flex",
    // alignItems: "center",
    // marginLeft: "5px",
    fontFamily:" Nunito Sans",
    fontSize:"18px",
    fontWeight:"700"
  },
  customer:{
    "@media (max-width: 560px)": {
      maxWidth: "200px",
      margin: "auto",
    },
    color: "#7E563D",
    display: "flex",
    // alignItems: "center",
    // marginLeft: "5px",
    textDecoration:"none",
    fontFamily:" Nunito Sans",
    fontSize:"16px",
    fontWeight:"400"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.appBar}>
        <Grid item className={classes.knowMore} lg={3} md={3} sm={3} xs={12}>
          <Box className={classes.logoImage}>
            <img
              src="/Image/eg-logo.jpg"
              height="100%"
              alt="Logo"
              className={classes.logo}
            />
            <Box className={classes.iconGroup}  >
              <Box
                style={{
                  backgroundImage: `url("/Image/socialiconBackground.png")`,
                  width: "25px",
                  height: "25px",
                  marginLeft:"5px"
                }}
                onClick={() => {
                  window.location.href = "https://www.facebook.com/";
                }}
              >
                <img
                  src="/Image/fb.png"
                  height="15px"
                  alt="fb"
                  style={{ marginLeft: "5px", marginTop: "5px" }} // Adjust margin as needed
                />
              </Box>
              <Box
                style={{
                  backgroundImage: `url("/Image/socialiconBackground.png")`,
                  width: "25px",
                  height: "25px",
                  marginLeft:"5px"
                }}
                onClick={() => {
                  window.location.href = "https://www.google.com/maps";
                }}
              >
                <img
                  src="/Image/location.png"
                  height="15px"
                  alt="map"
                  style={{ marginLeft: "5px", marginTop: "5px" }} // Adjust margin as needed
                />
              </Box>
              <Box
                style={{
                  backgroundImage: `url("/Image/socialiconBackground.png")`,
                  width: "25px",
                  height: "25px",
                  marginLeft:"5px"
                }}
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/accounts/login/";
                }}
              >
                <img
                  src="/Image/insta.png"
                  height="15px"
                  alt="Instagram"
                  style={{ marginLeft: "5px", marginTop: "5px" }} // Adjust margin as needed
                />
              </Box>
              <Box
                style={{
                  backgroundImage: `url("/Image/socialiconBackground.png")`,
                  width: "25px",
                  height: "25px",
                  marginLeft:"5px"
                }}
                onClick={() => {
                  window.location.href =
                    "https://twitter.com";
                }}
              >
                <img
                  src="/Image/twetter.png"
                  height="15px"
                  alt="tweeter"
                  style={{ marginLeft: "5px", marginTop: "5px" }} // Adjust margin as needed
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={3} md={3} sm={3} xs={12} className={classes.knowMore}>
        <Box>
</Box>

        </Grid>

        <Grid item lg={3} md={3} sm={3} xs={12} className={classes.knowMore}>
          <Box>
            <Typography className={classes.contact2}>
              <b>Customer Service</b>
            </Typography>
            <Typography style={{ color: "white", marginTop: "20px" }}>
              <Link
                to="/terms-conditions"
                className={classes.customer}
              >
                Terms & Conditions
              </Link>
            </Typography>
            <Typography style={{ color: "white", marginTop: "15px" }}>
              <Link
                to="/privacy-policy"
                className={classes.customer}
              >
                Privacy Policy
              </Link>
            </Typography>
            <Typography style={{ color: "white", marginTop: "15px" }}>
              <Link
                to="/faq"
                className={classes.customer}
              >
                FAQs
              </Link>
            </Typography>
            <Typography style={{ color: "white", marginTop: "20px" }}>
              <Link
                to="/about-us"
                className={classes.customer}
              >
                About Us
              </Link>
            </Typography>
          
          </Box>
        </Grid>

        <Grid
  item
  lg={3}
  md={3}
  sm={6}
  xs={12}
  className={classes.contact}
  justifyContent="center"
>
  <Box>
    <Typography className={classes.contact2}>
      <b>Contact Us</b>
    </Typography>

    <Box display="flex" alignItems="center" marginTop="20px">
      <LocationOnIcon style={{ color: "#7E563D" }} />
      <span className={classes.location}>
Dummy area address
      </span>
    </Box>

    <Box display="flex" alignItems="center" marginTop="15px">
      <MailIcon style={{ color: "#7E563D" }} />
      <span className={classes.location}>www.Eleglam.co</span>
    </Box>
    <Box display="flex" alignItems="center" marginTop="15px">
      <PhoneIcon style={{ color: "#7E563D" }} />
      <span className={classes.location}> Tel: 1800-009-1007</span>
    </Box>
  </Box>
</Grid>

        <Divider
          style={{
            width: "100%",
            margin: "25px 0",
            color: "rgb(62, 63, 63)",
            backgroundColor: "rgb(62, 63, 63)",
          }}
        />
        <Box>
          <Typography
            style={{
              color: "rgb(62, 63, 63)",
              fontSize: "15px",
              fontWeight: "500",
              textWrap: "wrap"
            }}
          >
            Copyright©2024. Created with love by{" "}
            <span style={{ color: "white", fontSize: "17px" }}>
              Ele Ally
            </span>{" "}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;