import { Box } from "@mui/material";
import BuyView from "./components/BuyView.tsx";
import SuccessView from "./components/SuccessView.tsx";

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
        {/*<BuyView />*/}
        <SuccessView text="Well done 💪" />
      </Box>
    </>
  );
}

export default App;
