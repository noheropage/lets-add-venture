const router = require("express").Router();
const {
  getPublicMessage,
  getProtectedMessage,
} = require("../../messages.service");
const checkJwt = require("../../utils/jwt");

router.get("/public-message", (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

router.get("/protected-message", checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

module.exports = router;
