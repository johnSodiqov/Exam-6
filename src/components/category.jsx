import React, { useEffect,useState } from 'react';
import { GiRunningShoe } from "react-icons/gi"
import "./category.css"
import axios from 'axios';

const Category = () => {
    const [category, setcategory] = useState([]);
    useEffect(() => {
        axios.get("https://api.npoint.io/bc81aa10eaf3e1e5243d")
            .then((mas) => {
                setcategory(mas.data)
            })
            .catch((err) => {
                console.log(err);
            })
        return () => {

        };
    }, []);
    return (
        <div>
            <h1 className='text-center text-success '>Category</h1>

            <div className="categories mx-auto my-5">
                {
                    category.map((item, index) => {
                        return (
                            <div className="category-item bg-light" key={index}>
                                <GiRunningShoe className='fs-2' />
                                <h4 className='w-75'>{item.name}</h4>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Category;
