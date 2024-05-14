import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type:String,required:true },
    description: { type:String,required:true },
    price: { type:Number,required:true },
    category: { type:String,required:true },
    image: { type:String,required:true },
})

const itemModel=mongoose.models.item ||mongoose.model("item",itemSchema);

export default itemModel;
