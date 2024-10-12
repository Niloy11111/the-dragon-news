import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const SideBar = () => {
  return (
    <Box className="mt-5">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/man-looking-stock-market-news-computer_53876-122481.jpg?w=1060&t=st=1708601427~exp=1708602027~hmac=b7e19709ff77a18103af10d06627329e88e866bfed90e21d1bb5aae2b1b6d311"
          ></CardMedia>

          <CardContent>
            <p className="max-w-max bg-red-500 px-2 py-1 rounded my-3 text-white">
              Technology
            </p>

            <Typography gutterBottom variant="h5" component="div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste.
            </Typography>
            <Typography className="my-3" gutterBottom>
              By Ekhthiar - Jan 1 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              eaque quae ab in ipsa. Lorem ipsum dolor sit amet.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
