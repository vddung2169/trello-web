import { Box } from "@mui/material";

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustome.appBarHeight} - ${theme.trelloCustome.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      {" "}
      Board content
    </Box>
  );
};

export default BoardContent;
