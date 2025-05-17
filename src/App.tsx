import { Box, Button, Fab, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Logo from "./components/Logo.tsx";
import List from "./components/List.tsx";

function App() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          px: 2,
        }}
      >
        {/* Top Section (logo + list) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo />

          <Box
            sx={{
              width: "80%",
              mt: 4,
            }}
          >
            <List title="To Buy List:" />
          </Box>
        </Box>

        {/* Info message */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "secondary.main", mb: 2 }}
          >
            Unbought items will be carried over.
          </Typography>
        </Box>

        {/* Bottom Button */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            pb: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "12px",
              width: 160,
              height: 56,
              fontWeight: "bold",
              fontSize: "18px",
              textTransform: "none",
              boxShadow: 2,
            }}
            onClick={() => {
              // handle done action here
            }}
          >
            Done 😎
          </Button>
        </Box>
      </Box>

      {/* Floating Action Button (FAB) */}
      <Tooltip title="Add new item" arrow>
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: "120px",
            right: "24px",
            zIndex: 1000,
            boxShadow: 6,
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            // open modal or navigate to add item view
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

export default App;
