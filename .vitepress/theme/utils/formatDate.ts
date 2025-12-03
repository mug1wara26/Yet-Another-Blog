export default function (date: string) {
  return new Date(date).toLocaleString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
