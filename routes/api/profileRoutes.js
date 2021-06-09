const router = require("express").Router();
const { Op } = require("sequelize");
const { User, Friend, Profile, Photo } = require("../../models");
const jwtCheck = require("../../utils/jwt");

router.post("/search", async (req, res) => {
  try {
    const profileData = await Profile.findOne({
      where: {
        user_name: {
          [Op.like]: "%" + req.body.user_name + "%",
        },
      },
    });
    if (!profileData) {
      res.status(200).json(null);
    }
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//creates a profile for a user
router.post("/", async (req, res) => {
  try {
    const profileData = await Profile.findOne({
      where: {
        user_id: req.body.user_id,
      },
    }).then((obj) => {
      if (obj) {
        return Profile.update(req.body, {
          where: {
            user_id: req.body.user_id,
          },
        });
      } else {
        return Profile.create(req.body);
      }
    });
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
