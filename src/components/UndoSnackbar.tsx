import { useState } from "react";
import { Snackbar, Button } from "@mui/material";

function UndoSnackbar() {
  const [open, setOpen] = useState(true); // or false initially

  const handleUndo = () => {
    // Handle undo logic here
    setOpen(false);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message="🔙 Undo"
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      action={
        <Button color="secondary" size="small" onClick={handleUndo}>
          Undo
        </Button>
      }
    />
  );
}

export default UndoSnackbar;
