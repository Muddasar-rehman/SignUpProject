const mongoose = require("mongoose");

const connectDatabase = async () => {
  const databse = await mongoose.connect(process.env.DATABASE_URL);
  console.log(
    `database connection successfully on host ${databse.connection.host}`
  );
};

module.exports = connectDatabase;
