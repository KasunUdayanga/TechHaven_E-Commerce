import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download'id='app-download'>
        <p>Releasing Soon For Better Experience <br />TechHeaven App</p>
        <div className="download-platforms">
            <img src={assets.google} alt="" />
            <img src={assets.mac} alt="" />
        </div>
    </div>
  )
}

export default AppDownload