import React from "react";
import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  CollectionsBookmarkOutlined,
  Home,
  PeopleAltOutlined,
  PermMediaOutlined,
  PowerSettingsNewRounded,
  SettingsVoiceSharp,
  StorefrontOutlined,
} from "@material-ui/icons";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { alpha } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "sticky",
    top: 0,
  },
  linkItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Left = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <Home className={classes.icon} />
        </IconButton>

        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <PeopleAltOutlined className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <ListAltIcon className={classes.icon} />
        </IconButton>

        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <PermMediaOutlined className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>Gallery</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <CollectionsBookmarkOutlined className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <StorefrontOutlined className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <SettingsVoiceSharp className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.linkItem}>
        <IconButton style={{ color: "white" }}>
          <PowerSettingsNewRounded className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Left;
