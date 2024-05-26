require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, process.env.MONGO_OPTIONS)
        .then(() => {
          app.listen(port, () => {
            console.log(`DB connected on port ${port}`);
          });
        })
        .catch(err => {
          console.error('Erreur de connection à MongoDB :', err);
        });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

app.get('/api/user', async (req, res) => {
  const user = await User.find();
  res.json(user);
});

app.post('/api/user', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: `Erreur lors de la creation de l'utilisateur`, error: err.message });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});
