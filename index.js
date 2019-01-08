const express = require('express');
const app = express();
const port = 3000;
const pkg = require('./package.json');

app.get('/', (req, res) => res.send(200, `Hello World! ${pkg.config.message}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
