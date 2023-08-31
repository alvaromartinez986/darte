import React from "react";
import {
  FormGroup,
  Stack,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAppContext } from "../../contexts/AppContext";

const Filter = ({ filterProducts, setFilterProducts }) => {
  const { categories } = useAppContext();

  const handleChange = (event) => {
    setFilterProducts(event.target.value);
  };

  return (
    <Stack sx={{ p: 10, width: "20vh" }}>
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
