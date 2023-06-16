import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = ["youtube", "tiktok", "instagram", "soundcloud", "twitter"];

  return (
    <Box display="flex" justifyContent="space-around" padding="10px 0">
      {links.map((link) => (
        <Typography
          key={link}
          component={Link}
          to={`/${link}`}
          variant="h6"
          color={location.pathname.includes(link) ? "secondary" : "inherit"}
          sx={{
            textDecoration: "none",
            color: "white",
            opacity: location.pathname.includes(link) ? 1 : 0.4,
            "&:hover": {
              opacity: 1,
              color: "white",
            },
          }}
        >
          {link}
        </Typography>
      ))}
    </Box>
  );
};

export default Navbar;
