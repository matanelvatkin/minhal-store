import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function LoginPage() {
  return (
    <Routes>
        <Route path='*' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
