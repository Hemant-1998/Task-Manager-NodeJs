const express = require("express");
const connectDB = require("./db/connect.js");
require("dotenv").config();
const tasksRouter = require("./routes/tasks.js");

const app = express();
app.use(express.json());

app.use(express.static("./public"));
app.use("/api/v1/tasks", tasksRouter);
const port = 3000;

const start = async function () {
  try {
    await connectDB(process.env.mongodbUrl);
    console.log(`connected to the DB..`);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
