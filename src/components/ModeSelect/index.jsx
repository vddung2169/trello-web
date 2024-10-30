import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
} from "@mui/material";
import React from "react";

import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <LightModeIcon sx={{ marginRight: 2 }} />
            Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <DarkModeOutlinedIcon sx={{ marginRight: 2 }} />
            Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SettingsBrightnessIcon sx={{ marginRight: 2 }} />
            System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
