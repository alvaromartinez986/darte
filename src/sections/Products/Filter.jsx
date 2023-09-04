import React, { useEffect } from "react";
import {
  FormGroup,
  Stack,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAppContext } from "../../contexts/AppContext";
import { useQuery } from "./Products";

const Filter = ({ filterProducts, setFilterProducts }) => {
  const { categories } = useAppContext();
  let query = useQuery();

  const handleChange = (event) => {
    setFilterProducts(event.target.value);
  };

  useEffect(() => {
    setFilterProducts(query.get("idCategory"));
  }, [query, setFilterProducts]);

  return (
    <Stack
      sx={{
        p: 10,
        width: "5%",
        "@media (max-width:500px)": {
          display: "none",
        },
      }}
    >
      <Typography variant="h3">Categorias</Typography>
      <FormGroup sx={{ mt: 5 }}>
        <RadioGroup value={filterProducts} onChange={handleChange}>
          {categories.map((category) => (
            <FormControlLabel
              value={category.id}
              label={category.attributes.title}
              control={<Radio size="small" sx={{ color: "black" }} />}
              sx={{ width: 200 }}
              key={category.attributes.title}
            />
          ))}
        </RadioGroup>
      </FormGroup>
    </Stack>
  );
};

export default Filter;
