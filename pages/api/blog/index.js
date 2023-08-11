import mongo from "../../../lib/mongodb";
import BlogModel from "../../../models/post";

export default async function handler(req, res) {
  mongo();

  try {
    var slug = req.body.title
      .toLowerCase() 
      .replace(/\s+/g, "-") 
      .replace(/[^\w-]+/g, "") 
      .replace(/--+/g, "-")
      .trim();

    const JSON = await BlogModel.create({ ...req.body, slug });
    const blog = await JSON.save();

    res.status(201).json({
      success: true,
      message: blog,
    });
  } catch (error) {
    console.log(error);
  }
}
