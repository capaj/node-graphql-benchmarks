"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createDecapiSchema");
// console.log("~ createTypeGraphQLSchema", createTypeGraphQLSchema);

const app = Fastify();
const schema = createTypeGraphQLSchema();

app.register(mercurius, {
  schema,
  graphiql: "playground",
});
app.listen(4001);
