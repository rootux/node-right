const routes = require('./routes');

const response = cb => (req, res) =>
  cb(req.params, req.query, req.body)
  .tap(r => (Array.isArray(r) && r.length === 0
    ? res.status(404)
    : res.status(200)))
  .then(r => res.json(r));

module.exports = globals =>
  (routes(globals)
    .forEach(route =>
      globals.router[route.method](route.route, response(route.cb)))
  );