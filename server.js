const express = require("express");
const path = require("path");
const app = express();
const buildpath = path.join(__dirname,'build')

app.use(express.static(buildpath));
app.get('*', function (req, res) {
    res.sendFile(path.join(buildpath, 'index.html'));
});

app.listen(3000);
