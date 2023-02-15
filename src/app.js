const express = require('express');

const app = express();

app.use(express.json());

//-----------------

const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { nCharacters } = require('./lib/strings');

//-----------------

const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');

//-----------------

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/n-characters/:string', (req, res) => {
  const n = req.query.length;
  res.status(200).json({ result: nCharacters(req.params.string, n) });
});

//-----------------

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

// app.post('/numbers/multiply', (req, res) => {
// res.status(200).json({ result: multiply(req.body.a, req.body.b) });
// });

app.post('/numbers/multiply', (req, res) => {
  if (Number.isNaN(req.body.a, 10) || Number.isNaN(req.body.b, 10)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

//-----------------

module.exports = app;
