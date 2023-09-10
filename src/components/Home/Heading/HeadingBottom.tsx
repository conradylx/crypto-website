import { Box, Typography, styled } from "@mui/material";
import fintech from "../../../assets/logo-fintech.svg";

const RegisteredParagraph = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "30%",
  justifyContent: "center",
  margin: "1.5em 0 0 1em",
  fontSize: "1vw",
  [theme.breakpoints.down("md")]: {
    fontSize: "7px",
    width: "35%",
  },
}));

const BestParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1vw",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    fontSize: "7px",
    width: "80%",
  },
}));

const WinnerParagraph = styled(Typography)(({ theme }) => ({
  fontWeight: "800",
  fontSize: "1.3vw",
  [theme.breakpoints.down("md")]: {
    fontSize: "7px",
  },
}));

const RightBox = styled(Typography)(({ theme }) => ({
  margin: "1.7em 0 0 6em",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    margin: "1.3em 0 0 1em",
  },
}));

function HeadingBottom() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <RegisteredParagraph>
        Officially registered at De Nederlandsche Bank
      </RegisteredParagraph>
      <RightBox>
        <Box
          width="90%"
          component="img"
          src={fintech}
          sx={{ maxWidth: { xs: "35px", md: "60px" }, marginRight: "1em" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <WinnerParagraph>Winner</WinnerParagraph>
          <BestParagraph>“Best DeFi Marketplace”</BestParagraph>
        </Box>
      </RightBox>
    </Box>
  );
}

export default HeadingBottom;
