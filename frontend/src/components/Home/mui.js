import { ListItemSecondaryAction } from "@material-ui/core";
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
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import OrderNowButton from "./orderNow";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 180,
    minHeight: 190,
    maxWidth: 180,
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

export const GalaxyCardDemo = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const [close, open] = React.useState("");
  const styles = useStyles();

  return (
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
          open(true);
        }}
      >
        <CardMedia
          classes={mediaStyles}
          image={
            "/pilao.jpg"
            // "https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$"
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle></InfoSubtitle>
            <InfoTitle>Pilao & Beef</InfoTitle>
            <InfoCaption>UGX.3000</InfoCaption>
            <OrderNowButton
              open={close}
              close={() => {
                open(false);
                console.log("close");
              }}
            />
          </Info>
        </Box>
      </Card>
    </>
  );
});
export default GalaxyCardDemo;
