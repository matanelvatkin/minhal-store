import React, { useContext } from 'react'
import './style.css'
import AddItemsButtons from '../AddItemsButtons/index.jsx'
import { cartContext } from '../Layout/index.jsx'


export default function ItemCard({item}){
  const {cart,setCart} = useContext(cartContext)
const onClick = (number)=>{
  setCart(prev=>{
    if(number <= 0){
      if(prev[item.id]){
        delete prev[item.id]
      }
      return {...prev} 
    }
    else{
      return {...prev,[item.id]:{...item,number}}
    }
})}
  return (
    <div className='itemCard'>
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <AddItemsButtons numberText={cart[item.id]?cart[item.id].number:0} onClick={onClick}/>
    </div>
  )
}
