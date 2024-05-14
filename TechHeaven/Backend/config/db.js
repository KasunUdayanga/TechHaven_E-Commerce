import mongoose from 'mongoose';

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://udayangakasun696:GDGvQ6vTbTFOWQcX@cluster0.vn1mgz6.mongodb.net/e-commerce').then(()=>{console.log('DB connected')});
}