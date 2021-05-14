require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const { json } = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/circle', (req, res)=>{
    res.sendFile(__dirname + "/circle.html");
});

app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const areaCircle = Math.PI * radius * radius;

    res.send(`<h2>Are of the Circle: ${areaCircle}</h2>`);
});

app.get('/triangle', (req, res)=>{
    res.sendFile(__dirname + "/triangle.html")
});

app.post('/triangle', (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = .5 * base * height;

    res.send(`<h2>The area of Triangle is : ${area}</h2>`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http:localhost:${PORT}`);
})