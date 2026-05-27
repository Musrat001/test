const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const message = req.body.message?.trim();

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  return res.send(`
    <h1>Thanks, ${escapeHtml(name)}!</h1>
    <p>We received your message.</p>
    <a href="/">Back to form</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
