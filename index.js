require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/api/users', userRouter);