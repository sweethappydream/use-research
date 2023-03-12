const express = require('express')

const app = express()
const authRoutes = require('./auth');

app.use('/auth', authRoutes);

module.exports = app;