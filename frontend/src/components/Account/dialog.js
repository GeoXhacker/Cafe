import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCode } from "../../store";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const inputCode = useSelector(selectCode);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="form-dialog-title">Verify number</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hi, input the 5 digit code that was set to ur number
          </DialogContentText>
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="outlined-number"
            label="code"
            type="number"
            fullWidth
            onInput={(e) => {
              console.log(e.target.value);
              dispatch({ type: "verify code", payload: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.verify(inputCode);
            }}
            color="primary"
          >
            verify
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
