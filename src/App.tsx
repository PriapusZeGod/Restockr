import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <ShoppingCartIcon sx={{ fontSize: 36, mr: 1, color: "primary.main" }} />
        <Typography variant="h4" fontWeight="bold">
          ReStockr
        </Typography>
      </Box>
      <Typography variant="body1">
        This is the bare-bones grocery tracker app.
      </Typography>
    </Box>
  );
}

export default App;
