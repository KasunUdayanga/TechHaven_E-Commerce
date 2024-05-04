import logo from './Tech.png'
import search_icon from './magnifying-glass.png'
import busket from './shopping-online.png'
import item1 from './list/speaker.png'
import item2 from './list/ipod.png'
import item3 from './list/laptop.png'
import item4 from './list/watch.png'
import item5 from './list/3D-glass.png'
import item6 from './list/camera.png'
import item7 from './list/bulb.png'
import item8 from './list/headset.png'
import rating1 from './rating.png'
import rating3 from './rating3.png'
import rating4 from './rating4.png'
import rating2 from './rating2.png'
import top_item1 from './Top_item/headset.jpg'
import top_item2 from './Top_item/jbl.jpg'
import top_item3 from './Top_item/ipod.jpg'
import top_item4 from './Top_item/camara.jpg'
import top_item5 from './Top_item/laptop.jpg'
import top_item6 from './Top_item/camera.jpg'
import top_item7 from './Top_item/monitor.png'
import top_item8 from './Top_item/playstation.jpg'
export const assets={
    logo,
    search_icon,
    busket,
    rating1,
    rating3,
    rating4,
    rating2
}
export const menu_list=[
    {
        menu_name: 'Speakers',
        menu_image: item1
    },
    {
        menu_name: 'Player',
        menu_image: item2
    },
    {
        menu_name: 'Laptop',
        menu_image: item3
    },
    {
        menu_name: 'Watch',
        menu_image: item4
    },
    {
        menu_name: 'Glass',
        menu_image: item5
    },
    {
        menu_name: 'Camera',
        menu_image: item6
    },
    {
        menu_name: 'Bulb',
        menu_image: item7
    },
    {
        menu_name: 'Headset',
        menu_image: item8
    },
]
export const item_list=[
    {
        _id: '1',
        name:"WRX Wireless Headphones",
        image: top_item1,
        price:283,
        description: "Certified Sony Refurbished with 2-Year Warranty!",
        category: "Headset"
    },
    {
        _id: '2',
        name:"JBL Boombox Portable",
        image: top_item2,
        price:68,
        description: "Packaging should be the same as what is found in a retail store",
        category: "Speakers"
    },
    {
        _id: '3',
        name:"Apple iPod Classic 7th",
        image: top_item3,
        price:199,
        description: "A brand-new, unused, unopened, undamaged item in its original packaging",
        category: "Ipod"
    },
    {
        _id: '4',
        name:"New 2024 4K Projector ",
        image: top_item4,
        price:79,
        description: "Bluetooth, HDMI Micro, HDMI Standard, USB",
        category: "Projector"
    },
    {
        _id: '5',
        name:"LAPTOP LENOVO iCORE i3 i5 ",
        image: top_item5,
        price:300,
        description: "Wifi WEBCAM VGA Bluetooth USB Win Pro Fast Notebook",
        category: "Laptop"
    },
    {
        _id: '6',
        name:"500C/M Medium Camera",
        image: top_item6,
        price:500,
        description: "Roberts Camera - Photo Industry Leader since 1957!",
        category: "Camera"
    },
    {
        _id: '7',
        name:"Dell inch LED Monitor",
        image: top_item7,
        price:49,
        description: "A brand-new, unused, unopened, undamaged item in its original packaging",
        category: "Monitor",
    },
    {
        _id: '8',
        name:"PlayStation 5 Slim Edition ",
        image: top_item8,
        price:200,
        description: "Digital Edition unleashes new gaming possibilities that you never anticipated.",
        category: "Gaming Console"
    },
]