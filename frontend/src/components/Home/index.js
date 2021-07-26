import { List, Paper, Typography } from "@material-ui/core";
import Banner from "./banner";
import Cards from "./cards";

export default function Home() {
  return (
    <Paper
      style={{
        // maxHeight: 520,
        overflow: "auto",
      }}
    >
      <Banner />
      <List>
        <Typography variant="h6">Foods</Typography>
        <Cards />
        <Typography variant="h6">Drinks</Typography>
        <Cards />
      </List>
    </Paper>
  );
}
