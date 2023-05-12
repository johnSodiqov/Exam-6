import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./products.css"

const Products = () => {
    const [products, setproducts] = useState([])
    const [cartArr] = useState([])
    
    
    useEffect(() => {
        axios.get("https://api.npoint.io/5eaae44c2f3b5aea3d2c")
            .then((arr) => {
                setproducts(arr.data)
            })
            .catch((err) => {
                console.log("Something went wrong");
            })
    });
    
    function addToCart(index) {
        let clone = [...products]
        if (cartArr.length > 0) {
            let sanoq = 0
            cartArr.map(item => {
                sanoq++
            })
            if (sanoq > 0) {

            } else {
                clone[index].count++;
                cartArr.push(clone[index])
            }
        } else {
            clone[index].count++;
            cartArr.push(clone[index])
            console.log("it works");
        }

        
        localStorage.setItem('cartArr', JSON.stringify(cartArr))
    }
    return (
        <div>
            <div className="products">
                <h1>Products</h1>
                <div className="product-cards">

                    {products.map((item, index) => {
                        return (

                            <div className='card-box' key={index}>
                                <div className="card" key={index}>
                                    <div className="card-img">
                                        <img src={item.url} alt={item.name} />
                                    </div>
                                    <div className="card-text p-2">
                                        <p className='p-0'>{item.narxi} $</p>
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src={item.nike} alt={item.name} />
                                    </div>
                                </div>
                                <button className='card-button' onClick={() => addToCart(index)}>{item.button}</button>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;
