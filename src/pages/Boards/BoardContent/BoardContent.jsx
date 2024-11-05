import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => theme.trelloCustome.boardContentHeight,
        p: "10px 0",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <ListColumns />
    </Box>
  );
};

export default BoardContent;
