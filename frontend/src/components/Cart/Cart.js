import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
///https://github.com/acidelia/react-flippy-material-ui.git for api
import Flippy, { BackSide, FrontSide } from "react-flippy";
import { useSelector } from "react-redux";
import { selectOrders } from "../../store";

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
  const orders = useSelector(selectOrders);
  return orders ? (
    <div>
      <Typography variant="h6" gutterBottom>
        My orders
      </Typography>
      {orders.map((order, i) => (
        <Flippy
          key={i}
          // className={classes.root}
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          // ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          // style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
        >
          <FrontSide>
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
                      <Typography gutterBottom component="p">
                        {order.item}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography>Quan</Typography>
                      <Typography gutterBottom component="p">
                        {order.quantity}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography gutterBottom component="p">
                        Cost
                      </Typography>

                      <Typography gutterBottom component="p">
                        {order.cost}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography gutterBottom component="p">
                        status
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        {order.status}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>
            order details
          </BackSide>
        </Flippy>
      ))}
    </div>
  ) : (
    <Typography variant="h5" component="h5">
      No orders yet
    </Typography>
  );
}
