const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    dbName: process.env.DB_NAME,
  })
  .then(() => console.log("DataBase connected successfully"))
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
