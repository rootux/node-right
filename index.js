const config = require('./config')();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data')(config);

const app = express();
const router = express.Router();
const errorHandler = require('./controllers/rest/router/error');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

app.use(router);

const globals = {
  config,
  router,
  db
};

globals.models = require('./models');
globals.repositories = require('./repositories')(globals);
globals.services = require('./services')(globals);
require('./controllers/rest/router')(globals);

app.use(errorHandler);

console.log(`Server listening on port ${config.infrastructure.port} in environment ${process.env.NODE_ENV} with config\n${JSON.stringify(config, 0, 2)}`);

app.listen(config.infrastructure.port);
