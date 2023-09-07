import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = [
  { title: "Main", url: "/" },
  { title: "Earn", url: "/earn" },
  { title: "Account", url: "/account" },
  { title: "Crypto", url: "/crypto" },
  { title: "Company", url: "/company" },
];
const StyledAppBar = styled(AppBar)({
  boxShadow: "none",
  borderBottom: "1px solid black",
});

const ExclusiveButton = styled(Button)({
  padding: ".55em",
  border: "1px solid black",
  borderRadius: "2em",
  margin: "0 .4em",
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "17px",
  textTransform: "none",
  "&:hover": {
    filter: "brightness(.5)",
    background: "transparent",
  },
  "&:active": {
    background: "none",
  },
});

const BookmarkButton = styled(Button)({
  color: "inherit",
  background: "none",
  transition: "color .3s ease-in-out",
  fontFamily: "inherit",
  fontSize: "17px",
  textTransform: "none",
  "&:hover": {
    color: "crimson",
  },
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, ml: -2 }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}
          >
            {pages.map((page) => (
              <BookmarkButton
                disableRipple
                key={page.title}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                }}
                href={page.url}
              >
                {page.title}
              </BookmarkButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ExclusiveButton disableRipple>Exchange</ExclusiveButton>
            <ExclusiveButton disableRipple>Get the app</ExclusiveButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default Navbar;
