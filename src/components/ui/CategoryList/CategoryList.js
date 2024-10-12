import getCategories from "@/utils/getCategories";
import { Button, ButtonGroup } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data } = await getCategories();

  const buttons = [
    data.map((item) => (
      <Link
        href={`news?category=${item.title.toLowerCase()}`}
        key={`${item.title}`}
      >
        <Button className="w-full">{item.title}</Button>
      </Link>
    )),
  ];

  return (
    <div>
      <h2>Categories {data.length} </h2>

      <div className="mt-5">
        <ButtonGroup orientation="vertical" aria-label="Vertical button group">
          {buttons}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default CategoryList;
