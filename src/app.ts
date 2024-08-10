import express from 'express';
import Hello from './Hello';
const app = express();

app.get('/', function (req, res) {
  res.send(new Hello().getText());
});

app.listen(3000);
