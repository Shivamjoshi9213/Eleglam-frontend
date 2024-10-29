import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ScrollingTitle from "./ScrollTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#7E563D",
    minHeight: "100vh", // Ensure the container covers the full viewport height
  },
  MainLayout:{
    minHeight:"calc(100vh - 415px)",
    background: "#7E563D",
    paddingTop: "70px", // Adjust top padding to account for TopBar height
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history.location);
  return (
    <div className={classes.root}>
      <TopBar />
      {/* <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div> */}

      <div className={classes.MainLayout}>{children}</div>
      {/* {window.location.pathname ==="/" && ( */}
      <Footer />

      {/* )} */}
    </div>
  );
};

export default MainLayout;
