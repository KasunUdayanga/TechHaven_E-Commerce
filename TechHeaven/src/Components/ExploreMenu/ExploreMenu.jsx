import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Discover the boundless possibilities of modern technology at our e-commerce store! Dive into a world of innovation and convenience with our carefully curated selection of electronic items for every corner of your home. Whether you are looking to upgrade your entertainment setup, streamline your daily tasks with smart home devices, or stay connected on-the-go with the latest gadgets, we have got you covered. Explore our range today and unlock the power of cutting-edge electronics to enhance your lifestyle.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) =>{
                return(
                    <div className="explore-menu-list-item"onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                        <img src={item.menu_image} className={category===item.menu_name?"active":""}alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu