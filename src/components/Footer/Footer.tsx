import { Box, Button, Typography, styled } from "@mui/material";

const FooterContainer = styled(Box)({
  backgroundColor: "#082865",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "0 -7.55vw -1.5vh",
  padding: "0 7vw",
  height: "66vh",
  color: "white",
  fontSize: "1vw",
});

const LogoButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  background: "none",
  transition: "color 0.3s ease-in-out",
  fontWeight: 800,
  color: theme.palette.primary.light,
  margin: "3vw 0",
  marginLeft: "-.5vw",
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <LogoButton
          disableRipple
          href="/"
          sx={{
            fontSize: { xs: "5vw", md: "2vw" },
          }}
        >
          NASH
        </LogoButton>
        <Typography mt={4} fontSize={13}>
          ©2021 – Nash. All rights reserved.
        </Typography>
        <Typography mt={5} fontSize={11}>
          Nash is an exchange bureau licensed by the FMA of Liechtenstein
          (VT-Wechseldienstleister Nr. 261096 as defined by the Token- und
          VT-Dienstleister-Gesetz / TVTG, 3 October 2019).
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>Zawartość drugiego Boxa</Box>
      <Box sx={{ flexGrow: 1 }}>Zawartość trzeciego Boxa</Box>
    </FooterContainer>
  );
}
