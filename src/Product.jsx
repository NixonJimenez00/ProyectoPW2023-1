import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider,";
function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p> {title}</p>
        <p className="product_price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="product_rating">
          {/*Crear una matriz de elemento "rating" (matriz bidimensional de valores que representan calificaciones) 
          rellena cada elemento con una calificacion de este caso estrella y "mapea"(en este contexto->toma el 
          conjunto de valores y asigna a diferentes elementos de una matriz) cada elemento a una etiqueta p.*/}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHQmcg6Wd4Xi24NNyse667_KZ1nHyTo73ErJPzCJptw&s"></img>*/}

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
