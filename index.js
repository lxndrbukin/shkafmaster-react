const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

require('./models/User');
require('./models/Item');

mongoose
  .connect(
    'mongodb+srv://lxndrbukin:REa1996TSu@shkafmaster.sr5sz55.mongodb.net/shkafmaster?retryWrites=true&w=majority'
  )
  .then(() => console.log('MONGODB CONNECTED'));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: 'session',
    keys: ['12fasf323tdsga53ag'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(cookieParser());

require('./routes/auth')(app);
require('./routes/catalog')(app);

const PORT = 5000;
app.listen(PORT, () => console.log('Server is running on port', PORT));
