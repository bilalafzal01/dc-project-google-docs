const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const error = require("../../middleware/error");

module.exports = {
  signup: error(async (args) => {
    const existingUser = await User.findOne({ email: args.userInput.email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
    const user = new User({
      name: args.userInput.name,
      email: args.userInput.email,
      password: hashedPassword,
    });
    const result = await user.save();
    return { ...result._doc, password: null };
  }),
  login: error(async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "somesupersecretkey",
      {
        expiresIn: "1h",
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }),
  user: error(async (args, req) => {
    if (isAuth) {
      const usr = await User.findById(req.userId).populate(
        "createdDocs editingDocs"
      );
      if (!usr) {
        throw new Error("User not found");
      }
      return usr;
    } else {
      throw new Error("Unauthorized");
    }
  }),
};
