import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios'
import {toast}from 'react-toastify'
import{assets} from'../../assets/assets'




const Orders = ({url}) => {


  const [orders,setOrders]=useState([])

  const fetchAllOrders= async()=>{
  const  response = await axios.get(url+"/api/order/list")
    if (response.data.success){
      setOrders(response.data.data)
      console.log(response.data.data)
    }else{
      toast.error("Error")
    }
  }

  const statuseHandler = async(event,orderId)=>{
      const response=await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if (response.data.success){ 
        await fetchAllOrders();
  }}
  useEffect(()=>{
    fetchAllOrders();
  },[])


  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item" >
              <img src={assets.delivery} alt=""/>
            <div >
              <p className='order-item-i'>{order.items.map((item,index)=>{
                if (index === order.items.length - 1) {
                  return item.name+ " x "+item.quantity
                }else{
                  return item.name+ " x "+item.quantity+ ", "
                }
              })}</p>
              <p className='order-item-name'>{order.address.firstname+" "+order.address.lastname}</p>
              <div className='order-item-address'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items :{order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>{statuseHandler(event,order._id)}} value={order.status} name="" id="">
              <option value="Item Processing">Item Processing</option>
              <option value="Out Of Delivery">Out Of Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders