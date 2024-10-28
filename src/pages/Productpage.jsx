import React, { useState, useEffect } from 'react'
import Cards from '../components/usercomponents/Cards'
import axios from 'axios'

const Productpage = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(
        res => setProduct(res.data)
      )
      .catch(err => console.log(err))
  })

  return (

    <>

      <div className="product-section">
        <h1 className="text-center text-3xl my-5 font-bold">All Products</h1>
        <div className="flex flex-wrap justify-evenly">
          {product.map((item) =>
            <Cards data={item} />

          )}

        </div>
      </div>



    </>
  )
}

export default Productpage