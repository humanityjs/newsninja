const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(serveStatic(__dirname + "/dist"));
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});