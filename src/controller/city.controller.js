import citySchema from "../model/city.model.js";

export const allCity = (req, res) => {
  citySchema
    .aggregate([
      {
        $lookup: {
          from: "states",
          localField: "state_id",
          foreignField: "_id",
          as: "state",
        },
      },
    ])
    .then((data) => res.json(data));
};

export const createCity = async (req, res) => {
  try {
    const city = new citySchema(req.body);

    const createNewCity = await city.save();

    res.status(200).json(createNewCity);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
