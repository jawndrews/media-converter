import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "youtube", route: "yt" },
    { name: "tiktok", route: "tt" },
    { name: "instagram", route: "ig" },
    { name: "soundcloud", route: "sc" },
    { name: "twitter", route: "tw" },
  ];

  return (
    <Box display="flex" justifyContent="space-around" padding="10px 0">
      {links.map((link) => (
        <Typography
          key={link.route}
          component={Link}
          to={`/${link.route}`}
          variant="h6"
          color={
            location.pathname.includes(link.route) ? "secondary" : "inherit"
          }
          sx={{
            textDecoration: "none",
            color: "white",
            opacity: location.pathname.includes(link.route) ? 1 : 0.4,
            "&:hover": {
              opacity: 1,
              color: "white",
            },
          }}
        >
          {link.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Navbar;
