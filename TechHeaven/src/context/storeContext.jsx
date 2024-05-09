import { createContext,useState } from "react";
import { item_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems,setCartItems] = useState({});
  const addToCart=(itemId)=>{
    if (!cartItems[itemId]) {
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }else {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item of cartItems){
      if (cartItems[item]>0) {
        let itemInfo=item_list.find((product)=>product._id===item);
        totalAmount += itemInfo.price* cartItems[item];
      }
    }
    return totalAmount;
  }
  const contextValue = {
    item_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
