import mongo from "../../../lib/mongodb";
import BlogModel from "../../../models/post";

export default async function handler(req, res) {
  mongo();
  try {
    const AllBlogs = await BlogModel.find().sort({createdAt:-1});
    res.status(201).json({
      success: true,
      message: AllBlogs,
    });
  } catch (error) {
    console.log(error);
  }
}
