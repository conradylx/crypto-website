import { Box, Button, Typography, styled } from "@mui/material";
import { theme } from "../../theme";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#082865",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "0 -7.6vw -2vh",
  padding: "10vh 7vw",
  color: "white",
  fontSize: "1vw",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const LogoButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  background: "none",
  transition: "color 0.3s ease-in-out",
  fontWeight: 800,
  color: theme.palette.primary.light,
  marginLeft: "-.5vw",
  marginTop: "-2vh",
  fontSize: "5vw",

  [theme.breakpoints.up("md")]: {
    fontSize: "2vw",
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Box sx={{ flex: 1 }}>
        <LogoButton disableRipple href="/">
          NASH
        </LogoButton>
        <Typography mt={4} fontSize={13}>
          ©2021 – Nash. All rights reserved.
        </Typography>
        <Typography mt={5} fontSize={12} width={"90%"}>
          Nash is an exchange bureau licensed by the FMA of Liechtenstein
          (VT-Wechseldienstleister Nr. 261096 as defined by the Token- und
          VT-Dienstleister-Gesetz / TVTG, 3 October 2019).
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography mb={4} color={theme.palette.secondary.main} fontSize={15}>
          Backed by industry leaders
        </Typography>
        <Typography fontSize={12} width={"90%"}>
          Nash Exchange B.V. is registered with De Nederlandsche Bank N.V. (DNB)
          as a provider of crypto services. DNB conducts supervision and
          monitors Nash Exchange B.V.’s compliance with the Money Laundering and
          Terrorist Financing Prevention Act and the Sanctions Act 1977. Nash
          Exchange B.V. is not under the prudential supervision of DNB nor under
          business conduct supervision of the AFM. This means there is no
          supervision of financial requirements or business risks and no
          specific consumer financial protections.
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography mb={4} color={theme.palette.secondary.main} fontSize={15}>
          Stay up to date
        </Typography>
        <Typography fontSize={12}>
          * Rates may vary over time. Crypto-powered earnings on Nash are not
          covered by any deposit guarantee schemes like bank savings accounts
          and involve risks unique to the underlying technologies: (i)
          Exploitations of the smart contracts used; (ii) Forex fluctations
          between your national currency and the US dollar, which underlies
          crypto earnings assets; (iii) USD stablecoins losing their peg.
        </Typography>
      </Box>
    </FooterContainer>
  );
}
