import user_profile_schema from "../model/user_profile.model.js";
import user_profile_image_schema from "../model/user_profile_image.model.js";

export const getProfileImage = (req, res) => {
  user_profile_schema
    .aggregate([
      {
        $lookup: {
          from: "user_profile_images",
          localField: "profile_image_id",
          foreignField: "_id",
          as: "profile_image",
        },
      },
    ])
    .then((data) => res.json(data));
};

export const updateProfile = async (req, res) => {
  try {
    const profile = await profileSchema.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    const update = await profile.save();

    res.status(200).json(update);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const updateProfileImage = async (req, res) => {
  const imageUrl = `http://localhost:3000/assets/profile/${req.file.filename}`;
  try {
    const user_profile_image = new user_profile_image_schema({
      profile_image: imageUrl,
    });

    const createUser_profile_image = await user_profile_image.save();

    res.status(201).json(createUser_profile_image);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// export const updateProfileImage = async (req, res) => {
//   const imageUrl = `http://localhost:3000/assets/profile/${req.file.filename}`;
//   try {
//     const profile = await profileSchema.findByIdAndUpdate(
//       { _id: req.params.id },
//       { profile_image: imageUrl }
//     );
//     const update = await profile.save();

//     res.status(200).json(update);
//   } catch (error) {
//     res.status(404).json(error.message);
//   }
// };
