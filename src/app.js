const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();
// This is just for the Testing Purpose
//SOmething is not working
//Testing Gokul

//This shdfsdfj
//Testing Push Request.
//Why is it working on the main branch
//Checking whether Changes made on the main branch trigger something or not.

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(middlewares.auth);

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
