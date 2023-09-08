import React from "react";

import { Box, Stack, Link } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../assets/darteIcon.png";
import ButtonMain from "../components/ButtonMain";
import Icon from "../components/Icon";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ bgcolor: "#F6D0E2", minWidth: "100%" }}
    >
      <Box
        sx={{
          mt: "10px",
          mb: "10px",
          height: "30%",
          width: "30%",
        }}
      >
        <Link href="/">
          <img src={logo} alt="Darte" className="App-logo" />
        </Link>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <ButtonMain
          sx={{
            transition: "all .2s ease-in-out",
            my: "auto",
            mx: "30px",
            display: matches ? "none" : "block",
            fontSize: { lg: "16px", sm: "2px" },
            "&:hover": {
              transform: "scale(1.1)",
              bgcolor: "#8F148F",
            },
          }}
          onClick={() => {
            window.location.href = "https://wa.me/message/R7ZLMJYDR47ZH1";
          }}
        >
          Contactenos
        </ButtonMain>
        <Icon>
          <Link
            href="https://www.instagram.com/d_arte_creandoconamor/"
            rel="noopener"
            target="_blank"
          >
            <InstagramIcon sx={{ fontSize: { lg: "2.5rem", sm: "1rem" } }} />
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://wa.me/message/R7ZLMJYDR47ZH1"
            rel="noopener"
            target="_blank"
          >
            <WhatsAppIcon sx={{ fontSize: { lg: "2.5rem", sm: "1rem" } }} />
          </Link>
        </Icon>
      </Stack>
    </Stack>
  );
};

export default Header;
