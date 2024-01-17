import { CssBaseline, Stack, createTheme, Box, Divider } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./styles/MyTheme";
import { ThemeProvider } from "@emotion/react";
import MyAppBar from "./components/AppBar";
import MyList from "./components/List";
import Posts from "./components/Posts";
import RightSection from "./components/RightSection";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <MyAppBar {...{ setshowList }} />
        <Stack
          sx={{ flexDirection: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <MyList {...{ setMode, showList }} />
          <Posts />
          <RightSection />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
