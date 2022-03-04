const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 3000;

// MIDDLEWARES
app.use(cors());

mongoose.connect('mongodb+srv://user:user123@cluster1.gle5k.mongodb.net/ingredients', () => console.log('connected to db'));

app.use(express.json());
// app.use(express.static('public'));

const ingredientRoutes = require('./routes/ingredient');
app.use('/ingredient', ingredientRoutes);

app.get('/', (req, res) => {
    // res.sendFile('index.html');
    res.send('<h1>Healthify server</h1>');
});

app.listen(PORT, () => console.log('Listening to port ' + PORT));