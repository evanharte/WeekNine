const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Simple app running on port ${PORT}.`)
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {name: 'Darth Vader'});
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.use((req, res, next) => {
    res.status(404);
    res.render('404');
});
