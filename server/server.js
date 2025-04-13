const express = require("express");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5002;
const app = express();
const server = http.createServer(app);

app.use(cors());

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
