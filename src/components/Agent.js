import Box from "@mui/material/Box";


export default function Agent({changeSolider,source}) {
  return (
  
      <img
        
        alt="agent"
        src={require(`${source}`)}
        sx={{ backgroundColor: "blue" }}
        onClick={changeSolider}
      ></img>
  
  );
}
