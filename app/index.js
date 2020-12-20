const express = require('express');
const morgan = require('morgan'); // logging package to make it easier to read on terminal, can be removed if app expands and need space
const path = require('path');

// router
const resultRouter = require('./routes/results')

const PORT = 8080;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/ajax/integer_input', resultRouter);

// error handling endware
app.use((err, req, res, next) => {
    res.status(500).json({ message: `Internal Server Error: ${err}` });
})

app.listen(PORT, async() => {
    console.log(`listening on port ${PORT}`)
})