import React, { useContext, useState } from 'react'
import ContextData from '../ContextData'

const ButtonData = () => {
    const [inputdata , setinputdata] = useState()
    const {totalcartvalue} = useContext(ContextData)

    const BuyOneClickHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        const ClickO1 = event.target.value;
        setinputdata(ClickO1)
        console.log(ClickO1)
        totalcartvalue(ClickO1)
    }

    const BuyTwoClickHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        const ClickO2 = event.target.value;
        setinputdata(ClickO2)
        console.log(ClickO2)
        totalcartvalue(ClickO2)
    }

    const BuyThreeClickHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        const ClickO3 = event.target.value;
        setinputdata(ClickO3)
        console.log(ClickO3)
        totalcartvalue(ClickO3)
    }
  return (
    <div>
      <button value='1' onClick={BuyOneClickHandler}>BuyOne</button>
      <button value='2' onClick={BuyTwoClickHandler} >BuyTwo</button>
      <button value='3' onClick={BuyThreeClickHandler} >BuyThree</button>
    </div>
  )
}

export default ButtonData
