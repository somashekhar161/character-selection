import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "./components/Avatar";
import Details from "./components/Details";
import Agents from "./components/Agents";
import { useState } from "react";
import "./App.css";
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#1b1b1b",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    boxShadow: "none",
    color: "#fff",
  }));

  const [SelectAvatar, setSeletctAvatar] = useState("soldier");

  return (
    <Box
      sx={{
        flexGrow: 0,
        backgroundColor: "#1b1b1b",
        minHeight: "100vh",
        maxHeight: "100vh",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4}>
          <Item>
            <Avatar SelectAvatar={SelectAvatar} />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Details />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Agents setSeletctAvatar={setSeletctAvatar} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
