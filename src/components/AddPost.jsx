import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
export default function AddPost() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 380, md: 450 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "6px",
  };
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{ position: "fixed", bottom: "20px", left: "20px" }}
      >
        <Fab color="primary" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign="center"
            mb={1}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create a post
          </Typography>
          <Stack alignItems="center" gap="12px" direction="row">
            <Avatar
              alt="Remy Sharp"
              src="https://res.cloudinary.com/dxf6qicwj/image/upload/v1685960356/home3_d9tsaz.png"
            />
            <Typography variant="body1">Motra_711</Typography>
          </Stack>
          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={3}
            placeholder="Descreption..."
            variant="standard"
          />
          <Stack direction="row" spacing={2} my={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" sx={{ width: "100%" }}>
            <Button sx={{ flexGrow: "1" }}>Post</Button>
            <Button>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
