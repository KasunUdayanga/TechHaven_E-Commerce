import mongoose from 'mongoose';

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://udayangakasun696:p58R_2_F2ytXB_w@cluster0.vn1mgz6.mongodb.net/e-commerce').then(()=>{console.log('DB connected')});
}