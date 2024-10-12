import CategoryList from "@/components/ui/CategoryList/CategoryList";

const layout = ({ children }) => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2} columns={16}>
    //     <Grid item xs={3}>
    //       <CategoryList></CategoryList>
    //     </Grid>
    //     <Grid item xs={9}>
    //       {children}
    //     </Grid>
    //   </Grid>
    // </Box>

    <div className="flex gap-10">
      <div>
        <CategoryList></CategoryList>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default layout;
