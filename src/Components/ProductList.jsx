import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';// Action to add product to cart

const ProductList = () => { // Initialize the dispatch function to send actions to the Redux store

    // Sample list of products
    const products = [
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];
  
    const dispatch = useDispatch();

    // Access the current cart items from global Redux state
    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally

    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product)); // Dispatch action to add product to cart
    };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {/* display product list in the front-end */}
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(item => item.id === product.id); // Check if product is already in cart
          return (
            <li key={product.id} className="product-list-item">
              <span>{product.name} - ${product.price}</span>
              <button
                className={`add-to-cart-btn ${isAlreadyInCart ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Disable button if already added
              >
                {isAlreadyInCart ? 'Added' : 'Add to Cart'}
              </button>
            </li>
          );
        })}
     
      </ul>
    </div>
  );
};

export default ProductList;
