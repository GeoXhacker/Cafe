import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuantity, selectToken } from "../../store";
import Campus from "../minicomponents/campus";
import Counter from "../minicomponents/counter";
import Hostel from "../minicomponents/hostel";
import Where from "../minicomponents/where";

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
  media: {
    height: 100,
  },
  card: {
    maxWidth: "100%",
    maxHeight: 190,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={600} />;
});

export default function OrderNowButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [spot, setSpot] = React.useState("");
  const [hostelName, setHostel] = React.useState("");
  const [campusLocale, setCampus] = React.useState("");
  const [hostelErr, setHostelErr] = React.useState("");
  const [campusErr, setCampusErr] = React.useState("");
  const [whereErr, setWhereErr] = React.useState("");
  const item = props.itemName;
  const quantity = useSelector(selectQuantity);
  const token = useSelector(selectToken);
  const cost = props.itemPrice * quantity;
  const dispatch = useDispatch();
  const [openDialog, setClose] = React.useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  let delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 5000));
  };

  const handleCancel = async () => {
    setTimeout(() => {
      props.onClose();
    }, 0);

    await delay();
    console.log("cancel");
  };

  React.useEffect(() => {
    setClose(props.open);
  }, [props.open]);

  const handleClose = () => {
    let locale = hostelName ? hostelName : campusLocale;
    let where = spot;

    axios({
      method: "post",
      url: "http://localhost:5000/makeorder",
      data: { item, quantity, cost, address: { where, locale } },
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }).then((res) => {
      // console.log(res.data.order);
      if (res.data.errors) {
        res.data.errors.forEach((error, i) => {
          if (error.param === "address.where") {
            console.log(res.data.errors[i].msg);
            setWhereErr(res.data.errors[i].msg);
            console.log(hostelErr);
          }

          if (error.param === "address.locale") {
            setCampusErr(res.data.errors[i].msg);
            setHostelErr(res.data.errors[i].msg);
            console.log(campusErr);
          }
        });
      } else {
        console.log(res);
        setHostel(null);
        setCampus(null);
        setSpot(null);
        dispatch({ type: "setOrders", payload: res.data.order });
        dispatch({ type: "resetQuantity" });
        // setOpen(false);
        handleCancel();
      }
    });
  };

  return (
    <div>
      {/* <Button
        color="primary"
        size="small"
        color="primary"
        variant="outlined"
        endIcon={<AddShoppingCartIcon />}
        onClick={handleClickOpen}
      >
        Order now
      </Button> */}
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleCancel}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCancel}
              // onClick={props.close}
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

        {/* <OrderDialog
          selectedItem={props.itemName}
          selectedItemPrice={props.itemPrice}
        /> */}

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.itemImg}
              title={props.itemName}
            />
            <CardContent>
              <Grid container spacing={2} justify="space-between">
                <Grid>
                  <Typography variant="button" display="block" gutterBottom>
                    {props.itemName}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography></Typography>
                </Grid>
                <Grid>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                  >
                    {cost}
                  </Typography>
                </Grid>
              </Grid>
              <Counter />
            </CardContent>
          </CardActionArea>
        </Card>

        <form className={classes.root} noValidate autoComplete="on">
          <Where
            onChange={(e) => {
              setWhereErr("");
              setSpot(e.target.innerText);
            }}
            helperText={whereErr}
            error={whereErr ? true : false}
          />
          {spot === "Hostel" && (
            <Hostel
              onChange={(e) => {
                setHostelErr("");
                setHostel(e.target.innerText);
                console.log(hostelName);
              }}
              helperText={hostelErr}
              error={hostelErr ? true : false}
            />
          )}
          {spot === "Campus" && (
            <Campus
              onChange={(e) => {
                setCampusErr("");
                setCampus(e.target.innerText);
                console.log("campus");
              }}
              helperText={campusErr}
              error={campusErr ? true : false}
            />
          )}
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </form>
      </Dialog>
    </div>
  );
}
