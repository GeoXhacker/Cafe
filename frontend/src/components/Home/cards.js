// Import Swiper React components
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import OrderHandle from "./orderClick";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 190,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const items = [
    {
      name: "Chips",
      price: 2600,
      img: "",
    },
    {
      name: "Pilao & Beef",
      price: 2600,
    },
    {
      name: "Chips & Beef",
      price: 2600,
    },
    {
      name: "Pilao",
      price: 2600,
    },
    {
      name: "Hehe",
      price: 2600,
    },
    {
      name: "Hehe",
      price: 2600,
    },
    {
      name: "Hehe",
      price: 2600,
    },
    {
      name: "Hehe",
      price: 2600,
    },
    {
      name: "Hehe",
      price: 2600,
    },
  ];
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={2}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Item item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Item(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/pilao.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={2} justify="space-between">
            <Grid>
              <Typography gutterBottom variant="button">
                {props.item.name}
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
                {props.item.price}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <OrderHandle
        // image={props.item.img}
        />
        {/* <ad></ad>? */}
      </CardActions>
    </Card>
  );
}

// function SimplePopover() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
//         Open Popover
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//       >
//         <Typography className={classes.typography}>The content of the Popover.</Typography>
//       </Popover>
//     </div>
//   );
// }
