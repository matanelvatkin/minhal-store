import React, { useContext, useEffect } from 'react'
import { cartContext } from '../Layout'
import AddItemsButtons from '../AddItemsButtons/index.jsx'
import './style.css'

export default function Cart() {
  const {cart,setCart} = useContext(cartContext)
  const onClick = (number,item)=>{
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
    <div className='cart'>
      {Object.values(cart).map(item=>{
        return <div className='cart_item'>
          <p>{item.name}</p>
          <AddItemsButtons onClick={(number)=>onClick(number,item)} numberText={item.number}/>
        </div>
      })}
    </div>
  )
}
