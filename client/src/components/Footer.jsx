import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1E1E1E",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <Typography sx={{ color: "#828282" }}>
      ⚖️ please respect the intellectual property rights of others. this website
      is intended for personal use only.
    </Typography>
  </Box>
);

export default Footer;
