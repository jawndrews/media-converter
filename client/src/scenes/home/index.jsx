import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  TextField,
} from "@mui/material";

const Home = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Typography mt="5rem" variant="h1" textAlign="center">
        media95
      </Typography>
      <Box
        className="box95-container"
        sx={{
          position: "fixed",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          height: "35%",
          backgroundColor: "#f3efe7",
          color: "#383838",
          borderLeft: "2px solid #ffffff",
          borderTop: "2px solid #ffffff",
          borderRight: "2px solid #686868",
          borderBottom: "2px solid #686868",
          borderRadius: "0px",
          padding: "5px",
          boxShadow: "3px 3px 0px black",
          zIndex: "9999",
        }}
      >
        <Box
          className="box95-header"
          sx={{
            backgroundColor: "#1d0d79",
            color: "#ffffff",
            width: "100%",
            height: "10%",
            paddingLeft: "1rem",
            paddingTop: "0.35rem",
            fontSize: "20px",
          }}
        >
          media convert
        </Box>
        <Box id="url-input" mt="2rem" width="50%">
          <Typography fontSize="30px">media url</Typography>
          <TextField
            variant="standard"
            placeholder="https://www.youtube.com/watch?v=zY64pu8dYi0"
            fullWidth
            sx={{
              textAlign: "center",
              "& input:focus::placeholder": { color: "transparent" },
            }}
          >
            Youtube Video URL
          </TextField>
        </Box>
        <Box className="box95-button" m="1rem 0 0 1rem" textAlign="center">
          <Button
            disableElevation
            size="large"
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#F3EFE7",
              borderLeft: "2px solid #ffffff",
              borderTop: "2px solid #ffffff",
              borderRight: "2px solid #686868",
              borderBottom: "2px solid #686868",
              textTransform: "lowercase",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#F3EFE7",
                borderRadius: "0",
                boxShadow: "3px 3px 0rem black",
              },
            }}
          >
            <Typography fontSize="20px" color="#383838">
              convert
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
