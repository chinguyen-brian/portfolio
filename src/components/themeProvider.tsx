'use client'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    typography: {
      fontFamily: "var(--font-inter), sans-serif", // Chỉ dùng biến CSS
    },

  });

function LayoutProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default LayoutProvider;