import React from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/storeContext'
const ItemDisplay = ({category}) => {
    const {item_list}=useContext(storeContext)
  return (
    <div className='item-display'id='item-display'>
        <h2>Top Product In Here</h2>
        <div className="item-display-list">
            {item_list.map((item,index)=>{
                return <ListItem key={index}id={item._id} name={item.name}description={item.description} price={item.price}image={item.image}>
            })}
        </div>
    </div>
  )
}

export default ItemDisplay