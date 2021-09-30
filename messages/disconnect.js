const { deleteOne } = require('../controllers/users');
const users = require('../models/usersObject');

module.exports = async (io) => {
  io.on('connection', async (socket) => {
    socket.on('disconnecting', () => {
      if (Object.values(users).length) {
        const { nickname } = users[socket.id];
        io.emit('logoff', nickname);
        delete users[socket.id];
        deleteOne(socket.id);
      }
    });
  });
};
