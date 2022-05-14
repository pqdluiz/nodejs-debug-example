const express = require("express");

const port = 5000;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running to port http://localhost:5000`);
});
