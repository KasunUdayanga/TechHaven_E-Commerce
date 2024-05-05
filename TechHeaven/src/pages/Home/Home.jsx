import React,{useState}from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import ItemDisplay from '../../Components/ItemDisplay/ItemDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category}setCategory={setCategory}/>
        <ItemDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home