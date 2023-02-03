import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider,";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  //const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/*Esta función renderiza una etiqueta <p> que muestra el subtotal 
         de los elementos en el carrito (0 elementos) y una etiqueta <small> 
         con una casilla de verificación para indicar si el pedido contiene un regalo.
         La función también formatea el valor devuelto por la función getBasketTotal 
         para mostrarlo con dos decimales, agregar un separador de miles 
         y agregar un prefijo de "$". */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button> Confirmar</button>
    </div>
  );
}

export default Subtotal;
