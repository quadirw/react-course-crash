import React, { useState } from 'react'

// function Counter() {
//     const [counter, setCounter] = useState(0)
//     function incrementCounter() {
//         setCounter((prevCounter) => prevCounter + 1)
//         setCounter((prevCounter) => prevCounter + 1)
//     }

//     function decrementCounter() {
//         setCounter((prevCounter) => prevCounter - 1)
//         setCounter((prevCounter) => prevCounter - 1)
//         }

//     return (
//         <div>
//         <button onClick={decrementCounter}>-</button>
//         {counter}
//         <button onClick={incrementCounter}>+</button>
//         </div>
//     )
// }

// function Counter() {
//     const [cart, setCart] = useState({
//         item: "apple",
//         quantity: 0,
//     })

//     function subApple() {
//         setCart(prevCart => ({
//             ...prevCart, 
//             quantity: (prevCart.quantity) - 1
//         })) 
//     }

//     function addApple() {
//         setCart(prevCart => ({
//             ...prevCart,
//             quantity: (prevCart.quantity) + 1
//         }))


//     }
//     return (
//         <div>
//         <button onClick={subApple}>-</button>
//         {cart.quantity}
//         {cart.item}
//         <button onClick={addApple}>+</button>
//         </div>
//     )
// }

function Counter() {
    const [arr, setArr] = useState([])

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
      
    }

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    )
}

export default Counter