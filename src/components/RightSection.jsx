import { useTheme } from "@emotion/react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function RightSection() {
  const theme = useTheme();
  const itemData = [
    {
      img: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Breakfast",
    },
    {
      img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Burger",
    },
    {
      img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Camera",
    },
  ];
  return (
    <Box
      sx={{
        minWidth: "525px",
        display: { xs: "none", lg: "block" },
        flexGrow: "auto",
        bgcolor: theme.palette.bgc.main,
        p: 2,
      }}
      component="section"
    >
      <Box position="fixed">
        <Typography sx={{ fontWeight: 300 }} variant="h6">
          Online Friends
        </Typography>
        <AvatarGroup total={24} sx={{ justifyContent: "center", my: 1 }}>
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/2484072/pexels-photo-2484072.jpeg"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
          />
        </AvatarGroup>

        <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6">
          Lastes photo
        </Typography>
        <ImageList
          gap={10}
          sx={{ width: 500, my: 1, overflowY: "hidden" }}
          cols={3}
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem sx={{ maxHeight: "150px" }} key={item.img}>
              <img
                style={{ borderRadius: "5px", height: "150px" }}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6">
          Lastes Conversation
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 500,
            bgcolor: "background.paper",
            my: 1,
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
