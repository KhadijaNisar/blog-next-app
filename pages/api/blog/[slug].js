import blogModel from "../../../models/post";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const singleBlog = await blogModel.findOne({
          slug: req.query.slug,
        });
        res.status(201).json({
          success: true,
          singleBlog,
        });
      } catch (error) {
        console.log(error);
      }

      break;
    case "DELETE":
      try {
        const singleBlog = await blogModel.findOne({
          slug: req.query.slug,
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog not found" });
        } else {
          const RemBLog = await blogModel.findByIdAndDelete(singleBlog._id);
          res
            .status(200)
            .json({ success: true, message: "Blog has been deleted" });
        }
      } catch (error) {
        console.log(error);
      }
      break;

    case "PUT":
      try {
        const singleBlog = await blogModel.findOne({
          slug: req.query.slug,
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog not found" });
        } else {
          const RemBLog = await blogModel.findByIdAndUpdate(
            singleBlog._id,
            {
              $set: {
                ...req.body,
                slug: req.body.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--+/g, "-")
                  .trim(),
              },
            },

            { new: true }
          );

          res
            .status(200)
            .json({ success: true, message: "Blog has been Updated" });
        }
      } catch (error) {
        console.log(error);
      }

      break;

    default:
      break;
  }
}
