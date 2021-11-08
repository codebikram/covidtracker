const express = require('express');
const bodyParser = require('body-parser');
const covid = require('corona-info');
// const { response } = require('express');


const app = express()

app.set('view engine', "ejs")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

// static public folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/getdata', (req, res) => {
    let country = req.body.country
    // console.log(country);

    covid.findData({ country: country }).then(response => {
        // console.log(response);
        res.json({
            data:response
        })
    });
   
})

app.listen(5000, () => {
    console.log("App is listening on port 5000")
})