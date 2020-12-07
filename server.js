const express = require('express');
const path = require('path');

const PORT = 7000;
const publicPath = path.join(__dirname, 'public')
const app = express();

app.use(express.static("public"));

/*app.get("/", (req, res) => {
    res.sendFile(publicPath);
})*/

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})
