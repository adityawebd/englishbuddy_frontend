import {mongooseConnect} from "../../lib/mongoose";
import Blog from "../../models/blogs";


export default async function handler(req, res) {
    const { method } = req;
    const { page = 1, limit = 10, search = '' } = req.query;
    await mongooseConnect();
  
    switch (method) {
      case 'GET':
        if(req.query?.title){
          const blogs = await Blog.findOne({title:req.query.title})
          res.status(200).json({ success: true, data: blogs });
        }
        try {
          const blogs = await Blog.find({}).sort({ _id: -1 });
          res.status(200).json({ success: true, data: blogs });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
  