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

const AppBar = () => {
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
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box display={"flex"} alignItems={"center"} gap={0.5}>
          <SvgIcon
            component={TrelloIcon}
            sx={{
              color: "primary.main",
            }}
          ></SvgIcon>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
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
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={2} marginLeft={2}>
        <TextField
          id="outlined-search"
          label="Search..."
          variant="outlined"
          type="search"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge badgeContent={4} color="secondary" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline
            color="action"
            sx={{ cursor: "pointer", color: "primary.main" }}
          />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;
