export default function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return formattedDate;
}
