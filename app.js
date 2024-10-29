const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Rollbacked to previous version once, then again changing something------> Verifying the pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
