import React from 'react'

import CurrencyFormat from 'react-currency-format'

import { useHistory } from 'react-router-dom'

import { useStateValue } from '../StateProvider'
import { getCartTotal } from "../reducer";

const Subtotal = () => {
  const history = useHistory();
  const [{cart}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"KES. "}
      />
    </div>
  )
}

export default Subtotal
