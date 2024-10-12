import getCurrentDate from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="my-5">
      <Container>
        <h2 className="text-center text-5xl font-extrabold">The daily star</h2>
        <Typography textAlign="center">Lorem ipsum dolor sit amet.</Typography>
        <Typography textAlign="center">{currentDate} </Typography>
      </Container>
    </Box>
  );
};

export default Header;
