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

export default function GenericSection({
  primaryText,
  secondaryText,
  optionalText,
  paragraph,
  picture,
}: IGenericSection) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        marginBottom: "4em",
      }}
    >
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
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <YellowStyledTypography>{primaryText}</YellowStyledTypography>
        </Box>
      )}
      <Box sx={{ width: { xs: "100% ", md: "50%" } }}>
        {picture && (
          <YellowStyledTypography>{primaryText}</YellowStyledTypography>
        )}
        <Typography
          sx={{
            fontSize: "1.7vw",
          }}
          color={"white"}
        >
          {secondaryText}
        </Typography>
        {optionalText && (
          <Typography
            sx={{
              fontSize: "1.7vw",
            }}
            color={theme.palette.primary.light}
          >
            {optionalText}
          </Typography>
        )}
        <Typography mt={3} sx={{ fontSize: "1.3vw" }}>
          {paragraph}
        </Typography>
      </Box>
    </Box>
  );
}
