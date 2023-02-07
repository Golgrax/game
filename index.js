const express = require('express');

const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();

app.get('/', (req, res) => {

    const filePath = `${__dirname}/client/index.html`;

    fs.exists(filePath, (exists) => {

        if (exists) {

            res.sendFile(filePath);

        } else {

            res.status(404).send('File not found');

        }

    });

});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(3000, () => {

    console.log('Listening!');

});
