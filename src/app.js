require('@babel/register');

const path = require('path');
const express = require('express');
const logger = require('morgan');

// const healthcheck = require('./middlewares/healthcheck');

const homeRouter = require('./routes/homeRoute');

const app = express();

app.use(logger('dev'));

app.use(express.static(path.resolve(__dirname, 'public'), { dotfiles: 'ignore' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/healthcheck', healthcheck);

app.all('/', homeRouter);
app.all('/home', homeRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
