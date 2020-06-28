const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Oscar'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port);