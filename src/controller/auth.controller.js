import userSchema from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  userSchema.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "employee doesn't exists" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: "enter valid password" });
      jwt.sign(
        { id: user.id },
        "jwt_secret",
        { expiresIn: 86400 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
            },
          });
        }
      );
    });
  });
};

export const getUser = (req, res) => {
  console.log("from auth js:", req.user);
  userSchema
    .findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};
