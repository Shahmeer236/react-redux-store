import React, { useEffect, useState } from 'react';
import { add } from '../Store/cartSlice';
// import { add } from '../Store/cartSlice';
// import store from '../Store/store';
import { useDispatch ,useSelector } from 'react-redux';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';


const Products = () => {

    const dispatch =useDispatch();
    const {data: products, status } = useSelector((state)=>state.product );

    // const [products ,setProducts] =useState([]);

    useEffect(() =>{

        dispatch(fetchProducts());

        // const fetchProducts = async () =>
        // {
        //     const res = await fetch('https://fakestoreapi.com/products');

        //     const data =await res.json();
        //     console.log(data);

        //     setProducts(data);



        // }
        // fetchProducts();

    },[]
    );

   const  handleAdd =(product)=>{
        dispatch(add(product));


    };

    if(status === STATUSES.LOADING)
    {
      return  <h2>LOADING...........</h2>
    }
    if(status === STATUSES.ERROR)
    {
      return  <h2>Something Went Wrong</h2>
    }

  return (
    <div className='productsWrapper'>
        {
            products.map(product =>(
                <div className='card' key={product.id}>
                    <img src={product.image} />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() =>handleAdd(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products