import { DialogActions } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AlertDialogSlide from "./dialog";

function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [phone, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passError, setPassError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = useState(false);
  const [failed, setFailed] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    console.log("dialog open");
  };
  const handleClose = () => {
    setOpen(false);
  };

  function verifyNumber(code) {
    handleClose();
    setProgress(true);

    console.log("verifying....");
    axios({
      method: "get",
      url: `http://localhost:5000/verify/${phone}/${code}`,
    })
      .then((res) => {
        console.log(res, "verified");
        setProgress(false);
        console.log(res.data.userInfo, "info");
        dispatch({ type: "setToken", payload: res.data.token });
        dispatch({ type: "userInfo", payload: res.data.userInfo });
        window.location.reload();
      })
      .catch((e) => {
        //// add dialog for verification failed, invalid code
        setProgress(false);
        setFailed(true);
        console.log(e);
      });
  }

  function submit() {
    console.log("start");
    axios({
      method: "post",
      url: "http://localhost:5000/signin",
      data: {
        username: username,
        phone: phone,
      },
    }).then((res) => {
      if (!res.data.errors) {
        console.log(res.data.data);
        handleClickOpen();
      } else {
        res.data.errors.forEach((error, i) => {
          if (error.param === "username") {
            console.log(res.data.errors[i].msg);
            setUsernameErr(res.data.errors[i].msg);
          }
          ////////////////////work on this issue
          if (error.param === "phone") {
            setPassError(res.data.errors[i].msg);
          }
        });
      }
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Typography component="h5" variant="h5">
          Login
        </Typography> */}
        <Typography
          component="h1"
          variant="h5"
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            lineHeight: 3,

            fontFamily: "Montserrat",
          }}
        >
          D's Cafe
        </Typography>

        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}

        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            autoComplete="email"
            autoFocus
            onInput={(e) => {
              setUsername(e.target.value);
              setUsernameErr("");
            }}
            helperText={usernameErr}
            error={usernameErr ? true : false}
            // onChange={(e) => {
            //   ;
            // }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone number"
            type="text"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPassError("");
            }}
            helperText={passError}
            error={passError ? true : false}
          />

          <Grid container>
            <Grid item></Grid>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item></Grid>
          </Grid>
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={submit}
        >
          Sign In
        </Button>
        <Typography>
          if you don't have an account with us,fill in the form your account
          will be created automatically
        </Typography>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      {/* <CircularIndeterminate /> */}
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}
        verify={verifyNumber}
      />
      <Dialog
        open={progress}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Verifying..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <CircularIndeterminate />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button color="primary">Disagree</Button>
          <Button color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>

      <Dialog open={failed}>
        <DialogTitle id="alert-dialog-title">
          {"Verification failed"}
        </DialogTitle>

        <DialogContentText id="alert-dialog-description">
          Invalid code
        </DialogContentText>
        <DialogActions>
          <Button
            onClick={() => {
              setFailed(false);
              setOpen(true);
            }}
            color="primary"
          >
            retry
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
