var jwt = require("express-jwt");
var jwks = require("jwks-rsa");
const jwtAuthz = require("express-jwt-authz");

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-dwofmg2f.us.auth0.com/.well-known/jwks.json',
    }),
    audience: 'https://dev-dwofmg2f.us.auth0.com/api/v2/',
    issuer: 'https://dev-dwofmg2f.us.auth0.com/',
    algorithms: ["RS256"],
    clientOrigins: ['http://localhost:3000/'],
  });

module.exports = jwtCheck;