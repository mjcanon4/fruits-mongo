const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//Connection url
const url = "mongodb://localhost:27017";

//DB name
const dbName = "fruitsDB";

const insertDocuments = function (db, callback) {
  const collection = db.collection("fruits");

  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "great fruit",
    },
    {
      name: "Orange",
      score: 5,
      review: " could be better",
    },
  ]);
};

//Creating a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

//Use connect method to connect to the server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  client.close();
});
