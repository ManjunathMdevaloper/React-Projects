import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ApiNavbar from './ApiNavbar'
import './api.css'
import HomeApi from './HomeApi'
import Shopping from './OnlineShopping/Shopping'

const ApiApp = () => {
  return (
    <>
      <BrowserRouter>
        <ApiNavbar/>
        <Routes>
            <Route element={<HomeApi/>} path='/'/>
            <Route element={<Shopping/>} path='/shopping'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default ApiApp
