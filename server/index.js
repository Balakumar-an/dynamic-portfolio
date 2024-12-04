const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./connectdb");
// const authRoute = require("./routes/auth.route");
const app = express();
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use("/auth", authRoute);

const PORT = process.env.PORT;

const server = () => {
  app.listen(PORT, () => {
    console.log(`App is listening in ${PORT}`);
  });
};

server();
