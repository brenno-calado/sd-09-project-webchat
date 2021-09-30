const express = require('express');

const app = express();
const http = require('http').createServer(app);
const path = require('path');

const dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.join(dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', './views');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const users = require('./models/usersObject');
const messages = require('./models/messagesArray');

const disconnect = require('./messages/disconnect.js');
const message = require('./messages/message.js');
const nickname = require('./messages/nickname.js');
const connection = require('./messages/connection');

connection(io);
disconnect(io);
message(io);
nickname(io);

app.get('/', async (req, res) => {
  res.status(200).render('index', { users: Object.values(users), messages });
});

http.listen(3000, () => { console.log('ouvindo na porta 3000'); });
