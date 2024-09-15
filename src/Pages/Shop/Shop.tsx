import React from 'react';
import Category from './Share/Category';
import MainPage from './Share/MainPage';

const Shop = () => {
    return (
        <div className=' flex bg-white'>
            <div className=' '><Category ></Category></div>
            <div className=''><MainPage></MainPage></div>
        </div>
    );
};

export default Shop;