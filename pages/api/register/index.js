import mongo from "../../../lib/mongodb";
import UserModel from "../../../models/user";


export default async function handler(req, res) {
  if(req.method === "POST"){
    mongo();

  try {

    const {email, password} = req.body;

    const user = await UserModel.create(req.body);
    // const userData = await user.save();
    res.status(201).json({
      success: true,
      message: user,
    });
  } catch (error) {
    console.log(error);
  }
  }
}
