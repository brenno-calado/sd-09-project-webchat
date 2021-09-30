const Users = require('../models/users');

const insertOne = async (user) => {
  const result = await Users.insertOne(user);
  return result;
};

const find = async () => {
  const result = await Users.find();
  return result;
};

const findByNickname = async (nickname) => {
  const user = await Users.findByNickname(nickname);
  return user;
};

const updateNickname = async ({ oldNickname, newNickname }) => {
  const updated = await Users.updateOne(oldNickname, newNickname);
  return updated.modifiedCount;
};

const deleteOne = async (id) => {
  await Users.deleteOne(id);
};

const clearUsers = async () => {
  console.log('clearing all users left...');
  return true;
};

module.exports = { insertOne, find, findByNickname, updateNickname, deleteOne, clearUsers };
