// Import Swiper React components
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import OrderNowButton from "./orderNow";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 160,
    minHeight: 190,
    maxWidth: 160,
    maxHeight: 190,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

export default function Drinks() {
  const items = [
    {
      name: "Juice",
      price: 1000,
      img: "/juice.jpeg",
    },
    {
      name: "ice cream",
      price: 1000,
      img: "/ice_cream.jpg",
    },
    {
      name: "Mineral water",
      price: 1000,
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
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const [open, setOpen] = React.useState(false);
  const styles = useStyles();
  const shadow = useFadedShadowStyles();

  return (
    // <Card className={classes.root} elevation={3}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image="/pilao.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Grid container spacing={2} justify="space-between">
    //         <Grid>
    //           <Typography gutterBottom variant="button">
    //             {props.item.name}
    //           </Typography>
    //         </Grid>
    //         <Grid>
    //           <Typography></Typography>
    //         </Grid>
    //         <Grid>
    //           <Typography
    //             variant="body2"
    //             color="textSecondary"
    //             component="span"
    //           >
    //             {props.item.price}
    //           </Typography>
    //         </Grid>
    //       </Grid>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <OrderNowButton
    //       itemName={props.item.name}
    //       itemPrice={props.item.price}
    //       // image={props.item.img}
    //     />
    //     {/* <ad></ad>? */}
    //   </CardActions>
    // </Card>

    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Spartan", weights: [300] },
            { font: "Montserrat", weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card
        className={styles.card}
        onClick={() => {
          setOpen(true);
        }}
        classes={shadow}
      >
        <CardMedia
          classes={mediaStyles}
          image={
            props.item.img
            // props.item.name === "Chips" ? "/chips.jpg" : "/pilao.jpg"
            // "https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$"
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info
          // useStyles={useGalaxyInfoStyles}
          // useStyles={useApexInfoStyles}
          >
            <InfoSubtitle></InfoSubtitle>
            <InfoTitle
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                lineHeight: 1.2,
                color: "#fff",
                fontFamily: "Montserrat",
              }}
            >
              {props.item.name}
            </InfoTitle>
            <InfoCaption
              style={{
                color: "rgba(255, 255, 255, 0.72)",
                fontSize: "0.875rem",
                lineHeight: 1.5,
                "&:last-child": {
                  marginTop: "1rem",
                },
              }}
            >
              {props.item.price}
            </InfoCaption>
            <OrderNowButton
              open={open}
              onClose={() => {
                setOpen(!open);
                console.log("close", open);
              }}
            />
          </Info>
        </Box>
      </Card>
    </>
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
