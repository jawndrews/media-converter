import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  styled,
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Youtube = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const [fileType, setFileType] = useState("mp3");

  const handleFileTypeSelect = (event) => {
    setFileType(event.target.value);
  };

  const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor",
  })((p) => ({
    "& .MuiInputBase-input": {
      color: "#ffffff",
      height: "1.5rem",
      padding: "1rem",
    },
    // input label when focused
    "& label.Mui-focused": {
      color: p.focusColor,
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: p.focusColor,
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: p.focusColor,
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor,
      },
    },
  }));

  const CssFormControl = styled(FormControl, {
    shouldForwardProp: (prop) => prop !== "focusColor",
  })(({ focusColor }) => ({
    // Remove underline for variant='standard'
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    // Remove underline for variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
    // Remove underline for variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: focusColor,
      },
      "&:hover fieldset": {
        borderColor: focusColor,
      },
      "& fieldset": {
        borderColor: "transparent", // Or use the color you prefer here
      },
    },
    "& label.Mui-focused": {
      color: focusColor,
    },
  }));

  return (
    <Box>
      <Box
        color="#ffffff"
        p="2rem"
        m="3rem auto"
        id="input-submit"
        width={isNonMobileScreen ? "60%" : "93%"}
      >
        <Typography
          mt="1rem"
          variant="h1"
          textAlign="center"
          sx={{ opacity: "1" }}
        >
          mediahook
        </Typography>
        <Box mt="4rem">
          <Navbar />
        </Box>
        <Box mt="6rem" display="flex" justifyContent="space-between">
          <Typography sx={{ opacity: "40%", mt: "1.5rem" }}>
            paste youtube url below
          </Typography>
          <CssFormControl
            focusColor="#C4302B"
            variant="standard"
            sx={{ mb: "1rem" }}
          >
            <InputLabel
              id="file-type-label"
              sx={{ color: "#ffffff" }}
            ></InputLabel>
            <Select
              labelId="file-type-label"
              id="file-type-select"
              value={fileType}
              onChange={handleFileTypeSelect}
              label="file type"
              sx={{
                color: "#ffffff",
              }}
            >
              <MenuItem value={"mp3"}>mp3</MenuItem>
              <MenuItem value={"mp4"}>mp4</MenuItem>
            </Select>
          </CssFormControl>
        </Box>
        <CssTextField
          focusColor="#C4302B"
          size="small"
          id="url-input"
          variant="filled"
          placeholder="https://www.youtube.com/watch?v=zY64pu8dYi0"
          fullWidth
          sx={{
            color: "#ffffff",
          }}
        />
        <Box mt="1rem" textAlign="right">
          <Button
            disableElevation
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#C4302B",
              p: "0.75rem 1.5rem 0.75rem 1.5rem",
              "&:hover": { backgroundColor: "#DF4A44" },
            }}
          >
            Convert
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Youtube;
