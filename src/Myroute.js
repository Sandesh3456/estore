import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './components/First'
import Second from './components/Second'
import { Test, Third } from './components/Third'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import Productdetail from './pages/ProductDetail'
import Cart from './pages/Cart'

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<First />} />
          <Route path='/second' element={<Second />} />
          <Route path='/third' element={<Third />} />
          <Route path='/test' element={<Test />} /> */}


          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='product' element={<Productpage />} />
            <Route path='productdetail/:id' element={<Productdetail/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>

        </Routes>
      </Router >
    </>
  )
}

export default Myroute

