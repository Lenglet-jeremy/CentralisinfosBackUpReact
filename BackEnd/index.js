const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./database/configDB');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


mongoose.connect(config.mongoDB.uri, config.mongoDB.options)
    .then(() => { console.log('Connexion à MongoDB réussie');})
    .catch((err) => { console.error('Erreur de connexion à MongoDB', err); });

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

app.get('/api/user', async (req, res) => {
  const user = await User.find();
  res.json(user);
});

app.post('/api/user', async (req, res) => {
  const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  });
  await newUser.save();
  res.json(newUser);
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {    
  console.log(`Server listening at http://localhost:${port}`);
});