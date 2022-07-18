import { useCartState } from "./CartContext";

export const CartSummary = () => {
  const cartState = useCartState();
  return (
    <div>
      Cart Summary
      <div>Liczba produktów w koszyku: {cartState.items.length}</div>
    </div>
  );
};
