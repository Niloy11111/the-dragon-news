import getAllNews from "@/utils/getAllNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const LatestNews = async () => {
  const { data } = await getAllNews();

  // console.log(data);
  return (
    <Box className="my-5">
      <Card className="">
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              alt="top"
              width={800}
              height={500}
            ></Image>
          </CardMedia>

          <CardContent>
            <p className="max-w-max bg-red-500 px-2 py-1 rounded my-3 text-white">
              {data[0].category}
            </p>

            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography className="my-3" gutterBottom>
              {data[0].author.name} - {data[0].author.publish_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200)
                : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid
        className="mt-10"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 4).map((item) => (
          <Grid key={item.id} item xs={6}>
            <Card className="">
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={item.thumbnail_url}
                    alt="top"
                    width={800}
                    height={500}
                  ></Image>
                </CardMedia>

                <CardContent>
                  <p className="max-w-max bg-red-500 px-2 py-1 rounded my-3 text-white">
                    {item.category}
                  </p>

                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography className="my-3" gutterBottom>
                    {item.author.name} - {item.author.publish_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.details.length > 200
                      ? item.details.slice(0, 200)
                      : item.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
