import React, {useContext} from 'react'
import ContextData from '../ContextData'

const Cart = () => {
    const {cartdata} = useContext(ContextData);

  return (
    <div>
      <h1>Cart</h1>
      {cartdata.map(pro => {
        return(
        <p>{pro.inputdata}</p>
      )})}
    </div>
  )
}

export default Cart
