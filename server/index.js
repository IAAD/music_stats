
const express = require('express');
const cors = require('cors');
const api = require('./router/api');

const app = express();

app.use(cors());
app.use('/api',api)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at Port ${port}`);
});




