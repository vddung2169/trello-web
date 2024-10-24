import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <Typography variant="body2" component="div" color="text.secondary">
        TEST Typo hello
      </Typography>
      Hello
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined" color="primary">
        Hi everuone
      </Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  );
}

export default App;
