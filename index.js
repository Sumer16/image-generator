const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5500;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false})); // accept body data from request.body

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));