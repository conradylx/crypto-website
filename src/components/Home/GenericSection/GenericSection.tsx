import { Box, Typography, styled } from "@mui/material";
import { theme } from "../../../theme";
import { IGenericSection } from "./interfaces";

const YellowStyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "4vw",
  fontWeight: "800",
  color: theme.palette.primary.light,
  lineHeight: "1em",
  paddingTop: ".5em",
  paddingBottom: ".25em",
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: "4em",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.7vw",
  [theme.breakpoints.down("md")]: {
    fontSize: "11px",
  },
}));

const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.3vw",
  [theme.breakpoints.down("md")]: {
    fontSize: "9px",
  },
}));

export default function GenericSection({
  primaryText,
  secondaryText,
  optionalText,
  paragraph,
  picture,
}: IGenericSection) {
  return (
    <Container>
      {picture ? (
        <Box
          component="img"
          src={picture}
          sx={{
            width: { xs: "100%", md: "50%" },
            marginTop: { xs: "-5vw", md: "2vw" },
          }}
        />
      ) : (
        <StyledBox>
          <YellowStyledTypography>{primaryText}</YellowStyledTypography>
        </StyledBox>
      )}
      <StyledBox>
        {picture && (
          <YellowStyledTypography>{primaryText}</YellowStyledTypography>
        )}
        <StyledTypography color={"white"}>{secondaryText}</StyledTypography>
        {optionalText && (
          <StyledTypography color={theme.palette.primary.light}>
            {optionalText}
          </StyledTypography>
        )}
        <StyledParagraph mt={3}>{paragraph}</StyledParagraph>
      </StyledBox>
    </Container>
  );
}
