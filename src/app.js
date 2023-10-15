const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 9000;

// public static path
const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials");
const template_path = path.join(__dirname, "../templates/views"); 


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

// routing
app.get("", (req, res) => {
    res.render('index.hbs'); // Render the "index.hbs" view
});

app.get("/about", (req, res) => {
    res.render('about.hbs'); // Render the "about.hbs" view
});

app.get("/weather", (req, res) => {
    res.render('weather.hbs');
});

app.get("*", (req, res) => {
    res.render('404error.hbs'); // Assuming you have a "404.hbs" view
});

app.listen(port, () => {
    console.log(`Listening to the port at ${port}`);
});
