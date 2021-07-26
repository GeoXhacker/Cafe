import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import Campus from "../minicomponents/campus";
import CardDisplay from "./card";
import Hostel from "./hostel";
import Where from "./where";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={600} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [spot, setSpot] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  function val(e) {
    setValue(e.target.value);
  }

  const handleClose = () => {
    // axios(
    //   {
    //     method='post',
    //     url: 'http://localhost:5000/makeorder'

    //   }
    //   )
    // dispatch({type: 'order/'})

    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        size="small"
        color="primary"
        variant="outlined"
        endIcon={<AddShoppingCartIcon />}
        onClick={handleClickOpen}
      >
        Order now
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              D's Cafe
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Order
            </Button>
          </Toolbar>
        </AppBar>
        <CardDisplay />

        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          method="post"
        >
          <Where
            onChange={(e) => {
              setSpot(e.target.innerText);
            }}
          />
          {spot === "Hostel" && <Hostel />}
          {spot === "Campus" && <Campus />}
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Dialog>
    </div>
  );
}
