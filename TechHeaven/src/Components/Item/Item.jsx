import React from 'react'
import "./Item.css"
import { assets } from '../../assets/assets'
const Item = ({id,name,price,description,image}) => {
  return (
    <div className='Item'>
      <div className="Item-image-container">
        <img src="" alt="" src={image} className='Item-image' />
      </div>
      <div className="Item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.rating1} alt="" />
        </div>
        <p className='item-desc'>{description}</p>
        <p className="item-price">${price}</p>
      </div>
    </div>
  )
}

export default Item