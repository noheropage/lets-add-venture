const router = require("express").Router();
const { PastClimbs, User } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        auth0_id: req.params.id,
      },
      include: {
        model: PastClimbs,
      },
    });

    if (!userData) {
      res.status(400).json({ message: "There is no climb by that id" });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        auth0_id: req.body.auth0_id,
      },
    });
    const climbData = await PastClimbs.findOrCreate({
      where: {
        climb_name: req.body.climb_name,
        rating: req.body.rating,
        user_id: userData.id,
        api_id: req.body.api_id,
      },
    });
    res.status(200).json(climbData);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

//Delete a climb
router.delete("/:id", async (req, res) => {
  try {
    const climbData = await PastClimbs.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!climbData) {
      res.status(400).json({ message: "no climb with that id" });
    }
    res.status(200).json(climbData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
