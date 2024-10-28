import React from 'react'
import './first.css'
import Btn from './Btn'

const First = () => {
  return (
    <>
      <h1 className='heading'>This is our first heading</h1>
      <h2 className='heading'>This is our second heading</h2>

      <Btn btn_content="First" />
    </>
  )
}

export default First
