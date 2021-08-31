import { List, Paper, Typography } from "@material-ui/core";
import Banner from "./banner";
import Cards from "./cards";
import Drinks from "./drinks";

export default function Home() {
  return (
    <Paper
      style={{
        // maxHeight: 520,
        overflow: "hidden",
        margin: "10px",
      }}
    >
      <Banner />
      <List>
        {/* <GalaxyCardDemo /> */}

        <Typography variant="h6">Foods</Typography>
        <Cards />
        <Typography variant="h6">Drinks</Typography>
        <Drinks />
      </List>
    </Paper>
  );
}
