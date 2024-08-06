import React, {useEffect, useState} from "react";

function Cart({cart}) {
    const [total, setTotal] = useState(0)

    useEffect( () => {
        const newTotal = cart.reduce((sum, product) => sum + product.price, 0)

        setTotal(newTotal) 
    }, [cart] )

    return (
        <div>
            <h2>Carrinho</h2>
        <ul>
            {cart.map((product, index) => {
                <li key={index}>
                    {product.nsme} - R${product.price}
                </li>
            })}
        </ul>
        <h3>Total: R${total}</h3>
        </div>
    )
} 

export default Cart 