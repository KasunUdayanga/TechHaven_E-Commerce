import itemModel from "../models/itemModel.js";
import fs from "fs";


//add food item
const addItem= async (req,res) => {

    let image_filename =`${req.file.filename}`;

    const item =new  itemModel({
        name:req.body.name,
        image:image_filename,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category
    })
    try {
        await item.save();
        res.json({
            success:true,message:"Item Added"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,message:"Internal Server Error"
        })
    }
}

const listItem=async(req, res)=> {
    try{
        const Item = await itemModel.find({});
        res.json({
            success:true,
            data:Item
        })
    }catch(err){
        res.json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const RemoveItem =async (req, res) => {
    try {
        const Item = await itemModel.findById(req.body.id);
        fs.unlink(`uploads/${Item.image}`,()=>{})
        await itemModel.findByIdAndDelete(req.body.id);
        res.json({
            success:false,
            message:"Internal Server Error"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
export{addItem,listItem,RemoveItem}