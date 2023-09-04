import React from "react";
import { Stack, Button } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export const MenuHeader = () => {
  const { categories } = useAppContext();
  const navigate = useNavigate();

  return (
    <Stack
      sx={{ height: "60px", bgcolor: "#8F148F", width: "100%" }}
      direction="row"
      justifyContent={"center"}
      spacing={{ lg: 10, sm: 2 }}
    >
      {categories?.map((category) => (
        <ButtonMenu
          key={category.attributes.title}
          onClick={() => {
            navigate(`/products?idCategory=${category.id}`);
          }}
        >
          {category.attributes.title}
        </ButtonMenu>
      ))}
    </Stack>
  );
};

const ButtonMenu = ({ children, ...props }) => (
  <Button
    sx={{
      color: "white",
      transition: "text-underline-offset 400ms",
      fontFamily: "CareAround",
      fontWeight: "bold",
      fontSize: { lg: "1rem", sm: "0.5rem" },
      textTransform: "none",
      margin: 0,
      "&:hover": {
        bgcolor: "#8F148F",
        textDecoration: "underline",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);
