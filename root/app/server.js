const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  url = 'mongodb://localhost:27017/easynotes';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
 require('../app/routes/note.routes.js')(app);

app.get('/', (req, res) => {
    res.json({"message": "This is created by Saurabh Dagwar"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

