import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Check } from "@mui/icons-material";

function Starred() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id="basic-button-starred"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Starred
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList dense>
          <MenuItem>
            <ListItemText inset>Single</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>1.15</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>Double</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            Custom: 1.2
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Add space before paragraph</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Add space after paragraph</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Custom spacing...</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Starred;
