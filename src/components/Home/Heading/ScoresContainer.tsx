import StarIcon from "@mui/icons-material/Star";
import { Box, Rating, Typography, styled } from "@mui/material";
import { theme } from "../../../theme";
import { IScoresContainer } from "./interfaces";

const YellowStarIcon = styled(StarIcon)({
  color: theme.palette.primary.light,
  width: "13px",
});

export default function ScoresContainer({ Icon, value }: IScoresContainer) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Icon sx={{ width: "18px", mr: 0.5, ml: 4 }} />
      <Rating
        name="text-feedback"
        value={4.5}
        readOnly
        precision={0.5}
        emptyIcon={<YellowStarIcon sx={{ opacity: 0.55 }} />}
        icon={<YellowStarIcon />}
      />
      <Typography ml={1} sx={{ fontSize: "14px" }}>
        {value}
      </Typography>
    </Box>
  );
}

// const ExclusiveButton = styled(Button)({
//   color: "inherit",
//   fontSize: "17px",
//   textTransform: "none",
//   fontWeight: "400",
//   border: "1px solid black",
//   borderRadius: "2em",
//   margin: "0 0.4em",
//   width: "115px",
//   "&:hover": {
//     filter: "brightness(0.5)",
//     background: "transparent",
//   },
//   "&:active": {
//     background: "none",
//   },
// });

// const PageButton = styled(Button)({
//   color: "inherit",
//   fontSize: "17px",
//   textTransform: "none",
//   fontWeight: "400",
//   background: "none",
//   transition: "color 0.3s ease-in-out",
//   "&:hover": {
//     color: "crimson",
//   },
// });
