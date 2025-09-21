const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ data: "hej med dig er der hul igennem" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
