const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//Connection url
const url = "mongodb://localhost:27017";

//DB name
const dbName = "fruitsDB";

//Creating a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

//Use connect method to connect to the server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  client.close();
});
