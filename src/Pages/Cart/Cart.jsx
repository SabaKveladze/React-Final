import React from 'react';
import './cart.css';
import Header from '../../components/Header/Header';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { removeItem } from './removeItem';


const Cart = () => {
  const [data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3031/cart_list")
      .then((data) => setData(data.data));
    
  }, [dataChanged]);
    const items = data
  return (
    <div>
        <Header/>
      <div className="cart-container">
        <h2>Your Cart</h2>
        <ul className="cart-items">
          {items.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-details">
                <img alt='Watch Img' src= {item.imgUrl} className="item-img"/>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
                <p className='quantity'>Quantity: {item.quantity}</p>
                
              </div>
              
              <button
                    type="submit"
                    onClick={async () => {
                      const success = await removeItem(item.id);
                      if (success) {
                        setDataChanged(!dataChanged);
                      }
                    }}
                    className="remove-button"
                  >
                    Remove
                  </button>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <p>Total: </p><span className="total-amount">${calculateTotal(items)}</span>
        </div>
        
      </div>
    </div>
    
  );
};

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

export default Cart;
