import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, description, category}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };


  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"><br></br>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        
        <strong><p>{ category }</p></strong>
      </div>

      <img src={image} alt="" />

      <button onClick ={addToBasket}>Add to Basket</button>
      
    </div>
  );
}

export default Product;
