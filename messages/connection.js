const users = require('../models/usersObject');
const Users = require('../controllers/users');

// eslint-disable-next-line max-lines-per-function
module.exports = (io) => {
  io.on('connection', (socket) => {    
    socket.on('newUser', () => {
      const id = `${socket.id}`;
      const newUser = socket.id.split('', 16).join('');
      console.log('users connected no NewUser: ', users);
      users[id] = { nickname: newUser };
      io.emit('connected', { newUser });
      Users.insertOne({ nickname: newUser, id: socket.id });
    });

    socket.on('connected', (localNickname) => {
      const id = `${socket.id}`;
      io.emit('connected', { newUser: localNickname });
      console.log('users connected: ', users);
      users[id] = { nickname: localNickname };
      Users.insertOne({ nickname: localNickname, id: socket.id });
    });
});
};
