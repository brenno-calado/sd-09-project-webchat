const Users = require('../controllers/users');
const users = require('../models/usersObject');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('newNickname', ({ oldNickname, newNickname }) => {
      io.emit('newNickname', { oldNickname, newNickname });
      users[socket.id] = { nickname: newNickname };
      Users.updateNickname({ oldNickname, newNickname });
    });
  });
};
