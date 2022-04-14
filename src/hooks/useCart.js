import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useCart=()=>{
const [cart, setCart]=useState([])
useEffect(()=>{

},[])
const navigate=useNavigate();

const handleOrder=id=>{
    // setCart([...cart, service]);
    // console.log(cart);
    navigate(`/service/${id}`);
}
return{cart, handleOrder}
}

export default useCart;