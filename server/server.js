const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.use(express.static("build"));

app.listen(port, () => {
    console.log(`GrowChat-dev Running On Port ${port}!`);
});