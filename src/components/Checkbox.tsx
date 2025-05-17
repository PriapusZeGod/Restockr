import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import { useState } from "react";

function Checkbox({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          color="secondary"
          onChange={(e) => setChecked(e.target.checked)}
          sx={{ width: 32, height: 32 }}
        />
      }
      label={
        <span
          style={{
            fontSize: "22px",
            textDecoration: checked ? "line-through" : "none",
          }}
        >
          {label}
        </span>
      }
    />
  );
}

export default Checkbox;
