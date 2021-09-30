const Messages = require('../models/messages');

const newMessage = async (message) => {
  await Messages.insertOne(message);
};

const find = async () => {
  const messages = await Messages.find();
  return messages;
};

const clearMessages = async () => {
  console.log('clearing all messages...');
  return true;
};

module.exports = { newMessage, find, clearMessages };
