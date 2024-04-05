import React from 'react'
import ItemCard from '../ItemCard'
import './style.css'

export default function ItemsList({items}) {
  return (
    <div className='itemsList'>
      {items.map(item=><ItemCard key={item.id} item={item}/>)}
    </div>
  )
}
