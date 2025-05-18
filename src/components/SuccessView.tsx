import { useEffect, useState } from "react";
import { Box, Typography, Button, Snackbar } from "@mui/material";
import Logo from "./Logo";

function BuyViewSuccess({ text }: { text: string }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    // Show snackbar immediately when the component mounts
    setOpenSnackbar(true);
  }, []);

  const handleUndo = () => {
    // Add your undo logic here
    console.log("Undo clicked");
    setOpenSnackbar(false);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <>
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
            width: "100%",
            height: "70%",
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {text}
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
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
                color: "text.primary",
              }}
              onClick={() => {
                // handle done action here
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        slotProps={{
          content: {
            sx: {
              bgcolor: "background.paper",
              color: "text.primary",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              boxShadow: 3,
            },
          },
        }}
        message="🔙 Undo"
        action={
          <Button
            color="secondary"
            size="small"
            onClick={handleUndo}
            sx={{ fontWeight: "bold" }}
          >
            Undo
          </Button>
        }
      />
    </>
  );
}

export default BuyViewSuccess;
