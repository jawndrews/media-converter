import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Youtube from "./scenes/youtube";
import Tiktok from "./scenes/tiktok";
import Instagram from "./scenes/instagram";
import Soundcloud from "./scenes/soundcloud";
import Twitter from "./scenes/twitter";
import { Navigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
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
              <Route path="/" element={<Navigate to="/youtube" />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/tiktok" element={<Tiktok />} />
              <Route path="/instagram" element={<Instagram />} />
              <Route path="/soundcloud" element={<Soundcloud />} />
              <Route path="/twitter" element={<Twitter />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
