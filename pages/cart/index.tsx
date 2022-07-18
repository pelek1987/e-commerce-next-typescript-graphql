import { CartSummary } from "../../components/Cart/CartSummary";
import { CartContent } from "../../components/Cart/CartContent";

const CartPage = () => {
  return (
    <div className="max-w-5xl w-full mx-auto">
      <div className="grid grid-cols-3 gap-8">
        <CartContent />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
