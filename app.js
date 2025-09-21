const express = require("express");
const app = express();

// Sørger for at alle filer fra mappen "public" indlæses, både css og html
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
