import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from "@mui/material";

const Home = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Typography mt="5rem" variant="h3" textAlign="center">
        Youtube to MP3
      </Typography>
      <Box
        p="2rem"
        m="4rem auto"
        id="input-submit"
        width={isNonMobileScreen ? "60%" : "93%"}
      >
        <TextField
          id="url-input"
          label="Youtube Video URL"
          variant="filled"
          defaultValue="" //"https://www.youtube.com/watch?v=zY64pu8dYi0&ab_channel=JAKED"
          fullWidth
        >
          Youtube Video URL
        </TextField>
        <Box mt="1rem" textAlign="center">
          <Button disableElevation type="submit" variant="contained">
            Convert
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
