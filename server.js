const express = require("express");

const sequelize = require("./config/connection");
const routes = require("./routes");

var cors = require('cors')

var jwt = require("express-jwt");
var jwks = require("jwks-rsa");
const jwtAuthz = require("express-jwt-authz");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-dwofmg2f.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://3000",
  issuer: "https://dev-dwofmg2f.us.auth0.com/",
  algorithms: ["RS256"],
  clientOrigins: ['http://localhost:3001'],
});

// app.use(jwtCheck);
app.use(cors())

app.get("/authorized", jwtCheck, function (req, res) {
  res.send("Secured Resource");
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


// Connect to the Mongo DB
// sequlize.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
// );

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

// Start the API server

