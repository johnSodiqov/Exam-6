import React, { useState } from 'react';
import "./cartPage.css"
const CartPage = () => {
    const User = JSON.parse(localStorage.getItem('cartArr'))
    const [user, setUser] = useState(User);
    const [sum, setsum] = useState(0);

    function increment(index) {
        let clone = [...user]
        let sum = clone[index].narxi
        clone[index].count++
        sum += clone[index].narxi * clone[index].count
        clone[index].narxi = sum
        setUser(clone)
        summaryInc()
    }

    function decrement(index) {
        let clone = [...user]
        clone[index].count--
        setUser(clone)
        summaryDec()
    }

    function summaryInc() {
        let sum = 0
        user.map((item) => {
            return (
                sum += item.narxi
            )
        })

        setsum(sum)
    }
    function summaryDec() {
        let sum = 0
        user.map((item) => {
            return (sum -= item.narxi)
        })

        setsum(sum)
    }
    return (
        <div>


            <div className="container">
                <h1 className='text-center w-100 my-5'>Summary: {sum}</h1>
                {
                    user.map((item, index) => {
                        return (
                            <div className={`cart-products ${(item.count === 0) ? "d-none" : " "}`} key={index}>
                                <div className="product-card">
                                    <div className="card_img">
                                        <img src={item.url} alt={item.name} />
                                    </div>
                                    <div className="card_text">
                                        <h3 className='w-100 text-center'>{item.narxi} $</h3>
                                        <h1>{item.name}</h1>
                                        <div className="card_button">
                                            <button onClick={() => decrement(index)}>-</button>
                                            <h1 className='mx-3'>{item.count}</h1>
                                            <button onClick={() => increment(index)}>+</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CartPage;
