import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function Details() {
  return (
    <Stack spacing={3} mt={"7rem"}>
      <Typography variant="h3" fontWeight={"bold"} color={"#fe7475"}>
        Iron man - classic
      </Typography>

      <Typography variant="subtitle2" sx={{ color: "#919191" }}>
        Iron man is a 2008 American superhero film based on the Marvel Comics
        character of the same name.
      </Typography>
      <Stack>
        <Typography variant="h6" color={"#eaabab"}>
          Perks
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#919191" }}>
          Perks are unique to each agent
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <Button
          sx={{
            padding: "8px 18px",
            backgroundColor: "#151415",
            color: "#919191",
          }}
        >
          Flight
        </Button>
        <Button
          sx={{
            padding: "8px 18px",
            backgroundColor: "#151415",
            color: "#919191",
          }}
        >
          Red
        </Button>
        <Button
          sx={{
            padding: "8px 18px",
            backgroundColor: "#151415",
            color: "#919191",
          }}
        >
          Stong
        </Button>
      </Stack>
      <Stack>
        <Typography variant="h6" color={"#eaabab"}>
          Agent
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#919191" }}>
          After being held captive in an Afghan cave, billionaire engineer Tony
          Stark creates a unique weaponized suit of armor to fight evil.After
          being held captive
        </Typography>
      </Stack>
      <Box>
        <Button
          sx={{
            backgroundColor: "#151415",
            color: "#fe7475",
            border: "1px solid #fe7475",
          }}
        >
          Select this Agent
        </Button>
      </Box>
    </Stack>
  );
}
export default Details;
