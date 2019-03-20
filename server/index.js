
const express = require('express');
const cors = require('cors');
const api = require('./router/api');

const app = express();

app.use(cors());
app.use('/api',api)

// //Handle Production
// if (process.env.NODE_ENV === 'production'){
//   //Static folder
//   app.use(express.static(__dirname + '/public/'));
//
//   //Handle SPA route
//   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at Port ${port}`);
});




