import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Counter from "../minicomponents/counter";

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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/pilao.jpg" title="Pilao" />
        <CardContent>
          <Grid container spacing={2} justify="space-between">
            <Grid>
              <Typography gutterBottom component="p">
                Item
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
                Price
              </Typography>
            </Grid>
          </Grid>
          <Counter />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
