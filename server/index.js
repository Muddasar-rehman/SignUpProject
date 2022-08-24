const express = require("express");
const connectDatabase = require("./database");
const router = require("./routes/auth");
const cors = require("cors");

require("dotenv").config();
const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.use("/auth", router);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
