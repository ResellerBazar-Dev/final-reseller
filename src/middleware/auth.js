import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token)
    return res.status(401).json({ msg: "no token, authorization denied" });
  try {
    const decoded = jwt.verify(token, "jwt_secret");

    console.log("from middleware", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

export default auth;
