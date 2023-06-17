import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Alert,
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
import logo from "../../assets/logotype.png";
import { useGetYoutubeMP3Query } from "../../state/api";

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

// api component outside render prevents api call when payload is empty/invalid
const YoutubeApiCall = ({ videoId }) => {
  const { data, error, isLoading } = useGetYoutubeMP3Query(videoId);

  return null;
};

const Youtube = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const userRef = useRef();
  const navigate = useNavigate();

  const [fileType, setFileType] = useState("mp3");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    document.title = "convert | mediahook";
  }, []);

  function extractYoutubeId(url) {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId ? videoId.indexOf("&") : -1;
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  }

  const handleFileTypeSelect = (event) => {
    setFileType(event.target.value);
  };

  const handleSubmitVideoUrl = async (event) => {
    event.preventDefault();
    try {
      const id = extractYoutubeId(videoUrl);
      setVideoId(id);
    } catch (err) {
      <Alert severity="error">An error occured.</Alert>;
    }
  };

  const handleChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <Box>
      {videoId && <YoutubeApiCall videoId={videoId} />}
      <Box
        color="#ffffff"
        p="2rem"
        m="3rem auto"
        id="input-submit"
        width={isNonMobileScreen ? "60%" : "93%"}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            component="img"
            mt="1rem"
            alignItems="center"
            sx={{
              height: "100%",
              width: "100%",
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="mediahook"
            src={logo}
          />
        </Box>
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
        <form onSubmit={handleSubmitVideoUrl}>
          <CssTextField
            focusColor="#C4302B"
            size="small"
            id="url-input"
            variant="filled"
            placeholder="https://www.youtube.com/watch?v=zY64pu8dYi0"
            fullWidth
            onChange={handleChange}
            inputRef={userRef}
            value={videoUrl}
            name="videoUrl"
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
                textTransform: "lowercase",
                backgroundColor: "#C4302B",
                p: "0.6rem 1.2rem 0.6rem 1.2rem",
                "&:hover": { backgroundColor: "#DF4A44" },
              }}
            >
              <Typography fontSize="14px">convert</Typography>
            </Button>
          </Box>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};

export default Youtube;
