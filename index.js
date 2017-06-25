const config = require('./config')();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use('/', (req, res) => res.json('Hello World!'));
app.use(router);

console.log(`Server listening on port ${config.infrastructure.port} in environment ${process.env.NODE_ENV} with config\n${JSON.stringify(config, 0, 2)}`);

app.listen(config.infrastructure.port);
