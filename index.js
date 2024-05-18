import express from 'express';
const app = express();
const data = require('./posts.json');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies', (req, res) => {
  const data_posts = [...data];
  res.send(data_posts);
});
