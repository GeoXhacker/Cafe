import { Grid, Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuantity } from "../../store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiBadge-root": {
      marginRight: theme.spacing(4),
    },
  },
}));

export default function BadgeVisibility() {
  const classes = useStyles();
  // const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const dispatch = useDispatch();
  const number = useSelector(selectQuantity);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Grid container spacing={2} justify="space-between">
      <Grid>
        <Typography>quantity</Typography>
      </Grid>
      <Grid>
        {/* <Badge color="primary" badgeContent={count}></Badge> */}
        <Badge color="primary" badgeContent={number}></Badge>
      </Grid>
      <Grid>
        <ButtonGroup>
          <Button
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => dispatch({ type: "increment" })}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
