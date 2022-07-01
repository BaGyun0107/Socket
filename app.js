const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`server is running ${PORT}`));
