import { Box, Button } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { capitalizeFirstLetter } from "../../../utils/capitalize";

const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

const BoardBar = ({ board }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustome.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        paddingX: 2,
        gap: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Chip
          sx={MENU_STYLES}
          clickable
          onClick={() => {}}
          icon={<DashboardIcon />}
          label={board?.title}
        />

        <Chip
          sx={MENU_STYLES}
          clickable
          onClick={() => {}}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
        />

        <Chip
          sx={MENU_STYLES}
          clickable
          onClick={() => {}}
          icon={<AddToDriveIcon />}
          label="Add to Drive"
        />

        <Chip
          sx={MENU_STYLES}
          clickable
          onClick={() => {}}
          icon={<BoltIcon />}
          label="Automation"
        />

        <Chip
          sx={MENU_STYLES}
          clickable
          onClick={() => {}}
          icon={<FilterListIcon />}
          label="Filters"
        />
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Button
          startIcon={<PersonAddIcon />}
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 30,
              height: 30,
              fontSize: "16px",
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#A4B0BE",
              },
            },
          }}
        >
          <Tooltip title="DunVu2169">
            <Avatar alt="DunVu2169" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="VunVu2169">
            <Avatar alt="VunVu2169" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="DunVu2169">
            <Avatar alt="TunVu2169" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="DunVu2169">
            <Avatar alt="DunVu2169" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="DunVu2169">
            <Avatar alt="DunVu2169" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="DunVu2169">
            <Avatar alt="DunVu2169" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
