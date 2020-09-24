const fastify = require("fastify");
const bodyParser = require("fastify-formbody");
const cors = require("fastify-cors");
require("dotenv").config();
const app = fastify({ logger: true });

(async () => {
  app.register(bodyParser);
  // Content type parser for the content type application/x-www-form-urlencoded
  app.register(cors);
  // Cross-origin resource sharing
})();
// Import Routes
const routes = require("./routes");

// Loop over each route
routes.forEach((route, index) => {
  app.route(route);
});

// Run the server!
const start = async () => {
  try {
    await app.listen(3000, "0.0.0.0");

    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
