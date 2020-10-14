const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const shelfRouter = require('./routes/shelf.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/shelf', shelfRouter);
app.use(fileUpload());

// MOVING FILE FROM ORIGINAL SOURCE TO "uploads" project folder
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no file uploaded' });
  }

  const file = req.files.file; //.file is tacos

  file.mv(`/Users/tylerjorenby/PrimeAcademy/solo-project/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err)
    }

    res.json({ filePath: `/uploads/${file.name}` });
  });
});

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
