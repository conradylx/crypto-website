import AppleIcon from "@mui/icons-material/Apple";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Typography, styled } from "@mui/material";
import ScoresContainer from "./ScoresContainer";
import HeadingBottom from "./HeadingBottom";
import { theme } from "../../../theme";

const WhiteStyledTypography = styled(Typography)({
  fontSize: "4vw",
  fontWeight: "800",
  color: "white",
  lineHeight: "1em",
  paddingTop: ".5em",
  paddingBottom: ".5em",
});

const ButtonWithArrow = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: "35px",
  padding: "1.1em 2.1em",
  color: "inherit",
  textTransform: "none",
  fontSize: "1.1vw",
  fontWeight: "600",
  "&:hover": {
    filter: "brightness(.9)",
    backgroundColor: theme.palette.primary.light,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.6vw",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.3vw",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}));

function HeadingLeft() {
  return (
    <Box width="55%">
      <Box sx={{ borderBottom: "1px solid white", width: "90%" }}>
        <StyledTypography>
          The smart alternative for your everyday finances
        </StyledTypography>
        <WhiteStyledTypography>
          Grow your money the modern way
        </WhiteStyledTypography>
        <Paragraph>
          Grow your money, buy and trade crypto and earn{" "}
          <Typography
            color={theme.palette.primary.light}
            sx={{ fontSize: "1.3vw", display: "inline" }}
          >
            7.5%*
          </Typography>{" "}
          on your savings.
        </Paragraph>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "10vh 0 6vh 0",
          }}
        >
          <ButtonWithArrow disableRipple>
            Get the app <ArrowRightAltIcon />
          </ButtonWithArrow>
          <ScoresContainer Icon={AppleIcon} value={4.6} />
          <ScoresContainer Icon={GoogleIcon} value={4.8} />
        </Box>
      </Box>
      <HeadingBottom />
    </Box>
  );
}

export default HeadingLeft;
