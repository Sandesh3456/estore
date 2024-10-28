import React from 'react'
import { GlobalContext } from './Globalcontext'
import ComA from './ComA'

const Show = () => {
  return (
    <>
    <GlobalContext>
    <ComA/>
    </GlobalContext>
    </>
  )
}

export default Show
