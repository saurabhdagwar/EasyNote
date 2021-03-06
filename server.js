const express = require('express');
const bodyParser = require('body-parser');

const  url = './config/databaseconfig.js';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./config/databaseconfig.js');
 require('./root/app/routes/note.routes.js')(app);

app.get('/', (req, res) => {
    res.json({"message": "This is created by Saurabh Dagwar"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

