import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          bgc: {
            main: "rgb(247, 247, 247)",
          },
          newColor: {
            main: grey[100],
          },
        }
      : {
          // palette values for dark mode
          bgc: {
            main: null,
          },
          newColor: {
            main: grey[800],
          },
        }),
  },
});
