import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider,";

function CheckoutProduct({ id, image, title, price, rating }) {
  //separa y retorna un arreglo de 2 elementos: "basket" es el estado del carrito, "dispatch" actualiza el estado
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remueve el producto de la cesta..
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remover Producto</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
