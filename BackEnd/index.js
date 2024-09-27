require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        .catch(err => {console.error('Erreur de connexion à MongoDB :', err);});

const UserSchema = new mongoose.Schema({
  
  name: {  
    type: String, 
    required: true 
  },

  email: { type: String, 
    required: true, 
    unique: true 
  },

  password: { 
    type: String,
    required: true
   },

  RGPD: {
    type: Boolean, 
    required: true 
  }

});

const User = mongoose.model('User', UserSchema);

app.get('/api/register', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/register', async (req, res) => {
  const { name, email, password, RGPD } = req.body;

  if (!name || !email || !password || !RGPD) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet e-mail est déjà utilisé.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      RGPD: RGPD
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: `Erreur lors de la création de l'utilisateur`, error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: 'Utilisateur non trouvé' });
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Connexion réussie', token });
    } else {
      res.status(400).json({ message: 'Mot de passe incorrect' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error: err.message });
  }
});



const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};



const CourseSchema = new mongoose.Schema({
  categorie: { type: String, required: true },
  nomCours: { type: String, required: true },
  niveau: { type: String, required: true },
  prerequis: { type: String },
  content: { type: String, required: true },
  urlCours: { type: String, required: true, unique: true }
});

const Course = mongoose.model('Course', CourseSchema);

app.post('/api/courses', async (req, res) => {
  const { categorie, nomCours, niveau, prerequis, content, urlCours } = req.body;

  try {
    const newCourse = new Course({ categorie, nomCours, niveau, prerequis, content, urlCours });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de la création du cours', error: err.message });
  }
});

app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des cours', error: err.message });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});
