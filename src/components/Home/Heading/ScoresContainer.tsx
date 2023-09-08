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
