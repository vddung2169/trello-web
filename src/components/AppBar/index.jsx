import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloIcon } from "../../assets/trello.svg";

import ModeSelect from "../ModeSelect";
import WorkSpaces from "./Menus/WorkSpaces";
import Recents from "./Menus/Recents";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { HelpOutline } from "@mui/icons-material";
import Profile from "./Menus/Profile";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const AppBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustome.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <AppsIcon sx={{ color: "white" }} />
        <Box display={"flex"} alignItems={"center"} gap={0.5}>
          <SvgIcon
            component={TrelloIcon}
            sx={{
              color: "white",
            }}
          ></SvgIcon>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems={"center"}
            gap={1}
            marginLeft={1}
          >
            <WorkSpaces />
            <Recents />
            <Starred />
            <Templates />
            <Button
              sx={{
                color: "white",
                border: "none",
                "&:hover": { border: "none" },
              }}
              variant="outlined"
              startIcon={<LibraryAddIcon />}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={2} marginLeft={2}>
        <TextField
          id="outlined-search"
          label="Search..."
          variant="outlined"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon
                  onClick={() => setSearchValue("")}
                  sx={{
                    fontSize: "small",
                    color: searchValue ? "white" : "transparent",
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "18 0px",
            "& label": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& input": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge
            badgeContent={4}
            variant="dot"
            color="warning"
            sx={{ cursor: "pointer" }}
          >
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline
            color="action"
            sx={{ cursor: "pointer", color: "white" }}
          />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;
