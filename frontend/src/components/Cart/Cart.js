import {
  Card,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Counter from "../minicomponents/counter";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: 190,
  },
  media: {
    height: 100,
  },
});
export default function Item(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        My orders
      </Typography>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/pilao.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Grid container spacing={2} justify="space-between">
              <Grid>
                <Typography gutterBottom component="p">
                  Item
                </Typography>
              </Grid>
              <Grid>
                <Typography>Quantity</Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Price
                </Typography>
              </Grid>
            </Grid>
            {/* <Counter /> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
