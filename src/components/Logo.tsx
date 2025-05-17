import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Logo() {
  return (
    <Box display="flex" alignItems="center" mt={2} mb={2}>
      <ShoppingCartIcon sx={{ fontSize: 36, mr: 1, color: "secondary.main" }} />
      <Typography variant="h4" fontWeight="bold">
        ReStockr
      </Typography>
    </Box>
  );
}

export default Logo;
