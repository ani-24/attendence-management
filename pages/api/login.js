import connectDb from "../../middleware/mongoose";
import Users from "../../models/User";

const handler = async (req, res) => {
  if (!req.body) {
    res.status(401).send("Unauthorized");
  } else {
    const { sid, password } = req.body;
    let userExists = await Users.find({ sid, password });
    if (!userExists) {
      console.log(sid, password);
      let word = new Users(req.body);
      await word.save();
    }
    res.status(200).send("Logged in");
  }
};

export default connectDb(handler);
