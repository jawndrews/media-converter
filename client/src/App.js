import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CssBaseline>
      </BrowserRouter>
    </div>
  );
}

export default App;
