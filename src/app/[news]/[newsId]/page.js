import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);

  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={data.thumbnail_url}
              width={800}
              height={500}
              alt="top"
            ></Image>
            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={data.image_url}
                  width={800}
                  height={500}
                  alt="top"
                ></Image>
              </Grid>

              <Grid item lg={6}>
                <Image
                  src={data.image_url}
                  width={800}
                  height={500}
                  alt="top"
                ></Image>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {data.title}
            </Typography>

            <Box>
              <Avatar alt="author" src={data.author.img} />
              <Typography> By {data.author.name} </Typography>
              <Typography> Publish : {data.author.published_date} </Typography>
              <Typography
                style={{
                  textAlign: "justify",
                  whiteSpace: "pre-line",
                  margin: "10px 0px",
                  color: "gray",
                }}
              >
                {" "}
                {data.details}{" "}
              </Typography>
              <Typography variant="h6">
                {" "}
                ``Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                recusandae iusto corrupti?``{" "}
              </Typography>

              <Typography variant="h6">--Jhankar Mama</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
