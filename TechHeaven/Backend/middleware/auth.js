import jwt from "jsonwebtoken"

 const authMiddleware = async (req, res, next) =>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not authorized to login"})
    }
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Invalid token"})
    }
}
export default authMiddleware;