import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Agent from "./Agent";

function Agents({ setSeletctAvatar }) {
  const data = [
    {
      name: "FutureSoldier",
      imageSrc: "./FutureSoldier_preview.png",
    },
    { name: "soldier", imageSrc: "./Soldier_preview.png" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#151415",
        minHeight: "93vh",
        padding: "1rem",
      }}
    >
      <Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Select your avatar
        </Typography>

        <Typography variant="subtitle2" sx={{ color: "#919191" }}>
          Your agent represents your identity in this platform
        </Typography>
        <Grid container>
          {data.map((items) => (
            <Grid item xs={12} md={4}>
              <Agent
                changeSolider={() => setSeletctAvatar(items.name)}
                source={items.imageSrc}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default Agents;
