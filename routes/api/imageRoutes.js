const { cloudinary } = require("../../config/cloudinary");
const router = require("express").Router();
const { User, Profile, Photo } = require('../../models');

// picture uploads to cloudinary dev_setups folder
// which then creates a reference in image table
router.post("/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    console.log(uploadedResponse);

    // values will need to be adjusted once access control established
    const imageData = await Photo.create({
      owner_id: 1,
      owner_type: 'user',
      uploader_id: 1,
      url: uploadedResponse.url,
    })

    console.log(imageData);
    res.json(uploadedResponse + imageData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Something is wrong" });
  }
});

// returns a string of all pictures within dev_setups folder
router.get("/", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:dev_setups")
    .sort_by("public_id", "desc")
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

module.exports = router;
