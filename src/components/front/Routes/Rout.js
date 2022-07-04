import React from "react";
import Products from "../Products/Products";
import Signup from "../Signup/Form";
import Cart from "../Cart/Cart";
import { Route, Routes } from "react-router-dom";

const Rout = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>         
        <Route exact path="/" element={<Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
           
          />}/>     
      </Routes>
    </div>
  );
};

export default Rout;
