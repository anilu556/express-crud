const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const api = require('./src/routes/api')

console.log("**Express Version: ", require('express/package').version);


//middleware
app.use(morgan('combined'));
app.use('/api/v1', api);

// testeando
app.get('/', (req, res) => {
  res.send('Hello team');
})


//error 404
app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found'
  }
  response
    .status(404)
    .json(ERROR);
});

//error 500
app.use((err, request, response, next) => {
  const ERROR = {
    message: '500. Server Error'
  }
  response
    .status(500)
    .json(ERROR);
});


app.listen(PORT, () => {
  const msg = chalk.blue(`Node Server is running on PORT: ${PORT}`);

  console.log(msg);
});
