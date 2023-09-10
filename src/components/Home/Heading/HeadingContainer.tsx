import { Box, styled } from "@mui/material";
import home1 from "../../../assets/home1.webp";
import HeadingLeft from "./HeadingLeft";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  margin: "4em 0",
});

function HeadingContainer() {
  return (
    <Container>
      <HeadingLeft />
      <Box
        width="45%"
        component="img"
        src={home1}
        sx={{
          maxWidth: "85vw",
          objectFit: "contain",
          borderRadius: "5%",
        }}
      />
    </Container>
  );
}

export default HeadingContainer;
