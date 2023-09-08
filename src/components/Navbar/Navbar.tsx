import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, Hidden, styled } from "@mui/material";
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
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "1px solid black",
  [theme.breakpoints.down("md")]: {
    borderBottom: "none",
  },
}));

const commonButtonStyles = `
  color: inherit;
  font-size: 17px;
  text-transform: none;
  font-weight: 400;
`;

const ExclusiveButton = styled(Button)`
  ${commonButtonStyles}
  border: 1px solid black;
  border-radius: 2em;
  margin: 0 0.4em;
  width: 115px;
  &:hover {
    filter: brightness(0.5);
    background: transparent;
  }
  &:active {
    background: none;
  }
`;

const PageButton = styled(Button)`
  ${commonButtonStyles}
  background: none;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;

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
          <PageButton
            disableRipple
            sx={{
              my: 2,
              color: "yellow",
              fontWeight: "800",
              fontSize: "30px",
              margin: "0 20px 0 -20px",
            }}
            href="/"
          >
            RASH
          </PageButton>
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
              <PageButton
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
              </PageButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ExclusiveButton disableRipple>Get the app</ExclusiveButton>
            <Hidden mdDown>
              <ExclusiveButton disableRipple>Exchange</ExclusiveButton>
            </Hidden>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default Navbar;
