import React from 'react';
import Intro from './intro';
import Category from './category';
import Products from './products';

const HomePage = () => {
    return (
        <div>
            <Intro/>
            <Category/>
            <Products/>
        </div>
    );
}

export default HomePage;
