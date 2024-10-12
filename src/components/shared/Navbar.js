"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton, Link, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../assets/girl-with-red-vintage-convertible-car_1308-111836.jpg";
import Header from "./Header";

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
    pathName: "/categories/news?category=all-news",
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

function Navbar() {
  return (
    <div className="">
      <Header></Header>

      <div className="bg-black">
        <div className="flex justify-between  mx-32">
          <div>
            {" "}
            <Image
              className="rounded-full"
              src={logo}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div>
            {navItems.map((item) => (
              <Link className="text-white" href={item.pathName} key={item}>
                <Button className="text-white"> {item.route}</Button>
              </Link>
            ))}
          </div>

          <div>
            <Stack direction={"row"} sx={{ "& svg": { color: "white" } }}>
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
            </Stack>
          </div>
        </div>
      </div>

      {/* <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              className=""
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Link href={item.pathName} key={item}>
                  <Button className="text-white"> {item.route}</Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack direction={"row"} sx={{ "& svg": { color: "white" } }}>
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}
    </div>
  );
}
export default Navbar;
