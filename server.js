const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config.env' });
colors.enable();

require('./initDB.js')();

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static('public/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/popper', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd/'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));

const homeRouter = require('./routes/home.route');
const featuresRouter = require('./routes/features.route');
const browseRouter = require('./routes/browse.route');
const supportRouter = require('./routes/support.route');
const signupRouter = require('./routes/signup.route');

app.use('/', homeRouter);
app.use('/features', featuresRouter);
app.use('/browse', browseRouter);
app.use('/support', supportRouter);
app.use('/signup', signupRouter);

app.listen(PORT, console.log(`Server is currently in ${process.env.ENV_CURRENT} mode on port:${PORT}`.green));