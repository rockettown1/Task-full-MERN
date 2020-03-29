const { MongoClient } = require("mongodb");

const main = async () => {
  const uri =
    "mongodb+srv://rockettown1:Appleseed123@practice-cluster-xldcz.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db("taskDB");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
