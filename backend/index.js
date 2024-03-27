const express = require("express");
const app = express();
const PORT = 8100;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`This port is running at ${PORT}`);
});
