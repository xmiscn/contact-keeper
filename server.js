const express = require('express');
const connectDB = require('./config/db.js');
const path = require('path');

const app = express();
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

/* app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API ...' })
); */

// Serve static assets in production
if (process.envNODE_ENV === 'production') {
  //set the static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
