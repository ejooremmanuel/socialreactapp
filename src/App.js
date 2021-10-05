import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/MainFeed/Main";
import Left from "./components/LeftBar/Left";
import Right from "./components/Rightbar/Right";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./components/Navbar/NavStyles";
import Add from "./components/Add";
import AddIcon from "@material-ui/icons/Add";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid className={classes.left} item sm={2} xs={2}>
          <Left />
        </Grid>
        <Grid className={classes.center} item sm={7} xs={10}>
          <Main />
        </Grid>
        <Grid className={classes.right} item sm={3}>
          <Right />
        </Grid>
      </Grid>
      <Add Icon={AddIcon} iconName="post" color="secondary" />
      <Add Icon={ForumRoundedIcon} iconName="chat" color="primary" />
      <Add Icon={PeopleOutlineRoundedIcon} iconName="friends" color="warning" />
    </div>
  );
}

export default App;
