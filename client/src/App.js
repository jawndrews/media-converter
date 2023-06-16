import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/home";

const theme = createTheme({
  typography: {
    fontFamily: ["W95FA", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["W95FA", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["W95FA", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["W95FA", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["W95FA", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["W95FA", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["W95FA", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
