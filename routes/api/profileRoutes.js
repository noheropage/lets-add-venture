const router = require("express").Router();
const { User, Friend, Profile, Photo } = require("../../models");
const jwtCheck = require("../../utils/jwt");

// /api/profiles ->

router.post("/search", async (req, res) => {
  try {
    console.log(req.body);
    const profileData = await Profile.findAll({
      where: {
        first_name: req.body.first_name,
      },
    });
    if (!profileData) {
      res.status(400).json({ message: "We were unable to find anything" });
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
    console.log(profileData);
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
