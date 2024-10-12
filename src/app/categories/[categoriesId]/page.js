import getCategoryNews from "@/utils/getCategoryNews";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const DynamicPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div className="">
      <h2>This is {searchParams.category} page </h2>
      <h2>
        {" "}
        {searchParams.category} is {data.length}{" "}
      </h2>

      <Grid
        className="mt-10"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((item) => (
          <Grid className="w-full" key={item.id} item xs={6}>
            <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
              <Card className="w-full">
                <CardActionArea className="w-full">
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={item.thumbnail_url}
                      width={500}
                      height={100}
                      alt="tom"
                    ></Image>
                  </CardMedia>

                  <CardContent>
                    <span className=" bg-red-400 rounded my-3 text-white">
                      {item.category}
                    </span>

                    <Typography gutterBottom variant="h6" component="div">
                      {item.title.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                    </Typography>
                    <Typography className="my-3" gutterBottom>
                      By {item.author.name} - Jan 1 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.details.length > 200
                        ? item.details.slice(0, 200)
                        : item.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicPage;
