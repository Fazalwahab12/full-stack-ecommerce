import React from "react";
import { useDispatch } from "react-redux";
import { cartSlice } from "@/app/store/slice/cartSlice";
import toast from "react-hot-toast";
import { oneProductType } from "@/app/utils/Type";

interface AddToCartProps {
  product: oneProductType;  
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = (quantity: number) => {
    dispatch(cartSlice.actions.addToCart({ product, quantity }));
    toast.success("Product added to cart");
  };

  return (
    <div>
      <button
        onClick={() => addItemToCart(1)}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
