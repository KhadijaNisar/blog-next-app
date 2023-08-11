import Model from "../../../models/post";
import dbConnect from "../../../lib/mongodb";



export default async function handler(req, res) {
  dbConnect();
  try {
    var match = {};
    var blog = {};
  
    if(req.query.title){
      match.title=new RegExp(req.query.title,"i")
    blog.data=await Model.find(match,{Metadesc:0,metaTitle:0}).sort({createdAt:-1})
    }
    res.status(201).json({
      success: true,
       blog,
    });
    
  } catch (error) {
    console.log(error);
  }
}