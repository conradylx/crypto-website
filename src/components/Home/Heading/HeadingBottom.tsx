import { Box, Typography, styled } from "@mui/material";
import fintech from "../../../assets/logo-fintech.svg";

function HeadingBottom() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "35%",
            md: "30%",
          },
          justifyContent: "center",
          margin: "1.5em 0 0 1em",
          fontSize: "1vw",
        }}
      >
        Officially registered at De Nederlandsche Bank
      </Typography>
      <Box
        sx={{
          margin: { xs: "1.3em 0 0 1em", md: "1.7em 0 0 6em" },
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          width="90%"
          component="img"
          src={fintech}
          sx={{ maxWidth: { xs: "35px", md: "60px" }, marginRight: "1em" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "800", fontSize: "1.5vw" }}>
            Winner
          </Typography>
          <Typography
            sx={{ fontSize: "1vw", width: { xs: "80%", md: "100%" } }}
          >
            “Best DeFi Marketplace”
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeadingBottom;
