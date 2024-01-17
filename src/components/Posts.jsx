import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

export default function Posts() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  const myCards = [
    {
      letter: "M",
      color: "#4169e1",
      userName: "Motra_711",
      imgLink:
        "https://images.unsplash.com/photo-1520809227329-2f94844a9635?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVsYXh8ZW58MHx8MHx8fDA%3D",
    },
    {
      letter: "A",
      color: "#800080",
      userName: "Instgram",
      imgLink:
        "https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlbGF4fGVufDB8fDB8fHww",
    },
    {
      letter: "N",
      color: "#008080",
      userName: "User 1",
      imgLink:
        "https://images.unsplash.com/photo-1520179432903-03d08e6ef07a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlbGF4fGVufDB8fDB8fHww",
    },
    {
      letter: "M",
      color: "#bbbbbb",
      userName: "User 2",
      imgLink:
        "https://images.unsplash.com/photo-1494778752932-64ee27ba2a37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4NTU1MTcyfHxlbnwwfHx8fHw%3D",
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: "3",
        p: 3,
      }}
      component="main"
    >
      {myCards.map((card, i) => (
        <Card key={i} sx={{ maxWidth: 450, m: "50px auto" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: card.color,
                  color: theme.palette.getContrastText(card.color),
                }}
                aria-label="recipe"
              >
                {card.letter}
              </Avatar>
            }
            action={
              <IconButton onClick={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.userName}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={card.imgLink}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Box flexGrow={1} />
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </CardActions>
        </Card>
      ))}
      {renderMenu}
    </Box>
  );
}
