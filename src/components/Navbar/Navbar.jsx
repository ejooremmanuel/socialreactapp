import React, { useState } from "react";
import {
  alpha,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { Search, Cancel, Mail, Notifications } from "@material-ui/icons";

import useStyles from "./NavStyles";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const classes = useStyles({ show });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">WAAWSocial</Typography>
        <div className={classes.search}>
          <Search />
          <InputBase className={classes.input} placeholder="Search..." />
          <Cancel className={classes.cancel} onClick={() => setShow(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchbtn} onClick={() => setShow(true)} />
          <Badge className={classes.badge}>
            <Mail />
          </Badge>
          <Badge className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Ejoor Emmanuel" src=""></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}
