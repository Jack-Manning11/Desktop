//req is request
//res is response

const express = require('express');
const fs = require('fs').promises; //interacting with JSON file
const path = require('path'); //handling path creation for said JSON

const app = express();
const dataFile = path.join(__dirname, 'data.json');

//support posting form data with url encoded
app.use(express.urlencoded({ extended: true })); 

//  Enable CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
});

app.get('/poll', async (req, res) => {
    let data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));
    const totalVotes = Object.values(data); // returns 2d arrway of values from JSON
    const sum = totalVotes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0); // appends all of the values into 1 sum
    
    data = Object.entries(data).map(([label, votes]) => {
        return {
            label, 
            percentage: (((100 * votes) / sum)).toFixed(0) //handles divide by 0 errors & rounding to a whole number
        }
    });
    res.json(data);
});

app.post('/poll', async (req, res) => {
    const data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));

    //a place to add validation
    data[req.body.add]++; //increment a given choice by 1

    //null, 2 handles pretty-printing so JSON is not 1 line
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2));

    res.end();
});
// Change to be writing to an array of objects all with yes or no variables

app.listen(3000, () => console.log("Server is running..."));