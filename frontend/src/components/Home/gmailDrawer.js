import React, { Component } from "react";
import {
  Drawer,
  MenuItem,
  Card,
  CardMedia,
  Menu,
  Divider,
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";

export default function SideDrawer() {
  return (
    <Drawer
      anchor="left"
      open={accountState}
      onClose={toggleAccount(false)}
      className={classes.accountDrawer}
    >
      <Card>
        <CardHeader>Account Details</CardHeader>

        <CardContent className={classes.accountDrawer}>
          <AccountCircleIcon style={{ fontSize: 60 }} />
        </CardContent>
        <Typography align="center" variant="h6">
          Im here
        </Typography>
      </Card>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
