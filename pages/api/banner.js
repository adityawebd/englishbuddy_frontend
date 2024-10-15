import {mongooseConnect} from "../../lib/mongoose";
import Banner from "../../models/banner";


export default async function handler(req, res) {
    const { method } = req;
    const { page = 1, limit = 10, search = '' } = req.query;
    await mongooseConnect();
  
    switch (method) {
      case 'GET':
        if(req.query?.title){
          const banners = await Banner.findOne({title:req.query.title})
          res.status(200).json({ success: true, data: banners });
        }
        try {
          const banners = await Banner.find({});
          res.status(200).json({ success: true, data: banners });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;    
    }
  }
  