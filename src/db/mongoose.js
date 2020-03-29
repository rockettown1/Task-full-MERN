const mongoose = require("mongoose");

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const connection = async () => {
  const uri = `mongodb+srv://${user}:${pass}@practice-cluster-xldcz.mongodb.net/dansNewDB?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log("connection made");
  } catch (error) {
    console.log(error);
  }
};

connection();
