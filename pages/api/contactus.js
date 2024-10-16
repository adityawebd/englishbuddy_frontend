import {mongooseConnect} from "../../lib/mongoose";
import ContactUs from "@/models/contactus";


export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();
  
    switch (method) {
      
      case 'POST':
        try {
            console.log(req.body)
          const banners = await ContactUs.create(req.body);
          res.status(201).json({ success: true, data: banners });
        } catch (error) {
          console.log(error);
          res.status(400).json({ success: false ,message:error.message});
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
  