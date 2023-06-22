import React from "react"

interface Props {
  cartItems: string[]
  onClear: () => void
  onRemove: () => void
}

const Cart = ({ cartItems, onClear, onRemove }: Props) => {
  return (
    <>
      <div>Carts</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>
            {item}
            <button onClick={onRemove}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart
