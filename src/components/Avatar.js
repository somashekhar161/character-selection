import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Stand_4 from "./Stand_4.jsx";
import Solider from "./Solider"

function Avatar({SelectAvatar}) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ p: 2, backgroundColor: "#151415", borderRadius: "16px" }}>
          <Stack spacing={2}>
            <IconButton
              size="small"
              sx={{ color: "#7d7c7d", backgroundColor: "none" }}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#7d7c7d", backgroundColor: "none" }}
            >
              <ModeEditIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Select your avatar
            </Typography>

            <Typography variant="subtitle2" sx={{ color: "#919191" }}>
              Your agent represents your identity in this platform
            </Typography>
          </Stack>
          <Box
            sx={{
              backgroundColor: "#151415",
              height: "70vh",
              borderRadius: "10px",
              padding: "1rem",
              margin: "0",
              
            }}
          >
            <Canvas sx={{ position: "relative", margintBottom: "-5rem" }}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.19}
                maxPolarAngle={Math.PI / 2.19}
              />
              <ambientLight intensity={0.3} />
              <directionalLight
                position={[-2, 10, 2]}
                intensity={3}
                color="#ffffff"
              />
              <Suspense fallback={null}>
                {SelectAvatar==="soldier"? <Solider/>:<Stand_4 />}
              
              </Suspense>
            </Canvas>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Avatar;
