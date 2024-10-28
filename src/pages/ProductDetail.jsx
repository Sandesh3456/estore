import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Productdetail = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Product not found')
        }
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching product:', err)
        setLoading(false)
        toast.error('Failed to load product details')
      })
  }, [id])

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartData')) || []
    const productItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      quantity: 1,
    }

    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      toast.error(`${product.title} is already present in the cart`)
    } else {
      cartItems.push(productItem)
      localStorage.setItem('cartData', JSON.stringify(cartItems))
      toast.success(`You have successfully added ${product.title} to cart`)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-bold text-blue-500">Loading Product Details...</div>
      </div>
    )
  }

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="product-section">
        <h1 className="text-center text-3xl my-5 font-bold">Product Detail</h1>
        <div className="flex flex-wrap justify-between my-5 mx-20">
          <div className="card-img w-[400px] h-[300px] shadow-md shadow-red-300">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-contain hover:translate-y-[-10px] transition-all delay-150" 
            />
          </div>
          
          <div className="card-content shadow-md shadow-red-300 w-[400px] py-5">
            <h2 className="font-bold text-lg text-center w-[400px]">{product.title}</h2>
            <h2 className="text-lg">
              <span className="font-semibold pl-5">Price-</span>Rs. {product.price}
            </h2>
            <p className="text-base">
              <span className="font-semibold pl-5">Category-</span>{product.category}
            </p>
            <p className="text-base mt-3 text-justify pl-5 pr-2">{product.description}</p>
            
            <button 
              className="mt-5 bg-blue-500 py-2 px-3 rounded-lg text-white hover:font-bold hover:shadow-lg hover:shadow-cyan-300 hover:translate-y-[-2px] transition-all delay-150 ml-5"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productdetail
