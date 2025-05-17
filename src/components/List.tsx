import { Box, FormGroup, Typography } from "@mui/material";
import Checkbox from "./Checkbox.tsx";

function List({ title }: { title: string }) {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        {title}
      </Typography>
      <Box sx={{ ml: 3 }}>
        <FormGroup sx={{ gap: 2 }}>
          <Checkbox label="Milk 🥛" />
          <Checkbox label="Meat 🐮" />
          <Checkbox label="Cookies 🍪" />
          <Checkbox label="Razor🪒" />
        </FormGroup>
      </Box>
    </>
  );
}

export default List;
