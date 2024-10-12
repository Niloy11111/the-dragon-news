"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Pages",
      pathName: "/pages",
    },
    {
      route: "Category",
      pathName: "/category",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];

  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{ "& svg": { color: "white" } }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
        </Box>
        <div className="flex justify-center my-5">
          <Box
            className=""
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white"> {item.route}</Button>
              </Link>
            ))}
          </Box>
        </div>

        <Typography variant="body2" color="gray" className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
