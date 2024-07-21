import { ThemeProvider } from "@mui/material";
import { theme, themeDark } from "./New.theme";

export default function ThemeEngine({ children }) {
  const isNightmode = false;

  return (
    <ThemeProvider theme={isNightmode ? themeDark : theme}>
      {children}
    </ThemeProvider>
  );
}
