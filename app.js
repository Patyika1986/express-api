const express = require('express');
const app = express();
const path = require('path');
const todoData = require('./todoData');
const cors = require('cors');
app.use(cors())