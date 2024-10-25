import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

import Typography from "@mui/material/Typography";

import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

function SelectSmall() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trelloCustome.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <SelectSmall />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.trelloCustome.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustome.appBarHeight} - ${theme.trelloCustome.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        Board content
      </Box>
    </Container>
  );
}

export default App;
