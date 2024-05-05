import React,{useContext} from 'react'
import "./Item.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'
const Item = ({id,name,price,description,image}) => {

  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='Item'>
      <div className="Item-image-container">
        <img alt="" src={image} className='Item-image' />
        {
          !cartItems[id]
          ?<img src={assets.plus_icon} alt="" className='add' onClick={()=>addToCart(id)}/>
          :<div className="item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon} alt="" />
          </div>
        }
      </div>
      <div className="Item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.rating3} alt="" />
        </div>
        <p className='item-desc'>{description}</p>
        <p className="item-price">${price}</p>
      </div>
    </div>
  )
}

export default Item