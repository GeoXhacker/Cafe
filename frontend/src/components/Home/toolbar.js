import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import RestoreIcon from "@material-ui/icons/Restore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // width: 500,
    height: "50px",
    width: "100%",
    position: "fixed",
    bottom: 0,
    color: "green",
    "&$selected": {
      color: "red",
    },
    zIndex: 5,
  },
  selected: {},
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log("done");
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/history">
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </Link>
      <Link to="/">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/cart">
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      </Link>
    </BottomNavigation>
  );
}
