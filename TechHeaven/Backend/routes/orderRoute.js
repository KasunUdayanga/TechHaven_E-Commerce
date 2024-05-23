import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { listOrders, placeOrder, updatStatus, userOrder, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrder)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updatStatus)

export default orderRouter;