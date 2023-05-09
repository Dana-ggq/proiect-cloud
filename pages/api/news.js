const express = require('express');
const cors = require('cors');
const fetch = require('isomorphic-unfetch');

const app = express();
app.use(cors({ origin: 'https://proiect-cloud-trip.vercel.app' }));

app.get('/news', async (req, res) => {
  const { q } = req.query;
  const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=a89076cafbf2435999229afd7083b859`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

module.exports = app;
