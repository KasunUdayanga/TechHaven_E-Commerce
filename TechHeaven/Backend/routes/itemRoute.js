import express from 'express';
import { addItem,listItem,RemoveItem } from '../controllers/ItemController.js';
import multer from "multer";

const ItemRouter = express.Router();
 //image store

 const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
       return  cb(null,`${Date.now()}${file.originalname}`)
    }
 })

const upload = multer({storage:storage})

ItemRouter.post("/add",upload.single("image"),addItem)
ItemRouter.get("/list",listItem)
ItemRouter.post("/remove",RemoveItem)



export default ItemRouter;