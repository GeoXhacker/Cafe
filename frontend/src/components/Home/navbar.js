import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { useState } from "react";
import Login from "../Account/login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  accountDrawer: {
    width: 250,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // AppBar: {
  //   width: '100%'
  // }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [accountState, setAccountState] = useState(false);
  const toggleLogin = (open) => (e) => {
    setState(open);
  };
  const toggleAccount = (open) => (e) => {
    setAccountState(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={toggleAccount(true)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            D's Cafe
          </Typography>
          <Button color="inherit" onClick={toggleLogin(true)}>
            Login
          </Button>
          <Drawer anchor="right" open={state} onClose={toggleLogin(false)}>
            <Login />
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
