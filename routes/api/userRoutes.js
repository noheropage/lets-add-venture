const router = require("express").Router();
const { User, Friend, Profile, Photo, PastClimbs } = require("../../models");
const jwtCheck = require("../../utils/jwt");
const { Op } = require("sequelize");

//get all users --> Delete when no longer needed <--
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a single user's profile information by the id
router.get("/profile/:id", jwtCheck, async (req, res) => {
  try {
    const singleUser = await User.findOne({
      where: {
        [Op.or]: [{ auth0_id: req.params.id }, { id: req.params.id }],
      },
      include: [
        {
          model: Profile,
        },
        {
          model: Photo,
        },
        {
          model: PastClimbs,
        },
        {
          model: User,
          as: "sender",
        },
        {
          model: User,
          as: "receiver",
        },
      ],
    });

    if (!singleUser) {
      res.status(400).json({ message: "there is no user with that ID" });
    }

    res.status(200).json(singleUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//gets single user's friends by the user id
router.get("/friends/:id", async (req, res) => {
  try {
    const friendList = await User.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          as: "sender",
        },
        {
          model: User,
          as: "receiver",
        },
      ],
    });

    if (!friendList) {
      res.status(400).json({ message: "there is no user with that ID" });
    }
    res.status(200).json(friendList);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//gets a single users' past climbs by the user id
router.get("/pastClimbs/:id", async (req, res) => {
  try {
    const singleUser = await User.findOne({
      where: {
        auth0_id: req.params.id,
      },
      include: [
        {
          model: PastClimbs,
        },
      ],
    });

    if (!singleUser) {
      res.status(400).json({ message: "there is no user with that ID" });
    }
    res.status(200).json(singleUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//creates a user
router.post("/", async (req, res) => {
  try {
    const userData = await User.findOrCreate({
      where: {
        email: req.body.email,
        auth0_id: req.body.auth0_id,
      },
      include: [
        {
          model: Profile,
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
