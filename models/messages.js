const connection = require('./connection');

const insertOne = async (message) => (
  connection()
    .then(
      (db) => db
        .collection('messages')
          .insertOne(message),
    )
);

const find = async () => (
  connection()
    .then(
      (db) => db
        .collection('messages')
          .find().toArray(),
    )
);

module.exports = { insertOne, find };
